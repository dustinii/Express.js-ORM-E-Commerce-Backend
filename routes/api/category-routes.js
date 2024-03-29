const router = require('express').Router();
const { Category, Product } = require('../../models');

// handler for GET /api/categories
router.get('/', (req, res) => {
  Category.findAll({ include: [Product] })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// handler for GET /api/categories/:id
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where: { id: req.params.id }, include: [Product] })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

// handler for POST /api/categories
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// handler for PUT /api/categories/:id
router.put('/:id', (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// handler for DELETE /api/categories/:id
router.delete('/:id', (req, res) => {
  Category.destroy({ where: {id: req.params.id}})
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
