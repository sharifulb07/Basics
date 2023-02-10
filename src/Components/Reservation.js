import React from "react";

class Reservation extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberOfGuests:3,

        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        const target=e.target;
        const value=target.type==="checkbox"? target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        alert("You have submitted your projected data here ");
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>isGoing
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                        />

                        <input
                        name="numberOfGuests"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.numberOfGuests}
                        />

                </label>
            </form>
        )
    }

    
}

export default Reservation;