let step = 0;

function answer(response){

    if(step === 0){

        if(response === "no"){
            showResult("Diagnosis: Charger / Baterai Rusak");
        }

        else{
            step = 1;
            document.getElementById("question").innerHTML =
            "Apakah laptop terasa lambat?";
        }
    }
   else if(step === 1){

        if(response === "no"){
            showResult("Diagnosis: Sistem Normal");
        }

        else{
            step = 2;
            document.getElementById("question").innerHTML =
            "Apakah laptop terasa panas?";
        }
    }

    else if(step === 2){

        if(response === "no"){
            showResult("Diagnosis: Perlu Upgrade RAM");
        }
      else{
            step = 3;
            document.getElementById("question").innerHTML =
            "Apakah kipas berbunyi keras?";
        }
    }

    else if(step === 3){

        if(response === "yes"){
            showResult("Diagnosis: Bersihkan Kipas Laptop");
        }

        else{
            showResult("Diagnosis: Ganti Thermal Paste");
        }
    }
}

function showResult(text){

    document.getElementById("result").innerHTML = text;

    document.getElementById("question").innerHTML =
    "Diagnosa Selesai";
}
