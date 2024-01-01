
// Catch
// Catch handles errors, similar to js promises

// Retry
// Retries errored Observables for number of time specified

const observable = Rx.Observable.create( observer => {
    observer.next( 'good' )
    observer.next( 'great' )
    observer.next( 'grand' )

    throw 'catch this error!'

    observer.next( 'wonderful' )
})

observable
    .catch( err => print(`Error caught: ${err}`))
    .retry(2)
    .subscribe( val => print(val) )
