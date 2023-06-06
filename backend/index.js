const mongoose = require('mongoose')
const express = require("express")
// const channelModel = require('./models/channel')
const bodyParser = require('body-parser')
const ChannelModel = require('./models/channel')
const cors = require('cors')


const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))





const PORT = 5503

const uri = "mongodb+srv://user:ZRQJhG1TS6PZewix@cluster0.odypyfz.mongodb.net/events?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, connectionParams).then(() => {
    console.log("connected to database")
}).catch((e) => {
    console.log("error while connecting to database", e);
})

app.listen(PORT, () => {
    console.log(`listing on port ${PORT}`);
})


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })




// event_name: "test",
//             event_description:"testing description",
//             date:Date.now(),
//             invitees:"testing",
//             event_location:"delhi",
//             message:"hello there",
//             meeting_link :"google.com"








app.post("/insert", bodyParser.json(), async (req, res) => {

    try {
        const channel = new ChannelModel({
            //getting data from frontend
            event_name: req.body.event_name,
            event_description: req.body.event_description,
            event_date: req.body.event_date,
            invitees: req.body.invitees,
            location: req.body.location,
            message: req.body.message,
            link: req.body.link


        })
        // console.log(channel.event_description);
        console.log(channel.event_name);

        // console.log(event_name);

        const inserted = await channel.save()
        console.log(inserted)
        res.status(200).send({ "msg": "inserted to db" })
    } catch (e) {
        console.log(e)
        res.status(500).send({ "msg": "error" })
    }

})

//fetching api for database

app.get("/fetch", urlencodedParser, (req, res) => {
    ChannelModel.find({}).then((data) => {
        res.status(200).send(data)
        console.log(data);
    }).catch((e) => {
        console.log(e)
        res.status(500).send({ "msg": "error" })
    })


})

app.get("/updateEvent", async (req, res) => {
    try {

        const result = await ChannelModel.updateOne({ _id: '647da202e5cbd092f5203ccc' }, {
            $set: {
                event_name: "updated name",
                event_description:"updated description",
                event_date: Date.now(),
                invitees: "updated invitees",
                location: "updated location",
                message: "updated message",
                link: "updated link"
            }
        }).then(res.status(200).send({ "msg": "updated the event" }))
        
    } catch (error) {
        res.status(500).send({ "msg": "error" , error })
    }
   


})