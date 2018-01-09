import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Person from 'components/Person';

const Root = styled.section`
  background-color: #2E8B57;
  padding: 30px 0 0;
`;

const Heading = styled.h2`
  font-size: 38px;
  line-height: 40px;
  text-align: center;
  margin: 0 0 30px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
`;

export default class GreatPeopleList extends PureComponent {
  render() {
    const { people } = this.props;

    return (
      <Root>
        <Heading>
          Great people
        </Heading>
        <List>
          {
            people.map((person) => {
              return (
                <Item key={person.id}>
                  <Link to={`/great-people/${person.id}`}>
                    <Person person={person} />
                  </Link>
                </Item>
              );
            })
          }
        </List>
      </Root>
    );
  }
}
