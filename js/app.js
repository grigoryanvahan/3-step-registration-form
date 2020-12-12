let steps = Array.from(document.querySelectorAll('form .step'));
let nextBtn = document.querySelectorAll('form .next-btn');
let prevBtn = document.querySelectorAll('form .prev-btn');
let form = document.querySelector('form');
let name = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let city = document.querySelector('#city');
let address = document.querySelector('#address');
let postalCode = document.querySelector('#postal-code');
let country = document.querySelector('#country');
let useCheck = document.querySelector('#use-check');
let shopCountry = document.querySelector('#shop-country');
let shopCity = document.querySelector('#shop-city');
let shopAddress = document.querySelector('#shop-address');
let shopPostalCode = document.querySelector('#shop-postal-code');
let formData = document.querySelectorAll('.form-data')
let shopData = document.querySelectorAll('.shop-data');
let step1Data = Array.from(document.querySelectorAll('.form-control-1'));
let next1Btn = document.querySelector('.next-1');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repeatPassword = document.querySelector('#repeat-password');
let packageRadio = Array.from(document.querySelectorAll('.package-radio'));
let step2Data = Array.from(document.querySelectorAll('.form-control-2'));
let next2Btn = document.querySelector('.next-2');
let cardNumber = document.querySelector('#card-number');
let cardIcons = Array.from(document.querySelectorAll('.card-icons i'));
let fullName = document.querySelector('#full-name');
let cvc = document.querySelector('#cvc');
let date = document.querySelector('#date');
let step3Data = Array.from(document.querySelectorAll('.form-control-3'));
let submitBtn = document.querySelector('#submit-btn');
let notice = Array.from(document.querySelectorAll('.notice'));
let progStep = document.querySelector('.progress-step');
let progBar = Array.from(document.querySelectorAll('.progress-bar div'));

//Step Change

function changeStep(btn) {
    let index = 0;
    let active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn == 'next') {
        index++;
        progBar[index].style.cssText = 'background-color: #f3d4b7';
    }else if(btn == 'prev') {
        index--;
        progBar[index+1].style.cssText = 'background-color: #3333';
    };
    steps[index].classList.add('active');
    progStep.innerHTML = 'Step' +  ' ' + eval(index+1)+'/3';
    };

prevBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('prev');
    });

});

//Validation Check

function setErrorTo(input) {
    input.classList.remove('valid')
    input.classList.add('error')
};

function setValidTo(input) {
    input.classList.remove('error')
    input.classList.add('valid')
};

