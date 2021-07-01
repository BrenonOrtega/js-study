import * as services from './service/index.js';

Array.prototype.myReduce = function(callback, initialValue) {
    let total = typeof initialValue !== undefined ? initialValue : this[0];
    for(let i = 0; i < this.length; i++ ) {
        total = callback(total, this[i], i, this);
    }
    return total;
}

const main = async () => {
    try {
        const { results } = await services.getCharacters('a');
        const heights = results.map(x => Number(x.height));
        
        const summedHeights = heights.reduce((actual, next) =>{
            var sum = actual + next;
            return sum;
        });
        const mySummedHeights = heights.myReduce((actual, next) => actual + next);
        console.log('summed Heights', summedHeights);
        console.log('my Summed Heights', mySummedHeights);
    } catch(error) { 
        console.log('error', error);
    }
}

main();