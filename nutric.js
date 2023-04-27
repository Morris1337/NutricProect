

let client = {

    sex: prompt("Укажите свой пол:" + "м / ж"),
    age: +prompt("Укажите свой Возраст(сколько полных лет):"),
    heigth: +prompt("Укажите свой рост(см):"),
    kg: +prompt("Укажите свой вес(пример: 83.1):"),
    Waist: +prompt("Укажите свой обхват талия (см):"),
    hips: +prompt("Укажите свой обхват бедра (см):"),
    }
    
    IMT = client.kg / Math.pow(client.heigth, 2)
    console.log(IMT)
      function imt(){
      
          if(IMT <= 0.0016){
            console.log("Идекс массы тела : " + IMT , " Острый дефицит массы" + " (<16)")
          }else if(IMT <= 0.0018){
            console.log("Идекс массы тела : " + IMT , " Недостаточная масса тела" + " (16 - 18.5)")
          }else if(IMT <= 0.0025){
            console.log("Идекс массы тела : " + IMT , " норма" + " (18.6 - 25)")
          }else if(IMT <= 0.0030){
            console.log("Идекс массы тела : " + IMT , " Избыточная масса тела" + " (25.1 - 30)")
          }else if(IMT <= 0.0035){
            console.log("Идекс массы тела : " + IMT , " Ожирение первой степени" + " (30.1 - 35)")
          }else if(IMT <= 0.0040){
            console.log("Идекс массы тела : " + IMT , " Ожирение второй степени" + " (35.1 - 40)")
          }else{
            console.log("Идекс массы тела : " + IMT , " Ожирение третей степени" + " (40.1>)")
          }
      }
    
    abdominalObesity = client.Waist / client.hips 
    
      function abdom(){
      
       if(client.sex === "м"){
    
          if(abdominalObesity <= 0.85){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Отлично" + " (<0.85)")
          }else if(abdominalObesity <= 0.89){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Хорошее" + " (0.86 - 0.89)")
          }else if(abdominalObesity <= 0.95){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Среднее" + " (0.90 - 0.95)")
          }else{
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Критическое" + " (0.96>)")
          }
        }else if(client.sex === "ж"){
          if(abdominalObesity <= 0.75){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Отлично" + " (<0.85)")
          }else if(abdominalObesity <= 0.79){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Хорошее" + " (0.75 - 0.79)")
          }else if(abdominalObesity <= 0.86){
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Среднее" + " (0.80 - 0.86)")
          }else{
            console.log("Абдоминальное ожиренее: " + abdominalObesity , " Критическое" + " (0.87>)")
          }
        }else{
          cosnole.log("Не известный пол!")
        }
    } 
    
    brokFormMale = (client.heigth - 100) * 0.9
    brokFormFemale = (client.heigth - 100) * 0.85
    
    
    function brok(){
      if(client.age <= 40){
      if (client.sex === "м"){
        console.log("Ваш идеальный вес: " + brokFormMale)
      }else if (client.sex === "ж"){
        console.log("Ваш идеальный вес: " + brokFormFemale)
      }else{
        cosnole.log("Не известный пол!")
      }
     }else{
       console.log("Возраст привышает 40 лет. Рекомендуеться не считать идиальный вес после 40 лет.")
     }
    }
    
    
    if(client.age <= 40){
      if(client.sex === "м"){
      BMRM = 66 + (13.7 * brokFormMale) + (5 * client.heigth) - (6.76 * client.age)
      }else if(client.sex === "ж"){
      BMRF = 655 + (9.6 * brokFormFemale) + (1.8 * client.heigth) - (4.7 * client.age)
      }else{
       cosnole.log("Не известный пол!")
      }
    }else{
      if(client.sex === "м"){
      BMRM = 66 + (13.7 * (+prompt("укажите желаемый вес для подсчета мин. количества ккал в день."))) + (5 * client.heigth) - (6.76 * client.age)
      }else if(client.sex === "ж"){
      BMRF = 655 + (9.6 * (+prompt("укажите желаемый вес для подсчета мин. количества ккал в день."))) + (1.8 * client.heigth) - (4.7 * client.age)
      }else{
      console.log("Возраст привышает 40 лет. Рекомендуеться не считать идиальный вес после 40 лет.")
    }
    }
    
    
    function bened (){
      if(client.sex === "м"){
        console.log("Минимальное количесвто ккал в день: " + BMRM)
      }else if (client.sex === "ж"){
        console.log("Минимальное количесвто ккал в день: " + BMRF)
      }else{
        cosnole.log("Не известный пол!")
      }
    }
    
    
    
    if(client.sex === "м"){
      AMRM = BMRM * (+prompt("Укажите коэффициент(1.2 очень низкая активность)(1.4 Сидячая работа низкая активность)(1.6 Более активная работа средняя активность)(1.8 Высокая активность)"))
    }else if(client.sex === "ж"){
      AMRF = BMRF * (+prompt("Укажите коэффициент(1.2 очень низкая активность)(1.4 Сидячая работа низкая активность)(1.6 Более активная работа средняя активность)(1.8 Высокая активность)"))
    }else{
      cosnole.log("Не известный пол!")
    }
    
    
    pro = (BMRM || BMRF) * 0.15 / 4
    fat = (BMRM || BMRF) * 0.30 / 9
    carb = (BMRM || BMRF) * 0.55 / 4
    h2o = client.kg * 0.03
    
    
    console.log(client)
    imt();
    abdom();
    brok();
    bened();
    console.log("По вашим запросам мы расчитали необходимое количество ккал в день: " + AMRM || AMRF)
    console.log("Необходимое количество белков в день: " + pro)
    console.log("Необходимое количество жиров в день: " + fat)
    console.log("Необходимое количество углеводов в день: " + carb)
    console.log("Необходимое количество л/воды в день: " + h2o)
    
    