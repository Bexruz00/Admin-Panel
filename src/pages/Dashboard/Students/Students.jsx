import React from 'react'
import Caption from  '../../../components/Caption'
import { UsergroupAddOutlined } from '@ant-design/icons'
import StudentDash from '../../../components/StudentDash'
import { PATH } from '../../../hooks/path'
import getRequest from '../../../service/getRequest'

const Students = () => {
  const studentsList = getRequest("/students")
  return (
    <div className='p-5'>
      <Caption addLink={`${PATH.studentsAdd}`} title={"O'quvchilar"} icon={<UsergroupAddOutlined />} count={studentsList.length} />
      <StudentDash groupId={null} removeAddBtn={true}/>
    </div>
  )
}

export default Students