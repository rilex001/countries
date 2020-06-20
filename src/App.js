import React, {useState} from 'react';
import Country from './components/Country';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CountryPage from './components/CountryPage'



function App() {

  const [color, setColor] = useState(true)
  return (
    <div className={color ? 'background-white' : 'background-black'}>
      <div className='headerContainer'>
           <h1 className='header'>Where in the world</h1>
            <button className='themebutton' onClick={() => setColor(!color)}>Change mode</button>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Country} />
          <Route path="/:country_name"  component={CountryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
