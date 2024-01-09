import React, { useEffect } from 'react'
import { useState } from 'react'
// import DijkstraGrid from '../utils/Dijkstra'
import Grids from '../grid/grids'
import aStar from '../../Utils/aStar'

export default function AstarGrid({walls, setWalls, rows, 
    columns, arr, g, setStart, setEnd, findPath, setFindPath, startNode, endNode, reset, setReset}){
    
    
    const [path, setPath] = useState(null)
    const [visited, setVisited] = useState([])
   

    const runAlgorithm = async() => {
        setPath(null)
        let myPromise = new Promise((resolve) => {
            let abc = null;
            abc = aStar({ graph: g.AdjList, start: 'start', end:'end', setVisited:setVisited, 
            arr:arr, startNode:startNode, endNode:endNode, columns});
            if (abc !== null){
                resolve(abc)
            }
        })
        let abc = await myPromise;
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
            // setReset(false)
        }
    }, [reset])
    
    

  return (
    <div className='text-center'>A-Star
         {<Grids 
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
      /> }

    </div>
  )
}
