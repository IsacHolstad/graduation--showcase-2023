import { Link } from "react-router-dom";
import Account from "../components/Account";

const HomePage = () => {
    return (
        <>
         <div className="App">
            <button><Link to="/form">Form</Link></button>
          </div>
          <Account />
        </>
    )
}
 
export default HomePage;