import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Career Development Articles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Article 1 */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <img 
            src="/path/to/resume.jpg" 
            alt="Resume Tips" 
            className="w-full h-48 object-cover mb-4 rounded-md" 
          />
          <h2 className="text-xl font-semibold mb-2">How to Write an Effective Resume</h2>
          <p className="text-gray-600">
            Learn the key strategies for crafting a resume that stands out to employers and highlights your skills effectively.
          </p>
        </div>

        {/* Article 2 */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <img 
            src="/path/to/networking.jpg" 
            alt="Networking Tips" 
            className="w-full h-48 object-cover mb-4 rounded-md" 
          />
          <h2 className="text-xl font-semibold mb-2">Networking: The Key to Career Growth</h2>
          <p className="text-gray-600">
            Discover the power of networking and how it can significantly boost your career opportunities.
          </p>
        </div>

        {/* Article 3 */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <img 
            src="/path/to/interview.jpg" 
            alt="Interview Tips" 
            className="w-full h-48 object-cover mb-4 rounded-md" 
          />
          <h2 className="text-xl font-semibold mb-2">Mastering the Job Interview</h2>
          <p className="text-gray-600">
            Get tips on how to excel during job interviews and leave a lasting impression on recruiters.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 p-4 bg-gray-100 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
