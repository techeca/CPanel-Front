import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import Context from '../context/AlertContext'

export default function useAlert(){
    const {showAlert, message, setMessage} = useContext(Context)

  return {showAlert:showAlert, message:message, setMessage:setMessage}
}
