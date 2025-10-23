import React, { useState, useEffect, useContext, useRef } from "react";
import { Authcontext } from "../components/navbar/authcontext/Authcontext";
import { motion, AnimatePresence } from "framer-motion";

const UserExperience = () => {
  const { user } = useContext(Authcontext);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [allFeedback, setAllFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const feedbackEndRef = useRef(null);

  // 🔹 Scroll to latest feedback
  const scrollToLatest = () => {
    feedbackEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Fetch all feedback
  const fetchFeedback = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/feedback");
      const data = await res.json();
      setAllFeedback(data.reverse());
      scrollToLatest();
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // 🔹 Submit feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim() || rating === 0) {
      return alert("Please provide both feedback and rating!");
    }

    const newFeedback = {
      name: user?.displayName || "Anonymous",
      email: user?.email || "Unknown",
      message: feedback,
      rating,
      createdAt: new Date(),
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });

      if (res.ok) {
        setFeedback("");
        setRating(0);
        setAllFeedback((prev) => [newFeedback, ...prev]);
        scrollToLatest();
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 lg:px-20  transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-primary mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share Your Experience 💬
        </motion.h1>

        <p className="text-base-content opacity-80 mb-10">
          Your thoughts help us improve! Tell us about your experience below.
        </p>

        {/* 🔹 Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-2xl shadow-xl max-w-xl mx-auto border border-base-300"
        >
          {/* ⭐ Emoji Rating */}
          <div className="flex justify-center mb-4 space-x-3 text-3xl">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                type="button"
                key={num}
                onClick={() => setRating(num)}
                className={`transition transform hover:scale-125 ${
                  rating >= num ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ⭐
              </button>
            ))}
          </div>

          <textarea
            className="textarea textarea-bordered w-full h-32 text-lg text-base-content placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your experience..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button
            type="submit"
            disabled={!user || loading}
            className={`btn w-full mt-4 ${user ? "btn-primary" : "btn-disabled"}`}
          >
            {loading ? "Submitting..." : user ? "Submit Feedback" : "Login to Share"}
          </button>
        </form>

        {/* 🔹 Display All Feedback */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-base-content">
            What users are saying ✨
          </h2>

          <AnimatePresence initial={false}>
            {allFeedback.length > 0 ? (
              allFeedback.map((fb, index) => (
                <motion.div
                  key={fb.createdAt.toString() + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-base-300 shadow-md rounded-xl p-5 mb-4 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-primary">{fb.name}</h3>
                    <span className="text-sm text-gray-400">
                      {new Date(fb.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex mb-2 text-yellow-400">
                    {"⭐".repeat(fb.rating || 0)}
                  </div>

                  <p className="text-base-content">{fb.message}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No experiences shared yet. Be the first!
              </p>
            )}
          </AnimatePresence>

          <div ref={feedbackEndRef}></div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
