import * as React from 'react';
import Stack from 'Components/Stack';
import Link from 'Components/Link';
import * as styles from './Masthead.scss';
import Container from '../Container';
import * as bizzyLogo from './bizzy-logo.svg';

export default () => (
  <div className={styles.Masthead}>
    <Container>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <img src={bizzyLogo} alt="" />
        </div>
        <div className={styles.Nav}>
          <Stack>
            <Link url="#">Yeey</Link>
            <Link url="#">Yeey</Link>
            <Link url="#">Yeey</Link>
          </Stack>
        </div>
      </div>
    </Container>
  </div>
);
