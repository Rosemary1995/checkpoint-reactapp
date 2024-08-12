import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Replace with your first name or leave empty

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h3>
          Hello, {firstName ? firstName : 'there!'}
        </h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/100" //  image URL
            alt="Personal"
            style={{ width: '100px', borderRadius: '50%' }}
          />
        )}
      </div>
    </Container>
  );
};

export default App;

