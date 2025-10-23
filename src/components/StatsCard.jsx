import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaTabletAlt, FaNewspaper, FaUniversity } from "react-icons/fa";

const stats = [
  { icon: <FaBook />, label: "Books", value: "15,000", color: "from-blue-400 to-blue-600" },
  { icon: <FaTabletAlt />, label: "e-Books", value: "2,500", color: "from-purple-400 to-purple-600" },
  { icon: <FaNewspaper />, label: "Journals", value: "150+", color: "from-green-400 to-green-600" },
  { icon: <FaUniversity />, label: "Union Catalogue", value: "125+", color: "from-yellow-400 to-yellow-600" },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={`rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center bg-gradient-to-br ${stat.color} text-white min-h-[220px]`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.3)" }}
          transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
        >
          <div className="bg-white/20 rounded-full p-4 mb-4 text-4xl">{stat.icon}</div>
          <motion.h2
            className="text-4xl font-extrabold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {stat.value}
          </motion.h2>
          <p className="text-lg mt-2 tracking-wide">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCard;
