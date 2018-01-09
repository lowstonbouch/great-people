import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import GreatPeopleList from 'components/GreatPeopleList';
import GreatPerson from 'components/GreatPerson';

const Root = styled.section`
`;

export default class GreatPeople extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          name: 'Bill Gates',
          imgUrl: 'http://erpinnews.com/wp-content/uploads/2017/10/xVAFH9ZH_400x400.jpg',
          id: '1',
          description: 'Уи́льям Ге́нри Гейтс III, более известный как Билл Гейтс — американский предприниматель и общественный деятель, филантроп, один из создателей и бывший крупнейший акционер компании Microsoft.',
        },
        {
          name: 'Albert Einstein',
          imgUrl: 'https://miraman.ru/imagetransform/quality_50_width_1920_height_1080_fit_2/uploads/protected/000/000/026/794.jpg',
          id: '2',
          description: 'Альбе́рт Эйнште́йн — физик-теоретик, один из основателей современной теоретической физики, лауреат Нобелевской премии по физике 1921 года, общественный деятель-гуманист. Жил в Германии, Швейцарии и США.',
        },
        {
          name: 'Pasha',
          imgUrl: 'https://pp.userapi.com/c639728/v639728031/2a944/uJzOK3X25xo.jpg',
          id: '3',
          description: 'Ни чё не сделал, но тоже крутой.',
        },
      ],
    };
  }

  render() {
    const { people } = this.state;

    return (
      <Root>
        <Route path="/great-people" render={() => {
          return (
            <GreatPeopleList people={people} />
          );
        }} />
        <Route path="/great-people/:personId" render={(props) => {
          const { params } = props.match;
          const currentPerson = people.find((person) => {
            return person.id === params.personId;
          });

          return (
            <GreatPerson person={currentPerson} />
          );
        }} />
      </Root>
    );
  }
}
