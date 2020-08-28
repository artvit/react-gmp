import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';

const DialogPanel = styled.div`
  backdrop-filter: blur(8px) brightness(1.2);
  padding: 20px 40px;
  background: #232323;
  color: white;
  width: 600px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 32px;
`;

const CloseButtonBox = styled.div`
  text-align: end;
`;

const CloseButton = styled.button`
  border: 0;
  font-size: 50px;
  background: transparent;
  color: white;
  
  &:after {
    font-weight: 100;
    content: "×";
  }
`;

const BottomButtons = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  >* {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  border: 1px solid #f65261;
  color: #f65261;
`;

const PrimaryButton = styled(Button)`
  background: #f65261;
  color: white;
  border: 0;
`;

// eslint-disable-next-line react/prefer-stateless-function
class AddDialog extends Component {
  // eslint-disable-next-line class-methods-use-this
  closeDialog() {
    // eslint-disable-next-line no-console
    console.log('Dialog closed');
  }

  render() {
    return (
      <DialogPanel>
        <CloseButtonBox><CloseButton onClick={this.closeDialog()} /></CloseButtonBox>
        <Title>Add movie</Title>
        <Input title="Title" placeholder="Title here" />
        <Input title="Release Date" placeholder="Select Date" type="date" />
        <Input title="Movie URL" placeholder="Movie URL here" />
        <Input title="Genre" placeholder="Select Genre" />
        <Input title="Overview" placeholder="Overview here" />
        <Input title="Runtime" placeholder="Runtime here" />
        <BottomButtons>
          <Button>Reset</Button>
          <PrimaryButton>Submit</PrimaryButton>
        </BottomButtons>
      </DialogPanel>
    );
  }
}

export default AddDialog;
