import styled from "styled-components"

export const Nav = styled.nav`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 50px;
    font-size: 25px;
    padding: 30px 0px;
    background-color:#b4a45b;

    
`;

export const StyleCard = styled.div`
     margin-top: 100px;
 
   .column{
     display: flex;
     flex-direction: row-column;
     border: 1px solid grey;
     padding: 20px;
   }
   .right{
       margin-left: 25px;
   }
`;
export const Stylesform = styled.form`

 margin-top: 30px;
 h1{
     color:#b4a45b;
 }
 Button{
     text-align: center;
     margin: 20px;
     padding: 5px 20px;
     border-radius: 5px;
     font-size: 15px;
     color: white;
     background-color: #b4a45b;
 }
 .form-inputs{
font-size: 18px;
margin-bottom: 5px;
 }
 .form-inputs input{
     border-radius: 10px;
     border: 1px solid black;
 }

 `
    ;
    export const MainDiv = styled.div`
   /* margin:30px 0px 30px 120px; */
   margin: auto;
   
   box-shadow: 0px 0px 9px 5px lightgray;
   width: 80%;
`;



