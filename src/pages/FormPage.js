import { useState, useEffect } from 'react'
import Auth from '../components/Auth';
import MainForm from '../components/MainForm';
import { supabase } from '../supabaseClient';



const FormPage = () => {


    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
    
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    
      const [isReq, setReq] = useState(false)
    
        return (
            <>
         
        {!session ? <Auth /> : <MainForm key={session.user.id} session={session} />}
            </>
        )
    }
     
 
export default FormPage;