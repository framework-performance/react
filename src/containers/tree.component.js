import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {treeActions} from '../actions';
import Tree from '../components/tree';

class TreeContainer extends React.PureComponent {

    render() {
        const {nodes, showAnimation, setSelectedNodePath} = this.props;
        return (
            <div>
                <Tree nodes={nodes}
                      showAnimation={showAnimation}
                      onSelectTreeNode={(path) => setSelectedNodePath(path)}/>
            </div>
        );
    }
}

TreeContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);