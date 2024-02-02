// alert("hi");
// console.log("hi");

function readValue(){
    let temp = Number(document.getElementById("input01").value);
    leapYear(temp);
}

function leapYear(target){
    let playground = document.getElementById("result");

    if(target % 4 == 0){
        if(target%100==0){
            if(target%400==0){
                // Leap Year
                playground.textContent = "Yes";
            }else{
                // Not a Leap Year
                playground.textContent = "No";    
            }
        }else{
            // Leap Year
            playground.textContent = "Yes";
        }
    }else{
        // Not a Leap Year
        playground.textContent = "No";
    }
}



