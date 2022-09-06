import React from 'react';
import Container from './components/container';
import CounterExample from './components/counter-example';

const App: React.FC = () => (
  <main>
    <h3>Boilerplate</h3>
    <Container>
      <CounterExample />
    </Container>

  </main>
);

export default App;
