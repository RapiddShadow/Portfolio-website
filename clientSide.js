

function wordCloud(text){
    if(text.length > 3000) throw "Less than 3000 characters please"
    // text = text.replaceAll("is", "")
    console.log(text)
    const regex = /\b(?:is|the|to|and|of|in|a|this|from)\b/gi;
    if(text.match(regex)){
        text = text.replaceAll(regex, "")
    }
    console.log(text)
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }
      shuffleText = shuffleArray(text)
      console.log(shuffleText)
    let text1 = shuffleText.split(" ")
    // text1 = text1.sort()
    // console.log(text1)
    // for(i=0 ; i<text1.length ;i++){
    //     if(text1[i] == ""){
    //         text1.shift()
    //     }
    // }
    // console.log(text1)
    return text1
}


const staticForm = document.getElementById('sortA')
console.log(staticForm)
if (staticForm) {

    const arrayElem = document.getElementById('input')

    const resultContainer = document.getElementById('result-container')
    const resultTextElem = resultContainer.getElementsByClassName('text-goes-here')[0];

    const errorContainer = document.getElementById('error-container')
    const errorTextElem = document.getElementsByClassName('text-goes-here')[0];

    staticForm.addEventListener('submit', (event) => {
        event.preventDefault();

            
        try {
            let o = /./

            resultContainer.classList.add('hidden')
            errorContainer.classList.add('hidden')
            const arrayElemValue = arrayElem.value;
            console.log(arrayElemValue)

            let myUl = document.getElementById("results")



            const result = wordCloud(arrayElemValue)

            if(result){
                errorContainer.style.display = "none"
            }

        let myButton = document.getElementById("btn")
        // document.querySelectorAll('ul.ul li').forEach((i) => {i.style.setProperty('--size',i.dataset.weight);});
            resultContainer.classList.remove('hidden')

            var li
            var lii
            var append
            var rng
            for(i=0 ; i<result.length; i++){
            rng = Math.floor(Math.random() * 10);
            li = document.createElement('a')
            // li.setAttribute('href', result[i])
            li.setAttribute('data-weight',rng)
            li.innerHTML = result[i]
            lii = document.createElement('li')
            lii.appendChild(li)
            myUl.appendChild(lii);
            console.log(typeof myUl)
            }
            document.querySelectorAll('ul.hello a').forEach((i) => {i.style.setProperty('--size',i.dataset.weight);});

            myUl.appendChild(li);
            li.className = "hello"
            // let zor = document.getElementsByTagName("li")
            // console.log(zor)
            // let zor1 = Array.from(zor)
            // console.log(zor1.length)
            // if (zor1.length % 2 === 0) {
            //     li.className = "ul"
            // }
            
            // else {
            //     li.className = "ul"
            // }
            



            // errorContainer.textContent = 

            // staticForm.reset()

        } catch (e) {
            //const message = e
            
            errorTextElem.textContent = "Error: " + e
            // errorContainer.classList.remove('hidden')
            errorContainer.style.display = "block"

        }

    })
}
