import * as React from 'react';
import {createUniqueIDFactory} from '@shopify/javascript-utilities/other';
import Card, {Card as CardType} from 'Components/Card';
import Cards from 'Components/Cards';
import Heading from 'Components/Heading';
import Section from 'Components/Section';
import cards from './cards';

const getUniqueID = createUniqueIDFactory('card');

export default () => (
  <Section topWave bottomWave>
    <Heading>Bizzy's Benefits</Heading>
    <Cards>
      {cards.map((card: CardType) => (
        <Card
          key={getUniqueID()}
          icon={card.icon}
          title={card.title}
          content={card.content}
        />
      ))}
    </Cards>
  </Section>
);
