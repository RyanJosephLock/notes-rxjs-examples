
// Filter operator
// Give it a condition and only the values that match the condition make it through

const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2)

numbers
    .filter(n => n >= 0 )
    .subscribe(x => print(x) )


