
import React from 'react'
import { useContext } from 'react'
import { Context } from "../context/Context"

const GetToken = () => {
    const {token, setToken, collapsed, setCollapsed} = useContext(Context)
  return { token, setToken, collapsed, setCollapsed }
}

export default GetToken