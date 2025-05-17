import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactComponent() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 py-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Contact Information Card */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Location</h4>
                  <p className="text-gray-600">Nepalgunj Ganeshpur 4</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a href="tel:+9779826599100" className="text-blue-600 hover:text-blue-700">
                    +977 9826599100
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a href="mailto:lavshah51@gmail.com" className="text-blue-600 hover:text-blue-700">
                    lavshah51@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-medium text-gray-700 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/lavshah19" className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a href="https://linkedin.com/in/lavshah" className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                {/* <a href="#" className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 