const express = require('express'), router = express.Router();
const Connection = require('../models/connection');
const Coworker = require('../models/coworker');

//Get all the connections
router.get('connections', async (req, res) => {
    /*
    Get all the connections
    Turn them into a data structure we can use later to visualize like in the tutorial

    nodes: [
            {id: 1, label: "Node 1", title: "Node 1 titleprint"},
            {id: 2, label: "Node 2", title: "Node 1 titleprint"},
            {id: 3, label: "Node 3", title: "Node 1 titleprint"},
            {id: 4, label: "Node 4", title: "Node 1 titleprint"},
            {id: 5, label: "Node 5", title: "Node 1 titleprint"},
            {id: 6, label: "Node 6", title: "Node 1 titleprint"},
            {id: 7, label: "Node 7", title: "Node 1 titleprint"},
            {id: 8, label: "Node 8", title: "Node 1 titleprint"},
            {id: 9, label: "Node 9", title: "Node 1 titleprint"}
        ],
    edges: [
            {from: 1, to:1, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to:{enabled:true, type: "circle"}}},
            {from: 1, to:7},
            {from: 1, to:3},
            {from: 6, to:5, color: {highlight: "purple", opacity: 0.2}},
            {from: 6, to:2},
            {from: 7, to:2},
            {from: 6, to:7},
            {from: 6, to:8},
            {from: 7, to:8},
            {from: 8, to:2},
            {from: 3, to:7}
        ]

    in this case the connection would be edges
    from: {first name_1, last name_1, to: {first_name_2, last_name_2}}
    */ 
    Connection.find()
    .then(data=> {
        data = data.map( connection => {
            var edge = [connection.first_name_1, connection.last_name_1, connection.first_name_2, connection.last_name_2]
        return edge
    })
    console.log(data)
    res.json(data);
    })
    .catch(error => res.json(error))
});

router.post('/connection', async (req, res) => {
    //The body param will contain the connection between the two coworkers, that is where it will be
    // Checks if already existing connection exists

    let connection_first_name_1 = req.body.first_name_1;
    let connection_last_name_1 = req.body.last_name_1;
    let connection_first_name_2 = req.body.first_name_2;
    let connection_last_name_2 = req.body.last_name_2;
    const status = "done";

    // Need to fix this First Name can be the same for multiple connections as long as that combo of first_name_1 and first_name_2 cant exist
    let existingConnection = await Connection.findOne({$or: [
                                                            {$and: [{"first_name_1": connection_first_name_1}, {"last_name_1": connection_last_name_1}]},
                                                            {$and: [{"first_name_1": connection_first_name_2}, {"last_name_1": connection_last_name_2}]}
                                                        ] });

    if(!existingConnection){
        Connection.create(
            connection_first_name_1,
            connection_last_name_1,
            connection_first_name_2,
            connection_last_name_2,
            status
        );
        res.send("Connection created");
    }
})

//Need to add a delete