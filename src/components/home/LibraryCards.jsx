import { FaBook, FaTabletAlt, FaCompactDisc, FaNewspaper, FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";

export default function LibraryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Books */}
      <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-red-500 hover:scale-105">
        <FaBook size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">Books</h2>
        <p className="mb-4">
          Explore a vast collection of fiction, non-fiction, and reference books to inspire learning and creativity.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>

      {/* eBooks */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-blue-500 hover:scale-105">
        <FaTabletAlt size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">eBooks</h2>
        <p className="mb-4">
          Access digital books anytime, anywhere, from your phone, tablet, or computer.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>

      {/* DVDs */}
      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-green-500 hover:scale-105">
        <FaCompactDisc size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">DVDs</h2>
        <p className="mb-4">
          Enjoy educational and entertainment DVDs for all ages, from documentaries to classic films.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>

      {/* Magazines */}
      <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-purple-500 hover:scale-105">
        <FaNewspaper size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">Magazines</h2>
        <p className="mb-4">
          Browse current and past issues of popular magazines covering a variety of topics and interests.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>

      {/* Audio */}
      <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-yellow-500 hover:scale-105">
        <FaHeadphones size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">Audio</h2>
        <p className="mb-4">
          Listen to your favorite audiobooks, music albums, and language learning resources.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>

      {/* eAudio */}
      <div className="bg-pink-500 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-pink-500 hover:scale-105">
        <FaHeadphonesAlt size={40} className="mb-4" />
        <h2 className="text-2xl font-bold mb-3">eAudio</h2>
        <p className="mb-4">
          Stream or download audiobooks and podcasts directly to your device with ease.
        </p>
        <button className="font-semibold underline">View Selection</button>
      </div>
    </div>
  );
}
