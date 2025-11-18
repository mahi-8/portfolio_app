"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);


  //  Words for Auto Typing Effect
  const words = [
    "Frontend Developer",
    "Web Developer",
    "Python Developer",
    "AI Enthusiast",
  ];

  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 60;
    let deletingSpeed = 60;
    let pauseTime = 1000; // Pause time are in ms(mili-second)

    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText.length === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <>
      
      <section
       className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#030A14] via-[#0E1C32] to-[#1a1f3b] px-6 sm:px-10 md:px-20 py-6 md:py-0 text-center md:text-left text-white"
       >

        {/* ✨ Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.15)] dark:to-[rgba(255,255,255,0.08)] pointer-events-none" />

        {/* Left Content */}
   
         <div className="flex-1 space-y-3 sm:space-y-4 relative z-10">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold  "
          >
            Hi , <span className=" font-extrabold tracking-tight 
                       bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 
                       bg-clip-text text-transparent drop-shadow-lg">I'm Maheera Rehman</span> 
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl font-extrabold text-pink-600 dark:text-pink-400">
            {displayedText}
            <span className="border-r-2 border-pink-600 dark:border-pink-400 animate-pulse ml-1"></span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-xl italic font-serif leading-relaxed max-w-md sm:max-w-md mx-auto md:mx-0">
            From designing interactive user experiences to building intelligent
            backends, my coding path has evolved from front-end creativity to
            Python-powered problem solving. I love blending design thinking with
            logic to build meaningful digital solutions.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/MaheeraRehman.pdf"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-xl
                        bg-gradient-to-br from-pink-500 via-red-500 to-pink-700
                        text-white font-semibold tracking-wide shadow-lg transform
                        transition duration-300 hover:scale-110
                        hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)]"
            >
              View Resume
            </Link>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-xl
                        bg-gradient-to-br from-pink-500 via-red-500 to-pink-700
                        text-white font-semibold tracking-wide shadow-lg transform
                        transition duration-300 hover:scale-110
                        hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)]"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Right Image */}
         
             <div className="flex-1 flex justify-center mb-6 md:mb-0 md:ml-10 relative z-10">
    <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <Image
        src="/images/profile.jpg"
        alt="Picture of Developer"
        fill
        className="object-cover object-top rounded-full shadow-[0_10px_40px_rgba(236,72,153,0.4)] transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
      />
    </div>
  </div>
         </section>

      {/* 💡 About Popup Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fadeIn">
          <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 max-w-3xl w-[90%] sm:w-full flex flex-col sm:flex-row items-center gap-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Left Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Maheera Rehman"
                width={160}
                height={160}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Right Text */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">About Me</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                  Hi, I'm <span className="font-semibold text-pink-600">Maheera</span> — a passionate developer who loves transforming ideas into meaningful digital experiences and real-world solutions.  
                  <br /><br />
                  My journey began with front-end development, where I explored the art of creating beautiful user interfaces. As I grew, my curiosity led me deeper — into the world of logic, automation, and back-end development using Python.  
                  <br /><br />
                  Today, my primary focus is building projects that merge creativity with functionality — turning innovative ideas into efficient, impactful software. I believe in continuous learning, collaboration, and coding with purpose.
              </p>

              <div className="flex gap-4 justify-center sm:justify-start">
                <Link
                  href="https://github.com/mahi-8"
                  target="_blank"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/maheera-rehman"
                  target="_blank"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=maheerarehman1@gmail.com&su=Let's%20Work%20Together&body=Hi%20Maheera,"
                  target="_blank"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
