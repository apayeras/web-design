const cnv = document.getElementById("view-chart");
const ctx = cnv.getContext("2d");

const viewChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [{
            label: "visitas",
            data: [300000, 260000, 410000, 390000, 520000],
            backgroundColor: ["#9225","#2923","#2295", "#2225", "#5555"],
            borderColor: ["#922","#292","#229", "#222", "#555"],
            borderWidth: 1
        },
        {
            label: "ingresos",
            data: [30000, 31000, 41000, 31000, 62000],
            backgroundColor: ["#9225","#2923","#2295", "#2225", "#5555"],
            borderColor: ["#922","#292","#229", "#222", "#555"],
            borderWidth: 1
        }]
    } ,
    options: {
        scale: {
            y: {beginAtZero: true}
        }
    }

})