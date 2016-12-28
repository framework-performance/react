import React from "react";

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

    selectNode = () => {
        this.props.onSelectNode([]);
    };

    render() {
        const {
            node
        }   = this.props;
        return (
            <div onClick={this.selectNode}>{node.value}</div>
        );
    }
}


Node.propTypes = {
    node: React.PropTypes.object.isRequired,
    showAnimation: React.PropTypes.bool.isRequired,
    onSelectNode: React.PropTypes.func.isRequired
};
export default Node;