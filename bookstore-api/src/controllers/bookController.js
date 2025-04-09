const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, category, price, rating, publishedDate } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        author,
        category,
        price,
        rating,
        publishedDate: new Date(publishedDate),
        userId: req.userId
      }
    });
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const { author, category, rating, title } = req.query;
    const filters = {};
    if (author) filters.author = { contains: author, mode: 'insensitive' };
    if (category) filters.category = { contains: category, mode: 'insensitive' };
    if (rating) filters.rating = { gte: parseFloat(rating) };
    if (title) filters.title = { contains: title, mode: 'insensitive' };

    const books = await prisma.book.findMany({
      where: filters,
      orderBy: { createdAt: 'desc' }
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    next(error);
  }
};

exports.updateBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBook = await prisma.book.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

exports.deleteBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.book.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Book deleted' });
  } catch (error) {
    next(error);
  }
};