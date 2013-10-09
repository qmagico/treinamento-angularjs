home_mod.factory('PhoneApi', function(){
    function get_phone(id){
        var callback;
        var result = {
        	success: function(_callback){
        		callback = _callback;
        	}
        }
        setTimeout(function(){
        	callback(DB[id]);
        }, 1000)
        return result;
    }

    return {
    	get_phone: get_phone
    };
});