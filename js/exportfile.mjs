var port = chrome.runtime.connect({name: "toexportfile"});

import  xlsx  from "xlsx";
function writeData(){

}
while(true){
    port.postMessage({answer2: "export"})
}
function configData(jsonData){
    const dataArray = [
        {buttonName1: jsonData.buttonId1},
        {buttonName2: jsonData.buttonId2},
        {buttonName3: jsonData.buttonId3},
        {buttonName4: jsonData.buttonId4},
        {buttonCout1: jsonData.coutStateButton1},
        {buttonCout2: jsonData.coutStateButton2},
        {buttonCout3: jsonData.coutStateButton3},
        {buttonCout4: jsonData.coutStateButton4},
    ]
    return dataArray;
}