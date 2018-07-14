import React from 'react';
import Helloworld from './components/Helloworld';
import store from './store/store';
import './App.scss';
export default class App extends React.Component{
    render(){
        
        store.subscribe(() =>{
            console.log("HR web project deveolpers: ", store.getState());
        })
        store.dispatch({type:'FrontEnd', payload:"Hari"})
        store.dispatch({type:'BackEnd', payload:"Salman"})

        return (
            <div className='App'>
            <Helloworld />
            </div>
        );
    }
}
