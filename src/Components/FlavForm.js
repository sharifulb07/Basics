import React from "react";
class FlavForm extends React.Component{

    constructor(props){
        super(props);
        this.state={value:"coconut"};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    

    handleSubmit(e){
        e.preventDefault();
        alert("You have submitted  "+this.state.value);
 

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Choose your Favourite Fruits here  <br></br>
                <select onChange={this.handleChange}>
                <option value="grape">Grape</option>
                <option value="mango">Mango</option>
                <option value="jam">Jam</option>
                <option value="coconut">Coconut</option>

                </select>
                <input type="submit" value="submit" />
                </label>
            </form>
        )
    }



}

export default FlavForm;