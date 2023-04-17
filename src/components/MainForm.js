import { createClient } from "@supabase/supabase-js";
import theme from "./styled/Theme";
import { ThemeProvider } from "styled-components";
import { useFormik, FormikProvider, useField } from "formik";
import ValidationSchema from "./ValidationSchema";
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import LiveFeedback from "./LiveFeedback";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;
const CDNURL = process.env.REACT_APP_CDN;


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


const MainForm = ({ session }) => {

  const { user } = session

  const [profileEmail, setEmail] = useState(null)

  const [isForm, setForm] = useState(true);


  async function getProfile() {
    
    let { data, error } = await supabase
      .from('profiles')
      .select(`email`)
      .eq('id', user.id)
      .single()
  
      if (error) {
        console.warn(error)
      } else if (data) {
        setEmail(data.email)
      }
    }
  
    getProfile()
 

    async function uploadImage(e) {

      let file = e.target.files[0];
      let filepath = user.id + "/" + uuidv4()
  
      const { data, error } = await supabase
     
        .storage
        .from('images')
        .upload(filepath, file) 
  
      if(data) {

        let avatar_url = `${CDNURL}${filepath}`;
   
        const updates = {
          id: user.id,
          avatar_url: avatar_url,
          updated_at: new Date()
        }
    
        let { error } = await supabase.from('profiles').upsert(updates)

        if (error) {
          console.log(error)
        }
      } else {
        console.log(error);
  
      }
    }

  async function updateProfile(values) {

    const updates = {
      id: user.id,
      name: values.name,
      course: values.course,
      linkedin: values.linkedin,
      github: values.github,
      portfolio: values.portfolio,
      figma: values.figma,
      other: values.other,
      updated_at: new Date(),
    }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
      console.log(error.message)
      }
    }

    const validationSchema = ValidationSchema


    const formik = useFormik({

      initialValues: {
        name: "",
        course: "",
        linkedin: "",
        github: "",
        portfolio: "",
        figma: "", 
        other: ""
      },
      validationSchema,
      onSubmit: async (values) => {
        console.log(values)
        updateProfile(values)
        //supabase.auth.signOut()
      },
    });


    return (
        <>
        <div className="z-20 relative bg-transparent">
            <h1 className=" text-center bg-transparent">Registrer</h1>
            <p className="text-center pt-4">Text about what, how it will look..</p>
        </div>

        {isForm && (
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            onChange={formik.handleChange}
            className="my-16 lg:mt-8 mx-6 flex flex-col gap-8 md:w-1/2 md:mx-auto">
                 <div>
                <LiveFeedback
                  label="Name"
                  id="name"
                  name="name"
                  helpText="Please provide your full name"
                  type="text"
                  value={formik.values.name}
                  className="h-12 border-2 border-darkPurple block w-full rounded-md px-2"
                />
              </div> 
           
              <div className="my-3 ">
              <label className=" text-lg font-semibold "> Email</label>
                <input className="w-full h-12 border-solid border-2 border-darkPurple rounded-md bg-gray-200 px-2"
                  label="Noroff Email"
                  id="email"
                  name="email"
                  type="text"
                  disabled
                  value={`${profileEmail}`}
                />
              </div>
              <div>
                <LiveFeedback
                  label="Course"
                  id="course"
                  name="course"
                  helpText="The course you're finishing at Noroff"
                  value={formik.values.course}
                  className="flex flex-row justify-between w-full"
                />
              </div> 
             
          
              <div className="flex flex-col gap-6">
              <label  className=" text-lg font-semibold">Profile Image</label>
              <p>Text about what image?</p>
                <input onChange={(e) => uploadImage(e)}
                  id="img"
                  name="img"
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
              <hr></hr>
              <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Your work</h2>
              <p className="mb-4">Portfolio, GitHub, LinkedIn, Instagram - link whatever that shows just how good you are at your field!</p>

              <div>
                <LiveFeedback
                  label="Linkedin"
                  id="linkedin"
                  name="linkedin"
                  helpText="Linkedin Url"
                  type="text"
                  value={formik.values.linkedin}
                />
              </div> 
              <div>
                <LiveFeedback
                  label="Github"
                  id="github"
                  name="github"
                  helpText="github Url"
                  type="text"
                  value={formik.values.github}
                />
              </div>    
              <div>
                <LiveFeedback
                  label="Portfolio"
                  id="portfolio"
                  name="portfolio"
                  helpText="github Url"
                  type="text"
                  value={formik.values.portfolio}
                />
              </div>  
              <div>
                <LiveFeedback
                  label="Figma"
                  id="figma"
                  name="figma"
                  helpText="figma Url"
                  type="text"
                  value={formik.values.figma}
                />
              </div>  
              <div>
                <LiveFeedback
                  label="Other"
                  id="other"
                  name="other"
                  helpText="other Url"
                  type="text"
                  value={formik.values.other}
                />
              </div>  
              </div>
              
            
              
                <button className="w-fit mx-auto bg-darkPurple text-white uppercase px-20 py-3 rounded-md font-semibold" type="submit">Submit</button>
                <button onClick={() => {supabase.auth.signOut()}}>Sign out</button>
                </form>
        </FormikProvider>
          )}
        </>
    )
}
 
export default MainForm;




/*   <div className="flex flex-col gap-2">
             <label className=" text-lg font-semibold ">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  className="h-12 border-2 border-darkPurple block w-full rounded-md px-2"
                />
              </div>
              <div className="my-3 ">
              <label className=" text-lg font-semibold "> Email</label>
                <input className="w-full h-12 border-solid border-2 border-darkPurple rounded-md bg-gray-200 px-2"
                  label="Noroff Email"
                  id="email"
                  name="email"
                  type="text"
                  disabled
                  value={`${profileEmail}`}
                />
              </div>
              <div className="w-full flex flex-row justify-between items-center">
              <label className=" text-lg font-semibold ">Course</label>
           
                <select
                  id="course"
                  name="course"
                  required
                  value={formik.values.course}
                  className="w-1/2 border-2 border-black text-left p-1 py-2"
                >
                  <option value={'frontend'}>Frontend</option>
                  <option value={'graphic'}> Design</option>
                </select>
              </div>*/