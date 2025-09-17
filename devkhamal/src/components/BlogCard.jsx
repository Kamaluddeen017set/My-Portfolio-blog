import "../styles/BlogCard.css";
const BlogCard = ({ image, date, title, excerpt, link, category, tags }) => {
  return (
    <article className="blog-card animation_block">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="category_tags">
          <p>Category: {category}</p>
          <p> Tags: {tags}</p>
        </div>{" "}
        <a href={link}>Read more</a>
      </div>
    </article>
  );
};

export default BlogCard;
