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
                <h4><b>
                    <span style={{ color: "#FF0000"}}>С</span>
                    <span style={{ color: "#FF6600"}}>П</span>    
                    <span style={{ color: "#D0970B"}}>Р</span>    
                    <span style={{ color: "#008000"}}>А</span>    
                    <span style={{ color: "#00FFFF"}}>В</span>    
                    <span style={{ color: "#0000FF"}}>О</span>    
                    <span style={{ color: "#9933FF"}}>Ч</span>    
                    <span style={{ color: "#FF0000"}}>Н</span>    
                    <span style={{ color: "#FF6600"}}>И</span>    
                    <span style={{ color: "#D0970B"}}>К </span>    
                    <span style={{ color: "#008000"}}>П</span>    
                    <span style={{ color: "#00FFFF"}}>О </span>    
                    <span style={{ color: "#0000FF"}}>О</span>    
                    <span style={{ color: "#9933FF"}}>Т</span>    
                    <span style={{ color: "#FF0000"}}>Х</span>    
                    <span style={{ color: "#FF6600"}}>О</span>    
                    <span style={{ color: "#D0970B"}}>Д</span>    
                    <span style={{ color: "#008000"}}>А</span>    
                    <span style={{ color: "#00FFFF"}}>М</span>    
                </b></h4>
                <form className="ford">
                    <FormGroup bsSize="small">
                        <InputGroup>
                            <FormControl type="text" placeholder="Что искать?" value={this.props.value} onChange={this.props.onChange} autoFocus/>
                            <InputGroup.Button>
                            <Button bsSize="small" type="submit" onClick={this.props.onClick}>
                                <Glyphicon glyph="search" />
                            </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </form>
                <ul className="list">
                    {this.props.data.map((elem, index) => elem.value.toLowerCase().includes(this.props.value) ? 
                        <li key={index}>
                            <Panel id="collapsible-panel-example-3">
                                <Panel.Toggle componentClass="a">{elem.value}</Panel.Toggle>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        <p>{elem.label}</p>
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