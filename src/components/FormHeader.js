import tw from "tailwind-styled-components"

const HeaderStyle = tw.header`
    font-playfair
    text-black
    relative
    h-72
    md:h-96
`;


const FormHeader = () => {
    return (
        <HeaderStyle>
            <img className="w-full md:w-2/3 absolute left-0 top-0 " src="/header_background.svg" alt="Header" />
         
                <img src="/2023.svg" className="w-2/3 top-20 md:w-1/2 absolute bg-transparent mix-blend-overlay left-1/2 -translate-x-1/2 md:top-32"></img>
     
            <div className="absolute left-1/2 z-10 -translate-x-1/2 top-40 md:top-52 flex flex-col justify-center items-center bg-transparent uppercase font-semibold">
            <span className=" bg-transparent leading-none  text-[24px] lg:text-[40px] ">Graduation</span>
            <span className=" bg-transparent  leading-tight p-0 text-[24px]  lg:text-[45px] ">Showcase</span>
            <img src="/noroff.jpg" className="w-4 my-4"></img>
            </div>
        </HeaderStyle>
    )
}
 
export default FormHeader;

