let temp = Math.floor(Math.random() * 3) + 1

while(temp == 1){
    temp = Math.floor(Math.random() * 3) + 1
}

document.getElementById("td"+temp).innerHTML = '<img src="./img01.png" alt="img02" width="125 px" height="250 px">';
