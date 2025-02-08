import React from 'react'
import Caption from '../../components/Caption'
import { UsergroupDeleteOutlined } from '@ant-design/icons'

const Students = () => {
  return (
    <div className='p-5'>
    <Caption title={"O'quvchilar"} icon={<UsergroupDeleteOutlined />} count={21}/>
   </div>
  )
}

export default Students