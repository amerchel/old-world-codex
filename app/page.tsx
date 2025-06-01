import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Outro } from "./components/sections/Outro";
import { Footer } from "./components/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Outro />
            <Footer />
        </>
    );
}
