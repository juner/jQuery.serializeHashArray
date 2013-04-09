/**
 * serializeの連想配列用ラッパー関数
 * @author juner <juner@juner.net>
 * https://github.com/juner/jquery.serializeHashArray
 */
(function($){
    var methods = {
        setValue:function(a,hashArray){
            if(a.name in hashArray){
                if($.isArray(hashArray[a.name])){
                    hashArray[a.name].push(a.value);
                }else{
                    hashArray[a.name] = [hashArray[a.name],a.value];
                }
            }else{
                hashArray[a.name] = a.value;
            }
        },
        serializeArray2HashArray:function(array){
            var hashArray ={};
            for(var i=0,max=array.length;i<max;i++){
                var a = array[i];
                methods.setValue(a,hashArray);
            }
            return hashArray;
        }
    };
    $.serializeArray2HashArray = methods.serializeArray2HashArray;
    $.fn.serializeHashArray = function(){
        return $.serializeArray2HashArray($(this).serializeArray());
    };
})(jQuery);
