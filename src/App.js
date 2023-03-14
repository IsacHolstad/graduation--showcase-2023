import './App.css';
import { createClient } from '@supabase/supabase-js';

import HomeHeader from './components/HomeHeader';
import FormHeader from './components/FormHeader';
import tw from "tailwind-styled-components"
import {  Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import MainForm from './components/MainForm';



const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) // our connection to the db basically

// example of getting all data from table: students. The supabase function has to be wrapped in an async function, which could be triggered feks by a change of state
// https://github.com/shwosner/realtime-chat-supabase-react/blob/master/src/context/appContext.jsx example repo 

const tryIt = async () => {

const { data, error } = await supabase
  .from('students')
  .select()
  console.log(data, error)
}
tryIt()


// 1. example of using styling and theme directly in App.js. 
//2. example in HomeHeader.js

const DarkPText = tw.p`
text-darkPurple
`;



function App() {
  
  return (
    
      <Routes>
        <Route index element={
           <div className="App">
             <HomeHeader />
            <button><Link to="/form">Form</Link></button>
            <DarkPText>Hei</DarkPText>
          </div>} 
        />
     
        <Route path="form" element={
          <>
            <FormHeader/>
            <MainForm></MainForm>
            <Footer/>
            </>} 
        />
      
        <Route path="*" element={<div>Route not found</div>} />
      </Routes>
  );
}

export default App;
