import Card from "./componenets/Card";
import Navbar from "./componenets/Navbar";
import data from './data'

function App() {
  const cards = data.map(item => <Card {...item}></Card>);

  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
