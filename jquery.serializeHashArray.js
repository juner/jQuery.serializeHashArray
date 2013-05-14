/**
 * serializeの連想配列用ラッパープラグイン
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
    
    /**
     * serializeArray で生成した配列を操作しやすい様にnameをキーとした連想配列に変換する。
     * @param {Array} array jQuery.fn.serializeArrayで生成された配列
     * @example <pre>var ary $.serializeArray2HashArray($(selecter).serializeArray());</pre>
     */
    $.serializeArray2HashArray = methods.serializeArray2HashArray;
    
    /**
     * 対象要素にて serializeArray で生成した配列を serializeArray2HashArray で変換する。
     * @example <pre>var ary = $(selecter).serializeHashArray();</pre>
     */
    $.fn.serializeHashArray = function(){
        return $.serializeArray2HashArray($(this).serializeArray());
    };
})(jQuery);
