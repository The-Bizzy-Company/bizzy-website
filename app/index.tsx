import * as React from 'react';
import {render} from 'react-dom';

import App from 'Components/App';
import Heading from 'Components/Heading';
import Page from 'Components/Page';
import Stack from 'Components/Stack';
import Button from 'Components/Button';

render(
  <App>
    <Page>
      <Stack vertical>
        <Heading>Yeey!</Heading>
        <p>yeey!</p>
        <Button url="/get-started">Get started</Button>
      </Stack>
    </Page>
  </App>,
  document.getElementById('app'),
);
