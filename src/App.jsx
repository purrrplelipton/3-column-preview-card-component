import { Luxury, Sedan, SUV } from '@assets';
import React from 'react';
import { v4 } from 'uuid';
import { Button, Column } from './components';

const cards = [
  {
    icon: <Sedan />,
    heading: 'SEDANS',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    'color-scheme': 'var(--bright-orange)',
  },
  {
    icon: <SUV />,
    heading: 'SUVs',
    description:
      'Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.',
    'color-scheme': 'var(--dark-cyan)',
  },
  {
    icon: <Luxury />,
    heading: 'LUXURY',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    'color-scheme': 'var(--very-dark-cyan)',
  },
];

function App() {
  return (
    <main>
      {cards.map((card) => (
        <Column color_scheme={card['color-scheme']} key={v4()}>
          {card.icon}
          <h2>{card.heading}</h2>
          <p>{card.description}</p>
          <Button />
        </Column>
      ))}
    </main>
  );
}

export default App;
