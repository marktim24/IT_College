const graph = {}
graph.a = ['f'];
graph.b = ['d'];
graph.c = ['d','a'];
graph.d = ['b','c','e'];
graph.e = ['d','f','g'];
graph.f = ['a','e','g'];
graph.g = ['e','f'];

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
	return false
 }

 console.log(breadthSearch(graph, 'a', 'e'));