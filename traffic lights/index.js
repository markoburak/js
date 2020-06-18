function change(coloring, id) {
    var elem = document.getElementById(id);

    elem.style.background = coloring;

}


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//     console.log('Taking a break...');
//     await sleep(2000);
//     console.log('Two seconds later, showing sleep in a loop...');

//     // Sleep in loop
//     for (let i = 0; i < 100; i++) {

//         red = document.getElementById("circle_red")
//         red.style.background = 'red';
//         document.getElementById('circle_red').style.background = "";

//         await sleep(2000);
//         console.log(i);
//         red2 = document.getElementById("circle_red")
//         red2.style.background = 'green';
//         console.log(red2)
//         console.log(red2.style.background)
//         console.log(red.style.background)
//     }
// }


// function demoversia() {
//     console.log("here")
// }

function shine() {
    reding = document.getElementById('circle_red')
    reding.style.background = "red";
    setTimeout(function() { reding.style.background = '#091921'; }, 3000);

    setTimeout(function() {
        yellowing = document.getElementById('circle_yellow')
        yellowing.style.background = "yellow";
        setTimeout(function() { yellowing.style.background = '#091921'; }, 3000);
    }, 3000);

    setTimeout(function() {
        greening = document.getElementById('circle_green')
        greening.style.background = "green";
        setTimeout(function() { greening.style.background = '#091921'; }, 3000);
    }, 6000);
}

// function doSetTimeout(i) {
//     red = document.getElementById("circle_red")
//     red.style.background = 'red';

//     setTimeout(function() { red.style.background = 'green'; }, 2000);
// }
// for (var i = 1; i <= 2; ++i)
//     doSetTimeout(i);