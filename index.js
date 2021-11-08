function saturdayFun(event = `roller-skate`) {
    //event = (typeof event !== 'undefined') ?  event : "roller-skate"
    return `This Saturday, I want to ${event}!`
}

const mondayWork = function(event = `go to the office`) {
    //event = (typeof event !== 'undefined') ? event : "go to the office"
    return `This Monday, I will ${event}.`
}

function wrapAdjective(flair = `*`) {
    return function applyAdjective(adjective = `special`) {
        return `You are ${flair}${adjective}${flair}!`;
    }

}