import open from 'open'
import QueryString from 'query-string'
import fetch from 'node-fetch'

export const token = async (req, res) => {
    
    const body = QueryString.stringify({ 
        code: req.query.code, 
        redirect_uri: 'http://localhost:9500/token', 
        grant_type: 'authorization_code'
    })

    const auth = `Basic ${Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')}`

    try{
        const r = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: { 'Authorization': auth, 'Content-Type': 'application/x-www-form-urlencoded' },
            body
        })
        const data = await r.json()
        res.send('Token Registred!\nYou can close your Browser')
    }catch(e){ res.status(500).send('Internal Server Error') }
}

export const auth = async (req, res) => {
    const scope = 'app-remote-control streaming user-read-currently-playing user-modify-playback-state user-read-playback-state';
    open('https://accounts.spotify.com/authorize?' +
    QueryString.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: scope,
        redirect_uri: 'http://localhost:9500/token',
        state: 'My State'
    }))
    res.json({message: 'Authentication Started!'})
}