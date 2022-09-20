
import './css/App.css';
import './css/loader.css';

import NavRoute from './navbar/NavRoute';

import { useSelector, useDispatch } from 'react-redux'


function App() {

  const loader = useSelector((state) => state.Loader);

  

  return (

    <div className="App">
  
  <NavRoute/>
 


<div className={loader.Loader? "activeLoader":"disableLoader"}>

</div>

     
    </div>
  );
}

export default App;
