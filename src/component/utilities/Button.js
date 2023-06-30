import React from 'react';
import styled from 'styled-components/macro';

export default function Button(props)
{
 return (
    <div >
      <ButtonContainer {...props} className={props.className}>
       {props.btnName}
      </ButtonContainer>
      </div>
      );
    };
const ButtonContainer = styled.button`
color: ${props => props.textColor || "#fff"};
font-size: ${props => props.fontSize || "15px"};
background-image: ${props => props.background || 'none'}; // background color
padding:${props=>props.padding || '10px 20px'};                 //for padding
font-weight:${props=>props.fontWeight || '500'};
border:${props=>props.border|| 'none'};
border-radius:${props=>props.borderRadius|| '5px'};
width:${props=>props.width};
height:${props=>props.height};
margin:${props=>props.margin};
`;