import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden ">
      {/* <h1 className="text-4xl font-bold">My Developer Portfolio</h1> */}
<Hero/>
<About/>
<Skills/>
<Projects/>
<Experience/>
<Education/>
<Contact/>



      
    </main>
  )
}