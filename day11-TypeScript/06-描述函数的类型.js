// function fn(x: number, y: number): number {
//   return x + y
// }
// (x:number,y:number)=>number这段代码是在描述变量或常量fn
// const fn:(x:number,y:number)=>number = function (x: number, y: number): number {
//   return x + y
// }
// 实际开发,按照下面的方式写即可. 因为会自动推论
// const fn = function (x: number, y: number): number {
//   return x + y
// }
// const fn1 = (x: number, y: number): number => {
//   return x + y
// }
// const fn: Function = function () {}
// 了解: 用接口描述函数
// interface Ifn {
//   (x: number, y: number): number
// }
// const fn: Ifn = function (x: number, y: number): number {
//   return x + y
// }
// 默认情况下,形参有几个,就必须传入几个
// function fn(x: number, y: number): number {
//   return x + y
// }
// y此时是一个可选参数
// 注意: 可选参数,必须要写在必填参数的后面
// function fn(x: number, y?: number): number {
//   return x + y
// }
// fn(1)
// function fn(x: number = 9, y: number): number {
//   return x + y
// }
// // fn(1) // 这样写,会报错,因为1还是会传递给x.y没有接收到值
// // fn(undefined, 2) // 可以. undefined给了x. 2给了y
// console.log(fn(undefined, 2))
// 剩余参数其实就是数组,所以描述剩余参数,就用数组的方式表示即可
// function fn(x: number, ...args: number[]) {}
// fn(1, 2, 3, 4)
// 函数重载,在js中是不支持的.这个ts中的写法.
// 作用: 在ts中对函数的参数和返回值做一个更新清晰的描述
// 更加精确的描述,放到最上面
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// reverse(123).toFixed() //321
// reverse('123') // '321'
