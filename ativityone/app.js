import { myImage } from "./images.js"
import { myInfo } from "./info.js"

let myDataObject = {
    title : "Black Dog",
    definition : "The black powerful dog is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gun dog (a type of hunting dog for soft-mouthed retrieving of fowl) and may be trained for use as a guide dog.",
    MyImg : "download.jpg",
    buttonName : "Learn More"
}

const {title, definition, MyImg, buttonName} = myDataObject

let container = document.getElementById('container')

container.append(myImage(MyImg))
container.append(myInfo(title, definition, buttonName))
