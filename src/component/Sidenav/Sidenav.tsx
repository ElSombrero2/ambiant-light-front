import 'react'
import './Sidenav.css'
import { Light } from './components/Light/Light'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { Profile } from '../../@types/profile'
import { useEffect, useState } from 'react'
import { getClient } from '@tauri-apps/api/http';

interface SidenavProperty{
    profile: Profile
}


export const Sidenav = ({profile}: SidenavProperty): JSX.Element => {

    const [spotifyConnexion, setSpotifyConnexion] = useState<boolean>(false)

    const token = 'BQAYGBYuipYp-L30_GWpOUNRo-2Xa8PNIYPgO9-34lcubIP1i3KffFRgwk3s9zKcNtg_pdj8xcm_B10yXdIctIV6q9hqFKs_ivcguEaNniks9LkQY0F-L2oikkh-tzOUTHbyL-7-zbxiPHJsFfEtGkZHDNiC6d5p87Re2fxWSsVVoFzog5kRv4s8gsulgLJIZtXJN6YTOvtFpUDX_SA4VHs';

    const changeBrightness = async (brightness: number) => {
        try{
            const client = await getClient();
            const response = await client.get('http://192.168.1.116/brigthness?level=' + brightness);
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <div className='sidenav'>
            <Light onLightChange={changeBrightness} style={{marginTop: '60px'}} />
            <div className="divider"></div>
            <div className="input">
                <label>Animation</label>
                <select className="input" style={{width: '250px'}}>
                    <option value="default">Default</option>
                </select>
            </div>
            <div className="checkbox" style={{paddingRight: '28px'}}>
                <label>
                    <input type="checkbox" />
                    <span>From Current Playing Song</span>
                    <small>*Only if connected to Spotify</small>
                </label>
            </div>
            <div className="input">
                <label>Animation Delay</label>
                <input type="number" placeholder='BPM' className="input" style={{width: '220px'}} />
            </div>
            <div className="divider"></div>
            <strong className='text-white'>Device Reference</strong>
            <button disabled={spotifyConnexion} className="button green rounded full-width" style={{marginBottom: '60px'}}>
                <FontAwesomeIcon icon={faSpotify} />
                &nbsp;
                Spotify
            </button>
        </div>
    )
}