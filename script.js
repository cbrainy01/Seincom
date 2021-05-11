//create click alerts for the following:     
    //  <label><input type="radio" name="fav" value="jer">Jerry</label>
    //  <label><input type="radio" name="fav" value="geo">George</label>
    //  <label><input type="radio" name="fav" value="ela">Elaine</label>
    //  <label><input type="radio" name="fav" value="kra">Kramer</label>

    const jerryInput = document.getElementsByTagName("label")[0];
    const georgeInput = document.getElementsByTagName("label")[1];
    const elaineInput = document.getElementsByTagName("label")[2];
    const kramerInput = document.getElementsByTagName("label")[3];

    function clickAlertKramer() {
        alert("Congragulations, you picked the right answer!");
    };

    function clickAlertElaine() {
        alert("Care to dance?");
    };

    function clickAlertGeorge() {
        alert("A rare victory for Costanza");
    };

    function clickAlertJerry() {
        alert("Your selection of Jerry was evened out by others' selection of the others");
    };


    jerryInput.addEventListener("click", clickAlertJerry);
    kramerInput.addEventListener("click", clickAlertKramer);
    elaineInput.addEventListener("click", clickAlertElaine);
    georgeInput.addEventListener("click", clickAlertGeorge);

   