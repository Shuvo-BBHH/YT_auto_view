const VideoView = document.getElementById("view")

function createView(video_url){
    let ViewFrame = document.createElement("iframe")
    ViewFrame.setAttribute("src",video_url)
    ViewFrame.style.flex = "1"
    ViewFrame.style.flexGrow = "1"
   
   
    return ViewFrame
 }

document.getElementById("button").addEventListener("click",()=>{
    var AutoPlayUrl = "https://www.youtube.com/embed/"+ document.getElementById("link").value + "?autoplay=1&mute=1"
    //window.location = AutoPlayUrl
    for(let i = 0;i < document.getElementById("amount").value;i++){
        VideoView.appendChild(createView(AutoPlayUrl))
    }
   
 
    
   
})
