import {treeFiles} from '../constants/tree-files';

export class TreeActions {
    LOAD_NODES: string = 'LOAD_NODES';
    SET_NODES: string = 'SET_NODES';

    SET_SELECTED_NODE_PATH: string = 'SET_SELECTED_NODE_PATH';
    SET_SELECTED_NODE: string = 'SET_SELECTED_NODE';

    UPDATE_NODE_VALUE: string = 'UPDATE_NODE_VALUE';
    UPDATE_NODES: string = 'UPDATE_NODES';


    load(file: string = Object.keys(treeFiles)[0]): void {
        return {
            type: this.LOAD_NODES,
            payload: {file}
        };
    }

    updateNodeValue(value: string): void {
        return {
            type: this.UPDATE_NODE_VALUE,
            payload: {value}
        };
    }

    setSelectedNodePath(selectedNodePath: Array<number>): void {
        return {
            type: this.SET_SELECTED_NODE_PATH,
            payload: {
                selectedNodePath: selectedNodePath.reverse()
            }
        };
    }
}
