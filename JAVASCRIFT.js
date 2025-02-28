let btn = document.querySelectorAll("a");
let login = document.querySelector(".login_form");
let bt = document.querySelector(".header_element .bt");
let close = document.querySelector(".login_form .newicon");
let cl = document.querySelector(".registratio_form .newicon");
let input = document.querySelector(".login_form #email");
let crm = document.querySelector(".login_form #e");
let registred_bt = document.querySelector(".registratio_form .registration_button");
let arr = ["A","Farrary","Lambo","Maruti suzuki"];
let submit_btn = document.querySelector("button");
let login_button = document.querySelector(".header_element .btt_login");
let home = document.querySelector(".header_element .home");
let help_button = document.querySelector(".header_element .help_button");
let service_buttom = document.querySelector(".header_element .services");
let Registation_form = document.querySelector(".registratio_form");
let na = document.querySelector(".registratio_form .input_box #use");
let passkey = document.querySelector(".registratio_form .input_box #PASSWORD");
let email = document.querySelector(".registratio_form .input_box #EMAIL");
let banner = document.querySelector(".new_banner");
let i=0;
home.addEventListener("click", ()=>{
    login.classList.remove("active");
    Registation_form.classList.remove("on");
    banner.classList.remove("active");
})
service_buttom.addEventListener("click", ()=>{
    console.log("service button clicked");
    alert("1. Car Rental Services Rent cars for daily, weekly, or monthly needs Affordable pricing with flexible plans \n 2. Wide Range of Vehicles \n Economy, luxury, and SUV options available \n Well-maintained and fuel-efficient cars \n 3. Easy Booking Process \n Simple online booking with real-time availability \n Quick confirmation and hassle-free rentals \n 4. Pickup & Drop-off Services \n Convenient pickup and return locations \n Home delivery options available \n 5. 24/7 Customer Support \n Assistance for booking, cancellations, and queries \n Emergency roadside support")
})
help_button.addEventListener("click", ()=>{
    console.log("clicked");
    alert("Help\n  Rgister First , After  you can book car on rent \n step 1 : click on book option \n step 2 : Enter your name \n step 3 : Enter car model , which you want to get. \n Step 4 : Click on book option")
})

bt.addEventListener("click", ()=>{
    console.log("it is activated");
    if(i==1){
       login.classList.add("active");
       banner.classList.add("active");
        
    }else{
        alert("Login First");
    }
    
    
    
    Registation_form.classList.remove("on")
    console.log("Login button of");
   
});
close.addEventListener("click", ()=>{
    console.log("it is deactivated");
    login.classList.remove("active");
    banner.classList.remove("active");

});
submit_btn.addEventListener("click", ()=>{
    for(i=0;i<=3;i++){
        if(arr[i]==crm.value){
            alert("Succesfully done !\n" +"Name of Renter : " +input.value+"\n Name of Model is : "+crm.value);
        }
        break;
    }
    i=1;
    login.classList.remove("active");
    banner.classList.remove("active");
    

});
login_button.addEventListener("click",()=>{
    console.log("Login button click");
    Registation_form.classList.add("on");
    console.log("it is deactivated");
    login.classList.remove("active");
    banner.classList.add("active");
    
});
cl.addEventListener("click",()=>{
    Registation_form.classList.remove("on");
    banner.classList.remove("active");
    console.log("Login button of");
})
registred_bt.addEventListener("click",()=>{
    console.log("olokokok");
    let generate = Math.floor(Math.random()*1000000);
    prompt_input =prompt("Varification code is  "+generate+"\n Enter It");
    if(prompt_input==generate){
        alert("Succeseful Registation \n"+"Name = "+ na.value +"\n Email = "+email.value+"\n Password ="+passkey.value+"\n Rememberd it ");
    i=1;
    alert("Hellow "+na.value+" \n, Now you can book car on rent \n step 1 : click on book option \n step 2 : Enter your name \n step 3 : Enter car model , which you want to get. \n Step 4 : Click on book option")
    Registation_form.classList.remove("on");
    banner.classList.remove("active");

    console.log("Login button of");
    login_button.innerHTML = na.value;
    }else{
        alert("Wrong varification  code \n Try again ! ");
    }


    



   
})
