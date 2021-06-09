import React from 'react';
import { Button } from 'react-bootstrap';
class Onglet extends React.Component {
    constructor() {
        super();
        this.state = { obj: "" }
    }
    render() {
        return (
            <div>
                <Button
                    active={this.props.isSelected}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </Button>
            </div>
        )
    }
}
export default Onglet