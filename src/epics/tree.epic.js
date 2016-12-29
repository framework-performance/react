import {treeActions} from "../actions/";
import "rxjs";
import {Observable} from "rxjs/Observable";
import {ActionsObservable} from "redux-observable";
import {INode} from "../models/node.models";
import {treeFiles} from '../constants/tree-files';

export class TreeEpic {

    fetchTree = (action$: ActionsObservable<{payload: {file: string}}>) =>
        action$.ofType(treeActions.LOAD_NODES)
            .switchMap(({payload}) =>
                Observable.ajax.get(this.getFileForType(payload.file))
                    .map((tree) => tree.response)
                    .map((nodes) => ({
                        type: treeActions.SET_NODES,
                        payload: {
                            nodes: nodes,
                            nodesCount: this.getNodesCountForType(payload.file),
                            showAnimation: this.showAnimationForTree(payload.file)
                        }
                    }))
            );

    setSelectedNode = (action$: ActionsObservable<{payload: {selectedNodePath: Array<number>}}>
        , store) =>
        action$.ofType(treeActions.SET_SELECTED_NODE_PATH)
            .map(({payload}) => ({
                    type: treeActions.SET_SELECTED_NODE,
                    payload: {
                        selectedNode: this.getNode(
                            [...store.getState().tree.nodes],
                            [...payload.selectedNodePath]
                        )
                    }
                })
            );

    updateNode = (action$: ActionsObservable<{payload: {value: string}}>, store) =>
        action$.ofType(treeActions.UPDATE_NODE_VALUE)
            .map(({payload}) => ({
                    type: treeActions.UPDATE_NODES,
                    payload: {
                        nodes: this.updateNodeValue(
                            [...store.getState().tree.nodes],
                            [...store.getState().tree.selectedNodePath],
                            payload.value
                        )
                    }
                })
            );

    showAnimationForTree(type): boolean {
        if (this.getNodesCountForType(type) < 1000) {
            return true;
        }
        return false;
    }

    getFileForType(type: string = ''): string {
        try {
            return process.env.PUBLIC_URL + '/tree-data/' + this.getTreeFileObject(type).file;
        } catch (error) {
            console.error('load tree.json failed', error);
        }
    }

    getNodesCountForType(type: string = ''): number {
        try {
            return this.getTreeFileObject(type).nodes;
        } catch (error) {
            console.error('load tree.json failed', error);
        }
    }

    getTreeFileObject(type: string = ''): {file: string, nodes: number} {
        if (!type) {
            throw new Error('type is empty');
        }
        if (!treeFiles[type]) {
            throw new Error('type ' + type + ' is not defined');
        }
        return treeFiles[type];
    }

    updateNodeValue(nodes: Array<INode>, indexPath: Array<number>, value: string): Array<INode> {
        return nodes.map((node, nodeIndex) => {
            if (nodeIndex === indexPath[0]) {
                indexPath.shift();
                if (indexPath.length === 0) {
                    return Object.assign({}, node, {value: value});
                }
                return Object.assign(
                    {},
                    node,
                    {
                        nodes: this.updateNodeValue(node.nodes, indexPath, value)
                    }
                );
            }
            return node;
        });
    }

    getNode(nodes: Array<INode>, indexPath: Array<number>): INode {
        let index = indexPath[0];
        indexPath.shift();
        if (indexPath.length === 0) {
            return nodes[index];
        }
        return this.getNode(nodes[index].nodes, indexPath);
    }
}
