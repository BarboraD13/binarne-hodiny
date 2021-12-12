let second1 = document.getElementById("second1");
let minute1 = document.getElementById("minute1");
let hour1 = document.getElementById("hour1");
let second2 = document.getElementById("second2");
let minute2 = document.getElementById("minute2");
let hour2 = document.getElementById("hour2");
let second4 = document.getElementById("second4");
let minute4 = document.getElementById("minute4");
let hour4 = document.getElementById("hour4");
let second8 = document.getElementById("second8");
let minute8 = document.getElementById("minute8");
let hour8 = document.getElementById("hour8");
let second16  = document.getElementById("second16");
let minute16 = document.getElementById("minute16");
let hour16 = document.getElementById("hour16");
let second32 = document.getElementById("second32");
let minute32 = document.getElementById("minute32");
let hour32 = document.getElementById("hour32");

setInterval(myTimer, 200);
function myTimer()
{
    var date = new Date();
    var a = date.getHours();
    var b = date.getMinutes();
    var c = date.getSeconds();
    var d = 0;

    if(c%2 == 1)
    {
        second32.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }

    else
    {
        second32.src="./images/grey.jpg"
        c = c/2
    }

    if(c%2 == 1)
    {
        second16.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }
    
    else
    {
        second16.src="./images/grey.jpg"
        c = c/2
    }

    if(c%2 == 1)
    {
        second8.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }
    
    else
    {
        second8.src="./images/grey.jpg"
        c = c/2
    }

    if(c%2 == 1)
    {
        second4.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }
    
    else
    {
        second4.src="./images/grey.jpg"
        c = c/2
    }

    if(c%2 == 1)
    {
        second2.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }
    
    else
    {
        second2.src="./images/grey.jpg"
        c = c/2
    }

    if(c%2 == 1)
    {
        second1.src="./images/blue1.jpeg";
        d = c - 1;
        c = d/2
    }
    
    else
    {
        second1.src="./images/grey.jpg"
        c = c/2
    }

    if(b%2 == 1)
    {
        minute32.src="./images/blue1.jpeg";
        d = b - 1;
        b = d/2
    }
    
    else
    {
        minute32.src="./images/grey.jpg"
        b = b/2
    }

    if(b%2 == 1)
    {
        minute16.src="./images/blue1.jpeg";
        d = b - 1;
        b = d/2
    }
    
    else
    {
        minute16.src="./images/grey.jpg"
        b = b/2
    }

    if(b%2 == 1)
    {
        minute8.src="./images/blue1.jpeg";
        d = b - 1;
        b= d/2
    }
    
    else
    {
        minute8.src="./images/grey.jpg"
        b = b/2
    }

    if(b%2 == 1)
    {
        minute4.src="./images/blue1.jpeg";
        d = b - 1;
        b = d/2
    }
    
    else
    {
        minute4.src="./images/grey.jpg"
        b = b/2
    }

    if(b%2 == 1)
    {
        minute2.src="./images/blue1.jpeg";
        d = b - 1;
        b = d/2
    }
    
    else
    {
        minute2.src="./images/grey.jpg"
        b = b/2
    }

    if(b%2 == 1)
    {
        minute1.src="./images/blue1.jpeg";
        d = b - 1;
        b = d/2
    }
    
    else
    {
        minute1.src="./images/grey.jpg"
        b = b/2
    }

    if(a%2 == 1)
    {
        hour32.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour32.src="./images/grey.jpg"
        a = a/2
    }

    if(a%2 == 1)
    {
        hour16.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour16.src="./images/grey.jpg"
        a = a/2
    }

    if(a%2 == 1)
    {
        hour8.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour8.src="./images/grey.jpg"
        a = a/2
    }

    if(a%2 == 1)
    {
        hour4.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour4.src="./images/grey.jpg"
        a = a/2
    }

    if(a%2 == 1)
    {
        hour2.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour2.src="./images/grey.jpg"
        a = a/2
    }

    if(a%2 == 1)
    {
        hour1.src="./images/blue1.jpeg";
        d = a - 1;
        a = d/2
    }
    
    else
    {
        hour1.src="./images/grey.jpg"
        a = a/2
    }
}