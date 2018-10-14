import * as React from 'react';
import {render} from 'react-dom';
import App from 'Components/App';
import Heading from 'Components/Heading';
import SubHeading from 'Components/SubHeading';
import Logo from 'Components/Logo';
import Page from 'Components/Page';
import Button from 'Components/Button';
import Section from 'Components/Section';
import Column from 'Components/Column';
import Row from 'Components/Row';
import Scoreboard from 'Components/Scoreboard';
import Benefits from 'Components/Benefits';

const section1Visual = require('Assets/sections/section1.svg');
const section2Visual = require('Assets/sections/section2.png');

render(
  <App>
    <Page headless>
      <Section bottomWave centerContent>
        <Row>
          <Column width="420px">
            <Logo />
            <Heading>Sharing online business cards the easy way.</Heading>
            <p style={{fontSize: '19px', lineHeight: '34px', marginBottom: '35px'}}>
              Create and customize your digital business card with a website
              url, add it within our bizzy mobile app to start sharing them with
              the world.
            </p>
            <div>
              <Button url="/get-started">Get started</Button>
              <Button url="/watch-video" outlined>
                Watch video
              </Button>
            </div>
          </Column>
          <Column width="420px">
            <img src={section1Visual} alt="Bizzy" />
          </Column>
        </Row>
      </Section>

      <Section background="sea" topWave bottomWave>
        <Row>
          <Column>
            <img src={section2Visual} alt="Bizzy" style={{margin: "0 auto", display: "table"}} />
          </Column>
          <Column>
            <Heading>Going Digital</Heading>
            <SubHeading>Memerable impressions</SubHeading>
            <p style={{fontSize: '19px', lineHeight: '34px', marginBottom: '30px'}}>
              Create your next generation business card in just a few click and show what your company does on a new level. Showcase just about anything, from videos to complex animations, anything is possible.
            </p>
            <SubHeading>Get insights, increase value</SubHeading>
            <p style={{fontSize: '19px', lineHeight: '34px', marginBottom: '30px'}}>
              When receiving Bizzy cards from others you will be able to see all sorts information of which we'll highlight what's important to you. Information you can then use to supercharge your process.
            </p>
            {/*<div>
              <Button url="/get-started">Android</Button>
              <Button url="/watch-video">iPhone</Button>
            </div>*/}
          </Column>
        </Row>
      </Section>

      <Section topWave bottomWave>
        <Benefits />
      </Section>

      <Section background="sea" topWave bottomWave>
        <Row>
          <Column width="30%">
            <Heading type="secondary" center>
              Sharing with iPhone
            </Heading>
            <p style={{textAlign: 'center'}}>
              Qr-code scanning with the iPhone camera app and iPhone widgets.
              Qr-code scanning with the iPhone camera app and iPhone widgets.
            </p>
          </Column>
          <Column width="30%">
            <Heading type="secondary" center>
              Sharing with Android
            </Heading>
            <p style={{textAlign: 'center'}}>
              NFC Beam will only require you to tab someone elses phone to share
              your businesscard. NFC Beam will only to tab someone.
            </p>
          </Column>
        </Row>
      </Section>

      <Section topWave bottomWave>
        <Row>
          <Column width="70%">
            <Heading>Some examples</Heading>
            <p style={{fontSize: '20px'}}>
              Clicking on a cards will send you to our share url which prompts
              you to save the information to your contacts or save it within the
              bizzy app.
            </p>
          </Column>
        </Row>
      </Section>

      <Section background="purple" topWave>
        <Row>
          <Column width="60%" gutter={40}>
            <Scoreboard />
          </Column>
          <Column width="40%" gutter={40} align="right">
            <Heading inverted>Refer a friend</Heading>
            <p>
              The top 100 users that refered the most friends/companies will
              receive 1 year free Bizzy limited (once Bizzy becomes available in
              the mobile stores).
            </p>
          </Column>
        </Row>
      </Section>

      <Section background="sea">
        <Row>
          <Column width="20%">
            <Heading type="tertiary">
              <p />
            </Heading>
          </Column>
          <Column width="20%">
            <Heading type="tertiary">Product</Heading>
            <div>
              <a>Create business card</a>
            </div>
            <div>
              <a>Get early access</a>
            </div>
            <div>
              <a>Refer a friend</a>
            </div>
            <div>
              <a>Join Slack community</a>
            </div>
          </Column>
          <Column width="20%">
            <Heading type="tertiary">Company</Heading>
            <div>
              <a>About</a>
            </div>
            <div>
              <a>Partners</a>
            </div>
            <div>
              <a>Meet the team</a>
            </div>
          </Column>
          <Column width="20%">
            <Heading type="tertiary">Mobile App</Heading>
            <div>
              <a>Download iPhone app</a>
            </div>
            <div>
              <a>Download Android app</a>
            </div>
          </Column>
          <Column width="20%">
            <Heading type="tertiary">Contact</Heading>
            <div>
              <a>bizzycards@gmail.com</a>
            </div>
            <div>
              <a>+31 6 248 77 5 33</a>
            </div>
          </Column>
        </Row>
      </Section>
    </Page>
  </App>,
  document.getElementById('app'),
);