function checkStringInputs(input) {
    const namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
    if(input.value.match(namePattern)){
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
};

function checkEmpty(input) {
    if(input.value === '') {
        setErrorTo(input);
        return false;
    }else {
        setValidTo(input);
        return true;
    }
};

function checkCity(input) {
    const namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
    if(input.value.match(namePattern)){
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
}

function checkAddress(input) {
    const namePattern = /^[a-zA-Z0-9][a-zA-Z0-9\s,'-/]*$/g;
    if(input.value.match(namePattern)){
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
}

function checkPostalCode(input) {
    const postalCodePattern = /^[a-zA-Z0-9][a-zA-Z0-9\s,-]*$/g;
    if(input.value.match(postalCodePattern)) {
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
};

function checkSelect(select) {
    if(select.value === '0') {
        setErrorTo(select);
        return false;
    }else {
        setValidTo(select);
        return true;
    }
};

function checkEmail(input) {
    let emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if(input.value.match(emailPattern)) {
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
}

function checkPassword(input) {
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g;
    if(input.value.match(passwordPattern)) {
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
}

function checkRepeatPass(input) {
    if(input.value === password.value && input.value != '') {
        setValidTo(input);
        return true;
    }else {
        setErrorTo(input);
        return false;
    }
}

function checkPackageRadio(elem) {
    if(elem.checked) {
        setValidTo(elem.parentElement.parentElement);
        return true;
    }else {
        setErrorTo(elem.parentElement.parentElement);
        return false;
    }
}

function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,19);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

function checkCardCode(input) {
    let value = input.value.split(' ').join('');
    if(value.length < 15) {
        setErrorTo(input);
        return false;
    }else {
        setValidTo(input);
        return true;
    }
}

function checkCardAmExp() {
    let cardno = /^3[47][0-9]{13}$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[0].classList.add('active')
    }else {
        cardIcons[0].classList.remove('active')
    }
}

function checkCardVisa() {
    let cardno = /^4[0-9]{12}(?:[0-9]{3})?$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[1].classList.add('active')
    }else {
        cardIcons[1].classList.remove('active')
    }
}

function checkCardMaster() {
    let cardno = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[2].classList.add('active')
    }else {
        cardIcons[2].classList.remove('active')
    }
}

function checkCardDiscover() {
    let cardno = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[3].classList.add('active')
    }else {
        cardIcons[3].classList.remove('active')
    }
}

function checkCardDiners() {
    let cardno = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[4].classList.add('active')
    }else {
        cardIcons[4].classList.remove('active')
    }
}

function checkCardJCB() {
    let cardno = /^(?:2131|1800|35\d{3})\d{11}$/;
    let value = cardNumber.value.split(' ').join('');
    if(value.match(cardno)) {
        cardIcons[5].classList.add('active')
    }else {
        cardIcons[5].classList.remove('active')
    }
}

function checkFullName(input) {
    input.value = input.value.replace(/[^a-zA-Z_\s]+/g, '');
}

function checkCVC(input) {
    let value = input.value.split(' ').join('');
    if(value.length < 4) {
        setErrorTo(input);
        return false
    }else {
        setValidTo(input);
        return true;
    }
    input.value = input.value.replace(/[\D]/g, '');
}

function checkDateEmpty(date) {
    if(date.value == '') {
        setErrorTo(date);
        return false;
    }else {
        setValidTo(date);
        return true;
    }
}


name.addEventListener('input', () => {
    checkStringInputs(name);
});

lastName.addEventListener('input', () => {
    checkStringInputs(lastName);
});

city.addEventListener('input', () => {
    checkCity(city);
});

address.addEventListener('input', () => {
    checkAddress(address);
});

postalCode.addEventListener('input', () => {
    checkPostalCode(postalCode);
});

country.addEventListener('change', () => {
    checkSelect(country);
});

shopCountry.addEventListener('change', () => {
    checkSelect(shopCountry);
});

shopCity.addEventListener('input', () => {
    checkCity(shopCity);
});

shopAddress.addEventListener('input', () => {
    checkAddress(shopAddress);
});

shopPostalCode.addEventListener('input', () => {
    checkPostalCode(shopPostalCode);
});

email.addEventListener('input', () => {
    checkEmail(email);
});

password.addEventListener('input', () => {
    checkPassword(password);
})

repeatPassword.addEventListener('input', () => {
    checkRepeatPass(repeatPassword);
})

cardNumber.addEventListener('input', formatCardCode, false);
cardNumber.addEventListener('input', () => {
    checkCardCode(cardNumber);
    checkCardAmExp();
    checkCardVisa();
    checkCardVisa();
    checkCardDiscover();
    checkCardDiners();
    checkCardJCB();
})

fullName.addEventListener('input', () => {
    checkStringInputs(fullName);
    checkFullName(fullName);
});

cvc.addEventListener('input', () => {
    checkEmpty(cvc);
    checkCVC(cvc);
});

date.addEventListener('change', () => {
    checkDateEmpty(date);
});


//Min Date 

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
date.setAttribute('min',today);


//Use Check

formData.forEach(elem => {
    elem.addEventListener('input', () => {
        if(useCheck.checked) {
            shopCountry.value = country.value;
            shopCity.value = city.value;
            shopAddress.value = address.value;
            shopPostalCode.value = postalCode.value;
        }
    })
});

useCheck.addEventListener('change', () => {
    shopData.forEach(elem => {
        if(useCheck.checked) {
            elem.classList.remove('error');
            elem.classList.add('borderDefault');
            elem.setAttribute('disabled',true)
            shopCountry.value = country.value;
            shopCity.value = city.value;
            shopAddress.value = address.value;
            shopPostalCode.value = postalCode.value;
        }else {
            elem.classList.remove('borderDefault');
            elem.removeAttribute('disabled')
        }
    })
});

//Next-1 Button Unabled

function checkValidStep1(elem) {
    if(!elem.classList.contains('error') && checkEmpty(elem) && country.value !== '0' &&  shopCountry.value !== '0') {
        return true;
    }else {
        return false;
    }
}

next1Btn.onclick = () => {
    if(!checkStringInputs(name)) {
        notice[0].classList.add('active');
    }else {
        notice[0].classList.remove('active');
    };

    if(!checkStringInputs(lastName)) {
        notice[1].classList.add('active');
    }else {
        notice[1].classList.remove('active');
    }; 

    if(!checkSelect(country)) {
        notice[2].classList.add('active');
    }else {
        notice[2].classList.remove('active');
    };

    if(!checkCity(city)) {
        notice[3].classList.add('active');
    }else {
        notice[3].classList.remove('active');
    };

    if(!checkAddress(address)) {
        notice[4].classList.add('active');
    }else {
        notice[4].classList.remove('active');
    };

    if(!checkPostalCode(postalCode)) {
        notice[5].classList.add('active');
    }else {
        notice[5].classList.remove('active');
    }; 

    if(!checkSelect(shopCountry)) {
        notice[6].classList.add('active');
    }else {
        notice[6].classList.remove('active');
    };

    if(!checkCity(shopCity)) {
        notice[7].classList.add('active');
    }else {
        notice[7].classList.remove('active');
    };

    if(!checkAddress(shopAddress)) {
        notice[8].classList.add('active');
    }else {
        notice[8].classList.remove('active');
    };

    if(!checkPostalCode(shopPostalCode)) {
        notice[9].classList.add('active');
    }else {
        notice[9].classList.remove('active');
    };




    if(step1Data.every(checkValidStep1)) {
        changeStep('next');
    }else {
        checkStringInputs(name);
        checkStringInputs(lastName);
        checkSelect(country);
        checkCity(city);
        checkAddress(address);
        checkPostalCode(postalCode);
        checkSelect(shopCountry);
        checkCity(shopCity);
        checkAddress(shopAddress);
        checkPostalCode(shopPostalCode);
        return false;
    }
}

//Next-2 Button Unabled

function checkValidStep2(elem) {
    if(!elem.classList.contains('error') && checkEmpty(elem) && packageRadio.some(checkPackageRadio)) {
        return true;
    }else {
        return false;
    }
}

next2Btn.onclick = () => {
    if(!checkEmail(email)) {
        notice[10].classList.add('active');
    }else {
        notice[10].classList.remove('active');
    };
    if(!checkPassword(password)) {
        notice[11].classList.add('active');
    }else {
        notice[11].classList.remove('active');
    };
    if(!checkRepeatPass(repeatPassword)) {
        notice[12].classList.add('active');
    }else {
        notice[12].classList.remove('active');
    };
    if(!packageRadio.some(checkPackageRadio)) {
        notice[13].classList.add('active');
    }else {
        notice[13].classList.remove('active');
    };



    if(step2Data.every(checkValidStep2)) {
        changeStep('next');
    }else {
        checkEmail(email);
        checkPassword(password);
        checkRepeatPass(repeatPassword);
        packageRadio.some(checkPackageRadio);
        return false;
    }
}

//Submit Button Unabled

function checkValidStep3(elem) {
    if(!elem.classList.contains('error') && checkEmpty(elem) && checkEmpty(date)) {
        return true;
    }else {
        return false;
    }
}
submitBtn.onclick = () => {
    if(!checkCardCode(cardNumber)) {
        notice[14].classList.add('active');
    }else {
        notice[14].classList.remove('active');
    };

    if(!checkStringInputs(fullName)) {
        notice[15].classList.add('active');
    }else {
        notice[15].classList.remove('active');
    };

    if(!checkCVC(cvc)) {
        notice[16].classList.add('active');
    }else {
        notice[16].classList.remove('active');
    };

    if(!checkDateEmpty(date)) {
        notice[17].classList.add('active');
    }else {
        notice[17].classList.remove('active');
    };




    let dataInfo = {
        'Name' : name.value,
        'Last Name' : lastName.value,
        'City' : city.value,
        'Address' : address.value,
        'Postal Code' : postalCode.value,
        'Shopping Country' : shopCountry.value,
        'Shopping City' : shopCity.value,
        'Shopping Address' : shopAddress.value,
        'Shopping Postal Code' : shopPostalCode.value,
        'E-Mail' : email.value,
        'Password' : password.value,
        'Card Number' : cardNumber.value,
        'Full Name' : fullName.value,
        'CVC' : cvc.value,
        'Card Date' : date.value
    };
    if(step3Data.every(checkValidStep3)) {
        console.log(dataInfo);
        alert('The registration was successful');
    }else {
        checkCardCode(cardNumber);
        checkStringInputs(fullName);
        checkCVC(cvc);
        checkDateEmpty(date);
        return false;
    }
}



