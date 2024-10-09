/* eslint-disable react/prop-types */
import { useState } from "react";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image-1.svg";
import image2 from "../assets/image-2.svg";
import image3 from "../assets/image-3.svg";
import image4 from "../assets/image-4.svg";
import image5 from "../assets/image-5.svg";
import image6 from "../assets/image-6.svg";

const BlogList = () => {
  const navigate = useNavigate();

  // State to manage blogs
  const [blogs, setBlogs] = useState([
    {
      title: "Company",
      content:
        "Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date: "2 days ago",
      image: image1,
    },
    {
      title: "Financial Plan",
      content:
        "Non congue dolor pellentesque vitae ac at habitant id justo sodales pellentesque vitae ac at eleifend ornare lectus sed suspendisse eu aenean",
      date: "Feb 28, 2021",
      image: image2,
    },
    {
      title: "Execution",
      content:
        "Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus mauris urna molestie tristique tortor tortor nunc, in",
      date: "Feb 9, 2021",
      image: image3,
    },
    {
      title: "Company",
      content:
        "Enim lacus sit luctus est, morbi viverra cras gravida tempor aliquet elementum malesuada elit velit lorem molestie pellentesque",
      date: "Feb 19, 2020",
      image: image4,
    },
    {
      title: "Company",
      content:
        "Semper etiam ut dignissim libero accumsan faucibus in congue tincidunt tortor, morbi accumsan massa cras nibh tincidunt in",
      date: "Feb 31, 2015",
      image: image5,
    },
    {
      title: "Company",
      content:
        "Diam sagittis congue leo aliquet scelerisque arcu at massa diam in arcu massa tellus nisl lectus egestas pretium",
      date: "Feb 29, 2014",
      image: image6,
    },
  ]);

  // State to control "Add New" mode or "Edit" mode
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleAddNewBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setIsAddingNew(false);
  };

  const handleUpdateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog, idx) =>
      idx === currentBlog.index ? updatedBlog : blog
    );
    setBlogs(updatedBlogs);
    setIsEditing(false);
    setCurrentBlog(null);
  };

  const handleDeleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, idx) => idx !== index);
    setBlogs(updatedBlogs);
  };

  const handlePreview = () => {
    navigate("/blogs");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl pl-3 font-bold">Blogs</h1>
        <div>
          <button
            onClick={() => setIsAddingNew(true)}
            style={{ color: "#6C5DD3" }}
            className="bg-white text-custom-purple px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
          >
            Add New
          </button>

          <button
            onClick={handlePreview}
            style={{ backgroundColor: "#6C5DD3" }}
            className="ml-4 text-white px-4 py-2 rounded-md"
          >
            Preview
          </button>
        </div>
      </div>

      {isAddingNew ? (
        <NewBlogForm onAddBlog={handleAddNewBlog} />
      ) : isEditing ? (
        <NewBlogForm onAddBlog={handleUpdateBlog} initialBlog={currentBlog} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              {...blog}
              onDelete={() => handleDeleteBlog(idx)}
              onEdit={() => {
                setIsEditing(true);
                setCurrentBlog({ ...blog, index: idx });
              }}
            />
          ))}

          <div className="border rounded-lg p-4 shadow-lg flex flex-col bg-gray-200">
            <div className="h-32 mb-4"></div>
            <h2 className="text-lg font-bold mb-2 text-gray-500"></h2>
            <p className="text-sm text-gray-500 mb-2"></p>
            <p className="text-sm text-gray-400 mb-4"></p>
          </div>
          {/* <div className="border rounded-lg p-4 shadow-lg flex flex-col bg-gray-200">
            <div className="h-32 mb-4"></div>
            <h2 className="text-lg font-bold mb-2 text-gray-500"></h2>
            <p className="text-sm text-gray-500 mb-2"></p>
            <p className="text-sm text-gray-400 mb-4"></p>
          </div> */}
        </div>
      )}
    </div>
  );
};

const NewBlogForm = ({ onAddBlog, initialBlog }) => {
  const [blogData, setBlogData] = useState(
    initialBlog || {
      title: "",
      content: "",
      date: "",
      image: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog({ ...blogData, date: new Date().toLocaleDateString() });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Blog title"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Content</label>
        <textarea
          name="content"
          value={blogData.content}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Blog content"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          name="image"
          value={blogData.image}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Image URL"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {initialBlog ? "Update Blog" : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default BlogList;
