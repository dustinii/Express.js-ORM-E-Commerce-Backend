const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// handler for GET /api/tags
router.get('/', (req, res) => {
  Tag.findAll({ include: [{ model: Product, through: ProductTag }] })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

// handler for GET /api/tags/:id
router.get('/:id', (req, res) => {
  Tag.findOne({ where: { id: req.params.id }, include: [{ model: Product, through: ProductTag }] })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// handler for POST /api/tags
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// PUT /api/tags/:id
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// DELETE /api/tags/:id
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
