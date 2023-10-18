const glob = require("glob");
const PATH = require("path");

const c = {
    entry: glob.sync("./projects/**/index.js").reduce((acc, path) => {
        const newpath = path.replace(/\\/g, "/");
        const entry = newpath.replace("/index.js", "");
        acc[entry] = "./" + newpath;
        return acc;
    }, {}),
    // Need like this:
    // entry: {
    //     "build/ig": "./projects/ig/index.js",
    //     "build/yt": "./projects/yt/index.js"
    //     .....
    // },

    output: {
        filename: "./[name]/dist/main.js",
        path: PATH.resolve(__dirname)
    }
};

module.exports = c;
