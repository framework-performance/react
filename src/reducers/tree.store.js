import {treeActions} from '../actions';
import {INode} from '../models';

export
interface ITreeStore {
    nodes: Array<INode>,
    nodesCount : number,
    selectedNodePath: Array<number>;
    selectedNode: INode;
    treeFile: string;
    showAnimation: boolean;
}

const INITIAL_STATE: ITreeStore = {
    nodes: [],
    nodesCount: 0,
    selectedNodePath: [],
    selectedNode: null,
    treeFile: '',
    showAnimation: false
};

export const treeStore = (state: ITreeStore = INITIAL_STATE,
    {type, payload}): ITreeStore => {
    switch (type) {
        case treeActions.LOAD_NODES:
            return Object.assign({}, INITIAL_STATE, {treeFile: payload.file});
        case treeActions.SET_NODES:
            return Object.assign({}, state, {
                nodes: payload.nodes,
                showAnimation: payload.showAnimation,
                nodesCount: payload.nodesCount
            });
        case treeActions.SET_SELECTED_NODE_PATH:
            return Object.assign({}, state, {selectedNodePath: payload.selectedNodePath});
        case treeActions.SET_SELECTED_NODE:
            return Object.assign({}, state, {selectedNode: payload.selectedNode});
        case treeActions.UPDATE_NODES :
            return Object.assign({}, state, {nodes: payload.nodes});
        case treeActions.UPDATE_NODE_VALUE :
            return Object.assign({}, state, {selectedNode: Object.assign({}, state.selectedNode, {value: payload.value})});

        default:
            return state;
    }
};