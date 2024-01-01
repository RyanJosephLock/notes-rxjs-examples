
// switchMap Operator
// Useful for when you need one value from an observable before you can get another observable
// In this example, a click event starts (and restarts) an interval observable

let clicks = Rx.Observable.fromEvent(document, 'click')

clicks
    .switchMap(click => {
        return Rx.Observable.interval(500)
    })
    .subscribe(i => print(i))


// NOTE: This is most useful in apps when you need a UserID, and you need the UserID before you can query that user's data

