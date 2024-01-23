import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 300px;
  margin-bottom: 28px;
  border: 1px solid black;
  outline: 3px solid white;
  background-color: #fff;
  &:focus {
    border-radius: 3px;
    border: 1px solid rgb(0, 158, 186);
    outline: 2px solid rgb(0, 158, 186, 0.3);
    box-shadow: 0px 0 5px 3px rgba(0, 158, 186, 0.3);
    background-color: #fff;
  }

  &:hover {
    border-radius: 3px;
    border: 1px solid rgb(0, 158, 186);
    outline: 2px solid rgb(0, 158, 186, 0.3);
    box-shadow: 0px 0 5px 3px rgba(0, 158, 186, 0.3);
    background-color: #fff;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 1000000s ease-in-out 0s;
  }
`;
