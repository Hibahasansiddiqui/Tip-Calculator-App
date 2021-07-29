function calculateTip() {
    var amount = parseInt(document.querySelector('#amt').value);
    var people = parseInt(document.querySelector('#peop').value);
    var servicePercent = amount * 0.25;
    var servicePercent1 = amount * 0.20;
    var servicePercent2 = amount * 0.15;
    var servicePercent3 = amount * 0.10;
    var servicePercent4 = amount * 0.05;


    var service = (document.querySelector('#serv').value);

    var outStanding = servicePercent / people;
    var good = servicePercent1 / people;
    var normal = servicePercent2 / people;
    var bad = servicePercent3 / people;
    var terrible = servicePercent4 / people;

    if (amount == '' || service == 0) {

        alert('kindly fill blank')
    }
    else if (service === 'O') {
        console.log(outStanding)
        document.querySelector('#ans').innerHTML = outStanding;
    }

    else if (service === 'G') {
        console.log(good)
        document.querySelector('#ans').innerHTML = good;
    }

    else if (service === 'I') {
        console.log(normal)
        document.querySelector('#ans').innerHTML = normal;
    }
    else if (service === 'B') {
        console.log(bad)
        document.querySelector('#ans').innerHTML = bad;
    }
    else if (service === 'T') {
        console.log(terrible)
        document.querySelector('#ans').innerHTML = terrible;
    }

}