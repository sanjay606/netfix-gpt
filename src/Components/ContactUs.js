import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Contact Us At +91-9571089832</h1>
      <input
        type="text"
        placeholder="Enter your message"
        className="p-2 border border-gray-300 rounded-lg mb-4 w-80"
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
