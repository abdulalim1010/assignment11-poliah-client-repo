import { useNavigate } from 'react-router';
import imagehistoy from '../assets/history.jpg'
import imageficton from '../assets/fiction.jfif';
import imageprogramming from '../assets/programming.jfif';
import science from '../assets/science.jfif';
 

const categories = [
  {
    name: 'Programming',
    image:imageprogramming,
  },
  {
    name: 'Fiction',
    image: imageficton,
  },
  {
    name: 'History',
    image:imagehistoy,
  },
  {
    name: 'Science',
    image: science,
  },
];

const BookCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="card bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl transition"
          onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
        >
          <img src={cat.image} alt={cat.name} className="h-40 w-full object-cover rounded-t-lg" />
          <div className="p-4 text-center font-semibold text-lg">{cat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BookCategories;

