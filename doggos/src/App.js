import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const fetchDogs=(breed)=>{
    return axios
        .get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((resp)=>{
            return resp
        })
        .catch(
            (err)=>console.log("nooooo")
        )
}

class app extends React.Component{
    constructor(){
        console.log("Constructor Ran")
        super()
        this.state={
            doggos:[],
            currentBreed:""
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log('Component Did Update')
        // if(prevState!==this.state.doggos){
        //     console.log('doggos have changed')
        //     if(this.state.currentBreed==='chihuahua'){
        //         console.log('ewww its a chihuahua...')
        //         fetchDogs("husky")
        //             .then(resp=>{
        //                 this.setState({
        //                     doggos:resp.data.message,
        //                     currentBreed:'husky'
        //                 })
        //             })
        //     }
        // }
    }

    componentDidMount(){
        console.log('Component Did Mount')
        fetchDogs(this.state.currentBreed)
            .then(resp => {
                this.setState({
                    doggos:resp.data.message
                })
            })
    }

    searchDogs=dogName=>{
        console.log('Search Dogs')


        fetchDogs(dogName)
            .then(res=>{
                this.setState({doggos: res.data.message, currentBreed:dogName})
            })
            .catch(err=>{
                console.log("Couldn't Find: ", dogName)
                this.setState({doggos:[], currentBreed:"husky"})
                console.log(err.data.message)
            })
    }

    render(){
        console.log("Rendering")
        return(
            <>
                <h1>My App</h1>
                <SearchForm searchDogs={this.searchDogs}></SearchForm>
                {this.state.doggos.map((pic,idx)=>{
                    return <img width={'200px'} key={idx} src={pic}></img>
                })}
            </>
        )
    }
}
export default app