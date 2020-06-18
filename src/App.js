import React from 'react';
import Country from './components/Country';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CountryPage from './components/CountryPage'

function App() {
  return (
    <>
      <h1 className='header'>Country</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Country} />
          <Route path="/:country_name"  component={CountryPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
