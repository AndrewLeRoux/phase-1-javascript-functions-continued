// saturdayFun function
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// mondayWork function
const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// wrapAdjective function
function wrapAdjective (visualFlair = '*') {
    return function (adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
}