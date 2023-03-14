import tw from "tailwind-styled-components"



const MainForm = () => {
    return (
        <>
        <div className="h-full pt-40">
            <h1 className="font-playfair text-3xl font-bold text-center">Registrer</h1>
            <p className="text-center pt-4">Text about what, how it will look..</p>
        </div>
        <section className="mx-8 pt-10">
            <form>
                <label>Name</label>
                <input className="w-full h-14 border-solid border-2 border-darkPurple rounded-md" type={Text} id="name"></input>
                <label>Noroff Email</label>
                <input className="w-full h-14 border-solid border-2 border-darkPurple rounded-md" type={"email"} id="email"></input>
                <label>Course</label>
                <input className="w-full h-14 border-solid border-2 border-darkPurple rounded-md" type={Text} id="course"></input>
                <label>Profile Picture</label>
                <input className="mb-20 w-full h-14 border-solid border-2 border-darkPurple rounded-md" type={URL} id="profile_image"></input>

                    <label>Your Work</label>
                    <p>Portfolio, GitHub, LinkedIn, Instagram - link whatever that shows just how good you are at your field!</p>

                    <div className="mt-10 shadow-md rounded-lg p-2 relative">
                        <div className="flex flex-row gap-2 items-center">
                        <button className="w-14 h-12 shadow-sm bg-darkPurple text-white rounded-md">+</button><input type={Text} placeholder="Place the URL here, and pick a category type" className="w-full h-12 border-gray-200 border-solid border rounded-md"></input>
                        <div className="shadow-md rounded-lg p-2 absolute w-2/3 top-16 left-0">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <div className="bg-darkPurple p-2 flex flex-row items-center gap-2">
                                        <img src="/linkedin_white.png" className="bg-transparent"></img>
                                        <p className="text-white bg-transparent">LinkedIn</p>
                                    </div>
                                </li>
                                <li>
                                <div className=" p-2 flex flex-row items-center gap-2">
                                        <img src="/github_purple.png" className="bg-transparent w-8"></img>
                                        <p className=" bg-transparent">GitHub</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        </div>
                       
                </div>
            </form>
        </section>
        </>
    )
}
 
export default MainForm;