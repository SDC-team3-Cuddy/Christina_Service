const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('./db').connection;

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/reviews/:endpoint', (req, res) => {
  let table = req.url.split('/')[3];
  db.query(`select * from ${table}`, (err, data) => {
    if (err) {
      console.error(`${table} query failed: `, err);
    } else {
      console.log(`${table} query successful`);
      res.send(JSON.stringify(data));
    };
  });
});

app.get('/api/reviews/stars/:endpoint', (req, res) => {
  const endpoint = req.url.split('/')[4];
  if (endpoint.length > 1) {
    db.query(`select * from reviews order by stars ${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews by stars ${endpoint} failed: `, err);
      } else {
        console.log(`reviews by stars ${endpoint} successful`);
        res.send(JSON.stringify(data));
      };
    });
  } else {
    db.query(`select * from reviews where stars=${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews with ${endpoint} stars query failed: `, err);
      } else {
        console.log(`reviews with ${endpoint} stars query successful`);
        res.send(JSON.stringify(data));
      };
    });
  };
});

app.get('/api/reviews/sort/upVotes', (req, res) => {
  db.query(`select * from reviews order by upVotes desc`, (err, data) => {
    if (err) {
      console.error('reviews sorted by upVotes query failed: ', err)
    } else {
      console.log('reviews sorted by upVotes query successful');
      res.send(JSON.stringify(data));
    };
  });
});

// Additional express functions to support CRUD operations
// Delete review by id:
app.delete('/api/reviews', (req, res) => {
  // console.log(req.body);
  db.query(`DELETE FROM `review` WHERE `id`=?`, [req.body.id], (err, data) => {
    if (err) {
      console.error('review deletion from database failed: ', err)
    } else {
      console.log('review deletion from database successful');
      res.send(JSON.stringify(data));
    };
  });
});

// Edit review by id:
app.put('/api/reviews/', (req, res) => {
  db.query(`UPDATE `review` SET `title`=?, `contents`=?, `stars`=?, `user`=?, `experiencce`=?, `dateSubmitted`=?, `location`=?, `upVotes`=?, `downVotes`=?, `pros`=?, `cons`=?, `wouldRecommend`=?, where `id`=?`, [req.body.title,req.body.contents, req.body.stars, req.body.user, req.body.experience, req.body.dateSubmitted, req.body.location, req.body.upVotes, req.body.downVotes, req.body.pros, req.body.cons, req.body.wouldRecommend], (err, data) => {
    if (err) {
      console.error('review update failed: ', err)
    } else {
      console.log('review update successful');
      res.send(JSON.stringify(data));
    };
  });
});

// Add new review:
app.post('/api/reviews', (req, res) => {
  var postData = req.body;
  db.query(`INSERT INTO reviews SET ?`, postData, (err, data) => {
    if (err) {
      console.error('new review insertion failed: ', err)
    } else {
      console.log('new review insertion successful');
      res.send(JSON.stringify(data));
    };
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
