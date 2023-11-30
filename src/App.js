import { Routes, Route, } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/authentication/authentication.component';

const App=() => {

  const Shop = () => {
    return <h1>I am the shop page</h1>
  }
  return  (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element= {<Shop />}/>
      <Route path='auth' element= {<SignIn />}/>

      </Route>
    
      
    </Routes>
  );
};
  



export default App;
