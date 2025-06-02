const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

console.log(process.env.MONGODB_URL);

// MongoDB connection
main()
  .then(() => console.log("DB connected..."))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

// Add blog
app.post('/api/blogs', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Blog details are empty" });
    }

    const { title, content, author } = req.body;

    const blog = new Blog({ title, content, author });
    await blog.save();

    res.status(201).json({ message: "Blog added", data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
