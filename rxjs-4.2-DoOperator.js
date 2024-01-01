
// Do operator
// Allows us to execute code without effecting the underlying observable
// "Get a glimps of the data at any point in time (along the operators)"

const names = Rx.Observable.of('Simon', 'Garfunkle')

names
    .do(name => print(name) )
    .map(name => name.toUpperCase() )
    .do(name => print(name) )
    .subscribe()


    