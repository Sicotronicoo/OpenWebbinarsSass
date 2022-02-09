const {watch, series,parallel,src,dest} = require("gulp");

function holamundo(cb){
    console.log("Hola Mundo"+Date.now());
    cb();
}

function adiosmundo(cb){
    console.log("Adios Mundo"+Date.now());
    cb();
}
function pipeline(){
    return src("css/*.css").pipe(dest("dist/"));
}
function watch_css(cb){
    watch("css/*.css", holamundo);
    cb();
}
exports.holamundo= holamundo;
exports.adiosmundo = adiosmundo;
exports.default = parallel(adiosmundo, holamundo);
exports.pipeline = pipeline;
exports.watch_css = watch_css;