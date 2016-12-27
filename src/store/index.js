import {createStore, applyMiddleware} from 'redux'
import 'rxjs';
import {ROOT_REDUCER} from '../reducers'
import {TreeEpic} from "../epics/tree.epic";
import {createEpicMiddleware, combineEpics} from "redux-observable";


const store = (preloadedState) => {
    const treeEpic = new TreeEpic(),
        rootEpic = createEpicMiddleware(
            combineEpics(treeEpic.fetchTree, treeEpic.setSelectedNode, treeEpic.updateNode)),
        store = createStore(
            ROOT_REDUCER,
            process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(rootEpic)
        );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
};

export default store