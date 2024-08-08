{
    let arr = ["violet", "indigo", "blue", "green","yellow","orange","red"];
    count = 0;

    document.getElementById('btn').onclick = function () {
          
        document.body.style.background = arr[count];
        count = (count + 1) % arr.length
    }
}