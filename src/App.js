import './App.scss';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import cardData from './data/cards.json';

function App() {

  // Cards
  const cards = cardData.map(card => {
    return (
      <Card
        key={ card.id }
        card={ card }
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <section className="hero-wrapper">
          <Hero />
        </section>
        <section className="card-wrapper">
          { cards }
        </section>
      </main>
    </div>
  );
}

export default App;
