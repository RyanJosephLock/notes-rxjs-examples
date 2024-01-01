
// Scan Operator
// Works similarly to the Array.Reduce function in javascript
// Able to iterate over each loop, this is building a high score

let clicks = Rx.Observable.fromEvent(document, 'click')

clicks
    .map( e => parseInt(Math.random() * 10) )
    .do(score => print(`Click score: ${score}`) )
    .scan((highscore, score) => highscore + score)
    .subscribe(highscore => print(`High Score: ${highscore}`))


