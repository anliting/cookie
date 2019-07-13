import fs from'fs'
let npmVersion='1.0.3'
fs.promises.writeFile('dist/npm/package.json',JSON.stringify({
    author:{
        name:'An-Li Ting'
    },
    description:"See: https://anliting.com/rfc6265",
    homepage:"https://anliting.com/rfc6265",
    license:'MIT',
    main:'rfc6265.mjs',
    name:'rfc6265',
    repository:{
        type:'git',
        url:'git+https://github.com/anliting/rfc6265.git'
    },
    type:'module',
    version:npmVersion,
}))
fs.promises.copyFile('license','dist/npm/license')
fs.promises.copyFile('main/rfc6265.mjs','dist/npm/rfc6265.mjs')
