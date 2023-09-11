const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({})
    .then()
    .catch();
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({})
    .then()
    .catch();
});

router.post('/', (req, res) => {
  // create a new category
  Category.create()
    .then()
    .catch();
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({})
    .then()
    .catch();
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({})
    .then()
    .catch();
});

module.exports = router;
