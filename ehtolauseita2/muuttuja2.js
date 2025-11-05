function paivaNro() {
        const dayNumber = Number(document.getElementById('paivaBox').value);
    const result = document.getElementById('tulos');
    
    let dayName = "";

    if (isNaN(dayNumber)) {
        result.textContent = "Syötä numero 1 ja 7 väliltä.";
        return;
    }

    switch (dayNumber) {
        case 1:
            dayName = "Maanantai";
            break;
        case 2:
            dayName = "Tiistai"
            break;
        case 3:
            dayName = "Keskiviikko"
            break;
        case 4:
            dayName = "Torstai"
            break;
        case 5:
            dayName = "Perjantai"
            break;
        case 6:
            dayName = "Lauantai"
            break;
        case 7:
            dayName = "Sunnuntai"
            break;
        default:
            result.textContent = "Syötä numero 1 ja 7 väliltä.";
            return;
    }

    result.textContent = `Tämä numero ${dayNumber} on ${dayName}.`;
}