import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components';

import Person from 'components/Person';

const Root = styled.div`
  padding: 30px 50px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: 32px;
`;

export default class GreatPerson extends PureComponent {
  render() {
    const { person } = this.props;

    return (
      <Root>
        <Person person={person} />
        <Description>
          {person.description}
        </Description>
      </Root>
    );
  }
}
