var animals = [
  {special: 'Lion', name: 'King'},
  {special: 'Tiger', name: 'Kitty'}
]

for(var i = 0; i < animals.length; i++) {
  (function(i){
    this.print = function() {
      console.log('#' + i + ' ' + this.special + ':' + this.name)
    }
    this.print()
  }).call(animals[i], i)
}

// #0 Lion:King
// #1 Tiger:Kitty
