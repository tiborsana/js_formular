var celkem;

function prubeznaCenaF() {
    a=parseInt(document.formular.druhKrmiva.value);
    b=parseInt(document.formular.pocetKg.value);
    celkem=a*b;
    document.formular.prubeznaCena.value=celkem;
    }

function cenaF() {

    /* kvalita */
    if(document.formular.kvalita[0].checked) {
        celkem=celkem*1.3;
    }
    else if(document.formular.kvalita[1].checked) {
        celkem=celkem*1.5;
    }
    else if(document.formular.kvalita[2].checked) {
        celkem=celkem*0.85;
    }
    
    if(document.formular.kvalita[3].checked) {
        celkem=celkem+500;
    }

    /* doprava */
    if(document.formular.doprava[1].checked) {
        celkem=celkem*1.1;
    }
    else if(document.formular.doprava[2].checked) {
        celkem=celkem+250;
    }

    document.getElementById("vyslednaCena").innerHTML=(celkem + " Kč");

    /* dostatek prostředků */
    }

    function odpoved(){
        var vysl;
        vysl=parseInt(document.formular.prostredky.value);
        if (vysl>=(celkem)) {
            document.getElementById("vysledekDostupnosti").innerHTML=" Tato částka je dostatečná";
            }
            else {
                document.getElementById("vysledekDostupnosti").innerHTML=" Tato částka nestačí";
            }
        
        }
        
        