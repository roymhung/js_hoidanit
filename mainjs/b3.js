// nhay don '' => muc do binh thuong/ khong boc duoc dau nao
// nhay doi "" => muc do binh thuong/ dau nay co the boc cai tren
// nhay cheo `` => sinh ra de toi uu hai dau tren/ dau nay co the boc 2 cai tren

// với các ngôn ngữ khác phân biệt int, float, ... thì JS bỏ hết mà thay vào đó là var vs let

console.log(`HELLO "toi ne" vs 'bn toi' from JS: `);

console.log("HELLO toi ne vs 'bn toi' from JS: ");

let x = 5 ,y = 6, z = 7;
console.log(" Test string", 'x =', x ,'y =', y , 'z =', z );
console.log(" Test string", + 'x =', x ,'y =', y , 'z =', z ); // sai vi dau "," khong the noi chuoi
console.log(" Test string " + 'x ='+ x + ' y ='+ y + ' z ='+ z ); // dau "," vs dau "+" cach dung khac nhau

//  Tóm lại:
// Dấu  ||	Ý nghĩa khi dùng trong console.log   ||	  Ví dụ	                      || Kết quả
//  ,   ||	Tách nhiều đối số	                 || console.log("a", 1, "b", 2)	  || a 1 b 2
//  +   ||	Nối chuỗi hoặc cộng số	             ||  "a" + 1	                  ||  "a1"