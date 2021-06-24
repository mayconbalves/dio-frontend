import styled from 'styled-components'
import * as I from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  display: flex;
  border: 1px solid #fff;
  height: 90px;
  width: 50%;
  margin: 10px auto;
`
export const DescriptionContainer = styled.div`
  border: 1px solid #fff;
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 80%;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 420px) {
    width: 60%;
  }
`

export const Author = styled.p`
  color: #00ced1;
  font-size: 1.7rem;
  padding: 10px;
`

export const Description = styled.p`
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
`

export const IconContainer = styled.div`
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  width: 10%;
  @media (max-width: 768px) {
    width: 15%;
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`

export const Like = styled(I.Like)`
  color: green;
  width: 20px;
  cursor: pointer;
`

export const Dislike = styled(I.Dislike)`
  color: red;
  width: 20px;
  cursor: pointer;
`

export const Cont = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 5px;
`
