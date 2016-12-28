import React from "react";
import './node.css';

class Node extends React.PureComponent {

    shouldComponentUpdate(nextProps) {
        if (nextProps.node !== this.props.node) {
            return true;
        }
        if (nextProps.showAnimation !== this.props.showAnimation) {
            return true;
        }
        return false;
    }

    render() {
        const {
            node,
            onSelectNode
        }   = this.props;
        return (
            <div className="node" onClick={() => onSelectNode([])}>{node.value}</div>
        );
    }
}

Node.propTypes = {
    node: React.PropTypes.object.isRequired,
    showAnimation: React.PropTypes.bool.isRequired,
    onSelectNode: React.PropTypes.func.isRequired
};
export default Node;