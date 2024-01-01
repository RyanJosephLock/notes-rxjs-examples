
// An observable can be created with any data type you put into it
// This is an important conecpt; Observables can be any data type

const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})
mashup.subscribe(val => print(val))

