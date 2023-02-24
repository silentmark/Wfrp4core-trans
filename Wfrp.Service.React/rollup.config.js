const fs = require("fs")
const path = require("path")
import copy from 'rollup-plugin-copy-watch'
import jscc from 'rollup-plugin-jscc'

let manifest = JSON.parse(fs.readFileSync("./build/asset-manifest.json"))
let input = "./build/" + manifest.files["main.js"];

export default {
    input: [input],
    watch : {
        clearScreen: true
    },
    plugins: [
        jscc({      
            values : {_ENV :  process.env.NODE_ENV}
        }),
        copy({
            targets : [
                {src : "./build/*", dest : "../Wfrp.Service"},
                {src : "./build/index.html", dest : "../Wfrp.Service/static"}
            ],
            watch: process.env.NODE_ENV == "production" ? false : ["./build/*/**"]
        })
    ],
    onwarn(warning, warn) {
        // suppress eval warnings
        if (warning.code === 'EVAL') return
        warn(warning)
    }
}