

function coust (){

    const food = document.getElementById('food').value;
    const foodSting = parseInt(food)
    const rent = document.getElementById('rent').value;
    const rentSting = parseInt(rent)
    const clothes = document.getElementById('clothes').value;
    const clothesSting = parseInt(clothes)

    const tottalCoust = foodSting + rentSting + clothesSting

    const totalExps = document.getElementById('total-exps');
    totalExps.innerHTML = tottalCoust;

    return tottalCoust;
}

function SubBlance() {
    const valut = coust ()
    const incoum = document.getElementById('incoum').value;
    const incoumsting = parseInt(incoum)
    const sunIncoum = incoumsting - valut;
    const subBalance = document.getElementById('balence')
    subBalance.innerText = sunIncoum;
    return sunIncoum

}

function sava(){
    const sunTotalBalance = SubBlance();

    const savaParsent = document.getElementById('present').value;
    const savaParsentSting = parseInt(savaParsent);
    const persavingAmount = savaParsentSting * sunTotalBalance / 100;
    const filalAmount = sunTotalBalance - persavingAmount;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerHTML = persavingAmount
    const remainingBalance = document.getElementById('last-balance');
    remainingBalance.innerHTML = filalAmount;
}
