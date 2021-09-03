function calculateTip() {
    let amount = parseInt(document.querySelector('#amt').value);
    let people = parseInt(document.querySelector('#peop').value);
    const servicePercent = amount * 0.25;
    const servicePercent1 = amount * 0.20;
    const servicePercent2 = amount * 0.15;
    const servicePercent3 = amount * 0.10;
    const servicePercent4 = amount * 0.05;

    let service = (document.querySelector('#serv').value);

    let outStanding = servicePercent / people;
    let good = servicePercent1 / people;
    let normal = servicePercent2 / people;
    let bad = servicePercent3 / people;
    let terrible = servicePercent4 / people;

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
