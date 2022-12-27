const graph = {}
graph.a = {c: 3, f: 8};
graph.b = {d: 2};
graph.c = {a: 3, d: 5};
graph.d = {c: 5, b: 2, e: 13};
graph.e = {d: 13, f: 6, g: 7};
graph.f = {a: 8, e: 6, g: 1};
graph.g = {e: 7, f: 1};

function shortPath(graph, start, end) {
	const costs = {}
	const processed = []
	let neighbors = {}
	Object.keys(graph).forEach(node => {
			if (node !== start) {
					let value = graph[start][node]
					costs[node] = value || 100000000
			}
	})
	let node = findNodeLowestCost(costs, processed)
	while (node) {
			const cost = costs[node]
			neighbors = graph[node]
			Object.keys(neighbors).forEach(neighbor => {
					let newCost = cost + neighbors[neighbor]
					if (newCost < costs[neighbor]) {
							costs[neighbor] = newCost
					}
			})
			processed.push(node)
			node = findNodeLowestCost(costs, processed)
	}
	return costs
}


function findNodeLowestCost(costs, processed) {
	let lowestCost = 100000000
	let lowestNode;
	Object.keys(costs).forEach(node => {
			let cost = costs[node]
			if (cost < lowestCost && !processed.includes(node)) {
					lowestCost = cost
					lowestNode = node
			}
	})
	return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));