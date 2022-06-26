import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &:hover {
    color: #2196f3;
  }
`;

const LinkText = styled.p`
  padding: 25px 20px 15px;
  text-align: center;
`;

const MoviesList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  margin-bottom: 40px;
  padding-top: 30px;
`;

const MovieItem = styled.li`
  overflow: hidden;
  border: 1px solid #eee56b;
  border-radius: 10px;
  background-color: #ddddddc4;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export { MoviesList, MovieItem, MovieLink, LinkText };
