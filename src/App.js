import { useEffect, useState } from "react";
import Graph from "./Utils/graph";
import PopulateGraph from "./Utils/populate-graph";
import useWindowDimensions from "./Utils/useWindowDimensions";
import DijkstraGrid from "./Components/algorithms/DijkstraGrid";
import AstarGrid from "./Components/algorithms/AstarGrid";
import DropDown from "./Components/dropDown";
import Header from "./Components/header";
import './App.css'


function App() {


  
const initialWallsLg = [155, 179, 203, 227, 251, 275, 276, 277, 278, 279, 280, 281, 282, 
                        283, 259, 233, 235, 234, 231, 229, 205,132, 133, 134, 135, 136, 137, 138, 
                        139, 232, 131, 163, 186, 207, 183, 187, 182, 181, 184, 299, 298, 297];


const initialWallsSm = [14, 8, 20, 26, 32, 38, 44, 45, 46, 2];

  const [start, setStart] = useState(0);
  const [mouseDown, setMouseDown] = useState(false)
  const [end, setEnd] = useState(3);
  const [walls, setWalls] = useState([]);
  const [reset, setReset] = useState(false)
  const [runDijkstra, setRunDijkstra] = useState(false);
  const [runAstar, setRunAstar] = useState(false);
  const [algorithm, setAlgorithm] = useState('Dijkstra')


  const { height, width } = useWindowDimensions();
  // console.log('height', height)
  // console.log('width', width)

  let nGrids = 2;
  // if (width <= 600) {
  //   nGrids = 2;
  // }

  if (width <= 1400) {
    nGrids = 1;
    // setStart(1);
    // setEnd(5)
  }
  
  const handleReset = () => {
    setReset(true)
    setWalls([])
    // setPath([])
  }

  

  var arr = [];
  var g = new Graph(50);

  let columns = 24;
  let rows = 24;
  let inf = 500000;

  if(width <= 800){
    rows = 15;
    columns = 6;
  }


  let zIndex =''
  if(runAstar || runDijkstra){
    zIndex = '-z-30';
  }
  
  useEffect(() => {
    // if(width <= 1400){
      console.log(width)
      setReset(true)
      if(width > 800){
        setWalls(initialWallsLg)
        setEnd(206)
        setStart(200)
      }
      if(width <= 800){
        setWalls(initialWallsSm)
        setEnd(15)
        setStart(50)
      }
    // }
  }, [width])



  PopulateGraph({ start: start, totalNodes: rows * columns, end: end, walls: walls, g: g, columns: columns })


  const handleClick = async () => {
    if(nGrids == 2){
      setRunAstar(true);
      setRunDijkstra(true);
    }
    if(algorithm === 'Dijkstra'){
      setRunDijkstra(true);
    }
    if(algorithm === 'Astar'){
      setRunAstar(true);
    }
  }

  const DGrid = <DijkstraGrid
    walls={walls}
    setWalls={setWalls}
    rows={rows}
    columns={columns}
    arr={arr}
    g={g}
    setStart={setStart}
    setEnd={setEnd}
    findPath={runDijkstra}
    setFindPath={setRunDijkstra}
    reset={reset}
    setReset={setReset}>
  </DijkstraGrid>

  const AGrid = <AstarGrid
      walls={walls}
      setWalls={setWalls}
      rows={rows}
      columns={columns}
      arr={arr}
      g={g}
      setStart={setStart}
      setEnd={setEnd}
      startNode={start}
      endNode={end}
      findPath={runAstar}
      setFindPath={setRunAstar}
      reset={reset}
      setReset={setReset}>
    </AstarGrid>

  let render = '';
  if (nGrids == 2){
    render = <div className={`flex justify-evenly mt-3 p-2 relative ${zIndex}`}>
      <div>
        {DGrid}
      </div>
      <div>
        {AGrid}
      </div>

    </div>
    
  } 
  else{
    render = <div className={`flex flex-col justify-center align-center mt-3 p-5 m-2 relative ${zIndex}`}>
      <div className='flex justify-center mb-4'>
        <DropDown setAlgorithm={setAlgorithm}/>
      </div>
     {algorithm === 'Dijkstra'?  
     <div>{DGrid}</div>
      :
      <div>{AGrid}</div>
    }
    </div>
  }

  const disabled = runAstar || runDijkstra;

  return (
    <div className="">
      <Header />
      <div className="flex justify-center mt-3"> 
        <button
          disabled={disabled}
          className="text-xl transition custom-button
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleClick}>
          Visualize
        </button>
        <button
          disabled={disabled}
          className="text-xl transition custom-button
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleReset}>
          Reset
        </button>
      </div>
      {render}

    </div>
  );
}

export default App;
