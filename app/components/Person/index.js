import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components';

export const Root = styled.div`
  width: 240px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  margin-top: 15px;
  font-size: 30px;
  line-height: 32px;
  font-weight: bold;
`;

const Picture = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border: 8px #800080 solid;
`;

export default class Person extends PureComponent {
  render() {
    const { person } = this.props;

    return (
      <Root>
        <Picture src={person.imgUrl} />
        <Name>
          {person.name}
        </Name>
      </Root>
    );
  }
}
