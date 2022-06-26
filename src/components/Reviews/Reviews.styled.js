import styled from 'styled-components';

const ReviewsList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  margin-bottom: 40px;
  padding-top: 30px;

  li {
    padding: 15px 20px;
    overflow: hidden;
    border: 1px solid #eee56b;
    border-radius: 10px;
    background-color: #ddddddc4;
  }

  h2 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;
  }

  p {
    text-align: start;
    margin-bottom: 7px;
  }
`;

export { ReviewsList };
