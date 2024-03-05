const express = require('express'), router = express.Router();
const mongoose = require('mongoose')
const issue = require('../models/issue');
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
});

router.post('/CreateCoworker', async (req, res) => {
    // The body param will contain the connection between the two coworkers, that is where it will be
    // Checks if an already existing connection exists

    console.log(req.body);
    try{        
        // Validate the incoming data here if needed
        const coworker = await Coworker.create(req.body);
        
        res.status(200).json(coworker);
    }catch(err){
        console.error(err);
        res.status(400).json({ error: 'Unable to add coworker' });
    }
});
// 
router.put('/editCoworker/:id', async (req, res) =>{
    try{
        const { id } = req.params;
        const { fieldName, newValue } = req.body;
        const doc = await Coworker.findById(id);
        doc[fieldName] = newValue;
        const updatedDoc = await doc.save();
        res.status(200).send(updatedDoc);
  
  
      }catch{res.send("Error")}

});

//Need to add a delete


module.exports = router;