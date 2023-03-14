import tw from 'tailwind-styled-components'


// 2. Example of styling, adding the style before importing the component to App
// The styling can be in another styled component, or maybe directly here?

const Nav = tw.nav`
  font-playfair

`;


const HomeHeader = () => {
    return (
        <>
            <Nav>
                <img src="/header_img.jpg" alt="Header" />
                <h1 className="my-1 text-5xl text-center">Graduation showcase</h1>
            </Nav>

        </>
    )
}
 
export default HomeHeader;