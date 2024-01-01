
// A cold subscription is an Observable where the data is created inside of it.
// This means the data won't be created until something subscribes to it.

const cold = Rx.Observable.create( observer => {
    observer.next( Math.random() )
})

// Because it's a cold Observable each subscriber runs the Observable seperately

cold.subscribe(a => print(`Subscriber A Cold: ${a}`))
cold.subscribe(b => print(`Subscriber B Cold: ${b}`))

/* ----------------------------- */

// An observable can be made hot by creating the data outside of the Obserable

const x = Math.random()

const hot = Rx.Observable.create( observer => {
    observer.next( x )
})

hot.subscribe(a => print(`Subscriber A Hot: ${a}`))
hot.subscribe(b => print(`Subscriber B Hot: ${b}`))

