/* undirected */
export class Graph {
    adjacencyList: Record<string, string[]>;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (this.adjacencyList[vertex]) {
            throw new Error(`Specified vertex has already exist`);
        }

        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = [];
        }

        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = [];
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
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
            !this.adjacencyList[vertex1]?.includes(vertex2) ||
            !this.adjacencyList[vertex2]?.includes(vertex1)
        ) {
            throw new Error(
                `There's no connection between ${vertex1} and ${vertex2}`,
            );
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2,
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1,
        );
    }

    removeVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            throw new Error("Specified vertex doesn't exist");
        }

        this.adjacencyList[vertex].forEach((v) => this.removeEdge(v, vertex));
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
                if (!visited[neighbour]) {
                    traverse(neighbour);
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
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
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
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }

        return data;
    }
}
