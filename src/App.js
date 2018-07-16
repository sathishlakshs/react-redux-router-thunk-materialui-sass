import React from 'react';
import Helloworld from './components/Helloworld';
import store from './store/store';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.scss';

const User=(props)=>{
    return (<h1>hai {props.username}</h1>);
}

export default class App extends React.Component{
    state={
        loggedIn:false
    };

    loginHandle=()=>{
        this.setState(prevState =>({
            loggedIn:!prevState.loggedIn
        }))
    }

    render(){
        
        store.subscribe(() =>{
            console.log("HR web project deveolpers: ", store.getState());
        })
        store.dispatch({type:'FrontEnd', payload:"Hari"})
        store.dispatch({type:'BackEnd', payload:"Salman"})

        return (
            <Router>
               <div>
                   <ul>
                        <li><NavLink to="/" exact activeStyle={{color:'green'}}>home</NavLink> </li>
                        <li><NavLink to="/ui" exact activeStyle={{color:'green'}}>frontend developer</NavLink> </li>
                        <li><NavLink to="/db" exact activeStyle={{color:'green'}}>backend developer</NavLink> </li>
                        <li><NavLink to="/user/marees" exact activeStyle={{color:'green'}}>user</NavLink> </li>
                   </ul>
                <Prompt
                    when={!this.state.loggedIn} message={(location)=>{
                        return location.pathname.startsWith('/user')? 'Are u sure?':true
                    }} />
                <input type='button' value={this.state.loggedIn?'log Out':'log In'} onClick={this.loginHandle}/>

                <Route path='/' exact strict render = {
                    ()=>{return(<h1>Welcome sathishlakshs</h1>)}
                }/>
                 <Route path='/ui' exact strict render = {
                    ()=>{return(<h1>Hai Hari</h1>)}
                }/>
                 <Route path='/db' exact strict render = {
                    ()=>{return(<h1>Hai salman</h1>)}
                }/>
                <Route path='/user/:username' exact strict render={
                    ({match})=>(this.state.loggedIn? (<User username={match.params.username} />) : (<Redirect to="/" />))}/>
                </div>
            </Router>
        );
    }
}
