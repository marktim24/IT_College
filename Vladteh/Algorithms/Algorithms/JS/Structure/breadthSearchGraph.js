const graph = {}
graph.a = ['C','F'];
graph.b = ['D'];
graph.c = ['D','A'];
graph.d = ['B','C','E'];
graph.e = ['D','F','G'];
graph.f = ['A','E','G'];
graph.g = ['E','F'];

function breadthSearch(graph, start, end) { 
	let line = [];
	line.push(start);
	while (line.length > 0) {
		const current = line.shift();
		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)){
			return true
		} else {
			line = [...line, ...graph[current]];
		}
	}
 }

 console.log(breadthSearch(graph, 'A', 'B'));