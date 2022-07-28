const billAmount = document.querySelector('.bill-amount')
const cashGiven = document.querySelector('.cash-given')
const checkBtn = document.querySelector('.check-button')
const errorMsg = document.querySelector('.error-msg')
const notesNumber = document.querySelectorAll('.notes-number')
const cashGivenBtn = document.querySelector('.cash-given-btn')
const cashGivenSec = document.querySelector('.cash-given-section')

const availableNotes = [2000,500,100,20,10,5,1]

hideMessage()

cashGivenBtn.addEventListener('click', () => {
    cashGivenSec.style.display = 'block'
    cashGivenBtn.style.display= 'none'
})

checkBtn.addEventListener('click', ()=> {
    hideMessage()
    const amountLeft = cashGiven.value - billAmount.value

    if(billAmount.value > 0){
        if(amountLeft === 0) {
            showError("Don't need to return anything")
        }
    
        if(amountLeft > 0) {
            calculateCash(amountLeft)
        }
    
        if(amountLeft < 0){
            showError('Do you want to wash dishes')
        }
    }else{
        showError('Invalid Bill Amount')

    }
})

function calculateCash(amount) {
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