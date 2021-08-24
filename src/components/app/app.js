import React, { Component } from 'react'
import Header from '../header'
import TabPanel from '../tab-panel'
import Grid from '../grid'
import './app.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends Component {
  state = {
    gridData : {
        leftData: [
            {id: 0, title: 'Left 0'},
            {id: 1, title: 'Left 1'},
            {id: 2, title: 'Left 2'},
        ],
        middleData: [
            {id: 3, title: 'Middle 0'},
            {id: 4, title: 'Middle 1'},
            {id: 5, title: 'Middle 2'},
        ],
        rightData: [
            {id: 6, title: 'Right 0'},
            {id: 7, title: 'Right 1'},
            {id: 8, title: 'Right 2'},
        ]
    }
  };  
  onMoveTo = ( id , position, direction) =>{
      this.setState(({ gridData }) => {
        const currentData = gridData[position + "Data"]
        const idx = currentData.findIndex((el) => el.id === id)
        const currentItem = currentData.find((el) => el.id === id)
        const newArray = [
          ...currentData.slice(0,idx),
          ...currentData.slice(idx + 1)
        ]
        let leftData = gridData.leftData
        let middleData = gridData.middleData
        let rightData = gridData.rightData

        if (position === "left" ){
          leftData = newArray
          middleData = [...middleData, currentItem]
        }

        if (position === "right" ){
          rightData = newArray
          middleData = [...middleData, currentItem]
        } 
        
        if (position === "middle" ){
          middleData = newArray
          if(direction === "left")
            leftData = [...leftData, currentItem]
          else
            rightData = [...rightData, currentItem]
        } 

        return {
          gridData: {
            leftData: leftData,
            middleData: middleData,
            rightData : rightData
          }
        }
      })
  }

  render() {
      const { gridData }  = this.state
      const leftData  = gridData.leftData 
      const middleData = gridData.middleData 
      const rightData = gridData.rightData 

      return (<div>
                <Router>
                  <div className="stardb-app">
                    <Header />
                    <div className = "info">
                        <Grid gridData={ leftData }  isInfo = { true} isLeft = { true } pageName = { "Left Page" }
                          onMoveTo = { this.onMoveTo }
                        />
                        <Grid gridData={ middleData}  isInfo = { true}  isMiddle = { true } pageName = { "Middle Page" }
                          onMoveTo = { this.onMoveTo }
                        />
                        <Grid gridData={ rightData }   isInfo = { true} isRight = { true } pageName = { "Right Page" }
                          onMoveTo = { this.onMoveTo }
                        />
                    </div>                   
                          
                    <TabPanel />                  

                    <Route    path ="/" 
                               render = {() => {return <Grid  gridData={ leftData }  isLeft = { true } pageName = { "Left Page" }
                                                              onMoveTo = { this.onMoveTo }
                                                        />} } 
                    exact />
                    <Route    path="/left/" 
                              render = {() => {return <Grid   gridData={ leftData }  isLeft = { true } pageName = { "Left Page" }
                                                              onMoveTo = { this.onMoveTo }
                                                      />} } 
                    />

                    <Route    path="/middle/" 
                              render = {() => {return <Grid  gridData={ middleData } isMiddle = { true }  pageName = { "Middle Page" }
                                                            onMoveTo = { this.onMoveTo }
                                                        />} }   
                      />
                    <Route    path="/right/"  render = {() => {return <Grid  gridData={ rightData } isRight = { true }  pageName = { "Right Page" }
                                                                              onMoveTo = { this.onMoveTo } 
                                                                        />} } 
                     />
                  </div>
              </Router>
            </div>
      )
    
  }
}
