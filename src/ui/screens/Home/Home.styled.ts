import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background };
    flex-direction: column;
`

export const Image = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`

export const Modal = styled.Modal`
    background-color: ${({theme}) => theme.colors.background };
    padding: 32px;
`

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.text };
    margin-bottom: 40px;
    text-align: center;
`
export const SubTitle = styled.Text`
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.text };
`
export const Description = styled.Text`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.regular };
    color: ${({theme}) => theme.colors.text };
    margin-bottom: 40px;
`

export const Copyright = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.regular };
    color: ${({theme}) => theme.colors.text };
`