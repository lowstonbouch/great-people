import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  background-color: #c9c19f;
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <Root>
        Hello, it is a footer. I hope today you will learn react-router.
      </Root>
    );
  }
}
