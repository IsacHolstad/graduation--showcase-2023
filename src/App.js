import './App.css';
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) // our connection to the db basically

// example of getting all data from table: students. The supabase function has to be wrapped in an async function, which could be triggered feks by a change of state
// https://github.com/shwosner/realtime-chat-supabase-react/blob/master/src/context/appContext.jsx example repo 

const tryIt = async () => {

const { data, error } = await supabase
  .from('students')
  .select()
  console.log(data)
}
tryIt()




function App() {
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
