const button = document.getElementById('button')
const audioElement = document.getElementById('audio')

function toggle(){
    button.disabled = !button.disabled
}

function tellMe(joke){
    VoiceRSS.speech({
        key: '8e8fc87da8ce44efa54486df6bc81a07',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



async function GetData(){
    let joke = ''
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (data.setup){
            joke = `${data.setup} ... ${data.delivery}`
        }else{
            joke = data.joke
        }
     tellMe(joke)   
     toggle()   


    }catch(error){
        console.log(error);
        
    }
}

button.addEventListener('click',GetData)
audioElement.addEventListener('ended',toggle)