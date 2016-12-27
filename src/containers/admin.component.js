import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {treeActions} from '../actions';
import {treeFiles} from '../constants/tree-files';
import EditNode from '../components/edit-node';

class AdminContainer extends React.PureComponent {

    componentWillMount() {
        this.props.load();
    }

    changeTree(event) {
        this.props.load(event.target.value);
    }

    updateNodeValue(value: string) {
        this.props.updateNodeValue(value);
    }

    render() {
        const {selectedNode} = this.props;
        let editNode = selectedNode
            ? <EditNode node={selectedNode} onUpdateNode={this.updateNodeValue.bind(this)}/>
            : null;
        return (
            <div>
                <select onChange={this.changeTree.bind(this)}>
                    {Object.keys(treeFiles).map((file) => {
                        return <option key={file} value={file}>{file}</option>
                    })}
                </select>
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