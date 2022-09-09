function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}


// form VALIDATION
const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const btn=document.getElementById('btnsignup')
const termsbtn=document.getElementById('termsbtn')
const successmsg=document.getElementById('success-msg')
const created=document.getElementById('created')
const product=document.getElementById('product')
form.addEventListener('submit', e => {
    // e.preventDefault()
    const validinput=validateInputs()
    console.log(validinput);
    if(validinput!==true){
        e.preventDefault()
    }
    else{
        
        product.style.display="block"
        
        sessionStorage.setItem("code",1)
        e.submit()
        created.innerText= `Hello ${firstname.value} Welcome to Discord`

    }

})

const setError = (element, message) => {
    const inputControl = element.parentElement
    console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.error')
    // console.log(errorDisplay);
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    
    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    let count=0
    const firstnameValue = firstname.value
    const lastnameValue = lastname.value    
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    const checkedbtn=termsbtn
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    

    if(firstnameValue === '' || firstnameValue.includes(" ") || /\d/.test(firstnameValue))   {
        setError(firstname, 'Your first name must not include any whitespace, numbers or special character ')
    
    }
    // else if(firstnameValue.includes(" ")){
    //     setError(firstname, 'Please do not put whitespace in your name')
    // }
    // else if(/\d/.test(firstnameValue)){
    //     setError(firstname, 'Please enter alphabets only')
    // }

    // else if(specialChars.test(firstnameValue)){
    //     setError(firstname, 'Please avoid special characters ')
    // }
    else {
        setSuccess(firstname)
        count++
    }

    if(lastnameValue === '' || lastnameValue.includes(" ") || /\d/.test(lastnameValue))   {
        setError(lastname, 'Your last name must not include any whitespace, numbers or special character ')
    
    }
    // if(lastnameValue === '') {
    //     setError(lastname, 'Please enter your last name')
    // } 
    // else if(/\d/.test(lastnameValue)){
    //     setError(lastname, 'Please enter alphabets only')
    // }
    // else if(specialChars.test(lastnameValue)){
    //     setError(lastname, 'Please avoid special characters ')
    // }
    // else if(lastnameValue.includes(" ")){
    //     setError(lastname, 'Please do not put whitespace in your name')
    // }

    else {
        setSuccess(lastname)
        count++
    }
    if(emailValue === '' || !isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    // } else if (!isValidEmail(emailValue)) {
    //     setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
        count++
    }

    if(passwordValue === '' || passwordValue.length < 8  ) {
        setError(password, 'Password must be at least 8 character.')
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password)
        count++
    }

    if(password2Value === '') {
        setError(password2, 'Please do not leave this feild empty, type your password again')
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match")
    } else {
        setSuccess(password2)
        count++
    }

    if(checkedbtn.checked===false){
        setError(checkedbtn, "Accept the terms to continue")
    }
    else{
        setSuccess(checkedbtn)
        count++
    }
    if (count==6) {
        return true
        sessionStorage.setItem("code", "1");
    }

}






