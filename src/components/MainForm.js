import { createClient } from "@supabase/supabase-js";
import theme from "./styled/Theme";
import { ThemeProvider } from "styled-components";
import { useFormik, FormikProvider, useField } from "formik";
import * as yup from "yup"; 
import React from "react";
import { useState } from "react";



const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) // our connection to the db basically


const tryIt = async () => {

const { data, error } = await supabase
  .from('students')
  .select()
  console.log(data, error)



}
tryIt()







const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
  
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const handleChange = () => handleChange();
    const showFeedback =
      (!!didFocus && field.value.trim().length > 2) || meta.touched;
  
    const [isShown, setIsShown] = useState(false);
  
  
    return ( 
      <div
        className={`form-control ${
          showFeedback ? (meta.error ? "invalid" : "valid") : ""
        }`}
      >
        <div className="flex items-center justify-between flex-row text-lg font-semibold my-3">
          <label htmlFor={props.id}>{label}</label>
          <div
            className="text-sm font-light text-gray-600 "
            id={`${props.id}-help`}
            tabIndex="-1"
          >
            <div className="relative">
              <button
                className=" "
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <img src="/github_purple.png" className="w-6"></img>
              </button>
              {isShown && (
                <div className="min-w-fit whitespace-nowrap bg-white absolute bottom-2 right-8 z-2">
                  {helpText}
                </div>
              )}
            </div>
          </div>
        </div>
        {field.name !== "img" &&
          <div>
            <input
              className="w-full h-14 border-solid border-2 border-darkPurple rounded-md"
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />
          </div>}

            {field.name === 'img' && 
          <div>
            <input
              className="border border-gray-200 px-2 rounded-md w-full "
              {...props}
              {...field}
              maxLength={500}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />
          </div>}
        
        <div className="h-6 pt-1 ">
          {" "}
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
              aria-live="polite"
              className="feedback text-sm pl-1 text-orange-600"
            >
              {meta.error ? meta.error : "✓"}
            </div>
          ) : null}
        </div>
      </div>
    );
  };


const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .required("Name is required")
      .matches(
        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
        "Cannot contain special characters or numbers"
      ),
  
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
  

  });





const MainForm = () => {


    const [isForm, setForm] = useState(true);

    const [uploading, setUploading] = useState(false)


  async function uploadAvatar(event) {


    try {
      setUploading(true)

     

      console.log(event)

      const file = event
      const filePath = event

      let { onUpload, error: uploadError } = await supabase.storage.from('imgs').upload(filePath, file)
      

      if (uploadError) {
        throw uploadError
      }

      onUpload(event, filePath)
      console.log('working')


     
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }
 

  
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        course: "",
        img: "",
    
      },
      validationSchema,
      onSubmit: async (values) => {
        console.log('neo')
        //api callet ved ekte skjema, vi konsoller bare submiten. Så vil typisk vøre async
        console.log(values.img);
        uploadAvatar(values.img)

        

      },
    });
  

    return (
        <>
        <ThemeProvider theme={theme}>
        <div className="">
            <h1 className=" text-center">Registrer</h1>
            <p className="text-center pt-4">Text about what, how it will look..</p>
        </div>

        {isForm && (
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            onChange={formik.handleChange}
            className="my-16 lg:mt-8"
          >
             <div className="">
                <TextInputLiveFeedback
                  label="Full name"
                  id="name"
                  name="name"
                  helpText="Write your full name"
                  type="text"
                  value={formik.values.name}
                />
              </div>
              <div className="">
                <TextInputLiveFeedback
                  label="Profile Image"
                  id="img"
                  name="img"
                  helpText="Image"
                  type="file"
                  accept="image/*"
                  value={formik.values.img}
                />
              </div>
              <div className="">
                <TextInputLiveFeedback
                  label="Noroff Email"
                  id="email"
                  name="email"
                  helpText="Use your @stud.noroff email"
                  type="text"
                  value={formik.values.email}
                />
              </div>
              <div className="">
                <TextInputLiveFeedback
                  label="Course"
                  id="course"
                  name="course"
                  helpText="The course you're finishing at Noroff"
                  type="text"
                  value={formik.values.course}
                />
              </div>

        
                <button type="submit">Send</button>
                </form>
        </FormikProvider>
          )}
        </ThemeProvider>
        </>
    )
}
 
export default MainForm;





/*
  
const ContactForm = () => {


  return (
    <>

            
                <label>Profile Picture</label>

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

   
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <TextInputLiveFeedback
                  label="Full name"
                  id="name"
                  name="name"
                  helpText="Write your full name"
                  type="text"
                  value={formik.values.name}
                />
              </div>
              <div className="sm:col-span-2">
                <TextInputLiveFeedback
                  label="Email"
                  id="email"
                  name="email"
                  helpText="Your email"
                  type="email"
                  value={formik.values.email}
                />
              </div>
              <div className="sm:col-span-2">
                <TextInputLiveFeedback
                  label="Subject"
                  id="subject"
                  name="subject"
                  helpText="What is your query about?"
                  type="text"
                  value={formik.values.subject}
                />
              </div>
              <div className="sm:col-span-2">
                <TextInputLiveFeedback
                  label="How can we help you?"
                  id="message"
                  name="message"
                  helpText="How can we help you?"
                  value={formik.values.message}
                  type="text"
                  className="h-32 w-full border border-gray-200 p-2 rounded-md"
                />
              </div>
            </div>
            <div className=" flex justify-center pt-12 lg:pt-4">
              <GreenBtnS type="submit" className="">
                Send message
              </GreenBtnS>
            </div>
    
   
    </>
  );
};
*/