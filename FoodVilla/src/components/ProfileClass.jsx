import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        // create state here
        this.state = {
            count: 0,
            count2: 0,
            userInfo: {
                name: "Dummy name",
                location: "Dummy location"
            }
        }
        console.log("Constructor") //1
    }

    async componentDidMount() {
        // Best place to make an Api calls
        console.log("componentDidMount") //3
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("Component did update ")
    }

    componentWillUnmount() {
        console.log("Component unmount")
    }

    render() {
        console.log("render") //2
        return (
            <div>
                <h1>Class Component</h1>
                <h2>name: {this.state.userInfo.name}</h2>
                <h2>count: {this.state.count}</h2>
                <h2>location: {this.state.userInfo.location}</h2>
                <button onClick={() => {
                    // we do not mutate state directly
                    // never do this.state.count = 1
                    this.setState({count: this.state.count+1})
                }}>SetCount</button>
            </div>
            
        )
    }
}

export default Profile