import 'react'
import './Light.css'
import { CSSProperties, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export const Light = ({style, onLightChange}: {style?: CSSProperties; onLightChange: (brightness: number) => void}): JSX.Element => {

    const [brightness, setBrightness] = useState<number>(10)
    const toHex = (n: number): string => (Math.floor((n * 255) / 100)).toString(16)

    return (
        <div className='light' style={style}>
            <div className='lightbulb' style={{boxShadow: `0px 0px 40px 10px #FFFFFF${toHex(brightness)} inset`}}>
                <FontAwesomeIcon icon={faLightbulb} size="4x" />
            </div>
            <div className="range">
                <div>
                    <FontAwesomeIcon icon={faMinus} />
                </div>
                <input type="range" defaultValue={brightness} onChange={(e) => setBrightness(+e.target.value)} onMouseUp={() => onLightChange(brightness)} />
                <div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    )
}