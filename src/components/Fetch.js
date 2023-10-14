import axios from "axios";
import React, { useState, useEffect } from "react";

function Fetch(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [ data, setData ] = useState([]);

    // using fetch to get data
    // const fetchapi= () => {
    //     return fetch(url).then((res) => res.json()).then((d) => setData(d))
    // }

    // using axios to get data
    function fetchapi() {
        return axios.get(url).then((res) => setData(res.data))
    }

    useEffect(() => {
        fetchapi();
    }, [])

    return(
        <>
            <h1>Fetched data</h1>
            <center>
                {data.map((dataObj, index) => {
                return (
                    <section>
                        <div key="{dataObj}" style={{ width: "15em", backgroundColor: "#35D841", padding: 2, borderRadius: 10, marginBlock: 10 }}>
                            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.address.geo.lat}</p>
                        </div>
                    </section>
                );
                })}
            </center>
        </>
    );
}


export default Fetch;