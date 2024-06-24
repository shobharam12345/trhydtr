
// // // function Pattern(n){
// // //     for(let i=1; i<=n; i++){
// // //        str='*'
// // //         for(let j=1; j>((2*i)-1); j--){
// // //             str=str+' '
        
// // //         }
// // //         for(let k=1; k<=i; k++){
// // //             str=str+''
// // //         }
// // //         console.log(str)
// // //     }

// // // }
// // // Pattern(6)



// // // function Pattern(row){
// // //     for(let i=0;i<row-1;i++){
// // //         str='*'
// // //         for(let j=0;j<row-1;j++){
// // //             str.str+=' '
// // //         }
// // //         console.log(str)
// // //     }
// // // }
// // // printPatten(4)




// function Pattern(n){
//     let space1=n
//     for(let i=1;i<=n-1;i++){
//         let str=''
//         for(let j=1;j<=i;j++){
//             str=str+'x'
//         }
//         for(let k=1;k<=space1;k++){
//             str=str+' '
//         }
//         space1=space1-2
//         for(let l=1;l<=i;l++){
//             str=str+'x'
//         }
//         console.log(str)
//     }
//     let str2=' '
//     for(let m=1;m<=(n*2)-1;m++){
//         str2=str2+'x'
//     }
//     console.log(str2)
//     let space2=1
//     for(let o=1;o<=n-1;o++){
//         let str3=' '
//         for(let p=1;p<=n-o;p++){
//             str3=str3+'x'
//         }
//         for(let q=1;1<=space2;q++){
//             str3=str3+' '   
//         }
//         space2=space2+2
//         for(let r=1;r<=n-0;r++){
//             str3=str3+'x'
//         }
//         console.log(str3)
//     }

// }
// Pattern(5)



// // function Pattern(n){
// //     for(let i=1;i<=n; i++){
// //         let row=''
// //         for(let j=1;j<=i;j++){
// //             row+='*'
// //         }
// //         console.log(row)
    
// //         for(let k=1;k<=2*i-1;k++){
// //             row+='*'
// //         }
// //         console.log(row)

// //     }
// //     for(let i=row-1;i>=1;i--){
// //         let row=' '
// //         for(let j=row;j>i;j--){
// //             row+=' '
// //         }
// //         for(let k=1;k<=2*1-1;k++){

// //         }
// //         console.log(row)
// //     }
// // }
// // Pattern(5)


// // function Pattern(n){
// // for(let i=1;i<=n;i++){
// //     let str=''
// //     for(let j=i;j<=i;j++){
// //         str=str+j
// //     }
// //     console.log(str)
// // }
// // }
// // Pattern(4)

// function Pattern(n){
//     for(let i=1; i<=n; i++){
//         let str=' '
    
//     for(let j=1;j<=n-i;j++){
//         str=str+' '
//     }
//     for(let k=1; k<=i; k++){
//         str=str+`${i} `
//     }
//     console.log(str)
// }
// }
// Pattern(9)



// function zeros(n){
//     let factValue=factorial(n){

//     }

// }

// function factorial(f){
//     let fact=1
//     for(let i=1;i<=f;i++){
//         fact=fact*
//     }
// }



// function Pattern(n){
//     for(let i=1; i>=n; i++){
//         let str=' '
    
//     for(let j=1;j<=n-i;j++){
//         str=str+' '
//     }
//      for(let k=1; k<=i; k++){
//        str=str+""
//      }
//     console.log(str)
// }
// }

// // Pattern(3)

// for(let i=n; i<=1; i--){
//     let str=' '

// for(let j=1;j>=n-i;j++){
//     str=str+' '
// }
// for(let k=1; k<=i; k++){
//     str=str+`${k} `
// }
// console.log(str)
// }

// // Pattern(3)

// function printstar(n){
//     for (i=1;i<=n;i++){
//         str = ''
//         for(j=1;j>=n;j--){
//             str = str +' '
//         }
//         for (k=1;k<=i;k++){
//             str = str + '*'
//         } console.log(str)
//     }
// } printstar(4)



