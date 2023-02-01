import React from "react";
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import './TaskList.css'
import listReducer from "./reducers/listReducer";
const SAVED_ITEMS = "SAVED_ITEMS"


function TaskList() {

  function saveState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
  }
  function loadState() {
    const StorageState = (localStorage.getItem(SAVED_ITEMS))
    if (!StorageState) return undefined
    if (StorageState) return JSON.parse(StorageState)

  }
  const store = configureStore({ reducer: listReducer, preloadedState: loadState() })
  store.subscribe(() => {
    saveState(store.getState())
  })
  return (
    <Provider store={store}>
      <div className="container">

        <Header></Header>

        <Form></Form>
        <List></List>
      </div>
    </Provider>
  )
}

export default TaskList
