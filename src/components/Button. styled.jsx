import styled from "styled-components";

export
const StyledButton = styled.button`
  display: inline-block;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid lightgrey;
  border-radius: 3px;
  display: block;
`;



// const StyledTomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// render(
//   <div>
//     <Button>Normal Button</Button>
//     <StyledButton as="a" href="#">Link with Button styles</StyledButton>
//     <StyledTomatoButton as="a" href="#">Link with Tomato Button styles</StyledTomatoButton>
//   </div>
// );

// export const StyledButton = styled.button`
//   background-color: ${(props) => (props.primary ? "#676FA3" : "#FF5959")};
//   border: none;
//   border-radius: 20px;
//   height: 6vh;
//   color: white;
//   padding: 30px;
//   text-align: center;
//   margin: ${(props) => (props.primary ? "6vh" : "80px 0px 0px 0px")};
  
//   h3 {
//     text-align: center;
//   }
//   :hover {
//     background-color: ${(props) => (props.primary ? "#474c70;" : "#cc4747")};
//   }
// `;