export default class AppService{
_apiBase = 'http://ihelp-dev.me-south-1.elasticbeanstalk.com/api'

    getRsourse = async (url) => {
     const res = await fetch(`${this._apiBase}${url}`)

     if(!res.ok){
         throw new Error(`Could not fetch ${res.status}`)
     }
     return await res.json()
    }

    getAllServices = async () => {
    const res = await this.getRsourse('/services/')
    return res
    }

    getService = async (title) => {
        const res = await this.getRsourse(`/services/?title=${title}`)
        return res
        }
}