import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Idea from './components/Idea.jsx';
import Vision from './components/Vision.jsx';
import Product from './components/Product.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Idea />
        <Vision />
        <Product />
      </main>
      <Footer />
    </div>
  );
}
