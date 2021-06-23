import styled from 'styled-components'

export const Button = styled.button`
  color: #fff;
  background-color: ${props => props.disabled
    ? 'gray'
    : `${props.backgroundColor}`};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  min-width: 100px;
  padding: 10px;
  border: none;
`
