import React from 'react';
import { FormControl, FormGroup, InputGroup, Button, Glyphicon } from 'react-bootstrap';


export default function MainForm({ onClick, value, onChange}) {
    return (
        <div className="mainfinder">
            <form>
                <FormGroup bsSize="large">
                    <InputGroup>
                        <FormControl type="text" placeholder="Что искать?" value={value} onChange={onChange} />
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
