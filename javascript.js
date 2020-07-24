  //button detect 
  function buttonDetect(id)
  {
     const buttonId=document.getElementById(id);
     return buttonId;
  }
  //value calculation
 function textValue(textValue,number)
 {
  if(number==1)  textValue++;
 if(number==-1)  textValue--;
     
     return textValue;
 }
 function valueChange(valueChange,price,number){
  if(number==1)  valueChange=valueChange+price;
 if(number==-1)  valueChange=valueChange-price;

 return valueChange;
 }

  //phone event handler
  function PhoneEventHandler(number){
     const phoneTextValue=buttonDetect('PhoneTextValue');
    var phoneTextValue1=parseFloat(phoneTextValue.value);
    const  phoneValue=buttonDetect('phoneValue');
    var  PhoneValueChange=parseFloat(phoneValue.innerText);
     phoneTextValue.value=textValue(phoneTextValue1,number);
     phoneValue.innerText=valueChange(PhoneValueChange,1219,number);

      //total and subtotal handle code 
    const subtotal=buttonDetect('subtotal');
    var subtotalValue=parseFloat(subtotal.innerText);
    var exchangeValue=valueChange(subtotalValue,1219,number);
    subtotal.innerText=exchangeValue;
    const  total=buttonDetect('total');
    total.innerText=exchangeValue;


 }
  
   //casing event handler
   function casingEventHandler(number){
     const casingTextValue=buttonDetect('casingTextValue');
    var casingTextValue1=parseFloat(casingTextValue.value);
    const  casingValue=buttonDetect('casingValue');
    var  casingValueChange=parseFloat(casingValue.innerText);
    casingTextValue.value=textValue(casingTextValue1,number);
    casingValue.innerText=valueChange(casingValueChange,59,number);

    //total and subtotal handle code 
    const subtotal=buttonDetect('subtotal');
    var subtotalValue=parseFloat(subtotal.innerText);
    var exchangeValue=valueChange(subtotalValue,59,number);
    subtotal.innerText=exchangeValue;
    const  total=buttonDetect('total');
    total.innerText=exchangeValue;

 }

//phone handler
  const phoneButtonPlus=buttonDetect('phoneButtonPlus');
  phoneButtonPlus.addEventListener('click',function(){
     PhoneEventHandler(1);
  })
  
  const phoneButtonMinius=buttonDetect('phoneButtonMinius');
  phoneButtonMinius.addEventListener('click',function(){
     PhoneEventHandler(-1);
  })

// casing  handler
const casingButtonPlus=buttonDetect('casingButtonPlus');
  casingButtonPlus.addEventListener('click',function(){
     casingEventHandler(1);
  })
  
  const casingButtonMinius=buttonDetect('casingButtonMinius');
  casingButtonMinius.addEventListener('click',function(){
     casingEventHandler(-1);
  })
