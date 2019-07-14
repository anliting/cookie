import fs from'fs'
let nodeVersion='1.0.0'
fs.promises.writeFile('dist/node/package.json',JSON.stringify({
    author:{
        name:'An-Li Ting'
    },
    description:"See: https://anliting.com/cookie",
    homepage:"https://anliting.com/cookie",
    license:'MIT',
    main:'cookie.mjs',
    name:'@anliting/cookie',
    repository:{
        type:'git',
        url:'git+https://github.com/anliting/cookie.git'
    },
    type:'module',
    version:nodeVersion,
}))
fs.promises.copyFile('license','dist/node/license')
fs.promises.copyFile('main/cookie.mjs','dist/node/cookie.mjs')
