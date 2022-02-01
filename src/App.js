import Card from "./componenets/Card";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      ></Card>
    )
  })
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
