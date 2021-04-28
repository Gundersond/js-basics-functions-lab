// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const distance = Math.abs(42 - block);
    return distance;
}

function distanceFromHqInFeet(block) {
    const distance = ((distanceFromHqInBlocks(block)) * 264);
    return distance; 
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    const distanceTravelled = (Math.abs(startingBlock - endingBlock) * 264);
    return distanceTravelled;
}

function calculatesFarePrice(startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet(startingBlock, endingBlock);
    let price;
    if (distance <= 400) {
        price = 0;
    } else if (distance > 400 && distance <= 2000) {
        price = ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500) {
        price = 25;
    } else if (distance > 2500) {
        price = "cannot travel that far";
    }
    return price;
}