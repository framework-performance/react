import React from "react";
import Node from '../node';
import './tree.css';

class Tree extends React.PureComponent {

    shouldComponentUpdate(nextProps) {
        if (nextProps.nodes !== this.props.nodes) {
            return true;
        }
        if (nextProps.showAnimation !== this.props.showAnimation) {
            return true;
        }
        return false;
    }

    render() {
        const {nodes, showAnimation,onSelectTreeNode} = this.props;
        return (
            <ul className="tree">
                {nodes.map((node, index) => {
                    return <li key={index}>
                        <Node
                            showAnimation={showAnimation}
                            node={node}
                            onSelectNode={(path) => onSelectTreeNode([...path, index])}/>
                        <Tree
                            showAnimation={showAnimation}
                            nodes={node.nodes}
                            onSelectTreeNode={(path) => onSelectTreeNode([...path, index])}/>
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