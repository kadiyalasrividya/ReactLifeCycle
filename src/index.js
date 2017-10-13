import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/* import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'; */

class App extends React.Component {
    /* constructor(){
        super();
        console.log("----------------------constructor called------------------------------------");
    }
render(){
    console.log("----------------------Render called------------------------------------");
    return(
        <div>
        <h1>Hello</h1>
       
        </div>
    );
} */
    constructor(props) {
        super(props);
        this.state = {
           // todos: []
            users:[]
        }
    }
    /*componentDidMount() {
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/todos',
            success: (data) => {
                this.setState({
                    todos: data
                })
            }
        })
    }*/
    componentDidMount() {
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/users',
            success: (data) => {
                this.setState({
                    users: data
                })
            }
        })
    }
    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>AJAX Demo</h1>
                <hr />
                <table>
                    <thead>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    </thead>
                {
                        this.state.users.map((user) => {
                            return 
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                     </tbody>
                    
                        })
                    }        
                {/*<ul>
                    {
                        this.state.todos.map((todo) => {
                            return <li>{todo.title}</li>
                        })
                    }
                </ul>*/}
                </table>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));