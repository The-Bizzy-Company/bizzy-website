import * as React from 'react';
import SubHeading from 'Components/SubHeading';
import Heading from 'Components/Heading';
import Row from 'Components/Row';
import Section from 'Components/Section';
import Column from 'Components/Column';
import * as mainscreen from './illustrations/mainscreen.png';

function MainFeatures() {
  return (
    <Section background="sea" topWave bottomWave>
      <Row>
        <Column>
          <img
            src={mainscreen}
            alt="Bizzy"
            style={{margin: '0 auto', display: 'table'}}
          />
        </Column>
        <Column>
          <Heading>Going Digital</Heading>
          <SubHeading>Memerable impressions</SubHeading>
          <p
            style={{
              fontSize: '19px',
              lineHeight: '34px',
              marginBottom: '30px',
            }}
          >
            Create your next generation business card in just a few click and
            show what your company does on a new level. Showcase just about
            anything, from videos to complex animations, anything is possible.
          </p>
          <SubHeading>Get insights, increase value</SubHeading>
          <p
            style={{
              fontSize: '19px',
              lineHeight: '34px',
              marginBottom: '30px',
            }}
          >
            When receiving Bizzy cards from others you will be able to see all
            sorts information of which we'll highlight what's important to you.
            Information you can then use to supercharge your process.
          </p>
          {/* <div>
              <Button url="/get-started">Android</Button>
              <Button url="/watch-video">iPhone</Button>
            </div> */}
        </Column>
      </Row>
    </Section>
  );
}

export default MainFeatures;
