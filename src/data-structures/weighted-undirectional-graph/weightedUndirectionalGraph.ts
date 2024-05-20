import { PriorityQueue } from '../priority-queue/priorityQueue';

interface Neighbour {
    node: string;
    weight: number;
}

export class WeightedUndirectionalGraph {
    adjacencyList: Record<string, Neighbour[]>;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (this.adjacencyList[vertex]) {
            throw new Error(`Specified vertex has already exist`);
        }

        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = [];
        }

        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = [];
        }

        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    removeEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            throw new Error(
                `The 1st specified vertex "${vertex1}" doesn't exist`,
            );
        }

        if (this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) {
            throw new Error(
                `The 2nd specified vertex "${vertex2}" doesn't exist`,
            );
        }

        if (!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) {
            throw new Error(`Specified vertices do not exist`);
        }

        if (
            !this.adjacencyList[vertex1]?.find(
                ({ node }) => node === vertex2,
            ) ||
            !this.adjacencyList[vertex2]?.find(({ node }) => node === vertex1)
        ) {
            throw new Error(
                `There's no connection between ${vertex1} and ${vertex2}`,
            );
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            ({ node }) => node !== vertex2,
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            ({ node }) => node !== vertex1,
        );
    }

    removeVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            throw new Error("Specified vertex doesn't exist");
        }

        this.adjacencyList[vertex].forEach(({ node }) =>
            this.removeEdge(node, vertex),
        );
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(startVertex: string) {
        if (!startVertex) {
            throw new Error(
                'You must specify the vertex to start traversal from',
            );
        }

        if (!this.adjacencyList[startVertex]) {
            throw new Error("Specified start vertex doesn't exist");
        }

        const data: string[] = [];
        const visited: Record<string, boolean> = {};

        const traverse = (vertex: string) => {
            visited[vertex] = true;
            data.push(vertex);

            this.adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour.node]) {
                    traverse(neighbour.node);
                }
            });
        };

        traverse(startVertex);

        return data;
    }

    DFSIterative(startVertex: string) {
        if (!startVertex) {
            throw new Error(
                'You must specify the vertex to start traversal from',
            );
        }

        if (!this.adjacencyList[startVertex]) {
            throw new Error("Specified start vertex doesn't exist");
        }

        const data: string[] = [];
        const visited: Record<string, boolean> = {};
        const stack = [startVertex];
        visited[startVertex] = true;
        let vertex: string;

        while (stack.length) {
            vertex = stack.pop()!;
            data.push(vertex);

            this.adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour.node]) {
                    visited[neighbour.node] = true;
                    stack.push(neighbour.node);
                }
            });
        }

        return data;
    }

    BFS(startVertex: string) {
        if (!startVertex) {
            throw new Error(
                'You must specify the vertex to start traversal from',
            );
        }

        if (!this.adjacencyList[startVertex]) {
            throw new Error("Specified start vertex doesn't exist");
        }

        const data: string[] = [];
        const visited: Record<string, boolean> = {};
        const queue = [startVertex];
        visited[startVertex] = true;
        let vertex: string;

        while (queue.length) {
            vertex = queue.shift()!;
            data.push(vertex);

            this.adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour.node]) {
                    visited[neighbour.node] = true;
                    queue.push(neighbour.node);
                }
            });
        }

        return data;
    }

    findShortestPath(startVertex: string, endVertex: string) {
        if (arguments.length < 2) {
            throw new Error('You must specify the start and the end vertices');
        }

        if (!this.adjacencyList[startVertex]) {
            throw new Error("Specified start vertex doesn't exist");
        }

        if (!this.adjacencyList[endVertex]) {
            throw new Error("Specified end vertex doesn't exist");
        }

        const distances: Record<string, number> = {};
        const pq = new PriorityQueue();
        const previous: Record<string, string | null> = {};
        const visited: Record<string, boolean> = {};
        let shortestPathEndVertex: string;

        for (const vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        while (pq.nodes.length) {
            /* Pick the vertex with the shortest known distance from the start to visit first */
            shortestPathEndVertex = pq.dequeue().value as string; // TODO: improve types for PriorityQueue

            /**
             * This means that two conditions are met:
             * 1. We reached the end following some path
             * 2. The distance to reach it is the shortest (distances to the current end vertices of
             *    all alternative shortest paths which we followed are longer or equal)
             */
            if (shortestPathEndVertex === endVertex) {
                break;
            } else if (!visited[shortestPathEndVertex]) {
                visited[shortestPathEndVertex] = true;

                /* Look at each neighbour of the visited vertex */
                this.adjacencyList[shortestPathEndVertex].forEach(
                    (neighbour) => {
                        const nextVertex = neighbour.node;

                        if (!visited[nextVertex]) {
                            /* Calculate the distance from the start to the neighbour */
                            const distanceFromStart =
                                distances[shortestPathEndVertex] +
                                neighbour.weight;

                            /**
                             * If the distance from the start to the neighbour is less than the
                             * previous known shortest distance...
                             */
                            if (distanceFromStart < distances[nextVertex]) {
                                /* ...store the new shortest distance */
                                distances[nextVertex] = distanceFromStart;

                                /**
                                 * ...set the shortest path end vertex as a previous vertex for the
                                 * neighbour
                                 */
                                previous[nextVertex] = shortestPathEndVertex;

                                /* Make the neighbour a candidate to be visited next by adding it to priority queue */
                                pq.enqueue(nextVertex, distanceFromStart);
                            }
                        }
                    },
                );
            }
        }

        /* Construct a path using `previous` object */
        const path = [endVertex];
        let current = endVertex;

        while (current !== startVertex) {
            path.push(previous[current]!);
            current = previous[current]!;
        }

        return path.toReversed();
    }
}
