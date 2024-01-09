// export default function aStar({graph, heuristic, start, end}) {
//     // i need the index of the start and end nodes?

//     //This contains the distances from the start node to all other nodes
//     var distances = [];
//     //Initializing with a distance of "Infinity"
//     for (var i = 0; i < graph.length; i++) distances[i] = Number.MAX_VALUE;
//     //The distance from the start node to itself is of course 0
//     distances[start] = 0;

//     //This contains the priorities with which to visit the nodes, calculated using the heuristic.
//     var priorities = [];
//     //Initializing with a priority of "Infinity"
//     for (var i = 0; i < graph.length; i++) priorities[i] = Number.MAX_VALUE;
//     //start node has a priority equal to straight line distance to end. It will be the first to be expanded.
//     priorities[start] = heuristic[start][end];

//     //This contains whether a node was already visited
//     var visited = [];

//     //While there are nodes left to visit...
//     while (true) {

//         // ... find the node with the currently lowest priority...
//         var lowestPriority = Number.MAX_VALUE;
//         var lowestPriorityIndex = -1;
//         for (var i = 0; i < priorities.length; i++) {
//             //... by going through all nodes that haven't been visited yet
//             if (priorities[i] < lowestPriority && !visited[i]) {
//                 lowestPriority = priorities[i];
//                 lowestPriorityIndex = i;
//             }
//         }

//         if (lowestPriorityIndex === -1) {
//             // There was no node not yet visited --> Node not found
//             return -1;
//         } else if (lowestPriorityIndex === end) {
//             // end node found
//             // console.log("end node found!");
//             return distances[lowestPriorityIndex];
//         }

//         // console.log("Visiting node " + lowestPriorityIndex + " with currently lowest priority of " + lowestPriority);

//         //...then, for all neighboring nodes that haven't been visited yet....
//         for (var i = 0; i < graph[lowestPriorityIndex].length; i++) {
//             if (graph[lowestPriorityIndex][i] !== 0 && !visited[i]) {
//                 //...if the path over this edge is shorter...
//                 if (distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i] < distances[i]) {
//                     //...save this path as new shortest path
//                     distances[i] = distances[lowestPriorityIndex] + graph[lowestPriorityIndex][i];
//                     //...and set the priority with which we should continue with this node
//                     priorities[i] = distances[i] + heuristic[i][end];
//                     // console.log("Updating distance of node " + i + " to " + distances[i] + " and priority to " + priorities[i]);
//                 }
//             }
//         }

//         // Lastly, note that we are finished with this node.
//         visited[lowestPriorityIndex] = true;
//         //console.log("Visited nodes: " + visited);
//         //console.log("Currently lowest distances: " + distances);

//     }
// };

// function getHeuristics({graph, start, end}){
//          // //   start: {D:1,  E:1.4},
//             // //   // B: {C:1, D:1.4, E:1},
//             // //   C: {E:1.4, end:1},
//             // //   D: {E:1,G:1,H:1.4},
//             // //   E: {D:1,end:1,H:1,I:1.4,G:1.4},
//             // //   end: {C:1, E:1, H:1.4, I:1},
//             // //   G: {D:1, E:1.4, H:1},
//             // //   H: {D:1.4, E:1, end:1.4, G:1, I:1},
//             // //   I: {H:1, E:1, end:1.4}
//             // // };
// }

const shortestDistanceNode = (distances, visited, heuristics) => {
	let shortest = null;


	for (let node in distances) {
		let currentIsShortest =
			shortest === null || ((distances[node] + heuristics[node]) < (distances[shortest] + heuristics[shortest])); 
        // let useHeuristic = + heuristics[node] + heuristics[node]
        //     shortest === null || ;
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

export default async function ({graph, start, end, setVisited, arr, startNode, endNode, columns}){

    let heuristics = getHeuristics({endNode, columns, g:graph})

	// establish object for recording distances from the start node

	let distances = {};
    // heuristics[end] = "Infinity";
    // let distances = {...heuristics};
	// distances[end] =  "Infinity";
    
	distances = Object.assign(distances, graph[start]);
	// distances = Object.assign(distances);

	// track paths
	let parents = { end: null };
	for (let child in graph[start]) {
		parents[child] = start;
	}

	// track nodes that have already been visited
	let visited = [];

	// find the nearest node
	let node = shortestDistanceNode(distances, visited, heuristics);

	// for that node
	while (node && !visited.includes('end')) {
		// find its distance from the start node & its child nodes
		let distance = distances[node] + heuristics[node];
		let children = graph[node];
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(start)) {
				continue;
			} else {
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] + heuristics[child]> newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		// move the node to the visited set
		visited.push(node);
		setVisited([...visited])
        await myPromise();
        
		// move to the nearest neighbor node
        
		node = shortestDistanceNode(distances, visited, heuristics);
	}
   

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [end];
	let parent = parents[end];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[end],
		path: shortestPath,
	};
	return results;
   
};

function getHeuristics({startNode, endNode, columns, g}){
    // {node: staright line distance to end}
    // {N0 : 5,
    // N1: 10.}
    let keys = Object.keys(g);
    let xEnd = endNode % columns;
    let yEnd = Math.floor(endNode / columns);
    let x = -1;
    let y = 0;
    let heuristics = {};
    keys.map((ele, i) => {
        x += 1;
        if (x >= columns) {
            x = 0;
            y += 1;
        }
        let xDelta = (1 + Math.abs(x - xEnd)) ** 1
        let yDelta = (1 + Math.abs(y - yEnd)) ** 1
        let distance = (Math.pow(xDelta, 2) + Math.pow(yDelta, 2))
        // let distance = xDelta + yDelta;
        distance = distance ** 20;
        heuristics[ele] = distance
    })
    return heuristics
}

function myPromise (){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved')
        }, [100])
    })
    return promise;
}



