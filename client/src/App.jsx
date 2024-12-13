import React from 'react';
import store from './utils/store';
import { Provider } from 'react-redux';
import { Container, Header, Icon } from 'semantic-ui-react';
import Clocks from './components/Clocks';

const App = () => {
  return (
    <Provider store={store}>
      <div className="content">
        <Container>
          <Header textAlign="center" as="h1" icon>
            <Icon name="globe" size="mini" />
            City time:
          </Header>
          <Clocks />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
