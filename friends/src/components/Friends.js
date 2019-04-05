import React, { Component } from 'react'
import axios from 'axios'
import CardCont from './CardCont'

class Friends extends Component {
    constructor(props) {
        super(props) 
        this.state = { friends: [], }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then(res => this.setState({friends: res.data}))
        .catch((err) => console.log(err))
    }

    render() {
        return  (<div>
                    <CardCont index={this.state.id} name={this.state.name} age={this.state.age} email={this.state.email} />
                </div>)
    }
}


export default Friends