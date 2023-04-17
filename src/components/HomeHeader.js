import tw from 'tailwind-styled-components'


// 2. Example of styling, adding the style before importing the component to App
// The styling can be in another styled component, or maybe directly here?

const Header = tw.header`
  font-playfair

`;


const HomeHeader = () => {
    return (
        <Header className='h-52 relative'>
            <img src="/header_img.jpg" className='w-1/2 lg:w-1/4 absolute z-0' alt="Header" />
            <p className='absolute z-10 uppercase font-playfair bg-transparent font-semibold text-black text-2xl md:text-3xl text-center left-24 top-12 md:left-44 md:top-20' >Graduation <br></br> Showcase</p>
        </Header>
    )
}
 
export default HomeHeader;