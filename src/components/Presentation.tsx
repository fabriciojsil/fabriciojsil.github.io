import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.p`
  color: #fff;
  font-size: 3rem;
  margin: auto;
`;

export const Presentation = () => {
  return (
    <Container>
      <Title>Text</Title>
    </Container>
  );
};
