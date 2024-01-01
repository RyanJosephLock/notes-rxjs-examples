
// takeWhile Operator
// Similar to takeUntil, except runs a While check and is subscribed while it's truthy

const names = Rx.Observable.of('Bob', 'Jeff', 'Doug', 'Steve')

names
    .takeWhile(name => name != 'Doug')
    .finally(() => print('Complete! I found Doug') )
    .subscribe( x => print(x) )


