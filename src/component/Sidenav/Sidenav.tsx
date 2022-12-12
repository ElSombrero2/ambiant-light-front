import 'react'
import './Sidenav.css'
import { Light } from './components/Light/Light'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { Profile } from '../../@types/profile'
import { useEffect, useState } from 'react'
import { Body, getClient } from '@tauri-apps/api/http';
import { Animation } from '../../@types/animations'

interface SidenavProperty{
    profile: Profile
}


export const Sidenav = ({profile}: SidenavProperty): JSX.Element => {

    const [spotifyConnexion, setSpotifyConnexion] = useState<boolean>(false)

    const [token, setToken] = useState<string|null>(null);

    const changeBrightness = async (brightness: number) => {
        try{
            const client = await getClient();
            const response = await client.get('http://192.168.1.116/brightness?level=' + brightness);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if(token){
            const script = document.createElement("script");
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;

            document.body.appendChild(script);

            window.onSpotifyWebPlaybackSDKReady = () => {

                const player = new window.Spotify.Player({
                    name: 'Ambiant Light',
                    getOAuthToken: cb => { cb(token || ''); },
                    volume: 0.5
                });

                player.addListener('ready', ({ device_id }) => {
                    console.log('Ready with Device ID', device_id);
                });

                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });

                player.addListener('player_state_changed', async (state) => {
                    const client = await getClient();
                    const id = state.context.metadata?.current_item.uri.split(':')[2]

                    const track: any = (await client.get('https://api.spotify.com/v1/audio-features/' + id, {headers: {
                        'Authorization': 'Bearer ' + token
                    }})).data

                    const bpm = Math.ceil((track.tempo * track.energy) / track.time_signature)

                    console.log(bpm)

                    const response = await client.post('http://192.168.1.116/song', undefined, {
                        body: Body.json({
                            duration: Math.floor(state.duration / 1000),
                            time: Math.floor(state.position / 1000),
                            title: state.context.metadata?.current_item.name,
                            artist: state.context.metadata?.current_item.artists[0].name,
                            bpm
                        })
                    }); 
                });

                player.connect();
            }
        };
    }, [token])
    
    return (
        <div className='sidenav'>
            <Light onLightChange={changeBrightness} style={{marginTop: '60px'}} />
            <div className="divider"></div>
            <div className="input">
                <label>Animation</label>
                <select defaultValue={profile.setting.animation} className="input" style={{width: '250px'}}>
                    <option value={Animation.NONE}>Default</option>
                    <option value={Animation.BLINK}>Blink</option>
                    <option value={Animation.SNAKE}>Snake</option>
                    <option value={Animation.COLLISION}>Collision</option>
                    <option value={Animation.PING_PONG}>Ping Pong</option>
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