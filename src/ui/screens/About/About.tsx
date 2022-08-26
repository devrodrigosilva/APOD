import React from "react";
import { Container, Text, TextItalic } from "./About.styled";

export function About({navigation} :any){
    return(
        <Container>
            <Text>Each day a different image or photograph of our fascinatin g universe is featured, along with a brief explanation written by a professional astronomer.</Text>
            <TextItalic>Information from https://a pi.nasa.gov/</TextItalic>
        </Container>
    )
}