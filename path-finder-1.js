// 4 kyu
// https://www.codewars.com/kata/5765870e190b1472ec0022a2

function pathFinder (aGraph) {
  const splitted = aGraph.split('\n');

  const preGraph = replaceDots(splitted);
  const Graph = createGraph(preGraph);
  const grapVertexies = [...Graph.keys()];
  return DFSConnectedGraphSearch(Graph, grapVertexies[0], grapVertexies[grapVertexies.length - 1]);
};

function replaceDots(preGraph) {
  const rowLength = preGraph[0].length;
  let counter = 1;

  for (let i = 0; i < preGraph.length; i++) {
    preGraph[i] = preGraph[i].split('');
    for (let j = 0; j < rowLength; j++) {
      if (preGraph[i][j] === 'W') {
        preGraph[i][j] = 0;
      } else {
        preGraph[i][j] = counter;
        counter++;
      };
    };
  };

  return preGraph;
};

function createGraph(preGraph) {
  const Graph = new Map();
  const rowLength = preGraph[0].length;

  for (let i = 0; i < preGraph.length; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (preGraph[i][j] === 0) {
        continue;
      }

      const vertex = Graph.get(preGraph[i][j]);

      if (!vertex) {
        Graph.set(preGraph[i][j], new Map());

        const neigbours = Graph.get(preGraph[i][j]);

        if (j + 1 < rowLength) {
          if (preGraph[i][j + 1] != 0){
            neigbours.set(preGraph[i][j + 1]);
          };
        };

        if (j - 1 >= 0) {
          if (preGraph[i][j - 1] != 0){
            neigbours.set(preGraph[i][j - 1]);
          };
        };

        if (i + 1 < preGraph.length) {
          if (preGraph[i + 1][j] != 0){
            neigbours.set(preGraph[i + 1][j]);
          };
        };

        if (i - 1 >= 0) {
          if (preGraph[i - 1][j] != 0){
            neigbours.set(preGraph[i - 1][j]);
          };
        };
      };
    };
  };

  return Graph;
};

function DFSConnectedGraphSearch(G, vertexFrom, vertexTo, checkedVertexies) {
  if (!checkedVertexies) {
    checkedVertexies = [...G.keys()];
  };

  if (!vertexFrom) {
    return false;
  };

  let flag = false;

  checkedVertexies[vertexFrom - 1] = false;
  for (let u of G.get(vertexFrom).keys()) {
    if (u === vertexTo) {
      flag = true;
      break;
    }

    if (checkedVertexies[u - 1]) {
      flag = DFSConnectedGraphSearch(G, u, vertexTo, checkedVertexies) 
      if (flag) {
        break;
      };
    };
  };

  return flag;
};
