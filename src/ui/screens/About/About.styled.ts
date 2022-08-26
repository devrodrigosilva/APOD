import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background };
    padding: 48px 32px 0 32px;
`

export const Text = styled.Text`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.regular };
    color: ${({theme}) => theme.colors.text };
    margin-bottom: 56px;
`

export const TextItalic = styled.Text`
    font-size: 14px;
    font-family: ${({theme}) => theme.fonts.italic };
    color: ${({theme}) => theme.colors.text };
`

export const Logo = styled.Image`
    height: 70px;
    width: 85px;
`