import styled from "styled-components";

const Containner =styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`
const Announcement = () => {
    return (
        <Containner>Super Television Salesman</Containner>
    )
}

export default Announcement;