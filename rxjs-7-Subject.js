
// Subject
// It's an Observable with a few extra bonus features
// Has the ability to emit new data to subscribers by acting as a proxy to some other data source

const subject = new Rx.Subject()

// Setup a couple of subscriptions to the subject
const subA = subject.subscribe( val => print(`Sub A: ${val}`) )
const subB = subject.subscribe( val => print(`Sub B: ${val}`) )

// Calling next can only be done on Subject, not Observable
subject.next('Hello') 

// Another next on a timer
setTimeout(() => {
    subject.next('World')
}, 1000)
