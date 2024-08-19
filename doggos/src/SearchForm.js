import React from "react";


class SearchForm extends React.Component{
    constructor(){
        super()
        this.state={
            inputValue:''
        }
    }

    updateChange=(e)=>{
        let newVal =e.target.value
        this.setState({inputValue:newVal})
    }

    render(){
        return(
            <>
                <input onChange={this.updateChange} placeholder="Breed" value={this.state.inputValue}></input>
                <button  onClick={()=>this.props.searchDogs(this.state.inputValue)}>Submit</button>
            </>
        )
    }
}
export default SearchForm