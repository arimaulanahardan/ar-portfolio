import React from "react";
import Markdown from "react-markdown";

const About = () => {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">About</h2>
      <div className="space-y-4 text-justify">
        <Markdown>
          He has successfully developed and deployed 6+ web applications,
          **improving user engagement by up to 30%** through intuitive UI/UX design
          and optimized performance.
        </Markdown>
        <Markdown>
          Proficient in JavaScript/TypeScript, React.js, and modern frameworks,
          Ari has completed complex problem-solving challenges on platforms like
          Exercism and LeetCode, showcasing his analytical skills and dedication
          to excellence. His expertise includes **integrating Web3 and AI technologies
          for decentralized applications and building scalable, user-centric web
          solutions.**
        </Markdown>
        <Markdown>
          Ari is fluent in English and highly experienced in **remote work
          environments,** enabling him to collaborate seamlessly with **global
          teams.** He excels in cross-functional collaboration, consistently
          delivering projects on time and exceeding expectations.
        </Markdown>
        <Markdown>
          With a proven ability to **adapt and communicate effectively,** Ari is
          ready to transform innovative ideas into measurable success for your
          team.
        </Markdown>
      </div>
    </section>
  );
};

export default About;
