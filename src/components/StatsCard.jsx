import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaTabletAlt, FaNewspaper, FaUniversity } from "react-icons/fa";

const stats = [
  { icon: <FaBook />, label: "Books", value: "15,000" },
  { icon: <FaTabletAlt />, label: "e-Book", value: "0" },
  { icon: <FaNewspaper />, label: "Journal", value: "150+" },
  { icon: <FaUniversity />, label: "Union Catalogue", value: "125+" },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-blue-200 rounded-lg shadow-md p-6 text-center flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="text-3xl text-blue-500">{stat.icon}</div>
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {stat.value}
          </motion.h2>
          <p className="text-gray-600 text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCard;
