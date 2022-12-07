import './App.css'
import { useState } from 'react'
import { TitleBar } from './component/TitleBar/TitleBar'
import { LoadingScreen } from './component/LoadingScreen/LoadingScreen'
import { Sidenav } from './component/Sidenav/Sidenav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Card } from './component/Card/Card'
import Lottie from "lottie-react";
import EmptyAnimation from "./theme/animations/empty.json";
import { useDispatch, useSelector } from 'react-redux'
import { createEmptyProfile, Profile } from './@types/profile'
import { add, remove } from './store/profile/profiles.slice'
import { ConditionnalContainer } from './component/ConditionnalContainer/ConditionnalContainer'

function App() {

  const profiles = useSelector((state: any) => state.profiles.profiles) 
  const [loading, setLoading] = useState<boolean>(false)
  const currentProfile = useSelector((state: any) => state.profiles.currentProfile)
  const dispatch = useDispatch()
  const addProfile = () => dispatch(add(createEmptyProfile()))

  const removeProfile = (index: number) => dispatch(remove(index))

  const save = async () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div className='main-container'>
      <TitleBar />
      <LoadingScreen loading={loading} />
      <div className="content-grid">
        <div className="left">
          <Sidenav profile={currentProfile} />
        </div>
        <div className="main" style={{width: '100%', height: '100vh'}}>
          <div className='profile-container'>
            <div className="title text-white">
              <h1>Choose profile</h1>
              <div className="right">
                <div className="input icon">
                  <input type="text" className='input rounded' placeholder='Search' style={{width: '200px'}} />
                  <div className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
                <div className="create" onClick={addProfile}>
                  <span><FontAwesomeIcon icon={faPlus} size="2x" /></span>
                </div>
              </div>
            </div>
            <ConditionnalContainer condition={profiles.length} 
              renderOnFalse={
                <div style={{maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{maxWidth: '1000px'}}>
                    <Lottie animationData={EmptyAnimation} loop={true} />
                  </div>
                </div>
              } 
              renderOnTrue={
                <div className="cards">
                  {profiles.map((item: Profile, index: number) => <Card 
                    profile={item}
                    key={index} 
                    onSave={save} 
                    onCancel={() => removeProfile(index)} 
                    onColorChange={() => {}} 
                  />)}
                </div>} 
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
