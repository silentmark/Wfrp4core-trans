const fs = require("fs")
import copy from 'rollup-plugin-copy-watch'
import jscc from 'rollup-plugin-jscc'
import del from 'rollup-plugin-delete'

let manifest = JSON.parse(fs.readFileSync("./build/asset-manifest.json"))
let input = "./build" + manifest.files["main.js"];
let output = "../Wfrp.Service" + manifest.files["main.js"];

export default {
    input: [input],
    output: {
        file: output
    },
    watch : {
        clearScreen: true
    },
    plugins: [
        jscc({      
            values : {_ENV :  process.env.NODE_ENV}
        }),
        del({ targets: '../Wfrp.Service/static/*', force: true }),
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