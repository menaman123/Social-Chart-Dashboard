import React from 'react'
import Graph from 'react-vis-network-graph';

function GraphView() {
    const graph = {
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
    }
    const option = {
        physics:{
            enabled: false
        },
        interaction:{
            navigationButtons: true
        },
        nodes:{
            borderWidth: 2,
            size: 40,
            color: {
                border: "#222222",
                background: "#666666"
            },
            font: {color: "yellow"}
        },
        edges: {
            color: "yellow"
        },
        shadow: true,
        smooth: true,
        height: "900px"
    }
  return (

    <div className='container'>
      <Graph
        graph={graph}
        options={option} 
      />
    </div>
  )
}

export default GraphView
