const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById
} = require('../controllers/bookController');
const { authenticate } = require('../middleware/authMiddleware');

router.use(authenticate);

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBookById);
router.delete('/:id', deleteBookById);

module.exports = router;