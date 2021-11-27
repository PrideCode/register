import fetch from 'node-fetch'
import crypto from 'crypto'

const token: string = process.env.TOKEN
const ip: string = process.env.IP

var shasum = crypto.createHash('sha1')

if(token == undefined || ip == undefined) throw new Error('Environment Variables aren\'t correctly set. Please open issue.')

fetch(`http://${ip}:3021/webhook/push/?token=${token}&uid=${shasum.digest('hex')}`).then(async () => {
    console.log('Successfully requested deploy: Deploy('+shasum.digest('hex')+') on remote server.')
})

