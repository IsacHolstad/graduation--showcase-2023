import styled from 'styled-components';


// 2. Example of styling, adding the style before importing the component to App
// The styling can be in another styled component, or maybe directly here?

const Nav = styled.nav`
  padding: 10px 20px;
  background-color: ${({ theme: { colors } }) => colors.persianGreen};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;


const HomeHeader = () => {
    return (
        <Nav>
            <img src="/header_img.jpg" alt="Header" />;
        </Nav>
    )
}
 
export default HomeHeader;