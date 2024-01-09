// create a graph class
export default class Graph {
	// defining vertex array and
	// adjacent list
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = {};
	}



	// functions to be implemented

	// addVertex(v)
    // add vertex to the graph
    addVertex(v)
    {
        // initialize the adjacent list with a
        // null array
        this.AdjList[v] = {};
    }

	// addEdge(v, w)
    // add edge to the graph
    addEdge(v, w, cost)
    {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
       
        this.AdjList[v][w] = cost;
        
        // console.log(this.AdjList.get(v))

        // Since graph is undirected,
        // add an edge from w to v also
        // if (v !== "start"){
            this.AdjList[w][v] = cost;
        // }
    }

    // setWall(v)
    // {
    //     this.AdjList.get(v).wall = true;
    // }

    // removeWall()
    // {
    //     this.AdjList.get(v).wall = false;
    // }

	// printGraph()
    // Prints the vertex and adjacency list
    printGraph()
    {
        // get all the vertices
        // var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i in this.AdjList) 
    {
            // get the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList[i];
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            // for (var j in get_values)
            //     conc += j + " ";

            // print the vertex and its adjacency list
            // console.log(i + " -> " + conc);
            console.log(i + "->")
            console.log(get_values)
        }
    }


	// bfs(v)
	// dfs(v)
}

// const keys = Object.keys(this.AdjList);
// for (var i = 0; i < keys.length; i++) 
