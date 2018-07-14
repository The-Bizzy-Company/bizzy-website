import * as React from 'react';
import {render} from 'react-dom';

import App from 'Components/App';
import Heading from 'Components/Heading';
import Page from 'Components/Page';

render(
  <App>
    <Page>
      <Heading>Yeey!</Heading>
      yeey!
    </Page>
  </App>,
  document.getElementById('app'),
);