// function Pattern(n){
//     for(let i=1;i<=1;i--){
//         str=''
//         for(let j=1;j<=1;j++){
//             str=str+ ' '
//         }
//         console.log(str)
//         for(let j=n;j>=1;j--){
//             str=str+' '
//             for(let k=1;k<=i;k++){
//                 str=str+'S'
//             }
//             console.log(str)
//         }
//     }
// }
// Pattern(6)


// how to convert a string into a Number

// let num='25'
// //number
// let result=Number(num)
// console.log(typeof result)

// let num='k2214jkgljg54'
// console.log(parseInt(num))

// parseInt('65a6-7')


// function gap(min,max){
//     console.log(Math.abs(min-max))
// }
// gap(100,200)

// Math.abs([s])
// console.log(Math.abs)


// console.log(Math.abs('-2s5'))


// Math.max()
// Math.min()

// console.log(Math.max(12,25,5,58,))

// console.log(Math.min(55,66,44,12))

// let num=6

// onsole.log(Math.pow(num,2))


// function power(a,b){
    // return a**b
// }
// let result=power(7,3)
// console.log(result)

// let num=22.34
// console.log(Math.round(num))


// Math.round()
// Math.floor()
//math.ceil()
//math.trunc()
// let num=4

// console.log(Math.sqrt(num))

// let num=5
// console.log(Math.floor(Math.random()*-6)-1)

// function randomNumber(n){
//     return Math.floor(Math.random()*n)+1
// }

// let result=randomNumber(15)
// console.log(result)

// let min=50
// let max=10

// console.log(Math.floor((Math.random()*(min-max))+max)+1)

// function randomNumberGenerator(min,max){
//     return Math.floor((Math.random()*(max-min))+min)+1
// }
// let result=randomNumberGenerator(30,40)
// console.log(result)



// ""
// ''
// ``

// let a ='Shobharam'
// let section='Bia 4'

// let result="hello my name is "+a+ " and i am from " + section
// console.log(result)


// let name='anesh'
// let role='developer'

// console.log(`my name is $ {name} and my role is $ {role}`)

// let array=['bablu','shubham','rajesh']
// console.log(array[1].charAt(array[1].length-1))

// const name='Shobharam Sir'
// console.log(name[3],name.at(0))


// let name='ranjeet'
// console.log(name[-4])
// console.log(name.at[-1])




// String.toLowercase()
// // String.touppercase()

// let a = 'hello'
// a.toUpperCase()
// a.toLowerCase
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())


// take a input from prompt and whatever value user is p oviding convert that value in lowercase

// let emailId= 'SHOBHARAMWASKEL262@GMAIL.COM'
// emailId.toUpperCase
// console.log(emailId.toUpperCase())


// indexof()

// let detail='Shobharam is laughing'
// let index=detail.indexOf('l')
// console.log(index)
// console.log(detail.charAt(11))


// let str =' i am from fatepur'

// console.log(str.indexOf('f'))
// console.log(str.indexOf('from'))

// //Slice method

// let name='shobharam waskel'

// let spaceindex=name.indexOf(' ')
// console.log(spaceindex)

// let substring=name.slice(0,spaceindex)



// let str='shobharamwaskel262@gmail.com'

// let lastiIndex=str.indexOf('@')

// let substring=str.slice(0,lastiIndex)
// console.log(substring)



// let address='asother-fatenpur'
// let initialIndex=address.indexOf('f')
// // let substring=address.slice(0,lastiIndex)
// console.log(initialIndex)
// let result=address.slice(initialIndex,address.length)
// console.log(result)

//CONCAT METHOD//

// let fname='shobharam'
// let lastName='Waskel'
// let result=fname+' '+lastName
// console.log(result)

// let result2=fname.concat(' ', lastName)
// console.log(result2)

// let gmail='shobharamwaskel262@gmail.com'

// let strBefore=gmail.slice(0,gmail.indexOf('0'))
// let initialIndex=gmail.indexOf('S')
// let substring=gmail.slice(0,lastname,)
// let result=gmail.slice(initialIndex,gmail.length)




// let gmail='shobharamwaskel262@gmail.com'

// let strBefore=gmail.slice(0,gmail.indexOf('@'))

// console.log(strBefore)

// let halfstr=strBefore.slice(0,strBefore.length/2)

// console.log(halfstr)

