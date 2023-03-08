import './App.css';
import { createClient } from '@supabase/supabase-js';

import HomeHeader from './components/HomeHeader';
import Theme from './components/styled/Theme';
import styled from 'styled-components';


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


const DarkPText = styled.p`
color: ${props => props.theme.colors.darkPurple};
`;

function App() {
  
  return (
    <Theme>
    <div className="App">
      <HomeHeader />
      <DarkPText>Hei</DarkPText>
    </div>
    </Theme>
  );
}

export default App;
