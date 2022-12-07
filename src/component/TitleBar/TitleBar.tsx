import 'react'
import './TitleBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faWindowMinimize, faXmark, faWindowMaximize, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { appWindow } from '@tauri-apps/api/window'

export const TitleBar = (): JSX.Element => {

    const [isMaximized, setIsMaximized] = useState<boolean>(false)

    const toggleMaximize = async () => {
        await appWindow.toggleMaximize()
        setIsMaximized(await appWindow.isMaximized())
    }

    appWindow.onResized(async () => setIsMaximized(await appWindow.isMaximized()))

    return (
        <div className='title-bar' data-tauri-drag-region>
            <div className="title">
                <FontAwesomeIcon icon={faLightbulb} /> 
                &nbsp;
                My App
            </div>

            <div className="buttons">
                <button className="title-button" onClick={() => appWindow.minimize()}>
                    <FontAwesomeIcon icon={faWindowMinimize} />
                </button>
                <button className="title-button" onClick={toggleMaximize}>
                    <FontAwesomeIcon icon={(isMaximized) ? faWindowRestore : faWindowMaximize} />
                </button>
                <button className="title-button red" onClick={() => appWindow.close()}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        </div>
    )
}