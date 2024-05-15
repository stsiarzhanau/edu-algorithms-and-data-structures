import { it, expect, describe, beforeEach } from 'vitest';
import { Graph } from './graph';

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
            graph.addEdge('Kraków', 'Gdańsk');

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków'],
                Wrocław: [],
                Toruń: [],
            });

            graph.addEdge('Gdańsk', 'Toruń');

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków', 'Toruń'],
                Wrocław: [],
                Toruń: ['Gdańsk'],
            });
        });

        it("should create a new vertex and then add edge (connection) if at least one of the specified vertices doesn't exist", () => {
            graph.addEdge('Kraków', 'Bydgoszcz');

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Bydgoszcz'],
                Gdańsk: [],
                Wrocław: [],
                Toruń: [],
                Bydgoszcz: ['Kraków'],
            });

            graph.addEdge('Łódź', 'Szczecin');

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Bydgoszcz'],
                Gdańsk: [],
                Wrocław: [],
                Toruń: [],
                Bydgoszcz: ['Kraków'],
                Łódź: ['Szczecin'],
                Szczecin: ['Łódź'],
            });
        });
    });

    describe('removeEdge', () => {
        beforeEach(() => {
            graph.addEdge('Kraków', 'Gdańsk');
            graph.addEdge('Gdańsk', 'Toruń');
        });

        it('should remove edge (connection) between the specified vertices', () => {
            graph.removeEdge('Gdańsk', 'Toruń');

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków'],
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
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków', 'Toruń'],
                Wrocław: [],
                Toruń: ['Gdańsk'],
            });
        });

        it("should throw error if there's no connection between the specified vertices", () => {
            expect(() => graph.removeEdge('Kraków', 'Toruń')).toThrowError(
                /there's no connection between/i,
            );

            expect(graph.adjacencyList).toEqual({
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków', 'Toruń'],
                Wrocław: [],
                Toruń: ['Gdańsk'],
            });
        });
    });

    describe('removeVertex', () => {
        beforeEach(() => {
            graph.addEdge('Kraków', 'Gdańsk');
            graph.addEdge('Gdańsk', 'Toruń');
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
                Kraków: ['Gdańsk'],
                Gdańsk: ['Kraków', 'Toruń'],
                Wrocław: [],
                Toruń: ['Gdańsk'],
            });
        });
    });
});
