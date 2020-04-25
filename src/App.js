import React from 'react';
import Clock from 'react-live-clock';
import { Grid } from '@material-ui/core';
import './App.css';
import Critters from './Critters'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header>
        <h1>Now Available</h1>
        <p>
          View critters available <i>now</i>
        </p>
        <Clock format={'HH:mm:ss'} ticking={true} />
      </header>

      <br></br>

        <Grid container spacing={2}>
            <Grid item xs={6}> 
              <b>Fish</b>
              <Critters type='fish'/>
            </Grid>
            <Grid item xs={6}>
              <b>Bugs</b>
              <Critters type='bug'/>
            </Grid>
        </Grid>

      </div>
  );
}

export default App;
