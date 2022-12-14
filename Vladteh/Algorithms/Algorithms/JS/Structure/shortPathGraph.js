const graph = {}
graph.a = {c: 3, f: 8};
graph.b = {d: 2};
graph.c = {a: 3, d: 5};
graph.d = {c: 5, b: 2, e: 13};
graph.e = {d: 13, f: 6, g: 7};
graph.f = {a: 8, e: 6, g: 1};
graph.g = {e: 7, f: 1};

function shortPath(graph, start, end) { 
	const cost = {}
	Object.keys(graph).forEach(node => {
		if (node != start) {
			let value = graph[start][node];
			cost[node] = value;
		}
	})
	console.log(cost);
}


 console.log(shortPath(graph, a, b));