import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from '../components/Products';
import Newsletter from "../components/Newsletter";
const Container = styled.div`
`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;

`;
const Filter = styled.div`
margin: 20px;
`;
const Title = styled.h1`
margin: 20px;
`;
const FilterText = styled.span`
font-weight: 600;
font-size: 20px;
margin-right: 20px;
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option`

`;


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products :</FilterText>
                    <Select>
                        <Option disabled selected>Select Coler</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Select Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort products :</FilterText>
                    <Select>
                        <Option>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList