import React from 'react'
import { Link } from 'react-router-dom'
import event1 from '../../images/event1.jpg'

function NotApprovedEvents() {
  return (
    <div>
        <div className='top-div-home'>
                    <div >
                        <h1 style={{ fontSize: "20px", padding: "0 0 0px 0", textAlign: 'left' }}>under process Events</h1>
                    </div>
                   
                </div>

                <Link to={"event"} style={{ textDecoration: "none"}}><div id='event-card'>
                        <div style={{ borderRadius: "8px" }} ><img id='event_img' src={event1} /></div>

                        <div style={{ zIndex: '2' }} class="content">
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div style={{ width:"60%"}}>
                                    <a href="#">
                                        <span style={{  width: "40%" }} class="title">
                                            not approved events
                                        </span>
                                    </a>
                                </div>
                                <div style={{}}>
                                    <h5 style={{ border: "1px solid darkgoldenrod", color: "darkgoldenrod", textAlign: "center", alignItems: "center", padding: "5px", borderRadius: "5px" }}>Under Process</h5>
                                </div>


                            </div>
                            <p class="desc">
                                home.event_date
                            </p>
                        </div>
                    </div></Link>
    </div>
  )
}

export default NotApprovedEvents
