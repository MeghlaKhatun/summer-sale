//=====================first kitchen card=========================

document.getElementById("kitchen-first").addEventListener("click",function(){
    const firstKitchenTk=utilitiesElement("first-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");
   
    
    const addingTotalTk=(firstKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalTk);

    addCalculationShowArea("K. Accessories");

    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalTk > 0){   
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2";
    }else{
        make.setAttribute("disabled","true");
        
    }

    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true);
    }

  

})

//=====================second kitchen card=========================

document.getElementById("kitchen-second").addEventListener("click",function(){
    const secondKitchenTk=utilitiesElement("second-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalSecondTk=(secondKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalSecondTk);
    
    addCalculationShowArea("k.Implement");

    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalSecondTk > 0){
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2"
    }else{
        make.setAttribute("disabled","true")
    }


    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalSecondTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true)
    }
})


//=====================third kitchen card=========================

document.getElementById("kitchen-third").addEventListener("click",function(){
    const thirdKitchenTk=utilitiesElement("third-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalThirdTk=(thirdKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalThirdTk);
    addCalculationShowArea("Home Cooker");

    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalThirdTk > 0){
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2"
    }else{
        make.setAttribute("disabled","true")
    }


    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalThirdTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true)
    }
})

//===================================================================================

//=====================first sportswear card=========================

document.getElementById("sportswear-first").addEventListener("click",function(){
    const firstSportswearTk=utilitiesElement("first-sportswear-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalSportFirstTk=(firstSportswearTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalSportFirstTk);
    addCalculationShowArea("Sports Back Cap");


    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalSportFirstTk > 0){
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2";

    }else{
        make.setAttribute("disabled","true")
    }


    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalSportFirstTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true);
    }
})


//=====================second sportswear card=========================

document.getElementById("sportswear-second").addEventListener("click",function(){
    const secondSportswearTk=utilitiesElement("second-sportswear-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalSportSecondTk=(secondSportswearTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalSportSecondTk);
    addCalculationShowArea("Full Jersey Set");

    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalSportSecondTk > 0){
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2";
    }else{
        make.setAttribute("disabled","true")
    }

    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalSportSecondTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true);
    }

    
})

//=====================third sportswear card=========================

document.getElementById("sportswear-third").addEventListener("click",function(){
    const thirdSportswearTk=utilitiesElement("third-sportswear-tk");
    const totalPrice=utilitiesElement("total-price");
    
    const addingTotalSportThirdTk=(thirdSportswearTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalSportThirdTk);
    addCalculationShowArea("Sports cates");

    //=====make purchase button=======
    const make=document.getElementById("make-purchase");
    if(addingTotalSportThirdTk > 0){
        make.removeAttribute("disabled");
        make.style.backgroundColor="#E527B2";
    }else{
        make.setAttribute("disabled","true")
    }

    //=====apply button==========
    const apply=document.getElementById("apply");
    if(addingTotalSportThirdTk >=200){
        apply.removeAttribute("disabled");
        apply.style.backgroundColor="#E527B2";
    }else{
        apply.setAttribute("disabled",true);
    }
    

})

// //=======================Apply button ==============================================

document.getElementById("apply").addEventListener("click",function(){
    const totalPrice=utilitiesElement("total-price");

        const inputField=document.getElementById("input-field")
        const inputValue=inputField.value;
        inputField.value=""
        if(inputValue === "SELL200"){
           setElementById ("discount",(totalPrice*20/100).toFixed(2));
           
           setElementById("total",(totalPrice-(totalPrice*20/100)).toFixed(2))
           
        }else{
            alert ( "Its not correct code")
        }
        
       
    })

//===================Go home button ====================================  

    document.getElementById("go-home").addEventListener("click",function(){
        const totalPriceValue=0;
        setElementById("total-price",totalPriceValue);

        setElementById("calculation-show-area", "");

        const totalPrice=utilitiesElement("total-price");

        //=====make purchase button=========
        const make=document.getElementById("make-purchase");
        if(totalPrice > 0){   
        make.removeAttribute("disabled");
      
        }else{
        make.setAttribute("disabled",true);
        make.style.backgroundColor="gray"
        }

        //=====apply button==========
         const apply=document.getElementById("apply");
         if(totalPrice >200){
        apply.removeAttribute("disabled");
        }else{
        apply.setAttribute("disabled",true);
        apply.style.backgroundColor="gray";    
    }

    setElementById ("discount",0);
           
    setElementById("total",0)
   
})
 




    
   

    
