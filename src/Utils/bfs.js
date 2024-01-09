export default async function Bfs({end, start, graph, setVisited}) {
    
    // const queue = [start];
    // const visited = new Set();
    // const result = [];

    // while (queue.length) {
    //     let [vertex, [...path]] = queue.shift();
    //     path.push(vertex);
    //     if (vertex === end) return path;
    // // const vertex = queue.shift();

    // if (!visited.has(vertex)) {
    //     visited.add(vertex);
    //     result.push(vertex);

    //     for (const [key, value] of Object.entries(graph[vertex])) {
    //     queue.push(key);
    //     }
    // }
    // }

    // return result;
   
        // let queue = [start]
        // let prev = {[start]: null}
    
        // while (queue.length > 0) {
        //     let curr = queue.shift();
    
        //     if (curr === end) {
        //         let path = [];
    
        //         while (curr) {
        //             path.unshift(curr);
        //             curr = prev[curr];
        //         }
        //         console.log(path)
        //         return path;
        //     }
    
        //     if (curr in graph) {
        //         for (let [v, a] of Object.entries(graph[curr])) {
        //             if (!(v in prev)) {
        //                 prev[v] = curr;
        //                 queue.push(v);
        //                 setVisited([...queue])
        //             }
        //         }
        //     }
        // }

        // const graph = {
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
        // let queue = [[start, []]],
        // seen = new Set;

        // while (queue.length) {
        //     let [curVert, [...path]] = queue.shift();
        //     path.push(curVert);
        //     console.log(path)
        //     if (curVert === end) return path;

        //     if (!seen.has(curVert) && graph[curVert]) {
        //         for (var key in graph[curVert]) {
        //             // if (graph[curVert][key].hasOwnProperty(key)) {
        //                 let a = [graph[curVert][key], path]
        //                 console.log(a)
        //                 queue.push(...a);
        //             // }
        //           }
                  

        //         // queue.push(...graph[curVert].map(v => [v, path]));
        //     }
        //     seen.add(curVert);
        //     setVisited([...seen])
        // }

       
            let adj = graph;
    
            const queue = [];
            queue.push(start);
    
            const discovered = [];
            // discovered.push('start')
    
            const edges = [];
            edges[start] = 0;
    
            const predecessors = [];
            predecessors[start] = null;
    
            const buildPath = (end, start, predecessors) => {
                const stack = [];
                stack.push(end);
    
                let u = predecessors[end];
    
                while(u != start) {
                    stack.push(u);
                    u = predecessors[u];
                }
    
                stack.push(start);
    
                // let path = stack.reverse().join('-');
                let path = {distance: edges[end], path:stack}
                return path;
            }
        
    
            while(queue.length) {
                let v = queue.shift();
    
                // if (v === end) {
                //     return buildPath(end, start, predecessors)
                //         // distance: edges[end],
                // }
    
                // for (let i = 0; i < adj[v].length; i++) {
                //     if (!discovered[adj[v][i]]) {
                //         discovered[adj[v][i]] = adj[v][i];
                //         setVisited([...discovered])
                //         queue.push(adj[v][i]);
                //         edges[adj[v][i]] = edges[v] + 1;
                //         predecessors[adj[v][i]] = v;
                //     }
                // }

                for (let [key, value] of Object.entries(adj[v])) {
                    
                  if (key !== 'start'){
                    if (!discovered.includes(key)) {
                        discovered.push(key);
                        setVisited([...discovered])
                        
                        await myPromise();
                        queue.push(key);
                        edges[key] = edges[v] + 1;
                        predecessors[key] = v;
                        if (key === end) {
                            return buildPath(end, start, predecessors)
                                // distance: edges[end],
                        }
                    }
                  }
                }
                console.log('dis', discovered)
            }
    
            let path = {distance: 'infinity', path:[]}
            return path;
        }


        function myPromise (){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('resolved')
                }, [500])
            })
            return promise;
        }
    
        
    
    

