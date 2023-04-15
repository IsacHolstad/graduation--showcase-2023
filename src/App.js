import './App.css';
import HomeHeader from './components/HomeHeader';
import Footer from './components/Footer';
import Router from './routes/Router';
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './components/Auth';
import Account from './components/Account';





function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  return (
        <>
          <HomeHeader />
       
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  
          <Footer />
        </>


  );
}

export default App;
