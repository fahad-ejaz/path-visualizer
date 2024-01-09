import React, { useState } from 'react'


export default function Grids({ rows, columns, g, walls, setWalls, setStart, setEnd, path, visited, beingExplored}) {
    let x = -1;
    let y = 0;
    let keys = Object.keys(g.AdjList);
    const [mouseDown, setMouseDown] = useState(false)


    const handleOnMouseDown = (e, i) => {
        
        // console.log(e.target.getAttribute('data-coordinates'));
        // console.log('onClick')
        // 
        const dataType = e.target.id;
        console.log(dataType)
        if (dataType !== 'start' && dataType !== 'end') {
            e.preventDefault();
            setMouseDown(true);
        }
        // console.log(mouseDown)

    }

    const handleClick = (e,i) => {
        e.preventDefault();
        if (!walls.includes(i)) {
            setWalls([...walls, i])
        }
        else {
            setWalls(() => {
                return (walls.filter((w) => {
                    return w !== i
                }))
            })
        }
    }

    const handleOnMouseEnter = (e, i) => {
        const dataType = e.target.id
        if (dataType !== 'start' && dataType !== 'end') {
            e.preventDefault();
            if (mouseDown){
                if (!walls.includes(i)) {
                    setWalls([...walls, i])
                }
                else {
                    setWalls(() => {
                        return (walls.filter((w) => {
                            return w !== i
                        }))
                    })
                }
            }
        }
    }

    const handleOnDrag = (e, type) => {
        e.dataTransfer.setData("type", type)
    }

    const handleOnDrop = (e, i) => {
        const dataType = e.dataTransfer.getData("type")
        console.log(dataType)
        if (dataType === 'start') {
            setStart(i)
        }
        else if (dataType === 'end') {
            setEnd(i)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const grids = keys.map((ele, i) => {
        x += 1;
        if (x >= columns) {
            x = 0;
            y += 1;
        }
        let background = '';
        if(ele.includes("wall")){
            background = 'bg-black text-white'
        }
        // let dragabble = false;
        // if (ele === "start" || ele === 'end'){
        //     dragabble = true
        // }
        let visitedNode = '';
        if (visited?.includes(ele)){
            visitedNode = 'bg-cyan-500'
        }
        let bExploredNode = '';
        if (beingExplored?.includes(ele)){
            visitedNode = 'bg-green-500'
        }
        let shortestPath = '';
        if (path?.path.includes(ele)){
            shortestPath = 'bg-yellow-500'
        }
        let draggable = false
        let onDragStart = null
        if(ele === 'start' || ele === 'end'){
            draggable=true
            onDragStart=(e) => handleOnDrag(e, ele)
        }

        // console.log(processed?.includes(ele))
        return (<div data-coordinates={`(${x},${y})`} key={`${x},${y}`}
            onClick={(e) => handleClick(e, i)}
            onMouseDown={(e) => handleOnMouseDown(e, i)}
            onDrop={(e) => handleOnDrop(e, i)}
            onDragOver={handleDragOver}
        

            className={`border p-0 cursor-default select-none ${background} ${visitedNode} ${shortestPath} ${bExploredNode}
            hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 
            text-center min-w-7 min-h-6`}
            onMouseEnter={(e) => handleOnMouseEnter(e,i)}
            onMouseUp={() => setMouseDown(false)}
            // onMouseOver={(e) => handleOnMouseEnter(e,i)}
            // onMouseLeave={(e) => handleOnMouseEnter(e,i)}
            
            >
                
            {draggable? <div id={ele} draggable={true}
                onDragStart={(e) => handleOnDrag(e, ele)}>
                {ele==='start'? 
                
                    <svg className='inline text-center w-6 h-6' id={ele} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                :
                    <svg className="inline text-center w-6 h-6" id={ele} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                    </svg>
                }
            </div>: ''}
        </div>)
    })
    const numofColumns = `grid grid-cols-12`;
    return (
        <div>
            <div className='gap-0 grid  lg:grid-cols-24 grid-cols-6'>
                {grids}
            </div>
        </div>
    )
}