// let domain=gmail.slice(gmail.indexOf('@')+1,gmail.length)

// let result=halfstr.concat('...@',domain)

// console.log(result)




// let gmail=prompt('write your mail id')

// let strBefore=gmail.slice(0,gmail.indexOf('@'))

// console.log(strBefore)

// let halfstr=strBefore.slice(0,strBefore.length/2)

// console.log(halfstr)

// let domain=gmail.slice(gmail.indexOf('@')+1,gmail.length)

// let result=halfstr.concat('...@',domain)

// console.log(result)


//create a random 6 digit password generator // 


//split method //


// let str=' Shobharam - Waskel'

// let result=str.split(' m ')
// console.log(result)

// let str='Shobharam-waskel'
// let str2='shobharamwaskel262@gmail.com'


// let result=str2.split



// let array=['a','b','c']

// let result=array.join(' ')

// console.log(array)


// let array2=['shobharam','waskel']
// let result=array2.join('-')
// console.log(array2)


// function generatePassword(){
//     const characters = '0123456789'

//     let password = ''
//     for (let i=0; i<6; i++){
//         const randomIndex = Math.floor(Math.random()*characters.length)
//         password += characters[randomIndex]
//     }
//     return password;

// }
// const password= generatePassword();





// function randomNumber(n){
//         return Math.floor(Math.random()*n)+1
//     }
    
//     let results= randomNumber (n)
//     console.log(results)
    
//     let min=10
//     let max=50
    
//     console.log(Math.floor((Math.random()*(min-max))+max)+1)
    
//     function randomNumberGenerator(min,max){
//         return Math.floor((Math.random()*(max-min))+min)+1
//     }
//     let result=randomNumberGenerator(30,40)
//     console.log(results)



//create a random 6 digit password generator // 

// function passwordGenerator(n){


//     let password=''
   
//     for(let i=0;i<6;i++){
//         password=password+(Math.floor(Math.random()*10))
//     }console.log(password)
        

// }passwordGenerator()

//  let password=''

//     for(let i=0;i<6;i++){
// let num=Math.random()*10
// let roundedNum=Math.floor(num)

// console.log(roundedNum)
// password=password+roundedNum
//     }
//     console.log(password)


// let array=[12312,12341,12345,12543,25123,1234,1245,]
// let password=44444
// for(let i=0;i<array.length;i++){
//     if(password==array[i]){
//         passwordMatch=true
//         break;
//     }
// }
// if(passwordMatch){
//     console.log('correct')
// }else{
//     console.log('incorect')

// let password=[]
// for(let i=1000;i<=9999;i++){
//     // console.log(i)
//     password.push(i)
// }
// console.log(password)

// let randomIndex=Math.floor((Math.random)()*password.length)
// console.log(password[randomIndex])\


// //replace

// let str='i am learning html and css'

// let result=str.replace('css','javascript')
// console.log(result)

// //includes
// let name='shobharam'
// console.log(name.includes('ram'))



// let listOfName=['shobharam waskel','yogesh nagar','lokendra kumar']


// for(let i=0;i<=listOfName.length;i++){
//     if(listOfName[i].includes('kumar')){
//         console.log(listOfName[i])
//     }
// }


// //trim

// let name='   waskel   '

// console.log(name.trimEnd())




// replaceAll



// let address='INDIA MP bhopal'
// let result=address.replaceAll(' ',"-")
// console.log(result)


// let str ='i love apple and me favorite fruit and apple is the reson of discovering of gravity'
// str.replaceAll('apple')
// console.log(str)


// //startsWith
// //endWith

// let str2='I love India'
// let result2=str2.startsWith('I love India')
// console.log(result2) 


// let netflix=['bahubali','spider man','the pusrsuit of happiness','broken']


// let input=prompt('write a movie name').trim().toLowerCase()

// console.log(input)

// let findMovie=false
  
// for (let i=0; i <netflix.length; i++){

//     if (netflix[i].startsWith(input)) {

//         findMovie=true
//     }
// }

// if (findMovie){
//     console.log('movie found')
// }
// else{
//     console.log('not found')
// }



// let array=['abc','bca','acd','mno']

// let result=array.sort()  
// console.log(result)
// // 



