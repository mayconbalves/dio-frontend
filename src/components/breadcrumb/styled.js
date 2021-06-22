import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-column: col 3 / span 8;
`

export const List = styled.li`
  display: inline-block;
  list-style: none;
  margin: 20px 5px;
  font-size: 14px;
  & + &:before {
    color: #00ced1;
    content: '>';
    margin-right: 10px;
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`

export const Span = styled.span`
  color: #00ced1;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`
