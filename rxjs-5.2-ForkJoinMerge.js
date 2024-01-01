
// Merge Observables: ForkJoin
// Joins the last 2 values from Observables that finish at different times

const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows')
const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns').delay(2000)

const combo = Rx.Observable.forkJoin(yin, yang)

combo.subscribe( x => print(x) )


// NOTE: Useful for delaying return of data until all related APIs have returned 
