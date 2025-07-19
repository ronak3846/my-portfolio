"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-gray-200">
      {/* 🔷 Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
        Contact Me
      </h1>

      {/* 🔷 Contact Form */}
      <form className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded bg-black/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* 🔷 Contact Info */}
      <div className="mt-10 text-center space-y-4">
        <p className="text-gray-400">Or connect with me:</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="mailto:ronakvaishnav99@gmail.com"
            className="hover:text-pink-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ronak3846"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ronak-vaishnav-35a0321b5"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
}
