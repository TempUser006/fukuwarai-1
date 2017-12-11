function canvas_roulette(){
    var topImage = [];//目の部分の画像を格納しておく配列
    var middleImage = [];//鼻の部分の画像を格納しておく配列
    var bottomImage = [];//口の部分の画像を格納しておく配列
    //ルーレットをスタート・ストップアニメーションを発火させるための変数を宣言
    var topStop,middleStop,bottomStop;
    
    //canvasのコンテキストを取得する
    var topCanvas = $('#top').get(0).getContext("2d");
    var middleCanvas = $('#middle').get(0).getContext("2d");
    var bottomCanvas = $('#bottom').get(0).getContext("2d");
    
    //画像名（目）を格納しておく配列
    var topSrc = [
        "e0.jpg","e1.jpg","e2.jpg","e3.jpg","e4.jpg","e5.jpg","e6.jpg","e7.jpg","e8.jpg","e9.jpg","e10.jpg",
        "e11.jpg","e12.jpg","e13.jpg","e14.jpg","e15.jpg","e16.jpg","e17.jpg","e18.jpg","e19.jpg","e20.jpg"
        ];
    //画像名（鼻）を格納しておく配列
    var middleSrc = [
        "n0.jpg","n1.jpg","n2.jpg","n3.jpg","n4.jpg","n5.jpg","n6.jpg","n7.jpg","n8.jpg","n9.jpg","n10.jpg",
        "n11.jpg","n12.jpg","n13.jpg","n14.jpg","n15.jpg","n16.jpg","n17.jpg","n18.jpg","n19.jpg","n20.jpg"
        ];
    //画像名（口）を格納しておく配列
    var bottomSrc = [
        "m0.jpg","m1.jpg","m2.jpg","m3.jpg","m4.jpg","m5.jpg","m6.jpg","m7.jpg","m8.jpg","m9.jpg","m10.jpg",
        "m11.jpg","m12.jpg","m13.jpg","m14.jpg","m15.jpg","m16.jpg","m17.jpg","m18.jpg","m19.jpg","m20.jpg"
        ];
    
    /* Imageのオブジェクトを取得する　*/
    for (var i in topSrc) {
        topImage[i] = new Image();
        topImage[i].src = "image/roulette/eye/" + topSrc[i];
    }
    //鼻の部分の画像を格納しておく配列
    var middleImage = [];
    for (var i in middleSrc) {
        middleImage[i] = new Image();
        middleImage[i].src = "image/roulette/nose/" + middleSrc[i];
    }
    //口の部分の画像を格納しておく配列
    var bottomImage = [];
    for (var i in bottomSrc) {
        bottomImage[i] = new Image();
        bottomImage[i].src = "image/roulette/mouth/" + bottomSrc[i];
    }
    
    
    //Canvasに描画させる画像（目）をランダムで描画させる関数
    function topDraw(){
        topCanvas.drawImage(topImage[Math.floor(Math.random() * topImage.length)], 0, 0);
    }
    
    //Canvasに描画させる画像（鼻）をランダムで描画させる関数
    function middleDraw(){
        middleCanvas.drawImage(middleImage[Math.floor(Math.random() * middleImage.length)], 0, 0);
    }
    
    //Canvasに描画させる画像（口）をランダムで描画させる関数
    function bottomDraw(){
        bottomCanvas.drawImage(bottomImage[Math.floor(Math.random() * bottomImage.length)], 0, 0);
    }
        
    //以下、ボタンがクリックされた時のイベント　※スタートボタンを連続で押すとストップしないため改善する必要あり
    $(document).on('click','#start',function() {
       topStop = setInterval(topDraw, 80);
       middleStop = setInterval(middleDraw, 80);
       bottomStop = setInterval(bottomDraw, 80);
    });
    $(document).on('click','#top_stop',function() {
        //console.log("クリックされた01");
        clearInterval(topStop);
    });
    $(document).on('click','#middle_stop',function() {
        //console.log("クリックされた02");
        clearInterval(middleStop);
    });
    $(document).on('click','#bottom_stop',function() {
        //console.log("クリックされた03");
        clearInterval(bottomStop);
    });
    
    
    console.log('Welcome!');
    //画像をランダムで描画させる TODO::できない 
    topDraw();
    middleDraw();
    bottomDraw();
    // topCanvas.drawImage(topImage[Math.floor(Math.random() * topImage.length)], 0, 0);
    // middleCanvas.drawImage(middleImage[Math.floor(Math.random() * middleImage.length)], 0, 0);
    // bottomCanvas.drawImage(bottomImage[Math.floor(Math.random() * bottomImage.length)], 0, 0);
}
