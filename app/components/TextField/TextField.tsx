import * as React from 'react';
import {bind} from 'lodash-decorators';
import * as styles from './TextField.scss';

export interface Props {
  id?: string;
  type?: string;
  value?: string;
  label?: string;
  name?: string;
  error?: string;
  long?: boolean;
  required?: boolean;
  placeholder?: string;
  onChange(value: string): void;
}

function getChangeHandler(onChange: Props['onChange']) {
  return ({target: {value}}: any) => onChange(value);
}

export default function TextField({
  type = 'text',
  label,
  name,
  long,
  value,
  id,
  error,
  onChange,
  required,
  placeholder,
}: Props) {
  console.log(error);
  return (
    <div className={styles.TextField}>
      {label && (
        <label htmlFor={name} className={styles.Label}>
          {label}
        </label>
      )}
      {long ? (
        <textarea
          className={styles.Textarea}
          value={value}
          name={name}
          id={id}
          onChange={getChangeHandler(onChange)}
          required={required}
        />
      ) : (
        <input
          className={styles.Input}
          type={type}
          value={value}
          name={name}
          id={id}
          onChange={getChangeHandler(onChange)}
          required={required}
          placeholder={placeholder}
        />
      )}
      <div className={styles.Underline} />
    </div>
  );
}
