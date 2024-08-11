
import './App.css'
import { User } from './User';
import { UserProvider } from './UserContextProvider';

function App() {

  return (
    <UserProvider>
      <User name={"Amruta"} age={35} isMarried={true}/>
    </UserProvider>
  )
}

export default App
