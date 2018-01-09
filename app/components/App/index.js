import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import Content, { Root as ContentRoot } from 'components/Content';
import Footer from 'components/Footer';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 1024px;
  border-left: 3px green solid;
  border-right: 3px green solid;
  margin: 0 auto;

  & ${ContentRoot} {
    flex-grow: 1;
  }
`;

export default class App extends PureComponent {
  render() {
    return (
      <Root>
        <Header />
        <Route component={Content} />
        <Footer />
      </Root>
    );
  }
}
