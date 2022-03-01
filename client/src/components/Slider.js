import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from '../data';
const Container = styled.div`
margin-top: 33px;
width:100%;
height:100vh;
display: flex;
position:relative;
overflow: hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
top: 0;
bottom: 0;
/*                             if its Left     */
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
margin: auto;
z-index: 2;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
display:flex;
align-items:center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg};
`

const ImgContainner = styled.div`
height: 100%;
flex:1;
`;
const Image = styled.img`
height: 80%;

`;
const InfoContainner = styled.div`
flex:1;
padding: 50px;
`;
const Title = styled.h1`
font-size:70px;
`;
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor:pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
setSlideIndex(slideIndex <2 ? slideIndex+1 :0)
        }
    };
    return (
        <Container>
            <Arrow direction='left' onClick={() => handelClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainner>
                            <Image src={item.img} />
                        </ImgContainner>
                        <InfoContainner>
                            <Title>{item.title}</Title>
                            <Description>{item.desc} </Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainner>
                    </Slide>
                ))};
            </Wrapper>
            <Arrow direction='right' onClick={() => handelClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider