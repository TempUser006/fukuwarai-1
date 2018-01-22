var canvas = document.getElementById("fukuCanvas");

function save(saveType){
    var imageType = "image/png";
    var fileName = "sample.png";
    if(saveType == "jpeg"){
        imageType = "image/jpeg";
        fileName = "sample.jpg"
    }
    var canvas = document.getElementById("fukuCanvas");
    //base64エンコードされたデータを取得する
    var base64 = canvas.toDataURL(imageType);
    saveImage(base64);
    //console.log(base64);
    //bese64データをblobに変換する
    var blob = Base64toBlob(base64);
    //blobデータをa要素を使ってダウンロードする
    saveBlob(blob,fileName);
}

//Base64データをBlobデータに変換する関数
function Base64toBlob(base64){
    //カンマで分割して以下のようにデータを分ける
    //tmp[0] : データ形式（data:image/png;base64）
    //tmp[1] : base64データ（iVBORw0k～）
    var tmp = base64.split(",");
    //base64データの文字列をデコードする
    var data = atob(tmp[1]);
    //tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
    var mime = tmp[0].split(":")[1].split(";")[0];
    //1文ごとにUTF-16コードを表す。0~65535 の整数を取得する。
    var buf = new Uint8Array(data.length);
    for(var i = 0; i < data.length; i++){
        //charCodeAt() について
        /* 与えられたインデックスに位置する文字のUTF-16コードを表す 0~65535 の整数を返す */
        buf[i] = data.charCodeAt(i)
    }
    //blobデータを作成する
    var blob = new Blob([buf], {type: mime});
    return blob;
}

//画像のダウンロードをする関数
function saveBlob(blob, fileName){
    var url = (window.URL || window.webkitURL);
    //ダウンロード用のURLを作成する
    var dataUrl = url.createObjectURL(blob);
    //イベント(マウスイベント)を作成する
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, 0, null);
    //ダウンロードするための【a要素】を作成する
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    //ダウンロード用のURLをセット
    a.href = dataUrl;
    //ファイル名をセット
    a.download = fileName;
    //イベントの発火
    a.dispatchEvent(event);
}





