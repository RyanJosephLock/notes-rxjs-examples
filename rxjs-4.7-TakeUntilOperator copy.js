
// takeUntil Operator
// Allows us to 'Complete' an obersable based on the value of another observable

const interval = Rx.Observable.interval(500)
const notifier = Rx.Observable.timer(2000)

interval
    .takeUntil(notifier)
    .finally(() => print('Complete!') )
    .subscribe(i => print(i))

// NOTE: This is a smart way to not need to unsubscribe from an Observable (Complete is the same as Unsubscribe)
