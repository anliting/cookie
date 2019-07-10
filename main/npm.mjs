import fs from'fs'
fs.promises.writeFile('dist/npm/package.json',JSON.stringify({
    "author":{
        "name":"An-Li Ting"
    },
    "description":"See: https://anliting.com/rfc6265",
    "homepage":"https://anliting.com/rfc6265",
    "license":"MIT",
    "main":"rfc6265.mjs",
    "name":"rfc6265",
    "repository":{
        "type":"git",
        "url":"git+https://github.com/anliting/rfc6265.git"
    },
    "type":"module",
    "version":"1.0.2"
}))
fs.promises.copyFile('main/rfc6265.mjs','dist/npm/rfc6265.mjs')
