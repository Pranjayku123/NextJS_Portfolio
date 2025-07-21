import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="font-shantell py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-teal-50 mx-auto px-4 sm:px-6">
          <div className="w-full flex items-center justify-center my-4">
            <div className="w-[90%] sm:w-[400px] text-center flex items-center justify-center gap-2 sm:gap-4">
              <span className="flex-1 w-[80px] sm:w-[150px] h-[2px] bg-gradient-to-r from-gray-900 via-teal-100 to-white"></span>
              <span className="text-lg sm:text-2xl font-bold text-[var(--colorPrimary)] whitespace-nowrap relative px-2 sm:px-4">
                Get In Touch
              </span>
              <span className="flex-1 w-[80px] sm:w-[150px] h-[2px] bg-gradient-to-r from-white via-teal-100 to-gray-900"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Providing best and trusted services to make the world digital.
              Make your customers satisfied and simplify their lives. For any
              requirements, please contact me.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-user text-blue-500 text-xl"></i>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-100">
                    Name
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Pranjay Kumar
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-red-500 text-xl"></i>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-100">
                    Address
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Hitech City, Hyderabad, Telangana - 500032, INDIA
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-green-500 text-xl"></i>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-100">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    pranjayku123@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjaykumar01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com/Pranjayku123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <i className="fab fa-google-plus text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Message Me
            </h3>
            <form id="contactForm" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />

              <textarea
                name="message"
                id="msgDiscription"
                rows={6}
                placeholder="Describe your message..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>

              <button
                type="submit"
                id="submitBTN"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
