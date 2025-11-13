const data = [
    [3, 2, 7, 24],
    [5, 6, 30, 1],
    [8, 4, 10, 9],
    [27, 21, 3, 10],
    [0, 11, 15, 13]
];

function muunnaTaulukko() {
    let html = "<table>";

    for (let i = 0; i < data.length; i++) {
        html += "<tr>";
        for (let j = 0; j < data[i].length; j++) {
            html += `<td>${data[i][j]}</td>`;
        }
        html += "</tr>";
    }

    html += "</table>";
    document.getElementById("taulukko").innerHTML = html;
}