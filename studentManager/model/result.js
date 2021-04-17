exports.createResult=function(sucsess,data){
    var result={};
    result.sucsess=sucsess;
    result.data=data;
    return result;
}
// 封装结果集