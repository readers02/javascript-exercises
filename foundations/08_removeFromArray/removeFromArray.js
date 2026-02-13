const removeFromArray = function(arrayToBeTrimmed, ...args) {
    return arrayToBeTrimmed.filter( itemsToRemove=> !args.includes(itemsToRemove));
};

// Do not edit below this line
module.exports = removeFromArray;
