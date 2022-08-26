import React, { useState} from "react";
import theme from "../../../global/styles/theme";
import {Container, CategoryTitle, CategoryContainer, ConfigContainer, ConfigName, Switch, TextInput} from "./Settings.styled";

export function Settings(){
    const [isEnabled, setIsEnabled] = useState(false)
    return(
        <Container>
            <CategoryTitle>Notifications</CategoryTitle>
            <CategoryContainer>
                <ConfigContainer>
                    <ConfigName>Daily notification</ConfigName>
                    <Switch
                        trackColor={{ false: "#767577", true: '#18568e'}}
                        thumbColor={isEnabled ? theme.colors.primary : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                </ConfigContainer>
                <ConfigContainer>
                    <ConfigName>Time</ConfigName>
                    <TextInput>09:00</TextInput>
                </ConfigContainer>
            </CategoryContainer>
        </Container>
    )
}