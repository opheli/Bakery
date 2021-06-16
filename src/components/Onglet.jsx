import React from 'react';

class Onglet extends React.Component {
    constructor() {
        super();
        this.state = { obj: "" }
    }
    render() {
        return (
            <span>
                <button
                    type="button"
                    active={this.props.isSelected}
                    onClick={this.props.onClick}
                    className="btn btn-info m-1">
                    {this.props.children}
                </button>
            </span>

        )
    }
}
export default Onglet

// active={this.props.isSelected ? 'btn btn-info' : 'btn btn-dark'}