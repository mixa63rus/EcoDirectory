import React from 'react';
import { FormControl, FormGroup, InputGroup, Button, Glyphicon } from 'react-bootstrap';


export default function MainForm({ onClick, value, onChange}) {
    return (
        <div className="mainfinder">
            <h1><b>
                <span style={{ color: "#FF0000"}}>С</span>
                <span style={{ color: "#FF6600"}}>П</span>    
                <span style={{ color: "#FFFF00"}}>Р</span>    
                <span style={{ color: "#008000"}}>А</span>    
                <span style={{ color: "#00FFFF"}}>В</span>    
                <span style={{ color: "#0000FF"}}>О</span>    
                <span style={{ color: "#9933FF"}}>Ч</span>    
                <span style={{ color: "#FF0000"}}>Н</span>    
                <span style={{ color: "#FF6600"}}>И</span>    
                <span style={{ color: "#FFFF00"}}>К </span>    
                <span style={{ color: "#008000"}}>П</span>    
                <span style={{ color: "#00FFFF"}}>О </span>    
                <span style={{ color: "#0000FF"}}>О</span>    
                <span style={{ color: "#9933FF"}}>Т</span>    
                <span style={{ color: "#FF0000"}}>Х</span>    
                <span style={{ color: "#FF6600"}}>О</span>    
                <span style={{ color: "#FFFF00"}}>Д</span>    
                <span style={{ color: "#008000"}}>А</span>    
                <span style={{ color: "#00FFFF"}}>М</span>    
            </b></h1>
            <form>
                <FormGroup bsSize="large">
                    <InputGroup>
                        <FormControl type="text" placeholder="Что искать?" value={value} onChange={onChange} autoFocus/>
                        <InputGroup.Button>
                        <Button bsSize="large" type="submit" onClick={onClick}>
                            <Glyphicon glyph="search" />
                        </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        </div>
    )
}
