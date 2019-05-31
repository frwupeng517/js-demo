/*
  2、没有重载
  在java中，方法具有重载的特性，即一个类中可以定义有相同名字，但参数不同的多个方法，调用时，会根据不同的参数选择不同的方法

  public void add(int a, int b) {
    System.out.println(a + b);
  }

  public void add(int a, int b, int c) {
    System.out.println(a * b * c);
  }

  // 调用时，会根据传入参数的不同，而选择不同的方法，例如传入两个参数，就会调用第一个add方法

  而js则没有函数重载的概念

  function add(a, b) {
    console.log(a + b);
  }

  function add(a, b, c) {
    c = c || 2;
    console.log(a * b * c);
  }

  add(1, 2);   // 4  （直接调用最后一个同名的函数，并没有重载）

  由于函数名可以理解成一个指向函数对象的指针，因此当出现同名函数时，指针就会指向最后一个出现的同名函数，就不存在重载了（如下图所示）

*/

