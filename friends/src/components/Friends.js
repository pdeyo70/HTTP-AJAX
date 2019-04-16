import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

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
                    <Card friends={this.state.friends} />
                </div>)
    }
}


export default Friends