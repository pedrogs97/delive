'use strict';
// Form e inputs
const forms = document.getElementById('forms');
const selectLocalLabelInput = document.getElementById('selectLocalLabel');
const selectLocalInput = document.getElementById('selectLocal');
const selectLocalErrorInput = document.getElementById('errorMessageSelect');
const nameLabelPersonInput = document.getElementById('nameLabel');
const namePersonInput = document.getElementById('name');
const namePersonErrorInput = document.getElementById('errorMessageName');
const emailLabelPersonInput = document.getElementById('emailLabel');
const emailPersonInput = document.getElementById('email');
const emailPersonErrorInput = document.getElementById('errorMessageEmail');
const phoneLabelPersonInput = document.getElementById('phoneLabel');
const phonePersonInput = document.getElementById('phone');
const phonePersonErrorInput = document.getElementById('errorMessagePhone');
const emailReceiverLabelInput = document.getElementById('emailReceiverLabel');
const emailReceiverInput = document.getElementById('emailReceiver');
const emailReceiverErrorInput = document.getElementById('errorMessageEmailReceiver');
const nameReceiverLabelInput = document.getElementById('nameReceiverLabel');
const nameReceiverInput = document.getElementById('nameReceiver');
const nameReceiverErrorInput = document.getElementById('errorMessageNameReceiver');
const phoneReceiverLabelInput = document.getElementById('phoneReceiverLabel');
const phoneReceiverInput = document.getElementById('phoneReceiver');
const phoneReceiverErrorInput = document.getElementById('errorMessagePhoneReceiver');
const observationsInput = document.getElementById('observationsInput');
const observationsLabelInput = document.getElementById('observationsInputLabel');
const backButton = document.getElementById('btnBack');
const nextButton = document.getElementById('btnNext');
const submitButton = document.getElementById('btnSubmit');
const progressBar = document.getElementById('progress');

// Functions
const showPage0 = ()=>{
    selectLocalLabelInput.hidden = false;
    selectLocalInput.hidden = false;
    selectLocalErrorInput.hidden = false;
    namePersonInput.hidden = true;
    nameLabelPersonInput.hidden = true;
    namePersonErrorInput.hidden = true;
    emailPersonInput.hidden = true;
    emailLabelPersonInput.hidden = true;
    emailPersonErrorInput.hidden = true;
    phonePersonInput.hidden = true;
    phoneLabelPersonInput.hidden = true;
    phonePersonErrorInput.hidden = true;
    emailReceiverInput.hidden = true;
    emailReceiverLabelInput.hidden = true;
    emailReceiverErrorInput.hidden = true;
    nameReceiverInput.hidden = true;
    nameReceiverLabelInput.hidden = true;
    nameReceiverErrorInput.hidden = true;
    phoneReceiverInput.hidden = true;
    phoneReceiverLabelInput.hidden = true;
    phoneReceiverErrorInput.hidden = true;
    observationsInput.hidden = true;
    observationsLabelInput.hidden = true;
    backButton.hidden = true;
    submitButton.hidden = true;
    nextButton.hidden = false;
}

const showPage1 = ()=>{
    selectLocalLabelInput.hidden = true;
    selectLocalInput.hidden = true;
    selectLocalErrorInput.hidden = true;
    namePersonInput.hidden = false;
    nameLabelPersonInput.hidden = false;
    namePersonErrorInput.hidden = false;
    emailPersonInput.hidden = false;
    emailLabelPersonInput.hidden = false;
    emailPersonErrorInput.hidden = false;
    phonePersonInput.hidden = false;
    phoneLabelPersonInput.hidden = false;
    phonePersonErrorInput.hidden = false;
    emailReceiverInput.hidden = true;
    emailReceiverLabelInput.hidden = true;
    emailReceiverErrorInput.hidden = true;
    nameReceiverInput.hidden = true;
    nameReceiverLabelInput.hidden = true;
    nameReceiverErrorInput.hidden = true;
    phoneReceiverInput.hidden = true;
    phoneReceiverLabelInput.hidden = true;
    phoneReceiverErrorInput.hidden = true;
    observationsInput.hidden = true;
    observationsLabelInput.hidden = true;
    backButton.hidden = false;
    submitButton.hidden = true;
    nextButton.hidden = false;
}

const showPage2 = ()=>{
    selectLocalLabelInput.hidden = true;
    selectLocalInput.hidden = true;
    namePersonInput.hidden = true;
    selectLocalErrorInput.hidden = true;
    nameLabelPersonInput.hidden = true;
    namePersonErrorInput.hidden = true;
    emailPersonInput.hidden = true;
    emailLabelPersonInput.hidden = true;
    emailPersonErrorInput.hidden = true;
    phonePersonInput.hidden = true;
    phoneLabelPersonInput.hidden = true;
    phonePersonErrorInput.hidden = true;
    emailReceiverInput.hidden = false;
    emailReceiverLabelInput.hidden = false;
    emailReceiverErrorInput.hidden = false;
    nameReceiverInput.hidden = false;
    nameReceiverLabelInput.hidden = false;
    nameReceiverErrorInput.hidden = false;
    phoneReceiverInput.hidden = false;
    phoneReceiverLabelInput.hidden = false;
    phoneReceiverErrorInput.hidden = false;
    observationsInput.hidden = false;
    observationsLabelInput.hidden = false;
    backButton.hidden = false;
    submitButton.hidden = false;
    nextButton.hidden = true;
}

