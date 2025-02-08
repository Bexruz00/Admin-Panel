import React from 'react'
import Caption from '../../components/Caption'
import { CodeSandboxOutlined } from '@ant-design/icons'

const Groups = () => {
  return (
    <div className='p-5'>
    <Caption title={"Guruhlar"} icon={<CodeSandboxOutlined  />} count={10}/>
   </div>
  )
}

export default Groups