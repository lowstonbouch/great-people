import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import GreatPeople from 'components/GreatPeople';

export const Root = styled.div`
  background-color: #fac9b8;
`;

export default class Content extends PureComponent {
  render() {
    return (
      <Root>
        <Route component={GreatPeople} />
      </Root>
    );
  }
}
