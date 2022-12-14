const forms = document.querySelectorAll('.form-quizz');
let tableResult = [];
const responses = ['d','a','c','c','a','a','a','d','b','a'];
const emojis = ['β', 'β¨', 'π', 'π­', 'π'];
const titleResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const helpResultat = document.querySelector('.help');
const allQuestions = document.querySelectorAll('.question-block');
let verifTable = [];
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        for(i = 1; i < 11; i++){
            tableResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);

        }
        veriffunc(tableResult);
        tableResult = [];

})
})

function veriffunc(tabResults) {
    for (let a = 0; a < 11; a++) {
        if(tabResults[a] === responses[a]){
            verifTable.push(true);
        }else{
            verifTable.push(false);
        }
    }
    showResultats(verifTable);
    colorFunction(verifTable);
    verifTable = [];
}
function showResultats(tabcheck){
    const nbFaltes = tabcheck.filter(el => el !== true).length;
    switch(nbFaltes){
        case 0:
            titleResultat.innerText = "β Well Done!!!!β";
            helpResultat.innerText = '';
            noteResultat.innerText = '10/10';
        break;
        case 1:
            titleResultat.innerText = "β You are alomost there!!!!β";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '9/10';
        break;
        case 2:
            titleResultat.innerText = "β¨One more effort...β¨";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '8/10';
        break;
        case 3:
            titleResultat.innerText = "πThere are still some errors!π";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '7/10';
        break;
        case 4:
            titleResultat.innerText = "πYou can do better than this!β¨";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '6/10';
        break;
        case 5:
            titleResultat.innerText = "π­Study harder!!!π­";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '5/10';
        break;
        case 6:
            titleResultat.innerText = "π­Let's study ma friend...β¨";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '4/10';
        break;
        case 7:
            titleResultat.innerText = "π­ Oh no... you can do it!!π­";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '3/10';
        break;
        case 8:
            titleResultat.innerText = "πThen do better!π­";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '2/10';
        break;
        case 9:
            titleResultat.innerText = "πPlease go back to study...π";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '1/10';
        break;
        case 10:
            titleResultat.innerText = "πYou Failed ma friend...π";
            helpResultat.innerText = 'Retry another answer in the red box, then re-submit!';
            noteResultat.innerText = '0/10';
        break;
        default:
            'Wops, unexpected case'
    }
}
function colorFunction(tabValBool){
    for(let j=0; j < tabValBool.length; j++){
        if(tabValBool[j] === true){
            allQuestions[j].style.background = 'lightgreen';
        }else{
            allQuestions[j].style.background = '#ffb8b8';
            allQuestions[j].classList.add('.echec');
            setTimeout(() => {
                allQuestions[j].classList.remove('.echec');
            }, 500)
        }
    }
}
allQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white"
    })
})