const updateProgress =  (direction)=>{
    if (direction === 'backward')
    {
        if (progressBar.style.width === '')
        {
            return;
        }
        else
        {
            var progress = parseInt(progressBar.style.width.replace('%',''));
            progress -= 33;
            progressBar.style.width = progress.toString() + '%';
        }
    }
    else
    {
        if (progressBar.style.width === '')
        {
            progressBar.style.width = '33%';
        }
        else
        {
            var progress = parseInt(progressBar.style.width.replace('%',''));
            progress += 33;
            if (progress === 99)
                progressBar.style.width = '100%';
            else
                progressBar.style.width = progress.toString() + '%';
        }
    }
}

const validatedForms = (page) =>{
    if (page === 0)
    {
        if (selectLocalInput.value === '')
        {
            forms.classList.add('was-validated');
            return false;
        }    
        forms.classList.remove('was-validated');
        return true;
    }
    else if (page === 1)
    {
        if (phonePersonInput.value === '' || emailPersonInput.value === '' || namePersonInput.value === '')
        {
            forms.classList.add('was-validated');
            return false;
        }    
        forms.classList.remove('was-validated');
        return true;
    }
    else
    {
        if (emailReceiverInput.value === '' || phoneReceiverInput.value === '')
        {
            forms.classList.add('was-validated');
            return false;
        }    
        forms.classList.remove('was-validated');
        return true;
    }
}

function saveMessage(local, namePerson, emailPerson, phonePerson, emailReceiver, nameReceiver, phoneReceiver, observations) {
    var data = undefined;
    if (observations !== '' || observations !== undefined)
    {
        data = {
            local: local,
            name: namePerson,
            email: emailPerson,
            phone: phonePerson,
            receiverEmail: emailReceiver,
            receiverName: nameReceiver,
            receiverPhone: phoneReceiver,
            observations: observations,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
    }
    else
    {
        data = {
            local: local,
            name: namePerson,
            email: emailPerson,
            phone: phonePerson,
            receiverEmail: emailReceiver,
            receiverName: nameReceiver,
            receiverPhone: phoneReceiver,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
    }
    // Add a new message entry to the database.
    if (data !== undefined)
    {
        return firebase.firestore().collection('submits').add(data).then(() =>{
            updateProgress();
            const modal = document.getElementById('staticBackdrop');
            const container = document.getElementById('main-container');
            modal.style.display = 'block';
            modal.classList.add('show');
            container.style.display = 'none';
        })
        .catch((error) => {
            alert('Ocorreu um erro ao tentar enviar. Tente novamente mais tarde');
        });
    }
    else
    {
        console.log('Error writing new message to database - undefined');
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(observationsInput.value);
    saveMessage(selectLocalInput.value, namePersonInput.value, emailPersonInput.value, phonePersonInput.value, emailReceiverInput.value, nameReceiverInput.value, phoneReceiverInput.value, observationsInput.value);
}

const checkSetupFirebase =  ()=> {
    // Checks that the Firebase SDK has been correctly setup and configured.
    if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
      window.alert('Error on load');
    }   
}


// Initial configs
showPage0();
checkSetupFirebase();
var pageGlobal = 0;

// Events
nextButton.addEventListener('click', ()=>{
    if(validatedForms(pageGlobal))
    {
        updateProgress();
        if (pageGlobal === 0)
        {
            showPage1();
            pageGlobal += 1;
        }
        else if (pageGlobal == 1) {
            showPage2();
            pageGlobal += 1;
        }
    }
});

backButton.addEventListener('click', ()=>{
    if (pageGlobal == 1)
    {
        showPage0();
        updateProgress('backward');
        pageGlobal -= 1;
    }
    else if (pageGlobal == 2)
    {
        showPage1();
        updateProgress('backward');
        pageGlobal -=1;
    }
});

selectLocalInput.addEventListener('change', ()=>{
    validatedForms();
});

namePersonInput.addEventListener('change', ()=>{
    validatedForms();
});

emailPersonInput.addEventListener('change', ()=>{
    validatedForms();
});

phonePersonInput.addEventListener('change', ()=>{
    validatedForms();
});

emailReceiverInput.addEventListener('change', ()=>{
    validatedForms();
});

nameReceiverInput.addEventListener('change', ()=>{
    validatedForms();
});

phoneReceiverInput.addEventListener('change', ()=>{
    validatedForms();
});

observationsInput.addEventListener('change', ()=>{
    validatedForms();
});

forms.addEventListener('submit', onFormSubmit);
