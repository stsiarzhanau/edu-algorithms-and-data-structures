import { it, expect, describe, beforeEach } from 'vitest';
import { WeightedUndirectionalGraph as Graph } from './weightedUndirectionalGraph';

describe('Graph', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
        graph.addVertex('Kraków');
        graph.addVertex('Gdańsk');
        graph.addVertex('Wrocław');
        graph.addVertex('Toruń');
    });

    it('should instantiate an object with a single `adjacencyList` property that is an empty object', () => {
        graph = new Graph();
        expect(Object.keys(graph)).toEqual(['adjacencyList']);
        expect(graph.adjacencyList).toBeEmptyObject();
    });

    describe('addVertex', () => {
        it('should add a specified vertex to the graph', () => {
            graph = new Graph();
            graph.addVertex('Kraków');
            expect(graph.adjacencyList).toEqual({ Kraków: [] });
            graph.addVertex('Gdańsk');
            expect(graph.adjacencyList).toEqual({ Kraków: [], Gdańsk: [] });
        });

        it('should throw error if the specified vertex has already exist', () => {
            graph = new Graph();
            graph.addVertex('Kraków');
            expect(graph.adjacencyList).toEqual({ Kraków: [] });

            expect(() => graph.addVertex('Kraków')).toThrowError(
                /specified vertex has already exist/i,
            );

            expect(graph.adjacencyList).toEqual({ Kraków: [] });
        });
    });

    describe('addEdge', () => {
        it('should add edge (connection) between the specified vertices', () => {
            graph.addEdge('Kraków', 'Gdańsk', 595);

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [{ node: 'Kraków', weight: 595 }],
                Wrocław: [],
                Toruń: [],
            });

            graph.addEdge('Gdańsk', 'Toruń', 167);

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [
                    { node: 'Kraków', weight: 595 },
                    { node: 'Toruń', weight: 167 },
                ],
                Wrocław: [],
                Toruń: [{ node: 'Gdańsk', weight: 167 }],
            });
        });

        it("should create a new vertex and then add edge (connection) if at least one of the specified vertices doesn't exist", () => {
            graph.addEdge('Kraków', 'Bydgoszcz', 483);

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Bydgoszcz', weight: 483 }],
                Gdańsk: [],
                Wrocław: [],
                Toruń: [],
                Bydgoszcz: [{ node: 'Kraków', weight: 483 }],
            });

            graph.addEdge('Łódź', 'Szczecin', 470);

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Bydgoszcz', weight: 483 }],
                Gdańsk: [],
                Wrocław: [],
                Toruń: [],
                Bydgoszcz: [{ node: 'Kraków', weight: 483 }],
                Łódź: [{ node: 'Szczecin', weight: 470 }],
                Szczecin: [{ node: 'Łódź', weight: 470 }],
            });
        });
    });

    describe('removeEdge', () => {
        beforeEach(() => {
            graph.addEdge('Kraków', 'Gdańsk', 595);
            graph.addEdge('Gdańsk', 'Toruń', 167);
        });

        it('should remove edge (connection) between the specified vertices', () => {
            graph.removeEdge('Gdańsk', 'Toruń');

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [{ node: 'Kraków', weight: 595 }],
                Wrocław: [],
                Toruń: [],
            });

            graph.removeEdge('Gdańsk', 'Kraków');

            expect(graph.adjacencyList).toEqual({
                Kraków: [],
                Gdańsk: [],
                Wrocław: [],
                Toruń: [],
            });
        });

        it("should throw error if at least one of the specified vertices doesn't exist", () => {
            expect(() => graph.removeEdge('Szczecin', 'Toruń')).toThrowError(
                /the 1st specified vertex "Szczecin" doesn't exist/i,
            );

            expect(() => graph.removeEdge('Kraków', 'Szczecin')).toThrowError(
                /the 2nd specified vertex "Szczecin" doesn't exist/i,
            );

            expect(() => graph.removeEdge('Szczecin', 'Łódź')).toThrowError(
                /specified vertices do not exist/i,
            );

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [
                    { node: 'Kraków', weight: 595 },
                    { node: 'Toruń', weight: 167 },
                ],
                Wrocław: [],
                Toruń: [{ node: 'Gdańsk', weight: 167 }],
            });
        });

        it("should throw error if there's no connection between the specified vertices", () => {
            expect(() => graph.removeEdge('Kraków', 'Toruń')).toThrowError(
                /there's no connection between/i,
            );

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [
                    { node: 'Kraków', weight: 595 },
                    { node: 'Toruń', weight: 167 },
                ],
                Wrocław: [],
                Toruń: [{ node: 'Gdańsk', weight: 167 }],
            });
        });
    });

    describe('removeVertex', () => {
        beforeEach(() => {
            graph.addEdge('Kraków', 'Gdańsk', 595);
            graph.addEdge('Gdańsk', 'Toruń', 167);
        });

        it('should remove both the specified vertex and corresponding edges (connections)', () => {
            graph.removeVertex('Gdańsk');

            expect(graph.adjacencyList).toEqual({
                Kraków: [],
                Wrocław: [],
                Toruń: [],
            });
        });

        it('should throw error if the specified vertex does not exist', () => {
            expect(() => graph.removeVertex('Szczecin')).toThrowError(
                /vertex doesn't exist/i,
            );

            expect(graph.adjacencyList).toEqual({
                Kraków: [{ node: 'Gdańsk', weight: 595 }],
                Gdańsk: [
                    { node: 'Kraków', weight: 595 },
                    { node: 'Toruń', weight: 167 },
                ],
                Wrocław: [],
                Toruń: [{ node: 'Gdańsk', weight: 167 }],
            });
        });
    });

    describe('traversal methods', () => {
        /**
         *   ------------ A -------------
         *   |                           |
         *   B                           C
         *   |                           |
         *   D ------------------------- E
         *   |                           |
         *   ------------ F --------------
         */

        beforeEach(() => {
            graph = new Graph();
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addVertex('F');

            graph.addEdge('A', 'B', 1);
            graph.addEdge('A', 'C', 2);
            graph.addEdge('B', 'D', 3);
            graph.addEdge('C', 'E', 4);
            graph.addEdge('D', 'E', 5);
            graph.addEdge('D', 'F', 6);
            graph.addEdge('E', 'F', 7);
        });

        describe('DFSRecursive', () => {
            it('should visit all vertices in correct order', () => {
                expect(graph.DFSRecursive('A')).toEqual([
                    'A',
                    'B',
                    'D',
                    'E',
                    'C',
                    'F',
                ]);
            });

            it('should throw error if the vertex to start traversal from is not specified', () => {
                // @ts-expect-error DFSRecursive expects 1 argument
                expect(() => graph.DFSRecursive()).toThrow(/You must specify/i);
            });

            it("should throw error if specified start vertex doesn't exist", () => {
                graph = new Graph();
                graph.addVertex('A');
                expect(() => graph.DFSRecursive('B')).toThrowError(
                    /specified start vertex doesn't exist/i,
                );
            });
        });

        describe('DFSIterative', () => {
            it('should visit all vertices in correct order', () => {
                expect(graph.DFSIterative('A')).toEqual([
                    'A',
                    'C',
                    'E',
                    'F',
                    'D',
                    'B',
                ]);
            });

            it('should throw error if the vertex to start traversal from is not specified', () => {
                // @ts-expect-error DFSIterative expects 1 argument
                expect(() => graph.DFSIterative()).toThrow(/you must specify/i);
            });

            it("should throw error if specified start vertex doesn't exist", () => {
                expect(() => graph.DFSIterative('G')).toThrowError(
                    /specified start vertex doesn't exist/i,
                );
            });
        });

        describe('BFS', () => {
            it('should visit all vertices in correct order', () => {
                expect(graph.BFS('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
            });

            it('should throw error if the vertex to start traversal from is not specified', () => {
                // @ts-expect-error DFSIterative expects 1 argument
                expect(() => graph.BFS()).toThrow(/you must specify/i);
            });

            it("should throw error if specified start vertex doesn't exist", () => {
                expect(() => graph.BFS('G')).toThrowError(
                    /specified start vertex doesn't exist/i,
                );
            });
        });
    });

    describe('findShortestPath', () => {
        beforeEach(() => {
            graph = new Graph();
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addVertex('F');

            graph.addEdge('A', 'B', 4);
            graph.addEdge('A', 'C', 2);
            graph.addEdge('B', 'E', 3);
            graph.addEdge('C', 'D', 2);
            graph.addEdge('C', 'F', 4);
            graph.addEdge('D', 'E', 3);
            graph.addEdge('D', 'F', 1);
            graph.addEdge('E', 'F', 1);
        });

        it('should find the shortest path from start to end vertex', () => {
            expect(graph.findShortestPath('A', 'E')).toEqual([
                'A',
                'C',
                'D',
                'F',
                'E',
            ]);
        });

        it('should throw error if any of specified vertices do not exist', () => {
            expect(() => graph.findShortestPath('G', 'E')).toThrowError(
                /specified start vertex doesn't exist/i,
            );

            expect(() => graph.findShortestPath('A', 'G')).toThrowError(
                /specified end vertex doesn't exist/i,
            );
        });

        it('should throw error if one or both vertices are not specified', () => {
            // @ts-expect-error findShortestPath expects 2 arguments
            expect(() => graph.findShortestPath()).toThrowError(
                /you must specify the start and the end vertices/i,
            );

            // @ts-expect-error findShortestPath expects 2 arguments
            expect(() => graph.findShortestPath('A')).toThrowError(
                /you must specify the start and the end vertices/i,
            );
        });
    });
});
