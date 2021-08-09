// 4 kyu
// https://www.codewars.com/kata/57658bfa28ed87ecfa00058a

function pathFinder(aGraph) {
  if (aGraph.length === 1) {
    return 0;
  };

  const splitted = aGraph.split('\n');

  const preGraph = replaceDots(splitted);
  const Graph = createGraph(preGraph);
  const graphVertexies = Graph.getAllVertexies();

  return bfs(Graph, graphVertexies[0], graphVertexies[graphVertexies.length - 1]);
};

class Graph {
  constructor(obj) {
    this._graph = this._createGraphFromObj(obj);
  };

  _createGraphFromObj(obj) {
    this._vertexies = [];

    const graph = new Map();

    for (let vertex in obj) {
      const neighbours = new Map();
      for (let neighbour of obj[vertex]) {
        neighbours.set(neighbour);
      };

      graph.set(parseInt(vertex), neighbours);

      this._vertexies.push(parseInt(vertex));
    };

    return graph;
  };

  getAllVertexies() {
    return this._vertexies.slice();
  };

  getVertexNeighbours(vertex) {
    if (this._graph.has(vertex)) {
      return [...this._graph.get(vertex).keys()].slice();
    };
    return [];
  };
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  put(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    };
    this.length++;
  };

  pick() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    };
    this.length--;
    return element.item;
  };
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
  const rowLength = preGraph[0].length;

  const rawDataForGraph = {};

  for (let i = 0; i < preGraph.length; i++) {
    for (let j = 0; j < rowLength; j++) {
      const currentVertex = preGraph[i][j];
      const neighbours = [];

      if (currentVertex === 0) {
        continue;
      }

      if (j + 1 < rowLength) {
        if (preGraph[i][j + 1] != 0){
          neighbours.push(preGraph[i][j + 1]);
        };
      };

      if (j - 1 >= 0) {
        if (preGraph[i][j - 1] != 0){
          neighbours.push(preGraph[i][j - 1]);
        };
      };

      if (i + 1 < preGraph.length) {
        if (preGraph[i + 1][j] != 0){
          neighbours.push(preGraph[i + 1][j]);
        };
      };

      if (i - 1 >= 0) {
        if (preGraph[i - 1][j] != 0){
          neighbours.push(preGraph[i - 1][j]);
        };
      };
      rawDataForGraph[currentVertex] = neighbours;
    }
  };

  return new Graph(rawDataForGraph);
};

function bfs(graph, v, to) {
  const queue = new Queue();
  queue.put(v);

  const allVertexies = graph.getAllVertexies();
  allVertexies[v - 1] = false;

  const prevVertex = new Array(allVertexies.length + 1);

  while (queue.length) {
    let p = queue.pick();

    for (neighbour of graph.getVertexNeighbours(p)) {
      if (allVertexies[neighbour - 1]) {
        if (neighbour === to) {
          prevVertex[neighbour] = p;
          return countEdges(prevVertex, 1, neighbour);
        };

        queue.put(neighbour);
        allVertexies[neighbour - 1] = false;
        prevVertex[neighbour] = p;
      };
    };
  };

  return false;
};

const countEdges = (indexes, from, to) => {
  let counter = 0;

  while (true) {
    to = indexes[to];
    counter++;
    if (to === from) {
      break;
    };
  };

  return counter;
};