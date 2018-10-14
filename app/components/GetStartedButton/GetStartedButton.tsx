import * as React from 'react';
import {bind} from 'lodash-decorators';
import Button from 'Components/Button';
import Modal from 'Components/Modal';
import TextField from 'Components/TextField';
import Stack from 'Components/Stack';
import FormState from '@shopify/react-form-state';
import * as widget from './illustrations/bizzy-widget.png';

interface State {
  modalOpen: boolean;
}

class GetStartedButton extends React.Component<{}, State> {
  state = {
    modalOpen: true,
  };

  render() {
    const {modalOpen} = this.state;
    return (
      <>
        <Button onClick={this.openModal}>Get Started</Button>
        <FormState
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
        >
          {({
            fields: {firstName, lastName, email},
            dirty,
            valid,
            submitting,
            errors,
            reset,
            submit,
          }) => (
            <Modal
              open={modalOpen}
              onClose={this.closeModal}
              title="Unlock a free subscription worth $240 yearly."
              primaryAction={{
                content: 'Sign up',
                onAction: this.closeModal,
              }}
              promoImage={widget}
            >
              <Stack vertical>
                Be the first to get a next generation business card. Sign up
                below and be the first to know when we go live. Refer your
                friends and get a one year professional subscription for free
                for every 10 friends that sign up (normally $240 per year).
                <TextField
                  label="First name"
                  placeholder="e.g. John"
                  value={firstName.value}
                  onChange={firstName.onChange}
                />
                <TextField
                  label="Last name"
                  placeholder="e.g. Doe"
                  value={lastName.value}
                  onChange={lastName.onChange}
                />
                <TextField
                  label="Email"
                  placeholder="e.g. john@doe.com"
                  type="email"
                  value={email.value}
                  onChange={email.onChange}
                />
              </Stack>
            </Modal>
          )}
        </FormState>
      </>
    );
  }

  @bind()
  private openModal() {
    this.setState({modalOpen: true});
  }

  @bind()
  private closeModal() {
    this.setState({modalOpen: false});
  }
}

export default GetStartedButton;
