const anotherworker = document.getElementById('anotherworker')
const myself = document.getElementById('myself')
const all = document.getElementById('all')

const anotherWorker = document.querySelector('.another-worker')
const mySelf = document.querySelector('.myself')
const plannedCleanProfitContent = document.querySelector('.planned-clean-profit-content')
const plannedCleanProfit = document.querySelector('.planned-clean-profit')

let price = document.getElementById('price')

// another worker count 
const countanother = document.getElementById('countanother')

// another worker inputs
let percent = document.getElementById('percent')
let countofclientanother = document.getElementById('countofclientanother')
let plannedcostsanotherInweek = document.getElementById('plannedcostsanother-inweek')
let plannedcostsanotherInmonth = document.getElementById('plannedcostsanother-inmonth')

// another worker results

let incomewithoutpercentdirtyanotherInday = document.getElementById('incomewithoutpercentdirtyanother-inday')
let incomewithoutpercentdirtyanotherInweekWithoutweekend = document.getElementById('incomewithoutpercentdirtyanother-inweek-withoutweekend')
let incomewithoutpercentdirtyanotherInweek = document.getElementById('incomewithoutpercentdirtyanother-inweek')
let incomewithoutpercentdirtyanotherInmonthWithoutweekend = document.getElementById('incomewithoutpercentdirtyanother-inmonth-withoutweekend')
let incomewithoutpercentdirtyanotherInmonth = document.getElementById('incomewithoutpercentdirtyanother-inmonth')

let incomewithoutpercentanotherInday = document.getElementById('incomewithoutpercentanother-inday')
let incomewithoutpercentanotherInweekWithoutweekend = document.getElementById('incomewithoutpercentanother-inweek-withoutweekend')
let incomewithoutpercentanotherInweek = document.getElementById('incomewithoutpercentanother-inweek')
let incomewithoutpercentanotherInmonthWithoutweekend = document.getElementById('incomewithoutpercentanother-inmonth-withoutweekend')
let incomewithoutpercentanotherInmonth = document.getElementById('incomewithoutpercentanother-inmonth')

let incomewithoutpercentanothermyselfInweekWithoutweekend = document.getElementById('incomewithoutpercentanothermyself-inweek-withoutweekend')
let incomewithoutpercentanothermyselfInweek = document.getElementById('incomewithoutpercentanothermyself-inweek')
let incomewithoutpercentanothermyselfInmonthWithoutweekend = document.getElementById('incomewithoutpercentanothermyself-inmonth-withoutweekend')
let incomewithoutpercentanothermyselfInmonth = document.getElementById('incomewithoutpercentanothermyself-inmonth')

countanother.addEventListener('click', function countanother() {
    document.querySelector('.another-result').style.display = 'block'
    let dirtyEarnAnother = price.value * countofclientanother.value
    let cleanEarnAnother = percent.value * (1 / 100) * price.value
    let ourEarnAnother = price.value - cleanEarnAnother
    incomewithoutpercentdirtyanotherInday.textContent = dirtyEarnAnother + 'р.'
    incomewithoutpercentdirtyanotherInweekWithoutweekend.textContent = dirtyEarnAnother * 7 + 'р.'
    incomewithoutpercentdirtyanotherInweek.textContent = dirtyEarnAnother * 5 + 'р.'
    incomewithoutpercentdirtyanotherInmonthWithoutweekend.textContent = dirtyEarnAnother * 30 + 'р.'
    incomewithoutpercentdirtyanotherInmonth.textContent = dirtyEarnAnother * 23 + 'р.'

    incomewithoutpercentanotherInday.textContent = cleanEarnAnother * countofclientanother.value + 'р'
    incomewithoutpercentanotherInweekWithoutweekend.textContent = cleanEarnAnother * countofclientanother.value * 7 + 'р'
    incomewithoutpercentanotherInweek.textContent = cleanEarnAnother * countofclientanother.value * 5 + 'р'
    incomewithoutpercentanotherInmonthWithoutweekend.textContent = cleanEarnAnother * countofclientanother.value * 30 + 'р'
    incomewithoutpercentanotherInmonth.textContent = cleanEarnAnother * countofclientanother.value * 23 + 'р.'
    incomewithoutpercentanothermyselfInweekWithoutweekend.textContent = ((ourEarnAnother * countofclientanother.value) * 7 - plannedcostsanotherInweek.value) + 'р.'
    incomewithoutpercentanothermyselfInweek.textContent = ((ourEarnAnother * countofclientanother.value) * 5 - plannedcostsanotherInweek.value) + 'р.'
    incomewithoutpercentanothermyselfInmonthWithoutweekend.textContent = ((ourEarnAnother * countofclientanother.value) * 30 - plannedcostsanotherInmonth.value) + 'р.'
    incomewithoutpercentanothermyselfInmonth.textContent = ((ourEarnAnother * countofclientanother.value) * 23 - plannedcostsanotherInmonth.value) + 'р.'

    let spans = document.querySelectorAll('span')
    spans.forEach(item => {
        if (item.textContent.includes('-')) {
            item.classList.add('minus')
        }
    })
})

// myself count 
const countmyself = document.getElementById('countmyself')

