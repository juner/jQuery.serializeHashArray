#jQuery.serializeHashArray について
##概要
jQuery.fn.ajaxする際の引数は jQuery.fn.serializeArrayの配列と、連想配列（オブジェクト）の形式に対応している為、jQuery.fn.serializeArrayをオブジェクトに変換する為のラッパープラグインです。
##用法
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script type="text/javascript" src="./js/jquery.serializeHashArray.js"></script>
で読み込んで連想配列が欲しいformで

    var data = $(formSelector).serializeHashArray();
とするだけです。
尚、このプラグインは複数同じnameの値のフォームパーツがある場合、配列として格納します。
##注意点
同じキーに対しては配列として値を設定することで複数の値を設定することを可能にしています（jQuery.ajaxに使用可能な形式準拠）
