function asynctimeout(data){
    var callback;
    var result = {
        success: function(_callback){
            callback = _callback;
        }
    }
    setTimeout(function(){
        callback(data);
    }, 1000)
    return result;

}
