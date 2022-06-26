import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee56b;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ddddddc4;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  img {
    width: 250px;
    object-fit: cover;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-right: 10px;
`;

const Text = styled.p`
  margin-right: 8px;
`;

const Container = styled.div`
  height: auto;
  padding: 40px 60px;
`;

const ContainerLink = styled.div`
  display: flex;
  align-items: baseline;
  padding: 40px 30px 0;

  h2 {
    margin-right: 20px;
  }
`;

const Overview = styled.h3`
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`;
export { Wrapper, Title, Text, Container, Overview, Box, ContainerLink };
