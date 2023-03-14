import tw from 'tailwind-styled-components'


// 2. Example of styling, adding the style before importing the component to App
// The styling can be in another styled component, or maybe directly here?

const Nav = tw.nav`
  font-playfair

`;


const HomeHeader = () => {
    return (
        <Nav>
            <img src="/header_img.jpg" alt="Header" />
            <p>Funer</p>
        </Nav>
    )
}
 
export default HomeHeader;