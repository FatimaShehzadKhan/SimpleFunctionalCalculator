var toPerform = document.getElementById("opera");
var fnlRst = document.getElementById("finalResult");
function getNumber(myInt) {
    console.log(myInt);
    if (myInt == '+' || myInt == '-' || myInt == '*' || myInt == '/' || Number(myInt) <= 9 || Number(myInt) >= 0 || myInt == '√' || myInt == '.' || myInt=='∛') {
        toPerform.innerText += myInt;
        console.log(toPerform.innerText);


    }
    if (toPerform.innerText.charAt(toPerform.innerText.length - 2) == '√') {
        var value = Math.pow(myInt, 1 / 2);

        valueRoot = value.toFixed(3);
        // document.write("First Test Value : " + value );
        toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
        toPerform.innerText += valueRoot;


    }
    if (toPerform.innerText.charAt(toPerform.innerText.length - 2) == '∛') {
    
        var value2 = Math.cbrt(Number(myInt));
        // var value2 = Math.pow(myInt, 1 / 3);
        valueCubeRoot = value2.toFixed(3);
        // document.write("First Test Value : " + value );
        toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
        toPerform.innerText += valueCubeRoot;


    }
    if (myInt == 'D') {
        toPerform.innerText += myInt;
        // toPerform.innerText.slice(0,-2);
        toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);

    }
    if (myInt == 'A') {
        toPerform.innerText = " ";
        fnlRst.innerText = " ";

    }
    if (myInt == '%') {
        toPerform.innerText += myInt;
        var forPercentage = Number(toPerform.innerText.charAt(toPerform.innerText.length - 2));
        forPercentage = forPercentage / 100;
        toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
        toPerform.innerText += forPercentage;

    }
    if (myInt == '!') {
        var resultFact = '1';
        var toFact = Number(toPerform.innerText.charAt(toPerform.innerText.length - 2));
        if (toFact === 0) {
            toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
            toPerform.innerText+=resultFact;
            // toString(result);
            // myText += result;
            // var result = eval(myText);
            // console.log(result);

        }
        else {
            var mySum = 1;

            for (let index = toFact; index >= 2; index--) {
                mySum *= index;

            }
            resultFact = mySum.toString();
            toPerform.innerText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
            toPerform.innerText+=resultFact;
            // var myText = toPerform.innerText.substring(0, toPerform.innerText.length - 2);
            // toString(result);
            // myText += result;
            // var result = eval(myText);
            // console.log(result);



        }

    }
    // if (myInt=='√') {


    // }
    // return myInt;
    // var result = eval(toPerform.innerText);
    // console.log(result);
    // return result;

    // fnlRst.innerText+=result;
}
// function getOperation(myOpe) {
//     console.log(myOpe);
//     return myOpe;
// }

// function delNumber() {
//     toPerform.innerText-=

// }    
function getResult(equalSymbol) {

    if (equalSymbol == '=') {

        // if (myInt=='!') {
        //     var myFact = Number(toPerform.innerText.charAt(toPerform.innerText.length-2));
        //     if (myFact==0) {
        //         result =1;
        //         var myText = toPerform.innerText.substring(0,toPerform.innerText.length-2);
        //         toString(result);
        //         myText+=result;
        //         var result = eval(myText);
        //         console.log(result);

        //     }
        //     else{
        //         var mySum = 1;

        //         for (let index = myFact; index >=2; index--) {
        //             mySum*=index;

        //         }
        //         result=mySum;
        //         var myText = toPerform.innerText.substring(0,toPerform.innerText.length-2);
        //         toString(result);
        //         myText+=result;
        //         var result = eval(myText);
        //         console.log(result);



        //     }



        // }
        // else{
        var result = eval(toPerform.innerText);
        console.log(result);


        // return result;
        // var ans = getNumber(myInt);
        fnlRst.innerText += result;
    }

}
