var bikes = [["Monark Sture","Alingsås","2019/05/01","2019/05/30","50"], 
            ["Crescent Deca","Örkelljunga","2019/04/04","2019/06/27","70"]];

document.querySelector(".bicycle > h2").textContent = bikes[0][0];
document.querySelector(".bicycle > .city").textContent = bikes[0][1];
document.querySelector(".bicycle > .dates").textContent = "available from " + bikes[0][2] + " to " + bikes[0][3];
document.querySelector(".bicycle > .price").textContent = bikes[0][4] + " kr / day";