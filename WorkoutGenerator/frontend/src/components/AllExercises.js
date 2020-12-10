import React from 'react';
import MovementList from './MovementList.js';
import './index.css';
import Description from './Description.js';
import InfoButton from './InfoButton.js';
import PdfButton from './PdfButton.js';


class AllExercises extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            movements: [],
            movement_buttons_colors: Array(12).fill(null),
            color: 'blue'
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/app/movement_list/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movements: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
            
    editing_chosen_movements (lower_margin, upper_margin, button_color_index){
        this.setState(({movement_buttons_colors}) => {
            const buttons = [...this.state.movement_buttons_colors];

            for (let i = lower_margin; i < upper_margin; i++){
                buttons[i] = null;
            }

            buttons[button_color_index] = this.state.color;
            return ({movement_buttons_colors: buttons})
        })
    }

    handleClick = (chosen_exercise, button_color_index) => {
        console.log("Element: " + button_color_index);
        if(!this.state.movement_buttons_colors.includes(this.state.color)){
            console.log("Pierwszy if")
            this.setState(({movement_buttons_colors}) => {
                const buttons = [...this.state.movement_buttons_colors];
                buttons[button_color_index] = this.state.color;
                return ({movement_buttons_colors: buttons})
            })
        } else if (button_color_index < 3){
            console.log("Drugi if");

            this.editing_chosen_movements(0, 3, button_color_index);

        } else if ((button_color_index >= 3 && button_color_index < 6)){
            console.log("Trzeci if");

            this.editing_chosen_movements(3, 6, button_color_index);

        }  else if ((button_color_index >= 6 && button_color_index < 9)){
            console.log("Czwarty if");

            this.editing_chosen_movements(6, 9, button_color_index);

        }  else if ((button_color_index >= 9 && button_color_index < 12)){
            console.log("Piaty if");

            this.editing_chosen_movements(9, 12, button_color_index);
        }
    }


    render() {
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;


        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return(
                <div>
                    <div><Description name="Exercise suggestions:" /></div>
                    <div className="suggestions_board">
                        <MovementList
                                onClick={this.handleClick.bind(this)}
                                movement_suggestions={this.state.movements}
                                buttons_colors={this.state.movement_buttons_colors}
                            />
                    </div>
                    <div className="info">
                        <InfoButton 
                        
                        />
                    </div>
                    <div className="PDF">
                        <PdfButton

                        />
                    </div>
                </div>
            );
        }
    };
}
export default AllExercises;