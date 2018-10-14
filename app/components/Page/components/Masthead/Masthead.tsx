import * as React from 'react';
import Stack from 'Components/Stack';
import Link from 'Components/Link';
import Button from 'Components/Button';
import Container from 'Components/Container';
import * as styles from './Masthead.scss';

export default () => (
  <div className={styles.Masthead}>
    <Container>
      <div className={styles.Content}>
        <div className={styles.Nav}>
          <Stack spacing="loose">
            <Link url="#">iOs app</Link>
            <Link url="#">Android app</Link>
            <Link url="#">About us</Link>
            <Button outlined size="small">Create businesscard</Button>
          </Stack>
        </div>
      </div>
    </Container>
  </div>
);
