function make(){
    var one = document.getElementById('a1');
    var two = document.getElementById('a2');
    var three = document.getElementById('a3');
    var four = document.getElementById('a4');
    var make = document.getElementById('in');
    make.innerHTML = "私が今回の単元で学んだことは、" + one.value + "です。<br>特に自分の心に残ったことは、" + two.value + "です。<br>" + three.value + "です。<br>これに対して私は、" + four.value + "と思いました。<br>次回の単元もこの調子で頑張っていきます、よろしくお願いします。";
    console.log("文章を作成しました");
}

function c() {
    c1 = document.getElementById('a1').value = "";
    c2 = document.getElementById('a2').value = "";
    c3 = document.getElementById('a3').value = "";
    c4 = document.getElementById('a4').value = "";
    c5 = document.getElementById('in').innerHTML = '<p id="inn"> <br> <br> <br> </p>';
    console.log("削除しました");
}