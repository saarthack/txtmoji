const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";

function encryption() {

    document.querySelector("#encrypt-btn").addEventListener("click", function () {


        // get the password

        var pass = document.getElementById("password").value;
        console.log(pass)


        // get the input

        var input = document.getElementById("textmsg").value;
        console.log(input)

        //converting it into a set of emojis

        var str = input.split("")
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
            // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        // console.log(clutter)

        //saving emojis in localstorage

        // localStorage.setItem("emojis", clutter)

        //showing result

        document.querySelector("#result").innerHTML = clutter

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'));
            console.log(dataarr)
            dataarr.push({"pass":pass, "input":input, "clutter":clutter})
        }else{
            dataarr = [{"pass":pass,"input":input,"clutter":clutter}]
        }
        localStorage.setItem(`data1`, JSON.stringify(dataarr))
    })

}

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var clutter2 = '';
        var input2 = document.querySelector("#emojimsg").value
        var finalPass = document.querySelector("#finalpassword").value
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
        var str2 = input2.split(" ")
        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
                // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })

}


function btnClicking() {

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = '270deg'
    })
    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#main>h1 span img").style.rotate = '90deg'

    })
}

encryption();

decryption()

btnClicking();



// I am competitive and I feel bad when we lose. You can see it in me when we've lost. I'm in a bad way. I don't like to talk to anyone.
