import React, { useState } from 'react';
import Clock from 'react-live-clock';
import { Grid, Switch } from '@material-ui/core';
import './App.css';
import Critters from './Critters'; 

function App() {

  const [hemisphere, setHemisphere] = useState('nh')
  const toggleHemi = () => {
    if (hemisphere == 'nh') {
      setHemisphere('sh')
    } else {
      setHemisphere('nh')
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Now Available</h1>
        <Clock format={'HH:mm:ss'} ticking={true} />
        <p>Change hemisphere (default northern)</p>
        <Switch onChange={toggleHemi} color='primary'></Switch>
        <p>North | South</p>
      </header>

      <br></br>

        <Grid container spacing={4}>
            <Grid item xs={6}> 
              <Critters type='fish' hemisphere={hemisphere}/>
            </Grid>
            <Grid item xs={6}>
              <Critters type='bugs' hemisphere={hemisphere}/>
            </Grid>
        </Grid>

      </div>
  );
}

export default App;
