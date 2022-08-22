const billAmount = document.querySelector('.bill-amount')
const cashGiven = document.querySelector('.cash-given')
const checkBtn = document.querySelector('.check-button')
const errorMsg = document.querySelector('.error-msg')
const notesNumber = document.querySelectorAll('.notes-number')
const cashGivenBtn = document.querySelector('.cash-given-btn')
const cashGivenSec = document.querySelector('.cash-given-section')
const displayChangeSec = document.querySelector('.display-change')
const returnedAmountSec = document.querySelector('#returned-amount')

const availableNotes = [2000,500,100,20,10,5,1]

hideMessage()

cashGivenBtn.addEventListener('click', () => {
    hideMessage()
    if(billAmount.value){
        cashGivenSec.style.display = 'block'
        cashGivenBtn.style.display= 'none'
    }else{
        showError('Please Add the bill amount.')
    }
})

checkBtn.addEventListener('click', ()=> {
    hideMessage()
    displayChangeSec.style.display = 'none'
    const amountLeft = cashGiven.value - billAmount.value

    if(billAmount.value > 0){
        if(amountLeft === 0) {
            showError("Don't need to return anything.")
        }
    
        if(amountLeft > 0) {
            calculateCash(amountLeft)
            returnedAmountSec.innerText = amountLeft
        }
    
        if(amountLeft < 0){
            showError('Do you want to wash dishes??')
        }
    }else{
        showError('Invalid Bill Amount!!')

    }
})

function calculateCash(amount) {
    displayChangeSec.style.display = 'block'
    for(i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amount / availableNotes[i])
        amount %= availableNotes[i]
        notesNumber[i].innerText = numberOfNotes
    }
}

function hideMessage() {
    errorMsg.style.display = 'none'
}

function showError(msg) {
    errorMsg.style.display = 'block'
    errorMsg.innerText = msg;
}