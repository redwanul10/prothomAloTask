import dayjs from "dayjs"
import replaceEngNum from "./replaceEngNum"

const banglaTimeConverter = (engTime) => {

    // get number only from eng time 
    let engNum = engTime.replace(/[^0-9]/g, "")
    // replace eng num in bengali num
    let bangaliNum = replaceEngNum(engNum)
    
    if(engTime.includes("a few seconds ago")){
        return "কয়েক সেকেণড আগে"
    }

    if(engTime.includes("an hour ago")){
        return "১ ঘন্টা আগে"
    }

    if(engTime.includes("hours ago")){
        return  bangaliNum+" ঘন্টা আগে"
    }

    if(engTime.includes("a day ago")){
        return  "১ দিন আগে"
    }

    if(engTime.includes("days ago")){
        return  bangaliNum +" দিন আগে"
    }

    if(engTime.includes("a year ago")){
        return  "১ বছর আগে"
    }

    if(engTime.includes("years ago")){
        return  bangaliNum +" বছর আগে"
    }

    if(engTime.includes("a minute ago")){
        return "১ মিনিট আগে"
    }

    if(engTime.includes("minutes ago")){
        return bangaliNum +" মিনিট আগে"
    }

    
}

export default banglaTimeConverter