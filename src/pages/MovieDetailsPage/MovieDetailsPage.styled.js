import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee56b;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ddddddc4;
`;

const Hr = styled.hr`
  color: #eee56b;
`;

const MovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #2a363b;
`;

const MovieImage = styled.img`
  width: 250px;
  height: 375px;
  object-fit: cover;
`;

const Box = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-right: 10px;
  color: #2a363b;
`;

const Text = styled.p`
  color: #2a363b;
  text-align: center;
`;

const Container = styled.div`
  height: auto;
  padding: 40px 60px;
  width: 790px;
`;

const ContainerLink = styled.div`
  display: flex;
  align-items: baseline;
  padding: 40px 30px 0;

  h2 {
    margin-right: 20px;
    color: #2a363b;
  }
`;

const Overview = styled.h3`
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  color: #2a363b;
`;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  color: #2a363b;
  transition: all 250ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: #2196f3;
  }
`;

export {
  MovieTitle,
  MovieImage,
  Wrapper,
  Title,
  Text,
  Container,
  Overview,
  Box,
  ContainerLink,
  Button,
  Hr,
};
