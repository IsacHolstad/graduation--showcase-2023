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
                    <img src="/header_img.jpg" alt="Header"/>
                    <h1 className="my-1 text-5xl text-center font-semibold">GRADUATION SHOWCASE</h1>
                    <div className="mx-auto">
                        <img className="mx-auto mt-16 w-8 h-14 my-8 object-contain" src="/Noroff_shield 1.png"/>
                    </div>
                </span>
                <span>
                    <h2 className="text-center mt-64 font-bold text-4xl">PITCH YOURSELF</h2>
                    <p className="text-center container mx-8 mt-2 mx-auto sm:max-w-s grid-cols-5">The Graduation Showcase website will give admiring family and friends,
                        future employers, and envious fellow students the
                        opportunity to find the work and results of your time at Noroff
                        Leave your info for now, and your profile will be a part of the...
                    </p>
                    <div className="mx-auto my-40 text-center">
                        <button
                            className="border-0 text-white font-bold text-m bg-darkPurple mx-auto h-16 w-60 rounded-xl text-center shadow-sm">
                            REGISTER
                        </button>
                    </div>
                    <img className="bottom-0" src="/footer_img.jpg"/>
                </span>
            </Nav>
        </>
    )
}

export default HomeHeader;