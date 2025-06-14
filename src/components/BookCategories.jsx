import { useNavigate } from 'react-router';
import imagehistoy from '../assets/history.jpg';
import imageficton from '../assets/fiction.jfif';
import imageprogramming from '../assets/programming.jfif';
import science from '../assets/science.jfif';

const categories = [
  {
    name: 'Programming',
    image: imageprogramming,
  },
  {
    name: 'Fiction',
    image: imageficton,
  },
  {
    name: 'History',
    image: imagehistoy,
  },
  {
    name: 'Science',
    image: science,
  },
];

const BookCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className=" text-5xl text-center font-bold w-3xl mx-auto mb-12 rounded-t-[40px] rounded-br-4xl p-2 border-s-12 border-b-20 border-blue-500 shadow-2xl">Explore Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-44 w-full object-cover rounded-t-lg"
            />
            <div className="p-4 text-center font-semibold text-lg">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;


