import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Cards from './Components/Cards/Cards';


/*
TODO: Incorporate AI Assistant
TODO: Add email authentication to make user Profiles
TODO: DataBase To store user info
TODO: feed user info back into the ai and save patterns in the database, continue this loop to improve user experience

*/
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
