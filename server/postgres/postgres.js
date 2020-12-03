const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: proccess.env.PGDATABASE
});

const addReviews = () => {
  var query = 'COPY reviews(title, contents, stars, user, experiencce, dateSubmitted, location, upVotes, downVotes, pros, cons, wouldRecommend) FROM \'/Users/christina/Desktop/HRR49/SDC/Christina_Service/database/Postgres/psqlSeed/review.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error('Error adding Reviews to pool: ' + err.stack);
    } else {
      console.log('Reviews successfully added to the pool');
    }
  });
  pool.end();
};

addReviews();

module.exports = {
  pool
};