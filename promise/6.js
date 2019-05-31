{
  console.log(1);
  setTimeout(function(){console.log(2);}, 0);
  setTimeout(function(){console.log(4);}, 1);
  console.log(3);


  // 1 3 2
  // 1 3 4 2
}

{
  console.log(1);
  setTimeout(function(){console.log(2);}, 0);
  setTimeout(function(){console.log(4);}, 1);
  console.log(3);


  // 1 3 2
  // 1 3 4 2
}