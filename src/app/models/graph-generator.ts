import {GraphVisualizerComponent} from '../components/graph-visualizer/graph-visualizer.component';
import {Edge, Node, RawGraph} from './ogma';

export abstract class GraphGenerator {
    public abstract generateGraph(graphVisualizerComponent?: GraphVisualizerComponent): RawGraph;
}

export class SimpleDfsGraphGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({
            id: 1,
            attributes: {text: 1},
            data: {visited: false},
        }),
        new Node({id: 2, attributes: {text: 2}, data: {visited: false}}),
        new Node({id: 3, attributes: {text: 3}, data: {visited: false}}),
        new Node({id: 4, attributes: {text: 4}, data: {visited: false}}),
        new Node({id: 5, attributes: {text: 5}, data: {visited: false}}),
        new Node({id: 6, attributes: {text: 6}, data: {visited: false}}),
        new Node({id: 7, attributes: {text: 7}, data: {visited: false}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {visited: false}}),
        new Edge({id: 3, source: 1, target: 5, data: {visited: false}}),

        new Edge({id: 5, source: 2, target: 3, data: {visited: false}}),
        new Edge({id: 7, source: 2, target: 4, data: {visited: false}}),

        new Edge({id: 9, source: 3, target: 6, data: {visited: false}}),

        new Edge({id: 11, source: 4, target: 6, data: {visited: false}}),

        new Edge({id: 13, source: 5, target: 7, data: {visited: false}}),

        new Edge({id: 15, source: 6, target: 7, data: {visited: false}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: SimpleDfsGraphGenerator.NODES, edges: SimpleDfsGraphGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class SimpleBfsGraphGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({
            id: 1,
            attributes: {text: 1},
            data: {visited: false},
        }),
        new Node({id: 2, attributes: {text: 2}, data: {visited: false}}),
        new Node({id: 3, attributes: {text: 3}, data: {visited: false}}),
        new Node({id: 4, attributes: {text: 4}, data: {visited: false}}),
        new Node({id: 5, attributes: {text: 5}, data: {visited: false}}),
        new Node({id: 6, attributes: {text: 6}, data: {visited: false}}),
        new Node({id: 7, attributes: {text: 7}, data: {visited: false}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {visited: false}}),
        new Edge({id: 3, source: 1, target: 5, data: {visited: false}}),

        new Edge({id: 5, source: 2, target: 3, data: {visited: false}}),
        new Edge({id: 7, source: 2, target: 4, data: {visited: false}}),

        new Edge({id: 9, source: 3, target: 6, data: {visited: false}}),

        new Edge({id: 11, source: 4, target: 6, data: {visited: false}}),

        new Edge({id: 13, source: 5, target: 7, data: {visited: false}}),

        new Edge({id: 15, source: 6, target: 7, data: {visited: false}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: SimpleBfsGraphGenerator.NODES, edges: SimpleBfsGraphGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class SimpleTreeGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({
            id: 1,
            attributes: {text: 'A'},
            data: {index: 0},
        }),
        new Node({id: 2, attributes: {text: 'B'}, data: {index: 0}}),
        new Node({id: 3, attributes: {text: 'C'}, data: {index: 1}}),
        new Node({id: 4, attributes: {text: 'N'}, data: {index: 1}}),
        new Node({id: 5, attributes: {text: 'M'}, data: {index: 0}}),
        new Node({id: 6, attributes: {text: 'P'}, data: {index: 0}}),
        new Node({id: 7, attributes: {text: 'F'}, data: {index: 1}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {}}),
        new Edge({id: 2, source: 1, target: 3, data: {}}),

        new Edge({id: 3, source: 2, target: 4, data: {}}),

        new Edge({id: 4, source: 3, target: 5, data: {}}),

        new Edge({id: 6, source: 5, target: 6, data: {}}),
        new Edge({id: 7, source: 5, target: 7, data: {}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: SimpleTreeGenerator.NODES, edges: SimpleTreeGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class SimpleBinarySearchTreeGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({
            id: 1,
            attributes: {text: '8'},
            data: {index: 0},
        }),
        new Node({id: 2, attributes: {text: '7'}, data: {index: 0}}),
        new Node({id: 3, attributes: {text: '14'}, data: {index: 1}}),
        new Node({id: 4, attributes: {text: '3'}, data: {index: 0}}),
        new Node({id: 5, attributes: {text: '11'}, data: {index: 0}}),
        new Node({id: 6, attributes: {text: '15'}, data: {index: 1}}),
        new Node({id: 7, attributes: {text: '5'}, data: {index: 1}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {}}),
        new Edge({id: 2, source: 1, target: 3, data: {}}),

        new Edge({id: 3, source: 2, target: 4, data: {}}),

        new Edge({id: 4, source: 3, target: 5, data: {}}),
        new Edge({id: 5, source: 3, target: 6, data: {}}),

        new Edge({id: 6, source: 4, target: 7, data: {}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: SimpleBinarySearchTreeGenerator.NODES, edges: SimpleBinarySearchTreeGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class SimpleAvlTreeGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({id: 1, attributes: {text: '30'}, data: {index: 0}}),
        new Node({id: 2, attributes: {text: '20'}, data: {index: 0}}),
        new Node({id: 3, attributes: {text: '50'}, data: {index: 1}}),
        new Node({id: 4, attributes: {text: '10'}, data: {index: 0}}),
        new Node({id: 5, attributes: {text: '40'}, data: {index: 0}}),
        new Node({id: 6, attributes: {text: '55'}, data: {index: 1}}),
        new Node({id: 7, attributes: {text: '45'}, data: {index: 1}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {}}),
        new Edge({id: 2, source: 1, target: 3, data: {}}),

        new Edge({id: 3, source: 2, target: 4, data: {}}),

        new Edge({id: 4, source: 3, target: 5, data: {}}),
        new Edge({id: 5, source: 3, target: 6, data: {}}),

        new Edge({id: 6, source: 5, target: 7, data: {}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: SimpleAvlTreeGenerator.NODES, edges: SimpleAvlTreeGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class BigAvlTreeGenerator extends GraphGenerator {
    private static readonly NODES: Node[] = [
        new Node({id: 1, attributes: {text: '40'}, data: {index: 0}}),
        new Node({id: 2, attributes: {text: '20'}, data: {index: 0}}),
        new Node({id: 3, attributes: {text: '50'}, data: {index: 1}}),
        new Node({id: 4, attributes: {text: '10'}, data: {index: 0}}),
        new Node({id: 5, attributes: {text: '30'}, data: {index: 1}}),
        new Node({id: 6, attributes: {text: '45'}, data: {index: 0}}),
        new Node({id: 7, attributes: {text: '90'}, data: {index: 1}}),
        new Node({id: 8, attributes: {text: '5'}, data: {index: 0}}),
        new Node({id: 9, attributes: {text: '15'}, data: {index: 1}}),
        new Node({id: 10, attributes: {text: '42'}, data: {index: 0}}),
        new Node({id: 11, attributes: {text: '60'}, data: {index: 0}}),
        new Node({id: 12, attributes: {text: '95'}, data: {index: 1}}),
    ];

    private static readonly EDGES: Edge[] = [
        new Edge({id: 1, source: 1, target: 2, data: {}}),
        new Edge({id: 2, source: 1, target: 3, data: {}}),

        new Edge({id: 3, source: 2, target: 4, data: {}}),
        new Edge({id: 4, source: 2, target: 5, data: {}}),

        new Edge({id: 5, source: 3, target: 6, data: {}}),
        new Edge({id: 6, source: 3, target: 7, data: {}}),

        new Edge({id: 7, source: 4, target: 8, data: {}}),
        new Edge({id: 8, source: 4, target: 9, data: {}}),

        new Edge({id: 9, source: 6, target: 10, data: {}}),

        new Edge({id: 10, source: 7, target: 11, data: {}}),
        new Edge({id: 11, source: 7, target: 12, data: {}}),
    ];

    public generateGraph(): RawGraph {
        const graph = {nodes: BigAvlTreeGenerator.NODES, edges: BigAvlTreeGenerator.EDGES};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class HuffmanGenerator extends GraphGenerator {
    public generateGraph(): RawGraph {
        const text = 'abacabcabcdaabcde';
        const characters: {[key: string]: number} = {};

        text.split('').forEach((character) => {
            if (character in characters) characters[character]++;
            else characters[character] = 1;
        });

        const nodes: Node[] = Object.entries(characters).map((value, index) => {
            const [character, count] = value;

            return new Node({
                id: index,
                attributes: {text: `${character}, ${count}`},
                data: {index: 0, character, count},
            });
        });

        const graph = {nodes, edges: []};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class HeapSortGenerator extends GraphGenerator {
    public constructor(private numbers: number[] = [8, 2, 12, 6, 7, 19]) {
        super();
    }

    public generateGraph(): RawGraph {
        const numbers: number[] = JSON.parse(JSON.stringify(this.numbers));

        for (let i = 0; i < numbers.length; i++) {
            let currentIndex = i;
            while (currentIndex > 0) {
                const parentIndex = Math.floor((currentIndex - 1) / 2);
                if (numbers[currentIndex] <= numbers[parentIndex]) break;

                const temp = numbers[parentIndex];
                numbers[parentIndex] = numbers[currentIndex];
                numbers[currentIndex] = temp;

                currentIndex = Math.floor((currentIndex - 1) / 2);
            }
        }

        const nodes: Node[] = numbers.map(
            (x, i) =>
                new Node({
                    id: i + 1,
                    attributes: {text: x},
                    data: {index: i % 2 == 1 ? 0 : 1},
                })
        );

        const edges: Edge[] = [];
        for (let i = 1; i < nodes.length; i++) {
            edges.push(new Edge({id: edges.length + 1, source: Math.floor((i - 1) / 2) + 1, target: i + 1, data: {}}));
        }

        const graph = {nodes, edges};
        return JSON.parse(JSON.stringify(graph));
    }
}

export class RandomGraphGenerator extends GraphGenerator {
    public constructor(private nodesMaximumCount = 20, private edgesMaximumCount = 30) {
        super();
    }

    public generateGraph(): RawGraph {
        const nodesCount = Math.floor(Math.random() * this.nodesMaximumCount) + 1;
        const edgesCount = Math.floor(Math.random() * this.edgesMaximumCount);

        const nodes: Node[] = RandomGraphGenerator.generateNodes(nodesCount);
        const edges: Edge[] = RandomGraphGenerator.generateEdges(nodesCount, edgesCount);

        return JSON.parse(JSON.stringify({nodes, edges}));
    }

    private static generateNodes(nodesCount: number): Node[] {
        const width = 800;
        const height = 600;

        const nodes = [];
        for (let i = 0; i < nodesCount; i++) {
            const randomX = Math.random() * width - width / 2;
            const randomY = Math.random() * height - height / 2;

            const data = {name: `node #${i}`};
            const attributes = {x: randomX, y: randomY, text: i + 1};

            const node: Node = new Node({id: i + 1, data, attributes});
            nodes.push(node);
        }

        return nodes;
    }

    private static generateEdges(nodesCount: number, edgesCount: number): Edge[] {
        const edges: Edge[] = [];
        for (let i = 0; i < edgesCount; i++) {
            const sourceId = Math.floor(Math.random() * nodesCount) + 1;
            const targetId = Math.floor(Math.random() * nodesCount) + 1;

            if (sourceId === targetId && nodesCount !== 1) {
                i--;
                continue;
            }

            edges.push(new Edge({id: 'e' + i, source: sourceId, target: targetId, data: {name: `edge #${i}`}}));
        }

        return edges;
    }
}

export class RandomTreeGenerator extends GraphGenerator {
    public constructor(private nodesMaximumCount = 20) {
        super();
    }

    public generateGraph(): RawGraph {
        const nodesCount = Math.floor(Math.random() * this.nodesMaximumCount) + 1;

        const width = 800;
        const height = 600;

        const nodes = [];
        const edges: Edge[] = [];

        for (let i = 0; i < nodesCount; i++) {
            const randomX = Math.random() * width - width / 2;
            const randomY = Math.random() * height - height / 2;

            const data = {name: `node #${i}`};
            const attributes = {x: randomX, y: randomY, text: i + 1};

            const node: Node = new Node({id: i + 1, data, attributes});
            nodes.push(node);

            if (nodes.length === 1) continue;

            const sourceId = Math.floor(Math.random() * (nodes.length - 1)) + 1;
            edges.push(
                new Edge({
                    id: 'e' + i,
                    source: sourceId,
                    target: i + 1,
                    data: {name: `edge #${i}`},
                })
            );
        }

        return JSON.parse(JSON.stringify({nodes, edges}));
    }
}

export class LinearOneWayLinkedListGraphGenerator extends GraphGenerator {
    public constructor(sizeOrValues?: number | any[]) {
        super();

        if (Array.isArray(sizeOrValues)) {
            this.size = sizeOrValues.length;
            this.values = JSON.parse(JSON.stringify(sizeOrValues));

            return;
        }

        this.size = sizeOrValues ?? 4;
        this.values = Array(this.size)
            .fill(null)
            .map((_, i) => i + 1);
    }

    private size!: number;
    private values!: any[];

    public generateGraph(): RawGraph {
        const nodes: Node[] = this.values.map((value, i) => new Node({id: i, attributes: {text: value}}));

        const edges: Edge[] = [];
        for (let i = 0; i < nodes.length - 1; i++) {
            edges.push(new Edge({id: i, source: i, target: i + 1}));
        }

        const graph = {nodes, edges};
        return JSON.parse(JSON.stringify(graph));
    }
}
