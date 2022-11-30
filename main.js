function make(){
    var one = document.getElementById('a1');
    var two = document.getElementById('a2');
    var three = document.getElementById('a3');
    var four = document.getElementById('a4');
    var make = document.getElementById('in');
    make.innerHTML = "私が今回の単元で学んだことは、" + one.value + "です。<br>特に自分の心に残ったことは、" + two.value + "です。<br>" + two.value + "とは、" + three.value + "です。<br>これに対して私は、" + four.value + "と思いました。<br>次回の単元もこの調子で頑張っていきます、よろしくお願いします。";
}