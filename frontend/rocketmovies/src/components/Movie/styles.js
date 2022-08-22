import styled from "styled-components";

export const Container = styled.button`
  padding: 32px 32px 40px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  > h2 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    text-align: justify;
    max-height: 40px;
    overflow: hidden;
  }

  > footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 24px;
  }

`