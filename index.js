

const validFormFieldInput = (data) => {
    let tripKind = document.querySelector('input[name="tripKind"]:checked');
    let fromDest = document.querySelector('#from');
    let toDest = document.querySelector('#to');
    let fname1 = document.querySelector('#fname1');
    let fname2 = document.querySelector('#fname2');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let dateDep = document.querySelector('#dateDep'); 
    let dateRet = document.querySelector('#dateRet'); 
   
    let tripKindError = document.getElementById("tripKindError");
	let destinationError =  document.getElementById("destinationError");
    let fnameError1 = document.getElementById("fnameError1");
    let fnameError2 = document.getElementById("fnameError2");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let dateDepError = document.getElementById("dateDepError");
    let dateRetError = document.getElementById("dateRetError");
   

    tripKindError.style.display = 'none';
    destinationError.style.display = 'none';
    fnameError1.style.display = 'none';
    fnameError2.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    dateDepError.style.display = 'none';
    dateRetError.style.display = 'none';


	if(tripKind == null) {  
        tripKindError.style.display = 'initial';  
    } 

    if(fromDest.value.length == 0 || (tripKind == roundWay && toDest.value.length == 0)) { 
        destinationError.style.display = 'initial';   
    }

    if(fname1.value.length < 5 ) { 
        fnameError1.style.display = 'initial';   
    } 

    if(fname2.value.length < 5 ) { 
        fnameError2.style.display = 'initial';   
    } 

    if(email.value.length == 0 ) { 
        emailError.style.display = 'initial';   
    } 
    if( isNaN(phone.value) || phone.value.length == 0) { 
        phoneError.style.display = 'initial';   
    } 
    if(!dateDep.value ) { 
        dateDepError.style.display = 'initial';   
    }
    if(tripKind == roundWay && !dateRet.value) { 
        dateRetError.style.display = 'initial';   
    }
     



    return false;
	
}
