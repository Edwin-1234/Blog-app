import React from "react";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded shadow-md text-center">
      <h1 className="text-4xl font-extrabold mb-6">
        Welcome to the Blog App
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple MERN stack blogging platform where you can add and
        view blogs.
      </p>
      <p className="text-gray-600">
        Use the navigation above to explore existing blogs or add your own.
      </p>
    </div>
  );
};

export default Home;
