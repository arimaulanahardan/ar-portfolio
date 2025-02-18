import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Library from "@/components/Library";
import References from "@/components/References";
import DownloadResume from "@/components/DownloadResume";

export default function Home() {
  return (
    <>
      <Header />
      <DownloadResume />
      <About />
      <Work />
      <Education />
      <Skills />
      <Library />
      <References />
      <Projects />
    </>
  );
}
