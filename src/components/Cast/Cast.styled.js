import styled from 'styled-components';

const CastList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 100px);
  margin-bottom: 40px;
  padding-top: 30px;

  li {
    overflow: hidden;
    border: 1px solid #eee56b;
    border-radius: 10px;
    background-color: #ddddddc4;
  }

  img {
    object-fit: cover;
    width: 100px;
    height: 150px;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    margin-bottom: 7px;
  }
`;

export { CastList };
