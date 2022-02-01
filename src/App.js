import Card from "./componenets/Card";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import sample from './images/sample.png'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card                 
        img={sample}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}/>
    </div>
  );
}

export default App;
