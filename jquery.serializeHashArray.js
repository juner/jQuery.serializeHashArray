/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jQuery
 */

/**
 * serializeArrayの連想配列用ラッパープラグイン
 * @author juner <juner@juner.net>
 * https://github.com/juner/jQuery.serializeHashArray
 */
(function ($) {
    var methods = {
        /**
    	 * 連想配列に $.fn.serializeArray の配列の要素 a を元に hashArray に追加する。
    	 * @param {Object} a $.fn.serializeArray で生成される配列の要素の値
    	 * @param {Object} hashArray 追加先の連想配列
    	 */
        setValue: function (a, hashArray) {
            if (a.name in hashArray) {
                if ($.isArray(hashArray[a.name])) {
                    hashArray[a.name].push(a.value);
                } else {
                    hashArray[a.name] = [hashArray[a.name], a.value];
                }
            } else {
                hashArray[a.name] = a.value;
            }
        },

        /**
         * serializeArray で生成した配列を操作しやすい様にnameをキーとした連想配列に変換する。
         * @param {Array} array jQuery.fn.serializeArrayで生成された配列
         * @return {Object} name をキーとした連想配列
         */
        serializeArray2HashArray: function (array) {
            var hashArray = {};
            for (var i = 0, max = array.length; i < max; i++) {
                var a = array[i];
                methods.setValue(a, hashArray);
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
     * @return {Object} name をキーとした連想配列
     * @example <pre>var ary = $(selecter).serializeHashArray();</pre>
     */
    $.fn.serializeHashArray = function () {
        return $.serializeArray2HashArray($(this).serializeArray());
    };
})(jQuery);