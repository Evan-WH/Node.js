const redis = require("../redis")
const redi = new redis()

redi.set("abc","123",604800).then(ret=>{
    console.log(ret)
})
redi.get("abc").then(ret=>{
    console.log(ret)
})