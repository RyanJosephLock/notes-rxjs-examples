
// Multicast
// Used to send values to multiple subscribers, but avoid running the code for each subscriber (i.e. 10 users subscribed to 10 clicks = 1oo code runs)
// We just want to run the code 10 times for the 1o clicks, not multiply by subscribers

const observable = Rx.Observable.fromEvent(document, 'click')

const clicks = observable
    .do( x => print('Do One Time!') )


// To do this, call multicast on the orignal observable and returna new subject
const subject = clicks.multicast(() => new Rx.Subject() )

// Add a couple of subscriptions to the subject
const subA = subject.subscribe( c => print(`Sub A: ${c.timeStamp}`) )
const subB = subject.subscribe( c => print(`Sub B: ${c.timeStamp}`) )

// Call connect on the subject
subject.connect()



/* ------- PASTE RXJS CODE ABOVE / DON'T DELETE BELOW ------- */


// helper function to print values

function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}