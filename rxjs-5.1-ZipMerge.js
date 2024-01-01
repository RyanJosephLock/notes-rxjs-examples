
// Merge Observables: Zip
// Joins each data value coupled with the order of another

const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows')
const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns')

const combo = Rx.Observable.zip(yin, yang)

combo.subscribe( x => print(x) )


