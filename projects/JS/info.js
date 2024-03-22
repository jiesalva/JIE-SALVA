const upProf = (title, para, butClick, imgProf) => {
    let Upper = document.createElement("div")
    Upper.className = "upClass"
    Upper.innerHTML = `<h1 class="H1">${title}</h1>
                            <p class="p1">${para}</p>
                            <img class="imgOne1" src="./image/${imgProf}">
                            <button class="upClick">${butClick}</button>`
                    
    return Upper
}

export {upProf}