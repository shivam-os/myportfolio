import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Box } from "@chakra-ui/react";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <Box bgColor="gray.800" color="gray.300" fontSize="xl" className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </Box>
  );
}

export default App;
