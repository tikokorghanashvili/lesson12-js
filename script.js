// 1 მაგალითი
let users={
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
};
console.log(users.studentstatus);

// 2 მაგალითი
let names ['nini','tiko','salome',24, true]
for(let item of names){
    if(typeof item==='string'),(typeof item===numbers),(typeof item---Boolean){
        console.log(item);
    }
};
let i=0;
while(i<names.length) {
    console.log(names[i]);
    i++;
}

// 3 მაგალითი
let numbers=[5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let a of numbers){
    if(a > 5){
        console.log(a);
    }
}

// 4 მაგალითი
let user={
    name: 'giorgi',
	age:  20,
	studentstatus:'active'
}

if(user.age < 18) {
    console.log('Hello');
}else if (user.name==='giorgi'){
    console.log('hello giorgi');
}else if(user.studentstatus==='active' || user.age < 25 ){
    console.log('hello world');
}else {
    console.log('error');
}


// 5 მაგალითი
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for(let item of array){
    if(typeof item==='string'){
        console.log(item);
    }
}

// 6 მაგალითი
let arrayy = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for(let a of arrayy){
   for(let item of a){
       if(item > 0){
           console.log(item);
       }
   }
}

// 7 მაგალითი
let arrayyy = [32, 10, 'hello', null, 'hello2', 50 ]
for(let x of arrayyy){
    if( x != null && x % 5 == 0 ){
        console.log(x);
    }
}

// // functions
// // 1 მაგალითი
// function sum ( 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8 ) {
// }