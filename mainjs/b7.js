let x = {};
let y = 'Eric';

// console.log('type of a:', typeof a, ' type of b: ', typeof b);

let obj = {
    'name': 'eric',
    'address_vn': 'Ha noi'
};

// Tổng kết:
// obj[b]: dùng khi bạn muốn truy cập động (bằng giá trị của biến).

// obj.b: dùng khi bạn muốn truy cập trực tiếp theo tên thuộc tính.

let b = 'name';
obj[b] = 'Hary';
obj.b = 'Ali';

let c = '';

// console.log('what is your name? ', ` My name's `, obj.name);
console.log('what is your name? ', ` My name's `, obj['name'], obj);
console.log('where are you from? ', ` I'm from`, obj.address_vn);
