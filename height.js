{
    let BTN = document.getElementById('btn').onclick = function (){

        document.getElementById("result").style.display = "block";
        document.body.style.backgroundColor = "yellow";
        let INPUT = document.getElementById('input').value;
        console.log("INPUT :" ,INPUT);

        let SELECTBOX1 = document.getElementById('select1').value;
        console.log("SELECTBOX :" ,SELECTBOX1);

        let SELECTBOX2 = document.getElementById('select2').value;
        console.log("SELECTBOX :" ,SELECTBOX2);

        let arr = ("Centimeter","Meter","Inch");
        console.log(arr)

        if(SELECTBOX1 === "Centimeter" && SELECTBOX2 === "Meter"){
            INPUT = INPUT / 100;
            console.log(INPUT)
        }

        if(SELECTBOX1 === "Centimeter" && SELECTBOX2 === "Inch"){
            INPUT = INPUT / 2.54;
            console.log(INPUT)
        }
        if(SELECTBOX1 === "Meter" && SELECTBOX2 === "Inch"){
            INPUT = INPUT * 39.37;
            console.log(INPUT)
        }
        if(SELECTBOX1 === "Meter" && SELECTBOX2 === "Centimeter"){
            INPUT = INPUT * 100;
            console.log(INPUT)
        }
        if(SELECTBOX1 === "Inch" && SELECTBOX2 === "Centimeter"){
            INPUT = INPUT * 2.54;
            console.log(INPUT)
        }
        if(SELECTBOX1 === "Inch" && SELECTBOX2 === "Meter"){
            INPUT = INPUT / 39.37;
            console.log(INPUT)
        }
        
        let x= document.getElementById('result');
        x.innerHTML  = (` ${INPUT}`);
        
    }

    
   
}