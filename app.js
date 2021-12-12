const clock = () => {
    
    function splitTime(time) {
      const timeArray = time.split("");
      const firstDigit = timeArray[0];
      const secondDigit = timeArray[1];
  
      return [
        parseInt(firstDigit).toString(2),
        parseInt(secondDigit).toString(2),
      ];
    }
  
    function update() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
  
      console.log(`${hours}:${minutes}:${seconds}`);
  
      clear();
      const digitEnums = ["hours", "minutes", "seconds"];
      [splitTime(hours), splitTime(minutes), splitTime(seconds)].forEach(
        (time, timeIndex) => {
          time.forEach((digit, digitIndex) => {
            digit
              .split("")
              .reverse()
              .forEach((value, index) => {
                if (value === "1") {
                  const currentIndex = 2 ** index;
                  const digitElement = document.querySelectorAll(
                    `.${digitEnums[timeIndex]} .bin-${currentIndex} .led`
                  )[digitIndex];
  
                  digitElement.classList.add("active");
                }
              });
          });
        }
      );
  
    }
  
    function clear() {
      document.querySelectorAll(".led").forEach((led) => {
        led.classList.remove("active");
      });
    }
  
    setInterval(update, 1000);
  };
  
  clock();