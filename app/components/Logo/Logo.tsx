import * as React from 'react';
import * as styles from './Logo.scss';
import * as bizzyLogo from './bizzy-logo.svg';

export default () => (
    <div className={styles.Logo}>
        <img src={bizzyLogo} alt="" />
    </div>
);
