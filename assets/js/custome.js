// array type of object collection of variables
//********creating an arrey****************** */
// array is created in two way
// no.1
let arr1 = new Array(5)
arr1[0] = 'chrome'
arr1[1] = 'tor'
arr1[2] = 'safari'
arr1[3] = 'firefox'
arr1[4] = 'brave'
console.log(arr1)

//no.2
let searchEngine = ['Google Search','Bing','Yahoo','Yandex','DuckDuckGo','Baidu','Ask.com'];
console.log(searchEngine);


// accessing in array item

console.log(searchEngine[0])
console.log(searchEngine[2])
console.log(searchEngine[3])
console.log(searchEngine[6])
// array property
console.log(searchEngine.length)
// array method
//  *********Finding Elements:
console.log(searchEngine.indexOf('Yandex'))
console.log(searchEngine.includes('Yandex'));




console.log(searchEngine.at(2))
console.log(searchEngine.toString)
console.log(searchEngine.join())
console.log(searchEngine.join(''))
console.log(searchEngine.join(' '))


searchEngine.push('loin');
console.log(searchEngine)
searchEngine.pop('');
console.log(searchEngine);
searchEngine.shift();
console.log(searchEngine);
searchEngine.unshift('google search');
console.log(searchEngine);

let arr3 = ['male','female',98,'dhaka'];
let arr4 = ['man','woman',94,'khulna'];
let connect = arr3.concat(arr4);
console.log(connect)





//array changing elements
let arr5 = ['pakistan','afganistan','dagistan'];
arr5[0] = 'turkey'
console.log(arr5)
console.log(arr5,'somalia')
console.log(arr5,657);


let arr6 = ['allah','mohammed','companion'];
let arr7 = arr6.concat('messanger');
console.log(arr7)

//  array slice method
let splice1 = ['Gazipur','Narayanganj','Brahmanbaria','Savar', 'Mount Pleasant','Muscatine','Newton'];
console.log(splice1)
splice1.splice(3,2,'mymensingh','makkah','madinah');
console.log(splice1);

//slice
let arr11 = ['engineer','doctor','arcitecture'];
let arr12 = arr11.slice(2);
console.log(arr11)
console.log(arr12)

// array sort
let newArray = ['derf','kjhyu','asegf','pouiky','hytrf','zxcd'];
newArray.sort();
newArray.reverse()
console.log(newArray);
// srtina number
let num = [3,5,2,1,45,65,76,99,36,45];
num.sort((a,b)=> {
    return a - b
});
console.log(num)
console.clear()

//************Task  */
// heighestScore([34,54,67,87,99])
// function heighestScore(score){
    
   

// }


//*********2d array */
let newArr = [
    ['dhaka',56],
    ['mymensingh',98],
    ['lakhsham',54],
    ['gazipur',98]
]

console.log(newArr[0])
console.log(newArr[3]);

for(let a = 0;a <newArr.length; a++)
    {  console.log(newArr[a])}

// *************how to loop array***********
let manush = ['rashed','khaled','tanvir','ajmal']
for(let n = 0;n <= 3; n++){
    console.log(manush[n])
}
console.clear()
//*************Iterating over an Array: */
let student = ['ahnaf','google','zayed'];
student.forEach(person => {
    console.log(person)
});
let scholer = ['osama','omer','shameli','abu ubaydah']
scholer.map(person => {
    console.log(person)
});

//*************array filter */
let numb = [8,98,65,7,12,16,23,34,44]
var filt = numb.filter(z=> {
    return z > 20
})
console.log(filt)

// doesn't work why?
let numbe = [8,98,65,7,12,16,23,34,44]
numbe.filter(z=> {
    return z > 20
})
console.log(numbe)