    // 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:


let BMW = {
  state: "Germany",
  model: "X5",
  "year of production": 2019,
  average_speed: 100,  
}

    // Функция для вывода на экран информации об автомобиле;

function modelInfo(){
    console.log(BMW);
}
modelInfo();

    // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calculateSpeed(speed){
  let distance = 900;
  let time = distance / speed;

    for ( let i = (time - 1); i > 4; i--){
        if (i % 4 === 0 ){
          let full_Time = time + 1;
          console.log(full_Time);// полное время в пути
        }
    }
}
calculateSpeed (BMW.average_speed);



      //2. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом

const time = {
    hours: 10,
    minits: 10,
    seconds: 10,
}

      // Функция вывода времени на экран;

function layOutTime (){
    console.log("Час: " + time.hours + " ч. " + time.minits + " м. " + time.seconds + " с.");
}
layOutTime ();

      // Функция изменения времени на переданное количество секунд;

let convertToSeconds, changedTime;

function toSeconds (hh, mm, ss){  //функция перевода времени в секунды
    convertToSeconds = hh*3600 + mm*60 + ss;
    console.log(convertToSeconds + " " + "сек.");

        function addSeconds(addedSeconds){  //функция добавления n-секунд
            changedTime = convertToSeconds + addedSeconds;
            console.log(changedTime + " " + "сек.");

                function layOut_Time (timeInSeconds){  //функция перевода секунд в чч., мм., сс.
                    let hoursOut, minitsOut, secondsOut;
                    hoursOut = Math.floor(timeInSeconds/3600);
                    minitsOut =  Math.floor((timeInSeconds % 3600) / 60);
                        if ((hoursOut % 60) < 60){
                            secondsOut =  Math.floor(timeInSeconds % 3600) % 60;
                        }
                    console.log(hoursOut + " " + "ч." + " " + minitsOut + " " + "мин." + " " + secondsOut + " " + "сек.");
                }
            layOut_Time (changedTime);
        }
        addSeconds(186);
}
toSeconds (time.hours, time.minits, time.seconds);

        // Функция изменения времени на переданное количество минут;

function toMinute (hh, mm, ss){  
    let minute, newTime, hourOut, minitOut;

    convertToSecond = hh*3600 + mm*60 + ss;
    minute = parseInt(prompt("Введите минуты", 00))
    newTime = convertToSecond + minute*60;
    hourOut = Math.floor(newTime/3600);
    minitOut =  Math.floor((newTime % 3600) / 60);
    console.log(hourOut + " " + "ч." + " " + minitOut + " " + "мин." + " " + ss + " " + "сек.");
}
toMinute (time.hours, time.minits, time.seconds);

      // Функция изменения времени на переданное количество часов. 

function toHour (hh, mm, ss){  
    let hour, changedHour;
    hour = parseInt(prompt("Введите часы", 00))
    changedHour = hh + hour;
    console.log(changedHour + " " + "ч." + " " + mm + " " + "мин." + " " + ss + " " + "сек.");
}
toHour (time.hours, time.minits, time.seconds);