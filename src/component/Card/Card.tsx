import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { createEmptyProfile, Profile } from '../../@types/profile'
import { hexToRgb } from '../../utils'
import './Card.css'

interface CardProperty{
    onSave: () => void
    onCancel: () => void
    onColorChange: (colors: any[]) => void
    profile: Profile
}

export const Card = ({onSave, onCancel, onColorChange, profile}: CardProperty): JSX.Element => {

    const ports = useSelector((state: any) => state.ports.ports)
    const [currentProfile, setCurrentProfile] = useState<Profile>(createEmptyProfile())
    const [colorsCount, setColorsCount] = useState<number>(1)
    const colorsRefs: any = useRef<HTMLFormElement>()

    const changeColors = () => {
        const inputs = (colorsRefs.current as HTMLFormElement).elements
        const colors = []
        for(let i = 0; i < inputs.length; i++)
            colors.push(hexToRgb((inputs.item(i) as HTMLInputElement).value))
        onColorChange(colors)
    }
    
    const changeColorCount = (e: ChangeEvent<HTMLInputElement>) => {
        const count = +e.target.value
        if(count < 1) setColorsCount(1)
        else if(count > 5) setColorsCount(4)
        else setColorsCount(count)
        changeColors()
    }

    const getColors = (count: number) => {
        const elems = []
        for(let i = 0; i < count; i++) elems.push('#ffffff')
        return elems
    }

    return (
        <div className="card">
            <div className="header item">
                <input defaultValue={profile.name} 
                    onChange={event => setCurrentProfile({...currentProfile, name: event.target.value})} 
                    type="text" 
                    placeholder='Your Profile Name' 
                    className="card-title" 
                />
                <div className="remove" onClick={onCancel}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} style={{fontSize: '20px'}} />
                    </span>
                </div>
            </div>

            <div className="ip-address item">
                <input defaultValue={profile.ip_address} 
                    onChange={event => setCurrentProfile({...currentProfile, ip_address: event.target.value})}
                    type="text" 
                    className='ip-input' 
                    placeholder='Eg: 192.168.0.112' 
                />
                <span>IP</span>
            </div>

            <div className="parameters item">
                <div className="switch">
                    <label>
                        <input defaultChecked={profile.light} 
                            onChange={event => setCurrentProfile({...currentProfile, light: event.target.checked})}
                            type="checkbox" 
                            className='switch' 
                        />
                        <span style={{left: '13px'}}>Off</span>
                        <div className="toggler"></div>
                        <span style={{right: '13px'}}>On</span>
                    </label>
                </div>
                <div className="input">
                    <input placeholder='Colors'
                        min={1} 
                        max={4} 
                        onChange={changeColorCount}
                        style={{height: '15px', width: '150px'}} 
                        type="number" 
                        className="input" 
                    />
                </div>
            </div>

            <div className="item">
                <div className="checkbox">
                    <label>
                        <input defaultChecked={profile.is_ambiant_light} 
                            onChange={event => setCurrentProfile({...currentProfile, is_ambiant_light: event.target.checked})}
                            type="checkbox" 
                        />
                        <span>Enable Ambiant Light Mode</span>
                        <small>*Take colors from screen</small>
                    </label>
                </div>
            </div>

            <div className="item colors">
                <span className='text-white' style={{fontSize: "25px"}}>Colors</span>
                <form ref={colorsRefs} style={{display: 'flex', gap: '5px'}}>
                    {
                        getColors(colorsCount).map((color, index) => 
                            <div className="color" key={index}>
                                <input type="color" 
                                    defaultValue={color}
                                    onBlurCapture={changeColors}
                                />
                            </div>       
                        )
                    }
                </form>
            </div>

            <div className="item inputs">
                <div className="input">
                    <label>Access Point</label>
                    <input defaultValue={profile.wifi_access_point} 
                        onChange={event => setCurrentProfile({...currentProfile, wifi_access_point: event.target.value})}
                        type="text" 
                        placeholder='Wifi Access Point' 
                        className="input"
                    />
                </div>
                <div className="input">
                    <label>Device Port</label>
                    <select className="input" style={{width: '180px', height: '41px'}}>
                        {ports.map((port: string, index: number) => <option key={index} value={port}>{port}</option>)}
                    </select>
                </div>
            </div>

            <div className="item">
                <div className="input">
                    <label>Wifi Password</label>
                    <input defaultValue={profile.wifi_password} 
                        onChange={event => setCurrentProfile({...currentProfile, wifi_password: event.target.value})}
                        type="password" 
                        placeholder='Wifi Password' 
                        className="input" 
                        style={{width: '360px'}} 
                    />
                </div>
            </div>

            <div className="action">
                <button className="button gray" onClick={onCancel}>
                    Cancel
                </button>
                <button className="button blue" onClick={onSave}>
                    Save
                </button>
            </div>
        </div>
    )
}