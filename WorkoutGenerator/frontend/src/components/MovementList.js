import React from 'react';
import './index.css';
import { Button } from 'antd';



class MovementList extends React.Component {
    renderMovement(movement){
        return(
            <>
                <Button 
                    type="dashed"
                    onClick={() => this.props.onClick(movement.first_variation, (movement.id*3 - 3))}
                    style={{ backgroundColor: this.props.buttons_colors[(movement.id*3 - 3)]}}
                    block
                    >
                        {movement.first_variation}
                </Button>
                <Button 
                    type="dashed"
                    onClick={() => this.props.onClick(movement.second_variation, (movement.id*3 - 2))}
                    style={{ backgroundColor: this.props.buttons_colors[(movement.id*3 - 2)]}}
                    block
                    >
                        {movement.second_variation}
                </Button>
                <Button 
                    type="dashed"
                    onClick={() => this.props.onClick(movement.third_variation, (movement.id*3 - 1))}
                    style={{ backgroundColor: this.props.buttons_colors[(movement.id*3 - 1)]}}
                    block
                    >
                        {movement.third_variation}
                </Button>
            </>
        );
    }
    

    render() {
        return(
            <div className="suggestions_board">
                {this.props.movement_suggestions.map((movement) =>
                    <div>
                        <div className="MovementNames_first">{movement.movement_name}</div>
                        <div>{this.renderMovement(movement)}</div>
                        <p></p>
                    </div>
                )}
            </div>
        )
    }
}
export default MovementList