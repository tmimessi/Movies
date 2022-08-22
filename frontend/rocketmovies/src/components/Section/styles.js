import styled from 'styled-components'

export const Container = styled.section`
  > h2 {
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
  }
`