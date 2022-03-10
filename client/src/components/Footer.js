import styled from "styled-components";
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Center = styled.div`
flex:1;
padding: 20px;
`;
const Right = styled.div`
flex:1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Logo = styled.h1`
`;
const Description = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Aloui Service</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officiis quisquam quibusdam quasi labore dolorem officia assumenda quo qui cupiditate, temporibus nulla? Nihil quibusdam sint alias obcaecati, eum accusamus assumenda.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} /> Tunis Tunisia ,Dejball Dejlloud 9255 N13</ContactItem>
                <ContactItem><Phone style={{ marginRight: '10px' }} /> +216 20 199 877</ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} /> contact@nader.dev
                </ContactItem>
                <ContactItem></ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer