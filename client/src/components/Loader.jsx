import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const Loader = () => {
  return (
    <div className="loader">
      <Container>
        <Header as="h2" textAlign="center" icon>
          <Icon name="arrow alternate circle down outline" />
          Загрузка...
        </Header>
      </Container>
    </div>
  );
};
export default Loader;
