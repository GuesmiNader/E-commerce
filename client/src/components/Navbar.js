import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
height: 62px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex; /* side by side */
justify-content: space-between; /* space bettwen items */
align-items: center;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;
const Center = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input = styled.input`
border: none;
`;
const Logo = styled.div`
font-weight: bold;
text-align: center;
`;
const MenuItem = styled.div`
font-size: 14x;
cursor: pointer;
margin: 25px;
`;
const Navbar = () => {
 
    return (
        <Container>
            <Wrapper>
                <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
                <Center>
                    <Logo>Aloui Service</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
