
function validationCheck(){
    const form=document.getElementById("formID").value;
    const firstName=document.getElementById("fname").value;
    const lastName=document.getElementById("lname").value;
    const contactNumber=document.getElementById("phoneNo").value;
    const countryID=document.getElementById("countrySelect").value;
    const email=document.getElementById("emailId").value;
    const password=document.getElementById("pass").value;
    const emailValidCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if( form=="" || firstName=="" || lastName=="" || contactNumber=="" || email=="" || password=="" || countryID==""){
        alert("All field are mendiatory");
        return false;
    }
    else if(contactNumber.length<10 || contactNumber.length>10){
        alert("enter valid phone number");
        return false;
    }
    else if(!emailValidCheck.test(email)){
        alert("Please enter valid email");
        return false;
    }
    else{
        true;
    }

    
    // Display user's Information
    document.writeln("First Name:- "+firstName);
    document.writeln("<br>");
    document.writeln("Last Name:- "+lastName);
    document.writeln("<br>");
    document.writeln("Contact Number:- "+contactNumber);
    document.writeln("<br>");
    document.writeln("Email Id:- "+email);
    
}