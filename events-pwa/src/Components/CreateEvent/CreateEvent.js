import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function CreateEvent() {
    const [image , setImage] = useState("")

    let navigate = useNavigate();

    


    const convertToBase64 = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
reader.onload = () => {
    const base64 = reader.result
    setImage(base64)
    console.log(base64)
    }
    }
    console.log('data base before is',image);

    const [data, setData] = useState({
        event_name: "",
        event_description: "",
        event_date: "",
        invitees: "",
        location: "",
        message: "",
        poster: "",
        link: "",
    });


    const handleInput = (e) => {
        
        console.log(data);
        setData({ ...data, 
            [e.target.name]: e.target.value,
        });
      
    };

    // setData( {poster:image})

    
    console.log('data from state' , data.poster);
    console.log(data);
    



    const postData = async (e) => {
        e.preventDefault();

        if (e.target.name !== "") {
            alert("Please add a message");
        } else {
            try {
                const response = axios
                    .post("http://localhost:5503/insert", data, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then(alert("data inserted")).then(navigate('/'));
                console.log(data);
                // console.log(response.data)
            } catch (error) {
                console.log("error accured", error.response.data);
            }
        }



    };

    return (
        <section id="create-event-section">
             <div className='top-div-create'>
                <div >
                    <h1 style={{ fontSize: "20px", padding: "0 0 0px 0", textAlign: 'left' }}>Create Events</h1>
                </div>

            </div>

            <form method="POST" id="create-event-parent" >
                <input
                    onChange={handleInput}
                    value={data.event_name}
                    name="event_name"
                    class="create-event-child"
                    type="text"
                    placeholder="Event Name"
                />
                

                

                <select style={{ color: "gray" }} class="create-event-child">
                    <option>Select Event Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>

                </select>
                <div style={{ display: "flex" }}>
                    <lable for="event_date" class="create-event-child" style={{ border: "none", fontSize: "13px", width: "55%", marginRight: "-10px", textDecoration: "underline" }}>Event Date</lable>
                    <input
                        onChange={handleInput}
                        value={data.event_date}
                        name="event_date"
                        class="create-event-child"
                        type="date"
                        placeholder="Event date"
                    />
                </div>
                 
                <input
                    onChange={handleInput}
                    value={data.event_description}
                    name="event_description"
                    class="create-event-child"
                    type="text"
                    placeholder="Event Description"
                />

                <input
                    onChange={handleInput}
                    value={data.message}
                    name="message"
                    class="create-event-child"
                    type="text"
                    placeholder="Message"
                />
                 <input
                    onChange={handleInput}
                    value={data.invitees}
                    name="invitees"
                    class="create-event-child"
                    type="address"
                    placeholder="Address"
                />
                 <div style={{ display: "flex" }}>
                    <select style={{ color: "gray" }} class="create-event-child">
                        <option style={{ color: "lightgray" }}>Select State</option>
                        <option>Category
                            1</option>
                        <option>Category
                            2</option>
                        <option>Category

                        </option>

                    </select>
                    <select style={{ color: "gray" }} class="create-event-child">
                        <option>Select City</option>
                        <option>Category
                            1</option>
                        <option>Category
                            2</option>
                        <option>Category

                        </option>

                    </select>
                </div>
               
                <input
                    onChange={handleInput}
                    value={data.invitees}
                    name="invitees"
                    class="create-event-child"
                    type="text"
                    placeholder="invitees"
                />
               


                <div style={{ display: "flex" }}>
                    <lable for="poster" class="create-event-child" style={{ width: "50%", fontSize: "13px", marginRight: "-10px", border: "none", textDecoration: "underline" }} >
                        Event Poster
                    </lable>
                    <input
                        onChange={handleInput}
                        value={data.poster}
                        name="poster"
                        class="create-event-child"
                        type="file"
                        id="poster"
                        style={{
                            width: "90%",
                            // border: "none",
                            // opacity:"0"
                        }}
                    />
                </div>

                <input
                    onChange={handleInput}
                    value={data.link}
                    name="link"
                    class="create-event-child"
                    type="text"
                    placeholder="Meeting Link"
                    accept="image/*"
                />


                <div id="btn-div">
                    <p style={{ padding: "10px", fontSize: "13px" }}>
                        <input type="checkbox" style={{ marginRight: "10px" }} />I accept
                        and have read the term and conditions
                    </p>
                    <button onClick={postData} id="event-btn">
                        Create Event
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CreateEvent



