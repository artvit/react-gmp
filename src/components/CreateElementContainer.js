import React from 'react';

const createElementContainer = React.createElement('h1', null, 'Hello React.createElementContainer');

class CreateElementContainer extends React.Component {
  render() {
    return createElementContainer;
  }
}

export default CreateElementContainer;
