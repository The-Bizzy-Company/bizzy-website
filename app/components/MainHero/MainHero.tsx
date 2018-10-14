import * as React from 'react';
import GetStartedButton from 'Components/GetStartedButton';
import Stack from 'Components/Stack';
import Logo from 'Components/Logo';
import Button from 'Components/Button';
import Heading from 'Components/Heading';
import Row from 'Components/Row';
import Section from 'Components/Section';
import Column from 'Components/Column';
import * as qrScan from './illustrations/qr-scan.svg';

function MainHero() {
  return (
    <Section bottomWave centerContent>
      <Row>
        <Column width="420px">
          <Stack vertical spacing="loose" sectioned>
            <Logo />
            <Heading>Sharing online business cards the easy way.</Heading>
            Create and customize your digital business card with a website url,
            add it within our bizzy mobile app to start sharing them with the
            world.
            <Stack sectioned>
              <GetStartedButton />
              <Button url="/watch-video" outlined>
                Watch video
              </Button>
            </Stack>
          </Stack>
        </Column>
        <Column width="420px">
          <img src={qrScan} alt="Bizzy" />
        </Column>
      </Row>
    </Section>
  );
}

export default MainHero;
