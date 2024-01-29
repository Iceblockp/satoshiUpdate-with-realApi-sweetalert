import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from '../store/ContextProvider'

const EachLink = ({name,link}) => {
  const {press} = useContext(dataContext);
  return (
    <li>
      <Link to={`${link}`}>
    <div onClick={press} className=" py-[4.571px] ps-[46px] pr-[16px] text-[.875rem] hover:text-[#8957ff] select-none font-[600] text-[#cbd5e1] ">
    {name}
    </div>
    </Link>
  </li>
  )
}

export default EachLink