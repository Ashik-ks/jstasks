{
    let num = 0;
   

    let btn1 = document.getElementById('increment').onclick = function (){
        console.log("BUTTON CLICKED")
      num =num + 1;
      console.log(num);
      let VALUE = document.getElementById('values')
      VALUE.innerHTML = num;
       
    }
    let btn2 = document.getElementById('decrement').onclick = function (){
        console.log("BUTTON CLICKED")
      num =num - 1;
      console.log(num);
      let VALUE = document.getElementById('values')
      VALUE.innerHTML = num;
       
    }
    let btn3 = document.getElementById('reset').onclick = function (){
        console.log("BUTTON CLICKED")
      num =0;
      console.log(num);
      let VALUE = document.getElementById('values')
      VALUE.innerHTML = num;
       
    }
}