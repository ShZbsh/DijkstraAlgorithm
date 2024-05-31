const cost = [
    [0, 6, 9, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, 0, 6, 9, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 9, 12, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 3, 6, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0],
];

const graph1 = [
    [0, 4, 2, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, 0, 3, 2, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 5, 3, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 2, 1, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 0],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 0],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0],
];
function dijkstra(graph, cost, start) {
    const numVertices = graph.length;
    const distances = new Array(numVertices).fill(Infinity);
    distances[start] = 0;
  
    const visited = new Array(numVertices).fill(false);
    const previous = new Array(numVertices).fill(null);
  
    for (let i = 0; i < numVertices - 1; i++) {
      const minDistance = Math.min(...distances.filter((_, idx) => !visited[idx]));
      const minIndex = distances.indexOf(minDistance);
  
      visited[minIndex] = true;
  
      for (let j = 0; j < numVertices; j++) {
        if (!visited[j] && graph[minIndex][j] !== Infinity) {
          const newDistance = distances[minIndex] + graph[minIndex][j];
          if (newDistance < distances[j]) {
            distances[j] = newDistance;
            previous[j] = minIndex;
          }
        }
      }
    }
  
    const chosenPath = [];
    let currentVertex = numVertices - 1;
    while (currentVertex !== null) {
      chosenPath.unshift(currentVertex);
      currentVertex = previous[currentVertex];
    }
  
    const chosenPathCosts = chosenPath.map(vertex => cost[vertex]);
  
    return chosenPathCosts;
  }
  
  // Example usage:
  const startVertex = 0;
  const chosenPathCosts = dijkstra(graph1, cost, startVertex);
  
  console.log(chosenPathCosts);