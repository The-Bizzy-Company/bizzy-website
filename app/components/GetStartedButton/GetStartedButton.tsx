import * as React from 'react';
import {bind} from 'lodash-decorators';
import Button from 'Components/Button';
import Modal from 'Components/Modal';
import TextField from 'Components/TextField';
import Stack from 'Components/Stack';
import FormState, {
  FormDetails,
  validators,
  validate,
} from '@shopify/react-form-state';
import * as widget from './illustrations/bizzy-widget.png';

interface State {
  modalOpen: boolean;
  successModalOpen: boolean;
}

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
}

type FormData = FormDetails<Fields>;

class GetStartedButton extends React.Component<{}, State> {
  state = {
    modalOpen: false,
    successModalOpen: false,
  };

  render() {
    const {modalOpen, successModalOpen} = this.state;
    return (
      <>
        <Button onClick={this.openModal}>Get Started</Button>
        <Modal
          open={modalOpen}
          onClose={this.closeModal}
          title="Unlock a free subscription worth $240 yearly."
          promoImage={widget}
        >
          <Stack vertical>
            Be the first to get a next generation business card. Sign up below
            and be the first to know when we go live. Refer your friends and get
            a one year professional subscription for free for every 10 friends
            that sign up (normally $240 per year).
            <Stack vertical>
              <FormState
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                }}
                validators={{
                  firstName: validators.required(
                    'Please fill in a first name.',
                  ),
                  lastName: validators.required('Please fill in a last name.'),
                  email: validate(
                    (value: string) => /[^@]+@[^@]+\.\w+/.test(value),
                    'Please enter a valid email.',
                  ),
                }}
                onSubmit={this.handleSubmit}
              >
                {({
                  fields: {firstName, lastName, email},
                  dirty,
                  valid,
                  submit,
                }: FormData) => (
                  <>
                    <Stack.Item>
                      <TextField
                        label="First name"
                        placeholder="e.g. John"
                        {...firstName}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <TextField
                        label="Last name"
                        placeholder="e.g. Doe"
                        {...lastName}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <TextField
                        label="Email"
                        placeholder="e.g. john@doe.com"
                        type="email"
                        {...email}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <Button onClick={submit} disabled={!dirty || !valid}>
                        Sign up
                      </Button>
                    </Stack.Item>
                  </>
                )}
              </FormState>
            </Stack>
          </Stack>
        </Modal>
        <Modal
          open={successModalOpen}
          onClose={this.closeSuccessModal}
          title="Thank you!"
          primaryAction={{
            content: 'Return',
            onAction: this.closeSuccessModal,
          }}
        >
          We've sent you a link you can use to refer your friends. See you soon!
        </Modal>
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

  @bind()
  private closeSuccessModal() {
    this.setState({successModalOpen: false});
  }

  @bind()
  private handleSubmit() {
    this.setState({modalOpen: false, successModalOpen: true});
  }
}

export default GetStartedButton;
