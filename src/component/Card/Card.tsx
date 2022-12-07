import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react'
import { useState } from 'react'
import { createEmptyProfile, Profile } from '../../@types/profile'
import './Card.css'

interface CardProperty{
    onSave: () => void
    onCancel: () => void
    onColorChange: (start: any, end: any) => void
    profile: Profile
}

export const Card = ({onSave, onCancel, onColorChange, profile}: CardProperty): JSX.Element => {

    const [currentProfile, setCurrentProfile] = useState<Profile>(createEmptyProfile())

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
                <input defaultValue={profile.ipAddress} 
                    onChange={event => setCurrentProfile({...currentProfile, ipAddress: event.target.value})}
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
            </div>

            <div className="item">
                <div className="checkbox">
                    <label>
                        <input defaultChecked={profile.isAmbiantLight} 
                            onChange={event => setCurrentProfile({...currentProfile, isAmbiantLight: event.target.checked})}
                            type="checkbox" 
                        />
                        <span>Enable Ambiant Light Mode</span>
                        <small>*Take colors from screen</small>
                    </label>
                </div>
            </div>

            <div className="item colors">
                <span className='text-white' style={{fontSize: "25px"}}>Colors</span>
                <div className="color">
                    <input defaultValue={profile.start} 
                        onChange={event => setCurrentProfile({...currentProfile, start: event.target.value})}
                        type="color" 
                        onBlur={() => onColorChange(currentProfile.start, currentProfile.end)} 
                    />
                </div>
                <div className="color">
                    <input defaultValue={profile.end} 
                        onChange={event => setCurrentProfile({...currentProfile, end: event.target.value})}
                        type="color" 
                        onBlur={() => onColorChange(currentProfile.start, currentProfile.end)} 
                    />
                </div>
            </div>

            <div className="item inputs">
                <div className="input">
                    <label>Access Point</label>
                    <input defaultValue={profile.wifiAccessPoint} 
                        onChange={event => setCurrentProfile({...currentProfile, wifiAccessPoint: event.target.value})}
                        type="text" 
                        placeholder='Wifi Access Point' 
                        className="input"
                    />
                </div>
                <div className="input">
                    <label>Device Port</label>
                    <select className="input" style={{width: '180px', height: '41px'}}>
                        <option value="default">COM7</option>
                    </select>
                </div>
            </div>

            <div className="item">
                <div className="input">
                    <label>Wifi Password</label>
                    <input defaultValue={profile.wifiPassword} 
                        onChange={event => setCurrentProfile({...currentProfile, wifiPassword: event.target.value})}
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