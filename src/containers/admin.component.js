import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {treeActions} from '../actions';
import {treeFiles} from '../constants/tree-files';
import EditNode from '../components/edit-node';

class AdminContainer extends React.PureComponent {

    componentWillMount() {
        this.props.load();
    }

    render() {
        const {selectedNode, nodesCount, updateNodeValue, load} = this.props;
        let editNode = selectedNode
            ? <EditNode node={selectedNode} onUpdateNode={ (value) => updateNodeValue(value)}/>
            : null;
        return (
            <div>
                <select onChange={(event) => load(event.target.value)}>
                    {Object.keys(treeFiles).map((file) => {
                        return <option key={file} value={file}>{file}</option>
                    })}
                </select>
                <p>Nodes {nodesCount}</p>
                <p>click on Node for edit</p>
                {editNode}
            </div>
        );
    }
}

AdminContainer.propTypes = {
    selectedNode: PropTypes.object,
    nodesCount: PropTypes.number.isRequired,
    load: PropTypes.func.isRequired,
    updateNodeValue: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        selectedNode: state.tree.selectedNode,
        nodesCount: state.tree.nodesCount,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (file: string) => dispatch(treeActions.load(file)),
        updateNodeValue: (value: string) => dispatch(treeActions.updateNodeValue(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);