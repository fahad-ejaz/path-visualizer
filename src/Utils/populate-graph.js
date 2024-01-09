export default function PopulateGraph({start, walls, end, totalNodes, g, inf, columns}) {

    for (var i = 0; i < totalNodes; i++) {

        if (i == start){
          g.addVertex(`start`);
        }
        else if (i == end){
          g.addVertex(`end`);
        }
        
        else if(walls.includes(i)){
          g.addVertex(`wallN${i}`);
        }
        else{
          g.addVertex(`N${i}`);
        }
    }

    let arr = Object.keys(g.AdjList)
    for (let j = 0; j < arr.length; j++){
          // element to the right
              let i=j+1;
          if((i%columns !== 0)  && i+1<arr.length+1){
              if (arr[j+1].includes('wall') || arr[j].includes('wall')){
              // g.addEdge(arr[j], arr[j+1], inf);
              }
              else{
              g.addEdge(arr[j], arr[j+1], 1);
              }
          }
          // element down below
          if(i+columns < arr.length+1 ){
              if (arr[j].includes('wall') || arr[j + columns].includes('wall')){
              // g.addEdge(arr[j], arr[j+columns], inf);
              }
              else{
              g.addEdge(arr[j], arr[j+columns], 1)
              }
          }
      //     // 5 o'clock
      //     if((i%columns !== 0) && i+columns+1<arr.length+1 ){
      //         if (arr[j].includes('wall') || arr[j+columns+1].includes('wall')){
      //         g.addEdge(arr[j], arr[j+columns+1], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+columns+1], 1.41)
      //         }
      //     }
      //     // 7 o'clock
      //     if(i%columns !== 1 && i+columns-1<arr.length+1 ){
      //         if (arr[j].includes('wall') || arr[j+columns-1].includes('wall')){
      //         g.addEdge(arr[j], arr[j+columns-1], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+columns-1], 1.41)
      //         }
      //     }
      }
    // for (let j = 0; j < arr.length; j++){
      //     // element to the right
      //         let i=j+1;
      //     if((i%columns !== 0) && (arr[j+1]!=='start') && i+1<arr.length+1){
      //         if (arr[j+1].includes('wall') || arr[j].includes('wall')){
      //         g.addEdge(arr[j], arr[j+1], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+1], 1);
      //         }
      //     }
      //     // element down below
      //     if(i+columns < arr.length+1 && (arr[j+columns]!=='start')){
      //         if (arr[j].includes('wall') || arr[j + columns].includes('wall')){
      //         g.addEdge(arr[j], arr[j+columns], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+columns], 1)
      //         }
      //     }
      //     // 5 o'clock
      //     if((i%columns !== 0) && i+columns+1<arr.length+1 && (arr[j+columns+1]!=='start')){
      //         if (arr[j].includes('wall') || arr[j+columns+1].includes('wall')){
      //         g.addEdge(arr[j], arr[j+columns+1], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+columns+1], 1.41)
      //         }
      //     }
      //     // 7 o'clock
      //     if(i%columns !== 1 && i+columns-1<arr.length+1 && (arr[j+columns-1]!=='start')){
      //         if (arr[j].includes('wall') || arr[j+columns-1].includes('wall')){
      //         g.addEdge(arr[j], arr[j+columns-1], inf);
      //         }
      //         else{
      //         g.addEdge(arr[j], arr[j+columns-1], 1.41)
      //         }
      //     }
      // }
      
      

    
    // console.log(list[keys[5]])
    // 
  }






