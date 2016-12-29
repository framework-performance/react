import React from "react";
import './edit-node.component.css';

class EditNode extends React.PureComponent {

    updateNodeValue(event): void {
        this.props.onUpdateNode(event.target.value);
    }

    render() {

        const {node} = this.props;
        return (
            <div className="editor">
                <input type="text" value={node.value} onChange={this.updateNodeValue.bind(this)}/>
            </div>
        );
    }
}

EditNode.propTypes = {
    node: React.PropTypes.object.isRequired,
    onUpdateNode: React.PropTypes.func.isRequired
};
export default EditNode;