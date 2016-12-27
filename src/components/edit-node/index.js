import React from "react";

class EditNode extends React.PureComponent {

    updateNodeValue(event): void {
        this.props.onUpdateNode(event.target.value);
    }

    render() {

        const {node} = this.props;
        return (
            <div >
                <h4>edit Node</h4>
                <input value={node.value} onChange={this.updateNodeValue.bind(this)}/>
            </div>
        );
    }
}

EditNode.propTypes = {
    node: React.PropTypes.object.isRequired,
    onUpdateNode: React.PropTypes.func.isRequired
};
export default EditNode;