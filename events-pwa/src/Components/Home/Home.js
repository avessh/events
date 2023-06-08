import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// import { Swiper, SwiperSlide } from "swiper/react";

// import event_img from '../../images/event.jpg'
import event1 from '../../images/event1.jpg'

import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper";



function Home() {

    const [myData, setMyData] = useState([]);
    const [locate, setLocate] = useState([])


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

    // const BASE_URL = "https://youtube-v31.p.rapidapi.com";

    const options = {
        params: {
            maxResults: "50",
        },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
    };

    const fetchFromAPI = async (url) => {
        const { data } = await axios.get('https://google-maps-geocoding.p.rapidapi.com/geocode/json', options);
        console.log(data);
        return data;

    };


    return (

        <>

            <section id='home-section'>


                <div className='top-div-home'>
                    <div >
                        <h1 style={{ fontSize: "20px", padding: "0 0 0px 0", textAlign: 'left', fontWeight:"bolder"}}>All Events</h1>
                    </div>
                    <div style={{  margin: "0 5% 0px 0", borderRadius: "5px", border:"1px solid black", padding: "2.5px 10px 2.5px 10px" }}>
                        <Link style={{ textAlign: "right", textDecoration: "none", color: "black", fontSize:"20px" }} to={'/create'}> + </Link>
                    </div>

                </div>

                <div id="parent-event">


                    {myData.map(home => <Link to={"event"} style={{ textDecoration: "none" }}><div id='event-card'>
                        <div style={{ borderRadius: "8px" }} ><img id='event_img' src={event1} /></div>

                        <div style={{ zIndex: '2' }} class="content">
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div style={{ width:"60%"}}>
                                    <a href="#">
                                        <span style={{  width: "40%" }} class="title">
                                            {home.event_name}
                                        </span>
                                    </a>
                                </div>
                                <div style={{}}>
                                    <h5 style={{ border: "1px solid lightcoral", color: "lightcoral", textAlign: "center", alignItems: "center", padding: "5px", borderRadius: "5px" }}>Not Approved</h5>
                                </div>


                            </div>
                            <p class="desc">
                                {home.event_date}
                            </p>
                        </div>
                    </div></Link>)}



                </div>





            </section>
        </>

    )
}

export default Home