// myself inputs
let countofclient = document.getElementById('countofclient')
let plannedcostsInweek = document.getElementById('plannedcosts-inweek')
let plannedcostsInmonth = document.getElementById('plannedcosts-inmonth')

// mysefl results
let incomewithoutpercentdirtyInday = document.getElementById('incomewithoutpercentdirty-inday')
let incomewithoutpercentdirtyInweekWithoutweekend = document.getElementById('incomewithoutpercentdirty-inweek-withoutweekend')
let incomewithoutpercentdirtyInweek = document.getElementById('incomewithoutpercentdirty-inweek')
let incomewithoutpercentdirtyInmonthWithoutweekend = document.getElementById('incomewithoutpercentdirty-inmonth-withoutweekend')
let incomewithoutpercentdirtyInmonth = document.getElementById('incomewithoutpercentdirty-inmonth')

let incomewithoutpercentmyselfInweekWithoutweekend = document.getElementById('incomewithoutpercentmyself-inweek-withoutweekend')
let incomewithoutpercentmyselfInweek = document.getElementById('incomewithoutpercentmyself-inweek')
let incomewithoutpercentmyselfInmonthWithoutweekend = document.getElementById('incomewithoutpercentmyself-inmonth-withoutweekend')
let incomewithoutpercentmyselfInmonth = document.getElementById('incomewithoutpercentmyself-inmonth')

countmyself.addEventListener('click', function countmyself() {
    document.querySelector('.myself-result').style.display = 'block'
    let dirtyEarn = price.value * countofclient.value
    incomewithoutpercentdirtyInday.textContent = dirtyEarn + 'р.'
    incomewithoutpercentdirtyInweekWithoutweekend.textContent = dirtyEarn * 7 + 'р.'
    incomewithoutpercentdirtyInweek.textContent = dirtyEarn * 5 + 'р.'
    incomewithoutpercentdirtyInmonthWithoutweekend.textContent = dirtyEarn * 30 + 'р.'
    incomewithoutpercentdirtyInmonth.textContent = dirtyEarn * 23 + 'р.'

    incomewithoutpercentmyselfInweekWithoutweekend.textContent = (dirtyEarn * 7) - plannedcostsInweek.value + 'р.'
    incomewithoutpercentmyselfInweek.textContent = (dirtyEarn * 5) - plannedcostsInweek.value + 'р.'
    incomewithoutpercentmyselfInmonthWithoutweekend.textContent = (dirtyEarn * 30) - plannedcostsInmonth.value + 'р.'
    incomewithoutpercentmyselfInmonth.textContent = (dirtyEarn * 23) - plannedcostsInmonth.value + 'р.'
})

// all count
const countplannedcleanprofit = document.getElementById('countplannedcleanprofit')

// all results
let plannedcleanprofiInmonthWithoutweekend = document.getElementById('plannedcleanprofi-inmonth-withoutweekend')
let plannedcleanprofiInmonth = document.getElementById('plannedcleanprofi-inmonth')

countplannedcleanprofit.addEventListener('click', () => {
    countanother.click()
    countmyself.click()
    plannedcleanprofiInmonthWithoutweekend.textContent
    plannedcleanprofiInmonth.textContent
    let pww = parseInt(incomewithoutpercentanothermyselfInmonthWithoutweekend.textContent)
    let pw = parseInt(incomewithoutpercentanothermyselfInmonth.textContent)
    if (pww < 0) {
        pww = pww * -1
        plannedcleanprofiInmonthWithoutweekend.textContent = parseInt(incomewithoutpercentmyselfInmonthWithoutweekend.textContent) - pww
    } else {
        plannedcleanprofiInmonthWithoutweekend.textContent = parseInt(incomewithoutpercentmyselfInmonthWithoutweekend.textContent)
    }
    if (pw < 0) {
        pw = pw * -1
        plannedcleanprofiInmonth.textContent = parseInt(incomewithoutpercentmyselfInmonth.textContent) - pw
    } else {
        plannedcleanprofiInmonth.textContent = parseInt(incomewithoutpercentmyselfInmonth.textContent)
    }
    plannedCleanProfit.classList.add('active')
})

const removeAllClass = () => {
    anotherWorker.classList.remove('active')
    mySelf.classList.remove('active')
    plannedCleanProfit.classList.remove('active')
    plannedCleanProfitContent.classList.remove('active')
}

const removeAllAttribute = () => {
    anotherworker.removeAttribute('disabled')
    myself.removeAttribute('disabled')
    all.removeAttribute('disabled')
}


anotherworker.addEventListener('click', () => {
    removeAllClass()
    removeAllAttribute()
    anotherWorker.classList.add('active')
    anotherworker.setAttribute('disabled', 'disabled')
})

myself.addEventListener('click', () => {
    removeAllClass()
    removeAllAttribute()
    mySelf.classList.add('active')
    myself.setAttribute('disabled', 'disabled')
})

all.addEventListener('click', () => {
    removeAllClass()
    removeAllAttribute()
    anotherWorker.classList.add('active')
    mySelf.classList.add('active')
    plannedCleanProfitContent.classList.add('active')
    all.setAttribute('disabled', 'disabled')
})