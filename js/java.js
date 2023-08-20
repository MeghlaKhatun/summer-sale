//=====================first kitchen card=========================

document.getElementById("kitchen-first").addEventListener("click",function(){
    const firstKitchenTk=utilitiesElement("first-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");
   

    const addingTotalTk=(firstKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalTk);

    const discount=(addingTotalTk*20)/100;
    setElementById("discount",discount);

    const mainTotalAmount=addingTotalTk-discount;
    setElementById("total",mainTotalAmount);


    addCalculationShowArea("K. Accessories");


})

//=====================second kitchen card=========================

document.getElementById("kitchen-second").addEventListener("click",function(){
    const secondKitchenTk=utilitiesElement("second-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalSecondTk=(secondKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalSecondTk);

    const discount=(addingTotalSecondTk*20)/100;
    setElementById("discount",discount);

    const mainTotalAmount=addingTotalSecondTk-discount;
    setElementById("total",mainTotalAmount);

    addCalculationShowArea("k.Implement");
})


//=====================third kitchen card=========================

document.getElementById("kitchen-third").addEventListener("click",function(){
    const thirdKitchenTk=utilitiesElement("third-kitchen-tk");
    const totalPrice=utilitiesElement("total-price");

    const addingTotalThirdTk=(thirdKitchenTk+totalPrice).toFixed(2);

    setElementById("total-price",addingTotalThirdTk);

    const discount=(addingTotalThirdTk*20)/100;
    setElementById("discount",discount);

    const mainTotalAmount=addingTotalThirdTk-discount;
    setElementById("total",mainTotalAmount);

    addCalculationShowArea("Home Cooker");
})

//===================================================================================

//=====================first sportswear card=========================

