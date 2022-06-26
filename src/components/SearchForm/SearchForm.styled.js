import styled from 'styled-components';

const Form = styled.form`
  display: table;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 4px 7px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-right: 5px;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
  }
`;

export { Form, Input };
