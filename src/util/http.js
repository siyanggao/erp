import axios from 'axios'

let http = config => {
    let p = new Promise(function(resolve,reject){
        if(config.loading) config.loading(true)
        axios(config).then(res => {
            if (res.data.header.code === '0') {
                resolve(res.data.data)
            } else {
                console.log(res)
                alert(res.data.header.msg)
                reject(res)
            }
        }).catch(err => {
            console.log(err)
            alert(err)
        }).then(() => {
            if(config.loading) config.loading(false)
        })
    })
    return p;
}

export default http
