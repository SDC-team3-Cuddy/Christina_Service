DROP DATABASE IF EXISTS guitarReviews;
CREATE DATABASE guitarReviews;

\c guitarReviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(80),
  contents text,
  stars INT,
  user VARCHAR(30),
  experience VARCHAR(20),
  dateSubmitted VARCHAR(50),
  location VARCHAR(50),
  upVotes INT(3) default 0,
  downVotes INT(3) default 0,
  pros VARCHAR(90),
  cons VARCHAR(75),
  wouldRecommend boolean
);

CREATE TABLE pros (
  proID SERIAL PRIMARY KEY,
  description VARCHAR(40),
  count INT default 0
);

CREATE TABLE cons (
  conID SERIAL PRIMARY KEY,
  description VARCHAR(40),
  count INT default 0
);