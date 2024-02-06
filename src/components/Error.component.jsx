import React, { useEffect } from 'react'
import { MdError } from "react-icons/md";
import Swal from 'sweetalert2'

const ErrorComponent = ({children,footer}) => {

  useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: children,
      footer,
    });
  },[])
 
 
}

export default ErrorComponent