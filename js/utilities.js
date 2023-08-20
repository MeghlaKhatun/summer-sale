function utilitiesElement(elementId){
    const cardElementId=document.getElementById(elementId);
    const cardElementSting= cardElementId.innerText;
    const cardElementNumber=parseFloat(cardElementSting);
    return cardElementNumber;
}

function setElementById(element,elementValue){
    const elementById=document.getElementById(element);
    elementById.innerText=elementValue;
}


function addCalculationShowArea(productName){
    const calculationShowArea=document.getElementById("calculation-show-area");
    const count=calculationShowArea.childElementCount;
    const p=document.createElement("p");
    p.style.fontWeight="500";
    p.style.fontSize="24px";
    p.style.color="#111111";
    p.innerHTML=`${count+1}. ${productName}`

    calculationShowArea.appendChild(p);
}