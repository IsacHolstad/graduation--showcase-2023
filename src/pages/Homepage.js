import { useState, useEffect } from 'react'
import Auth from '../components/Auth';
import MainForm from '../components/MainForm';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';




const HomePage = () => {



    return (
        <>
        <section className='mx-8 md:mx-auto mt-12 flex flex-col items-center gap-16'>
        <h1 className='text-3xl'>Pitch Yourself</h1>
        <p className='max-w-lg text-center'>The Graduation Showcase website will give admiring family and friends, future employers, and envious fellow students the opportunity to find the work and results of your time at Noroff <br/> <br/>

        Leave your info for now, and your profile will be a part of the...</p>

        <Link className='my-12 w-fit mx-auto bg-darkPurple text-white uppercase px-24 py-3 tracking-wide rounded-md font-semibold shadow-md' to={'/form'}>Register</Link>
      
        </section>
   
      </>
    )
}
 
export default HomePage;