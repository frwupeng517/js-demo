var book = {
  _year: 2004,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function() {
    return this._year
  },
  set: function(newVal) {
    if(newVal > 2004) {
      this._year = newVal
      this.edition += newVal - 2004
    }
  }
})

book.year = 2005
console.log(book.edition)    // 2