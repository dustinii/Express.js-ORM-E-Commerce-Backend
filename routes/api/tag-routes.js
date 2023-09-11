const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({})
    .then()
    .catch();
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne()
    .then()
    .catch()
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create()
    .then()
    .catch();
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update()
    .then()
    .catch()
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy()
    .then()
    .catch()
});

module.exports = router;
