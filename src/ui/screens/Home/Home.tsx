import React, { useState, useEffect} from "react";
import { Container, Copyright, Image, Modal, Title, SubTitle, Description} from "./Home.styled";
import { fetchImage } from "../../../services/api";

export function Home(){
    const [imageUri, setImageUri]= useState(null)
    const [title, setTitle]= useState('')
    const [explanation, setExplanation]= useState('')
    const [copyright, setCopyright]= useState('')
    const [modalVisible, setModalVisible] = useState(true);


    const fetchData = async () => {
        const  {title, explanation, copyright, hdurl } = await fetchImage()
        setTitle(title)
        setExplanation(explanation)
        setCopyright(copyright)
        setImageUri(hdurl)

    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log({imageUri})

    return(
        <Container>
            <Image source={{uri: imageUri}} resizeMode="cover" />
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <Title>{title}</Title>
                <Description>{explanation}</Description>
                <SubTitle>Copyright</SubTitle>
                <Copyright>{copyright}</Copyright>
            </Modal>
        </Container>
    )
}