// let strArray=['12','41','45','12','44','33',74]
// let result=strArray.sort((a,b) =>{
//     if(a > b){
       
//     return 1//a-b 
//     }
        
//     return -1//a-b
// })
// console.log(result)



// let name='suraj kumar suryavanshi'

// let a=str.charCodeAt(7)
// console.log(a)



// let av=97

// let result=String.fromCharCode(67)
// console.log(result)


// function checkString(input){
//     for(let i=0;i<input.lenght;i++){
//         if(typeof input[i]=='string'){
//             console.log(`${input[i]}is a string`)
//         }
//     }
// // let =typeof(checkString)
// if(typeof input==='boolean'){
//     console.log(true)
// }else{
//     console.log(false)
// }

// }
// checkString(123, 'shivam')
// console.log(typeof '123')
// }
// console.log(true)


// function checkBlank(input){

// console.log(input.length)
// if(input.length==0){
//     console.log('blank')
// }else{
//     console.log('not blank')
// }
// }
// checkBlank([])
// console.log(123)


// function splitString(input){
//     //shivam
//     let result=input.split(' ')
//     let b=result.join(',')
//     console.log(b)

// }
// splitString('suraj kumar')


// function checkBlank(input){
//     if(input.length==0)
// {let result='blank'
//     console.log('blank')
// }}

// function generatePassword(){
//     const characters='0123456789'
//     let password=''
//     for(let i=0;i<6;i++){
//         const randomIndex =Math.floor(Math.random()*characters.length)
//         password += characters[randomIndex]
//     }
//     return password;
// }
// constpassword =generatePassword()



// console.log(password)


// Write a JavaScript function to extract a specified number of characters from a string.

    
// let str='suraj123kumar'
// // CharAt()
// // let a=str[5]
// // console.log(str)
// for(let i=0;i<str.length;i++){
//     let value=str[i]
//     console.log(value.charCodeAt())
//     if(value.charCodeAt()>=48&&value.charCodeAt()<=57){
//         console.log(value)
//         result=result+value
//     }
// }
// console.log(result)



// write a javascript functionto delete leading and trailing spaces from a String.

// function stripSpace(input){
//     console.log(input)
//     return input.trim()
//     // console.log(a)
// }
//  let a= stripSpace(' javasript ')

// console.log(a)


// function repeatString(str,Number){
//  let result=' '
// for(let i=1;i<=Number;i++){
// result=result+str
// }
// // return result
// // console.log(result)
// }

// let a=repeatString('hell',3)

// console.log(a)
// write a javascript function to capitalize the first letter of a string


// function capitalizeString(str){
//     let splitedArray=str.split('')
//  console.log (splitedArray)

//  for( let i=0; i<=splitedArray.length;i++){
//     let value=splitedarray[i]
//     console.log(value)
//     let firstLetter=valuefromArray.charAt(0).toUpperCase()
//     console.log(firstLetter)
//     let leftLetter=valuefromArray.slice(1)
//     console.log(leftLetter)
//     let fullword=firstLetter+leftLetter
//     console.log(fullword)
//     splitedArray[i]=fullword
//  }
// let joinString=splitedArray.join(' ')
         
//     return joinString

//     let a=capitalizeString('bablu sir')

// }
// console.log(a): Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"
//  Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));//javascriptExercises





// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"

<<<<<<< HEAD

// function factorial(n){
//     let result=1
//     for( let i=1;i<=n;i++){
//         result=result*i
//     }
//     console.log(result)
// }

// factorial(6)

// function str(R,P,T){

// let result=((R*P*T)/100)
// console.log(result)
// }
// str(10,150,2)



// function Sum(a,b){
// //let a
// //let b
// let sum=a+b;
// console.log(sum)
// }
// Sum(4,9)


// let name="Bhagwandas"
// // [ "B","h","a","g","w","a","n","d","a","s"]
// function str(name)
// {
//     let result=name.split('')
//     let sorted=result.sort(comp)
//     let joined=sorted.join(' ')
//     return join;
// }
// let a=str("Bhagwandas")
// console.log(a)


function  array [25,56,55,44,77,88,14]
let array=array.max( )

console.log(array)









=======
>>>>>>> a98352b6ce1d3a06b5312a473e6ec0ea3316bfc3


