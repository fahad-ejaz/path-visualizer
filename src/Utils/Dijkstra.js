const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

export const findShortestPath = async ({graph, startNode, endNode, setVisited, setBeingExplored, reset}) => {
	// establish object for recording distances from the start node
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

	// track paths
	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	// track nodes that have already been visited
	let visited = [];

	// find the nearest node
	let node = shortestDistanceNode(distances, visited);

	// for that node
	while (node && !visited.includes('end')) {
		// find its distance from the start node & its child nodes
		let distance = distances[node];
		let children = graph[node];
		// setBeingExplored([...children])
		// console.log(Object.entries(children))
		// setBeingExplored([...Object.keys(children)])
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				continue;
			} else {
				
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newdistance) {
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
        
		node = shortestDistanceNode(distances, visited);
	}
   

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
		path: shortestPath,
	};
	return results;
   
};

// export function {findShortestPath};



// import React from 'react'

// export default function Dijkstra({graph, setVisited}) {
// //   const graph = {
// //     start: {A: 5, B: 2},
// //     A: {C: 4, D: 2},
// //     B: {A: 8, D: 7},
// //     C: {D: 6, end: 3},
// //     D: {end: 1},
// //     end: {}
// // };
// // const graph = {
// //   start: {B:1, D:1,  E:1.4},
// //   B: {C:1, D:1.4, E:1},
// //   C: {E:1.4, end:1, B:1},
// //   D: {E:1,G:1,H:1.4},
// //   E: {B:1, D:1,end:1,H:1,I:1.4,G:1.4},
// //   end: {B:1.4, C:1, E:1, H:1.4, I:1},
// //   G: {D:1, E:1, H:1.4},
// //   H: {D:1.4, E:1, end:1.4, G1:1, I:1},
// //   I: {H:1, E:1.4, end:1}
// // };

// // const graph = {
// //   start: {D:1,  E:1.4},
// //   // B: {C:1, D:1.4, E:1},
// //   C: {E:1.4, end:1},
// //   D: {E:1,G:1,H:1.4},
// //   E: {D:1,end:1,H:1,I:1.4,G:1.4},
// //   end: {C:1, E:1, H:1.4, I:1},
// //   G: {D:1, E:1.4, H:1},
// //   H: {D:1.4, E:1, end:1.4, G:1, I:1},
// //   I: {H:1, E:1, end:1.4}
// // };
// let result = dijkstraAlgorithm({graph, setVisited})
// console.log(result);
// return result;

  
// }

function myPromise (){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved')
        }, [100])
    })
    return promise;
}


// async function dijkstraAlgorithm({graph, setVisited}) {
//   const costs = Object.assign({end: Infinity}, graph.start);
//   const parents = {end: null};
//   const processed = [];

//   let node = findLowestCostNode(costs, processed);
  
  

//   while (node) {
//       let cost = costs[node];
//       let children = graph[node];
//       for (let n in children) {
//           let newCost = cost + children[n];
//           if (!costs[n] || costs[n] > newCost) {
//               costs[n] = newCost;
//               parents[n] = node;
//           }
//       }
//       processed.push(node);
//       console.log(processed)
//       awai, setVisited(() => {return [...processed]})
//       await myPromise()
//       node = findLowestCostNode(costs, processed);
//   }
  
//   let optimalPath = ['end'];
//   let parent = parents.end;
//   while (parent) {
//       optimalPath.push(parent);
//       parent = parents[parent];
//   }
//   optimalPath.reverse();

//   return {distance: costs.end, path: optimalPath};
// };

// function findLowestCostNode(costs, processed) {
//   return Object.keys(costs).reduce((lowest, node) => {
//       if (lowest === null || costs[node] < costs[lowest]) {
//           if (!processed.includes(node)) {
//               lowest = node;
//           }
//       }
//       return lowest;
//   }, null);
// };
