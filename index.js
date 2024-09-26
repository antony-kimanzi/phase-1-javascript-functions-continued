function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();
saturdayFun("play basketball");

let mondayWork = function (task = "go to the office"){
    return `This Monday, I will ${task}.`
}

mondayWork();
mondayWork("work from home");

let wrapAdjective = function (par1 = "*") {
    return function (par2 = "special") {
        return `You are ${par1}${par2}${par1}!`;
    }
}

let result = wrapAdjective();
let result2 = wrapAdjective("||")("a dedicated programmer");