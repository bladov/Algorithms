var mergeTwoLists = function(list1, list2) {
 let set = new Set(list1);
 for (let integer of list2) {
  set.add(integer);
 }
 return Array.from(set).sort((a, b ) => a - b);
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));