//   for (let j = 0; j < arr.length; j++){
//     // element to the right
//         let i=j+1;
//     if((i%columns !== 0) && (arr[j+1]!=='start') && i+1<arr.length+1){
//         if (arr[j+1].includes('wall') || arr[j].includes('wall')){
//         g.addEdge(arr[j], arr[j+1], inf);
//         }
//         else{
//         g.addEdge(arr[j], arr[j+1], 1);
//         }
//     }
//     // element down below
//     if(i+columns < arr.length+1 && (arr[j+columns]!=='start')){
//         if (arr[j].includes('wall') || arr[j + columns].includes('wall')){
//         g.addEdge(arr[j], arr[j+columns], inf);
//         }
//         else{
//         g.addEdge(arr[j], arr[j+columns], 1)
//         }
//     }
//     // 5 o'clock
//     if((i%columns !== 0) && i+columns+1<arr.length+1 && (arr[j+columns+1]!=='start')){
//         if (arr[j].includes('wall') || arr[j+columns+1].includes('wall')){
//         g.addEdge(arr[j], arr[j+columns+1], inf);
//         }
//         else{
//         g.addEdge(arr[j], arr[j+columns+1], 1.41)
//         }
//     }
//     // 7 o'clock
//     if(i%columns !== 1 && i+columns-1<arr.length+1 && (arr[j+columns-1]!=='start')){
//         if (arr[j].includes('wall') || arr[j+columns-1].includes('wall')){
//         g.addEdge(arr[j], arr[j+columns-1], inf);
//         }
//         else{
//         g.addEdge(arr[j], arr[j+columns-1], 1.41)
//         }
//     }
// }









  // for (let j = 0; j < keys.length; j++){
    // //   // element to the right
    //         let i=j+1;
    //     if((i%columns !== 0) && (keys[j]!=='start') && j<keys.length){
    //         if (!list[keys[j]].isWall && !list[keys[j+1]].isWall){
    //           g.addEdge(keys[j], keys[j+1], 1);
    //       }
    //     }
    //     // element down below
    //     if(i+columns < keys.length+1 && (keys[j+columns]!=='start')){
    //       console.log(keys[j+columns])
    //         if (!list[keys[j]].isWall && !list[keys[j+columns]].isWall){
    //           g.addEdge(keys[j], keys[j+columns], 1)
    //           console.log(i)
    //         }
    //     }
            

    //     // 5 o'clock
    //     if((i%columns !== 0) && i+columns+1<keys.length+1 && (keys[j+columns+1]!=='start')){
    //         if (!list[keys[j]].isWall && !list[keys[j+columns+1]].isWall){
    //           g.addEdge(keys[j], keys[j+columns+1], 1.41)
    //         }
    //     }
    // //     // 7 o'clock
    //     if(i%columns !== 1 && i+columns-1<keys.length+1 && (keys[j+columns-1]!=='start')){
    //         if (!list[keys[j]].isWall && !list[keys[j+columns-1]].isWall){
    //           g.addEdge(keys[j], keys[j+columns-1], 1.41)
    //         }
    //     }
    
    // }








    // for (let j = 0; j < arr.length; j++){
    //     // element to the right
    //         let i=j+1;
    //     if((i%columns !== 0) && (arr[j+1]!=='start') && i+1<arr.length+1){
    //         if (arr[j+1].includes('wall') || arr[j].includes('wall')){
    //         g.addEdge(arr[j], arr[j+1], inf);
    //         }
    //         else{
    //         g.addEdge(arr[j], arr[j+1], 1);
    //         }
    //     }
        // element down below
    //     if(i+columns < arr.length+1 && (arr[j+columns]!=='start')){
    //         if (arr[j].includes('wall') || arr[j + columns].includes('wall')){
    //         g.addEdge(arr[j], arr[j+columns], inf);
    //         }
    //         else{
    //         g.addEdge(arr[j], arr[j+columns], 1)
    //         }
    //     }
    //     // 5 o'clock
    //     if((i%columns !== 0) && i+columns+1<arr.length+1 && (arr[j+columns+1]!=='start')){
    //         if (arr[j].includes('wall') || arr[j+columns+1].includes('wall')){
    //         g.addEdge(arr[j], arr[j+columns+1], inf);
    //         }
    //         else{
    //         g.addEdge(arr[j], arr[j+columns+1], 1.41)
    //         }
    //     }
    //     // 7 o'clock
    //     if(i%columns !== 1 && i+columns-1<arr.length+1 && (arr[j+columns-1]!=='start')){
    //         if (arr[j].includes('wall') || arr[j+columns-1].includes('wall')){
    //         g.addEdge(arr[j], arr[j+columns-1], inf);
    //         }
    //         else{
    //         g.addEdge(arr[j], arr[j+columns-1], 1.41)
    //         }
    //     }
    // }

