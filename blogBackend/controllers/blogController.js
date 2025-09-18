import BlogPost from "../models/blogPost.js";

///Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//// Get single blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get latest blogs
export const getLatestBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 }).limit(3);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ///Update blog

export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        excerpt: req.body.excerpt,
        content: req.body.content,
        category: req.body.category,
        tags: req.body.tags, // array of tags
        comments: req.body.comments, // array of comments
      },
      { new: true } // return the updated document
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// //Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await BlogPost.findByIdAndDelete(req.params.id);

    if (!deletedBlog)
      return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const { title, image, date, excerpt, content, author, category } = req.body;

    if (!title || !excerpt || !content) {
      return res
        .status(400)
        .json({ message: "Title, excerpt,and content are required" });
    }

    // Create a new blog document
    const newBlog = new BlogPost({
      title,
      image,
      date,
      excerpt,
      content,
      category,
      author: req.user.username || "Devkhamal",
    });

    // Save to MongoDB
    const savedBlog = await newBlog.save();

    // Return the saved blog
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating blog" });
  }
};
// search route
export const searchedResult = async (req, res) => {
  try {
    const query = req.query.q; // ?q=React
    if (!query) return res.json([]);

    const blogs = await BlogPost.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error searching blogs", error: err });
  }
};

////Like / Unlike Blog
export const likeBlog = async (req, res) => {
  const { id } = req.params;
  const { anonId } = req.body; // we now expect anonId instead of email

  if (!anonId) return res.status(400).json({ message: "anonId is required" });

  try {
    const blog = await BlogPost.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Make sure likesBy exists
    if (!blog.likesBy) blog.likesBy = [];

    const alreadyLiked = blog.likesBy.includes(anonId);

    if (alreadyLiked) {
      blog.likes -= 1;
      blog.likesBy = blog.likesBy.filter((id) => id !== anonId);
    } else {
      blog.likes += 1;
      blog.likesBy.push(anonId);
    }

    await blog.save();
    res.status(200).json({ likes: blog.likes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Add Comment with name & email
export const addComment = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const { name, email, comment } = req.body;

    if (!name || !email || !comment) {
      return res
        .status(400)
        .json({ message: "Name, email, and comment are required" });
    }

    blog.comments.push({ name, email, text: comment });
    await blog.save();

    res.json({ comments: blog.comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//get randonblog

export const getRandomBlogs = async (req, res) => {
  try {
    const randomBlogs = await BlogPost.aggregate([{ $sample: { size: 6 } }]);
    res.json(randomBlogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
/// share blogs
export const shareBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");

    const frontendBaseUrl = "https://devkhamal.vercel.app";
    const blogUrl = `${frontendBaseUrl}/blog/${blog._id}`;

    const escape = (str = "") =>
      str.replace(/"/g, "&quot;").replace(/&/g, "&amp;");

    const metaTitle = escape(blog.title || "My Blog");
    const metaDescription = escape(
      blog.excerpt ||
        (blog.content
          ? blog.content.replace(/<[^>]*>?/gm, "").slice(0, 150)
          : "Check out this blog!")
    );
    const metaImage = escape(
      blog.image?.startsWith("http")
        ? blog.image
        : "https://res.cloudinary.com/dg1zkgl6n/image/upload/v1755811046/Gold_Black_Modern_Facebook_Profile_Picture_k9xqcw.gif"
    );

    res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Canonical -->
    <link rel="canonical" href="${blogUrl}" />

    <!-- Open Graph -->
    <meta property="og:title" content="${metaTitle}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:image" content="${metaImage}" />
    <meta property="og:url" content="${blogUrl}" />
    <meta property="og:type" content="article" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metaTitle}" />
    <meta name="twitter:description" content="${metaDescription}" />
    <meta name="twitter:image" content="${metaImage}" />

    <title>${metaTitle}</title>
  </head>
  <body>
    <script>window.location.href = "${blogUrl}"</script>
  </body>
  </html>
`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
