import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills";
import Image from "next/image";
import { motion } from 'framer-motion';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"


export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Portfolio/>
   <Skills/>
   <Contact/>
   <Footer/>
   
   </>
  );
}
