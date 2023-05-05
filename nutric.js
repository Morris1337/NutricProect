
function startFunc(){

let client = {

    sex: prompt("Укажите свой пол:" + " м / ж"),
    age: +prompt("Укажите свой Возраст(сколько полных лет):"),
    heigth: +prompt("Укажите свой рост(см):"),
    kg: +prompt("Укажите свой вес(пример: 83.1):"),
    Waist: +prompt("Укажите свой обхват талия (см):"),
    hips: +prompt("Укажите свой обхват бедра (см):"),
    }

    if(client.age > 40){
      iWantWaight = +prompt("Желаемый вес в кг: ")
    }

    document.getElementById("startFuncSex").innerHTML = ("sex " + client.sex)
    document.getElementById("startFuncAge").innerHTML = ("age " + client.age)
    document.getElementById("startFuncHeigth").innerHTML = ("heigth " + client.heigth)
    document.getElementById("startFuncKg").innerHTML = ("kg " + client.kg)
    document.getElementById("startFuncWaist").innerHTML = ("Waist " + client.Waist)
    document.getElementById("startFuncHips").innerHTML = ("hips " + client.hips)
    
    IMT = client.kg / Math.pow(client.heigth, 2)
    console.log(IMT)
      function imt(){
      
          if(IMT <= 0.0016){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Острый дефицит массы" + " (<16)")
          }else if(IMT <= 0.0018){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Недостаточная масса тела" + " (16 - 18.5)")
          }else if(IMT <= 0.0025){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " норма" + " (18.6 - 25)")
          }else if(IMT <= 0.0030){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Избыточная масса тела" + " (25.1 - 30)")
          }else if(IMT <= 0.0035){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Ожирение первой степени" + " (30.1 - 35)")
          }else if(IMT <= 0.0040){
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Ожирение второй степени" + " (35.1 - 40)")
          }else{
                document.getElementById("startFuncImt").innerHTML = ("Идекс массы тела : " + IMT + " Ожирение третей степени" + " (40.1>)")
          }
      }
    
      imt();

    abdominalObesity = client.Waist / client.hips 
    
      function abdom(){
      
       if(client.sex === "м" || "М" || "m" || "M"){
    
          if(abdominalObesity <= 0.85){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Отлично" + " (<0.85)")
          }else if(abdominalObesity <= 0.89){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Хорошее" + " (0.86 - 0.89)")
          }else if(abdominalObesity <= 0.95){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Среднее" + " (0.90 - 0.95)")
          }else{
                document.getElementByI
                
                ("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Критическое" + " (0.96>)")
          }
        }else if(client.sex === "ж"||"Ж" || "f" || "F"){
          if(abdominalObesity <= 0.75){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Отлично" + " (<0.85)")
          }else if(abdominalObesity <= 0.79){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Хорошее" + " (0.75 - 0.79)")
          }else if(abdominalObesity <= 0.86){
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Среднее" + " (0.80 - 0.86)")
          }else{
                document.getElementById("startFuncAbdom").innerHTML = ("Абдоминальное ожиренее: " + abdominalObesity + " Критическое" + " (0.87>)")
          }
        }else{
              document.getElementById("startFuncAbdom").innerHTML = ("Не известный пол!")
        }
    } 
    
    abdom();

    brokFormMale = (client.heigth - 100) * 0.9
    brokFormFemale = (client.heigth - 100) * 0.85
    
    
    function brok(){
      if(client.age <= 40){
      if (client.sex === "м" || "М" || "m" || "M"){
            document.getElementById("startFuncBrok").innerHTML = ("Ваш идеальный вес: " + brokFormMale)
      }else if (client.sex === "ж"||"Ж" || "f" || "F"){
            document.getElementById("startFuncBrok").innerHTML = ("Ваш идеальный вес: " + brokFormFemale)
      }else{
            document.getElementById("startFuncBrok").innerHTML = ("Не известный пол!")
      }
     }else{
           document.getElementById("startFuncBrok").innerHTML = ("Возраст привышает 40 лет. Рекомендуеться не считать идиальный вес после 40 лет.")
     }
    }
    //lol
    brok();

    
    if(client.age <= 40){
      if(client.sex === "м" || "М" || "m" || "M"){
      BMRM = 66 + (13.7 * brokFormMale) + (5 * client.heigth) - (6.76 * client.age)
      }else if(client.sex === "ж"||"Ж" || "f" || "F"){
      BMRF = 655 + (9.6 * brokFormFemale) + (1.8 * client.heigth) - (4.7 * client.age)
      }else{
        document.getElementById("startFuncBmr").innerHTML = ("Не известный пол!")
      }
    }else{
      if(client.sex === "м" || "М" || "m" || "M"){
      BMRM = 66 + (13.7 * iWantWaight) + (5 * client.heigth) - (6.76 * client.age)
      }else(client.sex === "ж"||"Ж" || "f" || "F");{
      BMRF = 655 + (9.6 * iWantWaight) + (1.8 * client.heigth) - (4.7 * client.age)
      }
      
    }
    
    
    function bened (){
      if(client.sex === "м" || "М" || "m" || "M"){
      document.getElementById("startFuncBmr").innerHTML = ("Минимальное количесвто ккал в день: " + BMRM)
      }else if (client.sex === "ж"||"Ж" || "f" || "F"){
      document.getElementById("startFuncBmr").innerHTML = ("Минимальное количесвто ккал в день: " + BMRF)
      }else{
      document.getElementById("startFuncBmr").innerHTML = ("Не известный пол!")
      }
    }
    
    bened();
    
    
    if(client.sex === "м" || "М" || "m" || "M"){
      AMRM = BMRM * (+prompt("Укажите коэффициент(1.2 очень низкая активность)(1.4 Сидячая работа низкая активность)(1.6 Более активная работа средняя активность)(1.8 Высокая активность)"))
    }else if(client.sex === "ж"||"Ж" || "f" || "F"){
      AMRF = BMRF * (+prompt("Укажите коэффициент(1.2 очень низкая активность)(1.4 Сидячая работа низкая активность)(1.6 Более активная работа средняя активность)(1.8 Высокая активность)"))
    }else{
      document.getElementById("startFuncResult").innerHTML = ("Не известный пол!")
    }
    
    
    pro = (AMRM || AMRF) * 0.15 / 4
    fat = (AMRM || AMRF) * 0.30 / 9
    carb = (AMRM || AMRF) * 0.55 / 4
    h2o = client.kg * 0.03
    
    

    // console.log(client)
    // imt();
    // abdom();
    // brok();
    // bened();
    // console.log("По вашим запросам мы расчитали необходимое количество ккал в день: " + AMRM || AMRF)
    // console.log("Необходимое количество белков в день: " + pro)
    // console.log("Необходимое количество жиров в день: " + fat)
    // console.log("Необходимое количество углеводов в день: " + carb)
    // console.log("Необходимое количество л/воды в день: " + h2o)


      // client
      // imt();
      // abdom();
      // brok();
      // bened();
      document.getElementById("startFuncAmr").innerHTML = ("По вашим запросам мы расчитали необходимое количество ккал в день: " + AMRM || AMRF)
      document.getElementById("startFuncPro").innerHTML = ("Необходимое количество белков в день: " + pro)
      document.getElementById("startFuncFat").innerHTML = ("Необходимое количество жиров в день: " + fat)
      document.getElementById("startFuncCarb").innerHTML = ("Необходимое количество углеводов в день: " + carb)
      document.getElementById("startFuncWet").innerHTML = ("Необходимое количество л/воды в день: " + h2o)
    



    }
