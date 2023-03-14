import tw from "tailwind-styled-components"

const HeaderStyle = tw.header`
    font-playfair
    text-black
    relative
`;


const FormHeader = () => {
    return (
        <HeaderStyle>
            <img className="w-2/3 lg:w-1/3 absolute" src="/header_img.jpg" alt="Header" />
            <div className="absolute left-1/2 -translate-x-1/2 top-8 lg:left-44 lg:translate-x-0 flex flex-col justify-center items-center bg-transparent uppercase font-semibold">
            <span className=" bg-transparent  text-[24px] lg:text-3xl leading-tight">Graduation</span>
            <span className=" bg-transparent text-[24px]  lg:text-3xl leading-tight">Showcase</span>
            </div>
        </HeaderStyle>
    )
}
 
export default FormHeader;