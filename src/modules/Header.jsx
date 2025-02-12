import React, { useState } from 'react'
import {Logo} from "../assets/icons"
import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import GetToken from "../hooks/GetToken"

const Header = () => {
    const [logOut, setLogOut] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const {setToken, collapsed, setCollapsed } = GetToken()
    const navigate = useNavigate()

    function handleLogOut(){
        setIsloading(true)
        setTimeout(() => {
            localStorage.clear
            navigate("/")
            setToken(null)
            setIsloading(false)
        },1000)
    }
  return (
    <div className='flex items-center justify-between bg-[#01152a]'>
        <div className={`w-[22%] ${collapsed ? "w-[100px]" : "w-[22%]"} flex items-center gap-5 p-4 main-color`}>
            <Logo/>
            <span className={`text-white ${collapsed && "hidden opacity-0"} text-[20px]` }>Administratsita</span>
        </div>
        <div className={` ${collapsed ? "w-full" : "w-[78%]"} flex items-center justify-between text-white px-[10px]`}>
            <button onClick={() => setCollapsed(!collapsed)}> {collapsed ? <MenuUnfoldOutlined className='text-[28px]'/> :  <MenuFoldOutlined className='text-[28px]'/>}</button>
            <div className='flex gap-5'>
                <Tooltip placement='bottom' title={"Oxirgi ma'lumot yangilanish vaqti: 8 Fev, 2025 15:00"}>
                    <Button size='middle' icon={<InfoCircleOutlined/>} iconPosition='left' type='default' >Sinxronlash</Button>
                </Tooltip>
                <Badge count={7} color='red' size='default'>
                     <Button size='middle' icon={<BellOutlined />} iconPosition='left' type='default' ></Button>
                </Badge>
                <button onClick={() => setLogOut(true)} className='flex items-center justify-between gap-2 cursor-pointer'>
                    <span>Chiqish</span>
                    <LogoutOutlined />
                </button>
            </div>
        </div>
        <Modal  confirmLoading={isLoading} open={logOut} onCancel={() => setLogOut(false)} onOk={handleLogOut} title="Chiqish">
            <p className='text-[16px]'>Chiqishni xohlaysizmi ?</p>
        </Modal>
    </div>
  )
}

export default Header