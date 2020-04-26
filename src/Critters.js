import React from 'react'; 
import './Critters.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { bugObjs, fishObjs } from './AllCritters.js'

const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
]
let d = new Date()
// Get month as abreviated form 
let month = monthNames[d.getMonth()] 
// Get current hour in 24h
let hour = d.getHours() // in 24 hour

// Convert string 12h to 24h
function stringTimeToHour(stringTime) {
    let hour = 0 
    hour = parseInt(stringTime.substr(0, stringTime.indexOf(':')))
    let isAm = true 
    if (stringTime.split('00 ')[1] == 'PM') {
        isAm = false 
    }
    if (!isAm) {
        hour += 12 
    }
    return hour
}

// WIP only fish for now
// Returns a list of fish objs 
function availableCritters(time, hemisphere, curMonth, critter) {
    let available = []
    let month =  hemisphere + '_' + curMonth
    console.log(critter) 

    let objs
    if (critter == 'fish') {
        objs = fishObjs 
    } else {
        objs = bugObjs
    }

    objs.map( f => {

        let start_time = f.start_time 
        let end_time = f.end_time
        
        if (f[month] == 'Yes') {
            if (start_time == 'All day' && end_time == 'All day'){
                available.push(f)
            }
            else if (time >= stringTimeToHour(start_time) && time <= stringTimeToHour(end_time)) {
                available.push(f)
            }
        }
    } ); 
    return available 
}

function Critters(props) {
    return (
        <div className="Critters"> 
        <h3>{props.type}</h3>
        <br></br>
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">{props.type}</TableCell>
                    <TableCell align="center">value</TableCell>
                    <TableCell align="center">location</TableCell>
                    {/* <TableCell>Image</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Shadow</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Price CJ</TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>
            {availableCritters(hour, props.hemisphere, month, props.type).map((row) => (
                <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.value}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            {/* <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                </TableRow>
            ))}
            </TableBody> */}
        </Table>
        </TableContainer>
        </div>
    );
}

export default Critters; 