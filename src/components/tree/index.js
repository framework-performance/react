import React from "react";
import Node from '../node';

class Tree extends React.PureComponent {
    selectNode(nodePath = [], index = 0) {
        this.props.onSelectTreeNode([...nodePath, index]);
    };

    render() {
        const {nodes, showAnimation} = this.props;
        return (
            <ul>
                {nodes.map((node, index) => {
                    return <li key={index}>
                        <Node
                            showAnimation={showAnimation}
                            node={node}
                            onSelectNode={(path) => this.selectNode(path,index)} />
                        <Tree
                            showAnimation={showAnimation}
                            nodes={node.nodes}
                            onSelectTreeNode={(path) => this.selectNode(path,index)} />
                    </li>
                })}
            </ul>
        );
    }
}

Tree.propTypes = {
    nodes: React.PropTypes.array.isRequired,
    showAnimation: React.PropTypes.bool.isRequired,
    onSelectTreeNode: React.PropTypes.func.isRequired
};
export default Tree;