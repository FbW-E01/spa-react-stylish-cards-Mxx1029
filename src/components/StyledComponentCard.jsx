import React from 'react';
import styled from 'styled-components';
import guineaPig2 from './jaroslaw-slodkiewicz-SDIIfq6nhFU-unsplash.jpg'

const StyledDiv = styled.div`
    margin: 2rem;
    height: 300px;
    box-shadow: 0 0 10px #f00;
`;

const StyledImage = styled.img`
    height: 200px;
`;

const StyledHeading = styled.h2`
    color: #f00;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    padding: 0.5rem 0;
`;

const StyledParagraph = styled.p`
    color: #f00;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
`;

function StyledComponentCard() {
    return (
        <React.Fragment>
            <StyledDiv>
                <StyledImage src={guineaPig2}></StyledImage>
                <StyledHeading>Foo bar</StyledHeading>
                <StyledParagraph>I am styled components</StyledParagraph>
            </StyledDiv>
        </React.Fragment>
    )
}

export default StyledComponentCard;