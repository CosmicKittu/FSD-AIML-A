const username = "CosmicKittu"

const url = `https://api.github.com/users/${username}`

const res = await fetch(url)
if(!res) throw new Error("not able to featch data")

const data = await res.json()

console.log(data);

// function resister(){
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("resitered succes fully")
//             resolve()
            
//         }, 4000)
//     })
// }
// function email(){
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("email succes fully")
//             resolve()
            
//         }, 3000)
//     })
// }
// function login(){
//     console.log("login succes fully")
// }
// function getdata(){
//     console.log("getdata succes fully")
// }
// function displaydat(){
//     console.log("displaydata succes fully")
// }

// resister();
// email();
// login();
// getdata();
// displaydat();

// resister().then(
//     email
// )