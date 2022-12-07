import 'react'
import './LoadingScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export const LoadingScreen = ({loading}: {loading: boolean}): JSX.Element => {
    return (
        <div className='loading-screen' style={{display: loading ? 'flex' : 'none'}}>
            <FontAwesomeIcon icon={faLightbulb} size={'10x'} />
            <div className="three-dot">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}