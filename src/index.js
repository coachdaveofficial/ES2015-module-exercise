import {choice, remove} from "./helpers";
import fruits from "./foods";

let fruit = fruits;
let RANDOM_FRUIT;


RANDOM_FRUIT = choice(fruit);
remove(fruit, RANDOM_FRUIT)
console.log(`I'd like one ${RANDOM_FRUIT}, please`)
console.log(`Here you go: ${RANDOM_FRUIT}`)
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. We have ${fruit.length} left.`)