function HashTable() {
    this.buckets = [];
    this.numBuckets = 35;
  }
  HashTable.prototype.hash = function (key) {
    // mau ->>>>> 653421
  };
  HashTable.prototype.set = function (key, val1) {
    // key this.hash ->>>>> 6534
  };
  HashTable.prototype.get = function (key) {
   
  };
  HashTable.prototype.hasKey = function (key) {
    
  };
  
  
  const table = new HashTable();
  table.buckets[4] = {mau:2345}
  console.log(table);
/*
"a".charCodeAt()
97
"m".charCodeAt()
109
"u".charAt()
'u'
"u".charCodeAt()
117
301 
301
301%35
*/