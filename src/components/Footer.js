import tw from "tailwind-styled-components"

const FooterStyle = tw.footer`
    
`;


const Footer = () => {
    return (
        <FooterStyle>
            <img className="w-2/3 mt-8 lg:w-1/3 absolute md:mt-32 lg:mt-2 right-0" src="/footer_img.jpg" alt="Footer" />
        </FooterStyle>
    )
}
 
export default Footer;