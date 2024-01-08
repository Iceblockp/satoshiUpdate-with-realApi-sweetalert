import React from 'react'
import { Link } from 'react-router-dom'

const EachLink = ({name,link}) => {
  return (
    <li>
    <div className=" py-[4.571px] ps-[46px] pr-[16px] text-[.875rem] hover:text-[#8957ff] select-none font-[600] text-[#cbd5e1] ">
    <Link to={`${link}`}>{name}</Link>
    </div>
  </li>
  )
}

export default EachLink