import express from 'express'
import { auth, token } from './api/spotify.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

async function main(){
    app.get('/token', token)
    app.get('/auth', auth)
    app.listen(9500)
}

main()