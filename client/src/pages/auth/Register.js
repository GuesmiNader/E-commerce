import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80") center;
     display: flex;
     align-items: center;
     justify-content: center;
     background-size:cover ;

`;
const Agreement = styled.span`
font-size: 12px;
margin:20px 0px ;
`;
const Wrapper = styled.div`
padding: 20px;
width:40% ;
background-color:white ;
`;
const Input = styled.input`
flex:1 ;
min-width:40% ;
margin:20px 10px 0px 0px;
padding: 10px;
`;
const Button = styled.button`
width: 40%;
border:none ;
padding:15px 20px;
background-color:teal ;
cursor:pointer ;

`;

const Form = styled.form`
display: flex;
flex-wrap:wrap ;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Link = styled.a`
margin:5px 0px ;
font-size: 12px;
text-decoration:underline;
cursor: pointer;
`;
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="uername" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm-password" />
                    <Agreement>
                        By Creating an acount, I Consent to the proccesing of my personal data in accordance with <b>PRIVACY POLICY</b>
                    </Agreement >
                    <Button>Create</Button>
                    <Link>Already had an account?</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register