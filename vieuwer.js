window.addEventListener('load', function () {

    var display = document.getElementById('display');
    var album = document.getElementById('album');
    var back = document.getElementById('back');
    var forward = document.getElementById('forward');
    var teller = 0;
    var slide = document.getElementById('display');

    var fotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];
    
    forward.addEventListener('click', foeward);
    back.addEventListener('click', black);
    
    
    
    
    for (var i = 0; i < 10; i++) {
        var foto = new Image();
        foto.src = "images/small/" + fotos[i];
        album.appendChild(foto);
        foto.id = i;

        foto.addEventListener('click', function (e) {
            console.log(e.target.id);
            display.src = "images/big/" + fotos[e.target.id];
        })
    }
    
     function foeward() {
        console.log("forward");
        teller = teller + 1;
        if (teller > 9) {
            teller = 0;
        }
            slide.src = "images/big/" + fotos[teller];
    }
    
    function black() {
        console.log("back");
        teller = teller - 1;
        if (teller < 0) {
            teller = 9;
        }
            slide.src = "images/big/" + fotos[teller];
    
}
    
});