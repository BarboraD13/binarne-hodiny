setInterval(timer, 100);

function timer(){
    const date = new Date();
    let seconds = dec2Bin(date.getSeconds())
    let minutes = dec2Bin(date.getMinutes())
    let hours = dec2Bin(date.getHours())
    
    for(let i = 1; i < 7; i++){
    
        if(hours.charAt(i) == 1){
            if(i != 1){
            show("1" + i);
            }
        }
        else{
            if(i != 1){
                hide("1" + i);
            }
        }

        if(minutes.charAt(i) == 1){
            show("2" + i);
        }
        else{
            hide("2" + i);
        }

        if(seconds.charAt(i) == 1){
            show("3" + i);
        }
        else{
            hide("3"+i);
        }
        
    }
}

function dec2Bin(dec) {
    let temp = (dec >>> 0).toString(2);
    while(temp.length <7){
        temp = "0" + temp;
    }
    return temp;
  }

function show(position) {
    document.getElementById(position).style.backgroundColor = "#15cde6";
    document.getElementById(position).style.boxShadow = "0px 0px 15px 5px  #15cde6"
}

function hide(position) {
    document.getElementById(position).style.backgroundColor = "#240a63";
    document.getElementById(position).style.boxShadow = "0px 0px 0px 0px #000000";
    
}