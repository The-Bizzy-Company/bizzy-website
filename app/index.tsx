import * as React from 'react';
import {render} from 'react-dom';
import App from 'Components/App';
import Heading from 'Components/Heading';
import Page from 'Components/Page';
import Section from 'Components/Section';
import Column from 'Components/Column';
import Row from 'Components/Row';
import Scoreboard from 'Components/Scoreboard';
import Benefits from 'Components/Benefits';
import MainHero from 'Components/MainHero';
import MainFeatures from 'Components/MainFeatures';

render(
  <App>
    <Page headless>
      <MainHero />
      <MainFeatures />
      <Benefits />

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
