import React from "react";
import Button from "./ui/Button";
import { Download } from "lucide-react";
import Link from "next/link";

const DownloadResume = () => {
  return (
    <section id="download-resume">
      <Button className="">
        <Link
          href="https://drive.google.com/file/d/1KtNpYunEB4cLkV_dnmPa2JGJK4KR3BXn/view?usp=sharing"
          passHref
          className="flex items-center space-x-2 p-2"
        >
          <Download size={16} />
          <p>Download My Resume</p>
        </Link>
      </Button>
    </section>
  );
};

export default DownloadResume;
