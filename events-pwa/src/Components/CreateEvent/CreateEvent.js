import React, { useState } from 'react'
import axios from 'axios'

function CreateEvent() {

    const [data, setData] = useState({
        event_name: "", event_description: "", event_date: "", invitees: "", location: "", message: "", link: ""
    })



    const handleInput = (e) => {
        console.log(data);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const postData = async (e) => {
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:5503/insert', data , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(alert("data inserted"))
            console.log(data)
            // console.log(response.data)
        } catch (error) {
            console.log("error accured", error.response.data);
        }

    }

    return (

        <div>

            <div className='top-div'>
                <h1 style={{ fontSize: "30px", padding:"0 0 4px 0" }}><span style={{ color:"darkblue"}}>Create</span> Events</h1>
                <p style={{backgroundColor:"lightblue", minWidth:"100px", maxWidth:"300px", padding:'5px' , color:'darkblue'}}>Give some details about your event 😊 </p>
            </div>

            <form method='POST' id="create-event-parent">
                <input onChange={handleInput} value={data.event_name} name='event_name' class="create-event-child" type="text" placeholder="Event Name" />
                <input onChange={handleInput} value={data.event_description} name='event_description' class="create-event-child" type="text" placeholder="Event Description" />
                <input onChange={handleInput} value={data.event_date} name='event_date' class="create-event-child" type="date" placeholder="Event Date" />
                <input onChange={handleInput} value={data.invitees} name='invitees' class="create-event-child" type="text" placeholder="invitees" />
                <input onChange={handleInput} value={data.location} name='location' class="create-event-child" type="text" placeholder="Event Location" />
                <input onChange={handleInput} value={data.message} name='message' class="create-event-child" type="text" placeholder="Message" />
                <input onChange={handleInput} value={data.link} name='link' class="create-event-child" type="text" placeholder="Meeting Link" />

                <div id="btn-div">
                    <button onClick={postData} id="event-btn">Create Event</button>
                </div>

            </form>

        </div>
    )
}

export default CreateEvent
