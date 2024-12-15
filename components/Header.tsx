import Image from "next/image";
import React from "react";

import me from "@/public/me.jpg";
import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header
      id="hero"
      className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-4"
    >
      <div className="header-desc">
        <h1 className="font-bold w-full text-center md:text-left text-3xl sm:text-2xl xl:text-4xl inline-block tracking-tight mb-4">
          Hello, I&rsquo;m Ari <span className="animate-pulse">👋</span>
        </h1>
        <p className="inline-block text-xl max-w-[550px] w-full text-center md:text-left">
          Front-End Engineer with 2+ years of experience, and 1 year of
          expertise in Fullstack Developer. Familiar with UI/UX design and Web3
          development. Let&rsquo;s bring your ideas to life!{" "}
        </p>
        <div className="flex justify-center sm:justify-start animate-bounce space-x-4 mt-4">
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/ari-maulana-hardan/"
          >
            <Linkedin size={24} />
          </a>
          <a
            className="cursor-pointer"
            href="https://github.com/arimaulanahardan"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
      <div className="header-img">
        <div className="img-wrapper flex items-center justify-center shrink-0 overflow-hidden size-32 rounded-full">
          <Image src={me} alt="Ari Maulana" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
