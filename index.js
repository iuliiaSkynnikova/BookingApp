

const validFormFieldInput = (data) => {
    let tripKind = document.querySelector('input[name="tripKind"]:checked');
    let fromDest = document.querySelector('#from');
    let toDest = document.querySelector('#to');
    let fname = document.querySelector('#fname1');

	
	if(tripKind == null) {  
        document.getElementById("tripKindError").style.display = 'initial';  
    } 

    if(fromDest.value.length == 0 && toDest.value.length == 0) { 
        document.getElementById("destinationError").style.display = 'initial';   
    }

    if(fname.value.length < 5 ) { 
        document.getElementById("fnameError1").style.display = 'initial';   
    } 



    return false;
	
}
