
home_mod.factory('PhoneApi', function(){
    function get_phone(id){
        return asynctimeout(DB[id]);
    }
    return {
    	get_phone: get_phone
    };
});