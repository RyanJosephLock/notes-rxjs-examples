
// Observables can "Complete"... such as a timer
// .finally can be used to hook into an Observables completion

const timer = Rx.Observable.timer(1000);

timer
    .finally(() => print( 'All done!' ))
    .subscribe()


/* ----------------------------- */


// Some Observables don't "Complete"... such as an intervals
// They need to be unsubscribed from in order to prevent memory leaks

const interval = Rx.Observable.interval(1000)
    .finally(() => { print("All done!") })

const subscription = interval.subscribe(x => print(x))

// In this example a timeout unsubscribes and also triggers the .finally hook

setTimeout(() => {
    subscription.unsubscribe()
}, 3000)