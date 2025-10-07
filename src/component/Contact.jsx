import React from "react";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function ContactComponent() {
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const[loading,setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateInput = ()=>{
    if(form.name === '' || form.email === '' || form.message === ''){
      return false;
    }
    return true;
  }

  const handelSubmit = async (e)=>{
    e.preventDefault();
    if(!validateInput() || loading){
      toast.error('Please fill all the fields');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Message sent successfully, I will get back to you soon');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message, please try again');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message, please try again');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 py-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Contact Information Card */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Location</h4>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a
                    href="tel:+9779826599100"
                    className="text-blue-600 hover:text-blue-700"
                  >
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
                  <a
                    href="mailto:lavshah51@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    lavshah51@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lavshah19"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lav-shah-8203031b8/"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="your@email.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Your message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                disabled={loading}
                onClick={handelSubmit}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
