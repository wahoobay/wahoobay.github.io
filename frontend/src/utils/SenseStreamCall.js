import React, {useState} from 'react';
import axios from 'axios'

function SenseStream() {

    const [barPress, setBarPress] = useState("");
    
    const getBarPress = () => { 

        axios.get("/latest?site=1")
            .then((response) => {
                console.log("WAHOO BAY API REPSONSE: ", response.data);
                setBarPress("Barometric Pressure: " + response.data.readings[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div>
            <h1>Site Data</h1>
            <button onClick={getBarPress}>Get Pressure</button>
            <br />
            <p>{barPress}</p>
        </div>

    );
}

export default SenseStream