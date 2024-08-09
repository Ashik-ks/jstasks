{
  let dt = new Date();
  console.log("dt:", dt)

  let date = dt.getDate();
  console.log("day : ", date);

  let month = dt.getMonth();
  console.log("month : ", month + 1)

  let year = dt.getFullYear();
  console.log("year : ", year);

  let currentdatedate = document.getElementById('currentdatedate');
  currentdatedate.innerHTML = (`${date}-${month}-${year}`);


  let Btn = document.getElementById('btn').onclick = function () {
    console.log("btn clicked")

    document.getElementById("containerr").style.display = "none";
    document.getElementById("containerrnew").style.display = "block";
    document.body.style.backgroundColor = "yellow";

    let Yourdate = document.getElementById('yourdate').value;
    console.log("yourdate :", Yourdate);

    let arr = Yourdate.split('-');
    console.log("arr : ", arr)

    let AGE = year - arr[0];
    let rem = arr[1] - month
    if (arr[1] > month) {
      AGE = AGE - 1;
    } else {
      AGE = AGE;
    }

    if (arr[1] > month) {
      rem = month - arr[1] - 1;
      console.log(rem)
    }

    if (arr == 0) {
      AGE = AGE - AGE;
      console.log("sese : ", AGE)
    }



    let x = document.getElementById('output');
    x.innerHTML = (`YOU ARE  ${AGE} YEARS OLD ...`);

    let y = document.getElementById('output1');
    y.innerHTML = (`You have ${rem} month remaining for your birthday !`);

,
}


