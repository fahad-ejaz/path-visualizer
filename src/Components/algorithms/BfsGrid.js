import React, { useEffect } from 'react'
import { useState } from 'react'
import Bfs from  '../../Utils/bfs'
// import DijkstraGrid from '../utils/Dijkstra'
import Grids from '../grid/grids'

export default function BfsGrid({walls, setWalls, rows, columns, arr, g, setStart, setEnd, findPath, setFindPath}) {
    
    
    
    const [reset, setReset] = useState(true)
    const [path, setPath] = useState(null)
    const [visited, setVisited] = useState([])
   

    const runAlgorithm = async() => {
        setPath(null)
        let myPromise = new Promise((resolve) => {
            let abc = null;
            abc = Bfs({ graph: g.AdjList, start: 'start', end:'end', setVisited:setVisited});
            console.log(abc !== null)
            if (abc !== null){
                console.log('promiseBfs', {...abc})
                resolve(abc)
            }
        })
        let abc = await myPromise;
        console.log('abc',abc)
        setPath({...abc})
        console.log('bfs', abc)
        setFindPath(false)
    }

    // if (findPath == true){
    //     runAlgorithm()
    // }
    useEffect(() => {
        if (findPath == true){
            runAlgorithm()
        }
    }, [findPath])
    
    

  return (
    <div>Bfs
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
