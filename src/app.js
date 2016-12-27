// @flow
import React from "react";
import Header from './components/header';
import Admin from './containers/admin.component';

export default class EditorContainer extends React.PureComponent {
//TODO
    render() {
        const {children} = this.props;
        return (
            <div>
                <Header />
                <Admin />
                {children}
            </div>
        );
    }
}