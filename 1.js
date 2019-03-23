/*
 * @Author: kael 
 * @Date: 2019-03-23 14:13:33 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 14:14:23
 */

foo();

function foo() {
  console.log(bar); // undefined
  var bar = 'aaa';
}