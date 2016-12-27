import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {treeActions} from '../actions';
import Tree from '../components/tree';

class BasicContainer extends React.PureComponent {

    selectNode(path) {
        this.props.setSelectedNodePath(path);
    }

    render() {
        const {nodes, showAnimation} = this.props;
        return (
            <div>
                <Tree nodes={nodes}
                      showAnimation={showAnimation}
                      onSelectTreeNode={this.selectNode.bind(this)}/>
                Basic Tree
            </div>
        );
    }
}

BasicContainer.propTypes = {
    nodes: PropTypes.array,
    showAnimation: PropTypes.bool.isRequired,
    setSelectedNodePath: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        nodes: state.tree.nodes,
        showAnimation: state.tree.showAnimation
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNodePath: (path: string[]) => dispatch(treeActions.setSelectedNodePath(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer);