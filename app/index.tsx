import * as React from 'react';
import {render} from 'react-dom';

import App from 'Components/App';
import Heading from 'Components/Heading';
import Page from 'Components/Page';
import Stack from 'Components/Stack';
import Button from 'Components/Button';
import Card from 'Components/Card';

const CARDS: any = [
  {
    icon: 'icon-1',
    title: ['Dynamic ', 'Designs'],
    content:
      'With these flexible business cards you can animate, code, design and update them. The only limit is your imagination',
  },
  {
    icon: 'icon-2',
    title: ['Your Personal ', 'Rolodex'],
    content:
      'Never loose, forget or run out of business cards anymore. You’ll have it all in your personal rolodex which never runs out.',
  },
  {
    icon: 'icon-3',
    title: ['Save The ', 'Environment'],
    content:
      'No paper waste. See how many trees you and your company are saving when sharing online business cards all over the world.',
  },
  {
    icon: 'icon-4',
    title: ['Up-To', '-Date'],
    content:
      'Never throw away old business cards anymore because they needed updating. These digital business cards are instant adjustable.',
  },
  {
    icon: 'icon-5',
    title: ['Fraud ', 'Protection'],
    content:
      'Prevent fraud by verifing your business. No one will use paper business cards anymore for verification if you have a verified Bizzy account.',
  },
  {
    icon: 'icon-6',
    title: ['Share ', 'Connections'],
    content:
      'Share your new connections with your colleagues, friends and family. If your connections allow it. (we don’t want to get sued)',
  },
  {
    icon: 'icon-7',
    title: ['Get ', 'Insight'],
    content:
      'See the share analytics data on our portal. You now have insight on which employee shared the most business cards and to which companies.',
  },
  {
    icon: 'icon-8',
    title: ['Quick ', 'Set-up'],
    content:
      'Upload a CSV file or add your employees to our portal to instantly give them access to their company business card with their info.',
  },
  {
    icon: 'icon-9',
    title: ['Save ', 'Money'],
    content:
      'Save on purchasing paper business cards on a yearly basis. You only will pay us a low monthly fee which will save you money on the long run.',
  },
];

render(
  <App>
    <Page>
      <Stack vertical>
        <Heading>Sharing online business cards the easy way.</Heading>
        <p>
          Create and customize your digital business card with a website url,
          add it within our bizzy mobile app to start sharing them with the
          world.
        </p>
        <>
          <Button url="/get-started">Get started</Button>
          <Button url="/watch-video" outlined>
            Watch video
          </Button>
        </>
      </Stack>
      <Stack vertical>
        <Heading>Create. Manage. Organise. Structure.</Heading>
        <p>
          Create and customize your digital business card with a website url,
          add it within our bizzy mobile app to start sharing them with the
          world.
        </p>
        <>
          <Button url="/get-started">Android</Button>
          <Button url="/watch-video">iPhone</Button>
        </>
      </Stack>
      <Stack vertical>
        <Heading>Bizzy's Benefits</Heading>
        {CARDS.map((CARD: any, index: number) => (
          <Card
            key={index.toString()}
            icon={CARD.icon}
            title={CARD.title}
            content={CARD.content}
          />
        ))}
      </Stack>
    </Page>
  </App>,
  document.getElementById('app'),
);
