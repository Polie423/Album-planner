import Image from "next/image";
import Hero from "../components/main/hero";
import './globals.css';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="'flex flex-col gap-20 h-[850px]">
        <Hero/>
      </div>
     
    </main>
  );
}
