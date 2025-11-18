import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export function ContactCard() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 transition duration-500 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500">
        Contact Me
      </h2>

      <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
        I’d love to hear from you! Whether you have a question, want to collaborate, or just say hi — feel free to reach out. 💬
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* EMAIL */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=maheerarehman1@gmail.com&su=Let's%20Work%20Together&body=Hi%20Maheera,"
          target="_blank"
          className="group flex flex-col items-center p-6 bg-black rounded-2xl border border-white/[0.2] hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <FaEnvelope className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
          <p className="mt-2 text-sm text-gray-300">Email</p>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/mahi-8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-black rounded-2xl border border-white/[0.2] hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <FaGithub className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
          <p className="mt-2 text-sm text-gray-300">GitHub</p>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/maheera-rehman"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 bg-black rounded-2xl border border-white/[0.2] hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <FaLinkedin className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
          <p className="mt-2 text-sm text-gray-300">LinkedIn</p>
        </a>

        {/* PHONE */}
        <a
          href="tel:+923017732765"
          className="group flex flex-col items-center p-6 bg-black rounded-2xl border border-white/[0.2] hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <FaPhoneAlt className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
          <p className="mt-2 text-sm text-gray-300">Phone</p>
        </a>

      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="text-white ">
      <ContactCard />
    </div>
  );
}