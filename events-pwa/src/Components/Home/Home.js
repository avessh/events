import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Home() {

    const [myData, setMyData] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:5503/fetch',
            {

                headers: {
                    'Accept-Encoding': 'application/json',
                }

            })
            .then(res => {
                setMyData(res.data)
            }).catch(err => console.log(err))



    }, [])

    // const test = JSON.parse(myData);
    console.log('new data is ', myData);
    // console.log('data id is',myData._id);
    // console.log('data is now' , JSON.stringify(myData[0].event_name));

    const handleUpdate = () => {
        console.log('in edit');
    }


    return (
        // "font-size: 30px;padding: 30px 0 0 20px;"
        <>

            <div className='top-div'>
                <h1 style={{ fontSize: "30px", padding: "0 0 4px 0" }}><span style={{ color: "darkblue" }}>All</span> Events</h1>
                <p style={{ backgroundColor: "lightblue", minWidth: "50vw !important", maxWidth: "53vw", padding: '5px', color: 'darkblue' }}>All your events are here ☺️ </p>
            </div>

            <div id="parent-event">

                {myData.map(home =>   <div class="parent-event-child">
                    <h2>{home.event_name}</h2>
                    <p>event id: {home._id}</p>
                    <p>{home.event_description}t</p>
                    <p>{home.event_date}</p>
                    <p>{home.invitees}</p>
                    <p>{home.location}</p>
                    <p>{home.message}</p>
                    <p>{home.link}</p>
                 <a href='/editEvents'>  <button onClick={() => console.log('in edit')} id='event-edit-btn'>Edit</button></a> 
                </div>)}

              

               

                <div class="card card-5">
                    <div class="card__icon">🏆</div>
                    <p class="card__exit">※</p>
                    <div class="text">Ut aliquip ex ea commodo consequat. Duis aute irure dolor</div>
                    <p class="card__apply">
                        <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
                    </p>
                </div>

                <div class="card card-5">
                    <div class="card__icon">🏆</div>
                    <p class="card__exit">※</p>
                    <div class="text">Ut aliquip ex ea commodo consequat. Duis aute irure dolor</div>
                    <p class="card__apply">
                        <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
                    </p>
                </div>

                

            </div>

        </>

    )
}

export default Home
