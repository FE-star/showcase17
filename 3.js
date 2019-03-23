/*
 * @Author: kael 
 * @Date: 2019-03-23 14:25:53 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 14:35:08
 */

console.log(typeof foo); // function

function foo() {
  console.log(1);
}

var foo = 'bar';

console.log({ foo }); // { foo: 'bar' }
