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
                <span>
                    <img src="/header_img.jpg" alt="Header" />
                    <h1 className="my-1 text-5xl text-center">GRADUATION SHOWCASE</h1>
                    <div className="mx-auto">
                        <img
                            className="mx-auto w-5 h-5 my-8 object-contain"
                            src="/Noroff_shield 1.png"
                        />
                    </div>
                </span>

            </Nav>

        </>
    )
}
 
export default HomeHeader;