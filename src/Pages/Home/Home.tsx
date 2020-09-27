import React from 'react';
import { Container } from 'react-bootstrap';
import { FeaturedMovie } from '../../Components/Organisms/FeaturedMovie/FeaturedMovie';

export default function Home() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <FeaturedMovie
        title="Narcos"
        description="David and Peña are in a race against each other to find Pallomari. Peña makes a serious decision about the future of his career."
      />
    </Container>
  );
}
