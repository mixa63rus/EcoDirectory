import React, {Component} from 'react';
import { FormControl, FormGroup, InputGroup, Button, Glyphicon, Panel } from 'react-bootstrap';


export default class CustomForm extends Component {
    state ={
        open: false,
    }

    toggleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div className="customfinder">
                <form className="ford">
                    <FormGroup bsSize="small">
                        <InputGroup>
                            <FormControl type="text" placeholder="Что искать?" value={this.props.value} onChange={this.props.onChange} />
                            <InputGroup.Button>
                            <Button bsSize="small" type="submit" onClick={this.props.onClick}>
                                <Glyphicon glyph="search" />
                            </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </form>
                <ul className="list">
                    {this.props.data.map((elem, index) => elem.value.includes(this.props.value) ? 
                        <li key={index}>
                            <Panel id="collapsible-panel-example-3">
                                <Panel.Toggle componentClass="a">{elem.value}</Panel.Toggle>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        {elem.label}
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                    </li> : null)
                    }
                </ul>
            </div>
        )
    }
}