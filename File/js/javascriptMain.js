
/* object type charge */
 let res_charg = document.getElementById("res_charg");
 let btns = document.getElementsByClassName('btnCharg');
 var chargType = {
   type_1: 'ایرانسل',
   type_2: 'همراه اول',
   type_3: 'رایتل'
 }
 btns[0].addEventListener("click", function(){res_charg.innerHTML = chargType.type_1});
 btns[1].addEventListener("click", function(){res_charg.innerHTML = chargType.type_2});
 btns[2].addEventListener("click", function(){res_charg.innerHTML = chargType.type_3});
/* end object type charge */
 
/* start code btn active */
var btn_index = 0;
function button_currect(n) {
  btn_active(btn_index = n)
}
function btn_active(n) {
  var i;
  var btns = document.getElementsByClassName('btnCharg');
   for (i = 0; i < btns.length; i++) {
       btns[i].className = btns[i].className.replace(" btnActive", "");
   }
   btns[btn_index-1].className += " btnActive";
}
/* end code btn active */

/* start code validtion form concat */
 let ConcatFrm = document.getElementById('FrmConcat');
 let userName = document.getElementById('username');
 let userEmail = document.getElementById('useremail');
 let userMsg = document.getElementById('usermsg');

 function Error_show(input, massage) {
   const FrmCon = input.parentElement;
   FrmCon.className = "FormControlItem error";
   const Small = FrmCon.querySelector('small');
   Small.innerHTML = massage;
 }

 function sucess_show(input){
  const FrmCon = input.parentElement;
  FrmCon.className = "FormControlItem success";
 } 


 function validEmail(email) {
   var Reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return Reg.test(String(email).toLowerCase());
 }

 ConcatFrm.addEventListener("submit", function (e)  {
     e.preventDefault();
     if (userName.value === ""){
       Error_show(userName, "نام خود را وارد کنید !")
     } 
     else {
       sucess_show(userName);
     }

     if (userEmail.value === ""){
       Error_show(userEmail, "ایمیل خود را وارد کنید !")
     }

     else if (!validEmail(userEmail.value)) {
        Error_show(userEmail, "لطفا یک ایمیل معتبر وارد کنید !");
     }

     else {
       sucess_show(userEmail);
     }

     if (userMsg.value === ""){
       Error_show(userMsg, "پیام خود را وارد کنید !");
     }

     else {
       sucess_show(userMsg);
     }
 })

/* end code validtion form concat */

/* start code validtion form payment */
 let PaymentForm = document.getElementById('PaymntFrm');
 let input_BillingID = document.getElementById('Billing-ID');
 let input_Paymentcode = document.getElementById('Payment-code')
 

 
 function errorShow(input, message){
   const PayFrm = input.parentElement;
   PayFrm.className = "PaymentForm error";
   const Small = PayFrm.querySelector('small');
   Small.innerHTML = message;
 }

 function succesShow(input) {
   const PayFrm = input.parentElement;
   PayFrm.className = "PaymentForm success";
 }

 PaymentForm.addEventListener("submit", (e) => {
    e.preventDefault()
   
    if (input_BillingID.value === ""){
      errorShow(input_BillingID, "شناسه قبض را وارد کنید !")
    }
    
    else if (input_BillingID.value.length < 13 || input_BillingID.value.length > 13) {
      errorShow(input_BillingID, "شناسه قبض باید 13 رقم باشد !");
    }
    
  
    else {
      succesShow(input_BillingID);
    }
    
    if (input_Paymentcode.value === ""){
      errorShow(input_Paymentcode, "شناسه پرداخت را وارد کنید !")
    }
    
    else if (input_Paymentcode.value.length < 13 || input_Paymentcode.value.length > 13) {
      errorShow(input_Paymentcode, "شناسه پرداخت باید 13 رقم باشد !");
    }

    else {
      succesShow(input_Paymentcode);
    }
 })

/* end code validtion form payment */

/* start code sell charge tell */

let FormCharge = document.getElementById("ChargeFrm");
let inputPhone = document.getElementById("PhoneInput");
let chargePrice = document.getElementById("PriceInput");
let min_Charge = 50000;
let max_Charge = 100000;

function chargErrorShow(input, massage) {
  const FrmChar = input.parentElement;
  FrmChar.className = "chargeForm Error";
  const small = FrmChar.querySelector('small');
  small.innerHTML = massage;
}

function chargSuccessShow(input) {
  const FrmChar = input.parentElement;
  FrmChar.className = "chargeForm Success";
}

FormCharge.addEventListener("submit" , (e) => {
 e.preventDefault();

 if (inputPhone.value === ""){
  chargErrorShow(inputPhone, "شماره تلفن خود را وارد کنید !");
 }
 else if (inputPhone.value.length < 11 || inputPhone.value.length > 11) {
  chargErrorShow(inputPhone, "ارقام شماره تلفن وارد شده نادرست می باشد !")
 }
 else {
   chargSuccessShow(inputPhone);
 }

 if (chargePrice.value === ""){
   chargErrorShow(chargePrice, "مبلغ شارژ را وارد کنید !");
 }
 else if (chargePrice.value < min_Charge) {
   chargErrorShow(chargePrice, "حداقل مقدار خرید شارژ 5000 هزار تومان است !");
 }
 else if (chargePrice.value > max_Charge) {
  chargErrorShow(chargePrice, "حداکثر مقدار خرید شارژ 100000 هزارتومان است !");
 }
 else {
   chargSuccessShow(chargePrice);
 }
})
/* end code sell charge tell */

let phoneRes = document.querySelector('.resNumber');

inputPhone.addEventListener('keyup', ()=> {
  if (inputPhone.value === ''){
   phoneRes.innerHTML === '----'
  }
  else {
    phoneRes.innerHTML = inputPhone.value;
  }
});

/* start function Tax Calculation */
const Calc_Tax = (price, tax_percent) =>{
  return price + (tax_percent * price);
}

chargePrice.addEventListener("keyup", ()=> {
  let tax = 0.01;
  let chargePrice = document.querySelector('#PriceInput').value;
  
  if (chargePrice.value === ""){
    document.querySelector('.chargReg').innerHTML = '----';
  }

  if (chargePrice.value < min_Charge) {
    document.querySelector('.chargReg').innerHTML = '----';
  }  
  document.querySelector('.chargReg').innerHTML=` ${Calc_Tax(+chargePrice, +tax)} ریال`;
})
/* end function Tax Calculation */