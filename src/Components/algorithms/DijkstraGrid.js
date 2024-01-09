import React, { useEffect } from 'react'
import { useState } from 'react'
import {findShortestPath as Dijkstra} from '../../Utils/Dijkstra'
// import DijkstraGrid from '../utils/Dijkstra'
import Grids from '../grid/grids'

export default function DijkstraGrid({walls, setWalls, rows, columns, arr, g, setStart, setEnd, findPath, 
    setFindPath, reset, setReset}) {
    
    

    const [path, setPath] = useState(null)
    const [visited, setVisited] = useState([])
    const [beingExplored, setBeingExplored] = useState([]);
   

    const runAlgorithm = async() => {
        setPath(null)
        let myPromise = new Promise((resolve) => {
            let abc = null;
            abc = Dijkstra({ graph: g.AdjList, startNode: 'start', endNode: 'end', setVisited: setVisited,
                            setBeingExplored});
            console.log(abc !== null)
            if (abc !== null){
                console.log('promise', {...abc})
                resolve(abc)
            }
        })
        let abc = await myPromise;
        console.log('abc',abc)
        setPath({...abc})
        setFindPath(false)
    }

    // if (findPath == true){
    //     runAlgorithm()
    // }
    useEffect(() => {
        if (findPath){
            runAlgorithm()
        }
    }, [findPath])

    useEffect(() => {
        if(reset){
            setPath(null)
            setVisited([])
            setReset(false)
        }
    }, [reset])
    

  return (
    <div className='flex justify-center flex-col'>
        <div className='text-center'>
        Dijkstra
        </div>
        <div>
            <Grids 
                    walls={walls} 
                    setWalls={setWalls} 
                    rows={rows}
                    columns={columns} 
                    arr={arr} 
                    g={g} 
                    setStart={setStart} 
                    setEnd={setEnd} 
                    visited={visited} 
                    path={path} 
                    beingExplored={beingExplored}
            />
        </div>
    </div>
  )
}
