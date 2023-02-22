const { v4: uuidv4 } = require("uuid");
const express = require('express');
const router = express.Router();

//-----------------Initialize Mongo----------------//
const { db } = require('../mongo');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const blogs = await db()
    .collection('sample_blogs')
    .find({})
    .limit(5)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    });

  res.json({
    success: true,
    blogs: blogs
  });

});

// -------------Return all blogs from database----------------//

router.get('/all', async function (req, res) {
  const blogs = await db()
    .collection('sample_blogs')
    .find({})
    .limit(5)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    });
  res.json({
    success: true,
    blogs: blogs
  });

});

//-----------------Return one blog from database----------------//
router.get('/get-one', async function (req, res) {
  const blogs = await db()
    .collection('sample_blogs')
    .find({})
    .limit(1)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    });

  res.json({
    success: true,
    blogs: blogs
  });

});

//-------------------Return one blog from database by id----------------//
router.get('/get-one/:idToFind', async function (req, res) {
  const blogs = await db()
    .collection('sample_blogs')
    .findOne({
      id: req.params.id
    })
  res.json({
    success: true,
    blogs: blogs
  });
});

//-------------------Creates one blog in database----------------//
router.post('/create-one', async function (req, res, next) {
  const blogs = await db()
    .collection('sample_blogs')
    .insertOne({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      category: req.body.category,
      last_modified: new Date(),
    })

  res.json({
    success: true,
    blogs: blogs
  });
});


//-------------------End Of Code----------------//