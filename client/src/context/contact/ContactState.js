import React, { useReducer } from "react"
import { v4 } from "uuid"
import ContactContext from "./contactContext"
import contactReducer from "./contactReducer"

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types"

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  const addContact = contact => {
    contact.id = v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT })
  }

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
