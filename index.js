function saturdayFun(act = "roller-skate"){
    return "This Saturday, I want to " + act + "!";
}
function mondayWork(work = "go to the office"){
    return "This Monday, I will " + work + ".";
}
function wrapAdjective(bar = "*"){
    return function inner(foo = ("special")){
        return "You are " + bar + foo + bar + "!";
    }
}
