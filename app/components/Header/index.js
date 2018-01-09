import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  background-color: #c9c19f;
`;

export default class extends PureComponent {
  render() {
    return (
      <Root>
        I'm header
      </Root>
    );
  }
}
