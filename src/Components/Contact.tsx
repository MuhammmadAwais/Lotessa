import React, { useState } from "react";


const Contact: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //FOR DEV ONLY IF YOU CAN REMOVE IT AT TIME OF DEPLOY
    console.log("Form submitted with:", { name, email, topic, message });
  };

  return (
    <div className="bg-[#e5e5e5] min-h-screen w-full font-sans text-[#0B2A4A] antialiased">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              We'd Love to Hear from You
            </h2>
            <p className="text-xl font-medium sm:font-semibold sm:text-3xl  text-gray-700 leading-relaxed ">
              Questions about the app? Curious about a partnership? Just want to
              say hello? Drop us a message and the Lotessa team will be in
              touch.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Topic Field (Dropdown) */}
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Topic
                </label>
                <div className="relative">
                  <select
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>

                    <option value="general">App Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">General Inquiry</option>
                    <option value="other">Media</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#0B2A4A] text-white p-4 rounded-lg font-semibold text-lg hover:bg-[#1A4B82] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B2A4A]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
