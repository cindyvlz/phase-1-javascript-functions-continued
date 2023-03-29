// code your solution here
function saturdayFun (act = 'roller-skate'){
    return `This Saturday, I want to ${act}!`
};
function mondayWork (day = 'go to the office'){
    return `This Monday, I will ${day}.`
};
function wrapAdjective (low="*"){
    return function (high){
        return `You are ${low}${high}${low}!`
    }
}
console.log(wrapAdjective('||'));