// First and Last operator
// Get the first or last values

const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2)

numbers
    .first()
    .subscribe(n => print(n) )

numbers
    .last()
    .subscribe(n => print(n) )
