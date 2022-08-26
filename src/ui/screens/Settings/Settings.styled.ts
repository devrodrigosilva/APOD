import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background };
    padding: 48px 32px 0 32px;
`

export const CategoryTitle = styled.Text`
    font-size: 24px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text };
    margin-bottom: 26px;
`

export const CategoryContainer = styled.View`
    flex: 1;
    flex-direction: column;
    row-gap: 32px;
    gap: 32px;
`

export const ConfigContainer = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 32px;
`

export const ConfigName = styled.Text`
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text };
`

export const Switch = styled.Switch`
    margin: 0;
`

export const TextInput = styled.TextInput`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text };
`