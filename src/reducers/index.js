import {combineReducers} from 'redux';
import {treeStore, ITreeStore} from './tree.store';

export interface IAppState {
    tree?: ITreeStore;
}

export const ROOT_REDUCER = combineReducers({
    tree: treeStore
});
