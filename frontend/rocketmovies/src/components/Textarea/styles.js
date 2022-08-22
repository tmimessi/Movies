import styled from 'styled-components'

export const Search = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 19px 15px;
width: 100%;
height: 150px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
color: ${({theme}) => theme.COLORS.GRAY_100};
border-radius: 10px;
border: none;
resize: none;


&::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`