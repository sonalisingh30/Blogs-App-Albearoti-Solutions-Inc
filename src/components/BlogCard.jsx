/* eslint-disable react/prop-types */
const BlogCard = ({ title, content, date, image, onDelete, onEdit }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-auto">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 w-full md:w-auto mb-2 md:mb-0"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full md:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
