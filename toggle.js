{
    let arr=["black","white"];
    let arr2=["white","black"];
    let count = 0;
    let count1=0
    document.getElementById('btn').onclick = function () {
      
        document.body.style.background = arr[count];
        count = (count + 1) % arr.length

        document.getElementById('container1').style.color = arr2[count1];
        count1 = (count1 + 1) % arr2.length
            

    }
}