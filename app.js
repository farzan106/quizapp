var questions=[
    {
        Q:"A piece of ice is dropped in a vesel containing kerosene. When ice melts, the level of kerosene will",
         
        A:"Rise",
        B:"Fall",
        C:"Remain Same",
        D:"None of these",
        Answer: "2"

    },
    {
        Q:"Young's modulus is the property of",
        A:"Gas only",
        B:"Both Solid and Liquid",
        C:"Liquid only",
        D:"Solid only",
        Answer:"4"

    },
    {
        Q:"An artificial Satellite revolves round the Earth in circular orbit, which quantity remains constant?",
        A:"Angular Momentum",
        B:"Linear Velocity",
        C:"Angular Displacement",
        D:"None of these",
        Answer:"1"

    },
    {
        Q:"If electrical conductivity increases with the increase of temperature of a substance, then it is a:",
        A:"Conductor",
        B:"Semiconductor",
        C:"Insulator",
        D:"Carborator",
        Answer:"2"

    },
    {
        Q:"Minimum distance between and object and real image of a convex lense is:",
        A:"4<i>f</i>",
        B:"3<i>f</i>",
        C:"2<i>f</i>",
        D:"<i>f</i>",
        Answer:"1"

    },
    {
        Q:"Product of Force and Velocity is called:",
        A:"Work",
        B:"Power",
        C:"Energy",
        D:"Momentum",
        Answer:"2"

    },
    {
        Q:"Which one of the following has the highest value of specific heat ?",
        A:"Alcohol",
        B:"Methane",
        C:"Kerosene",
        D:"Water",
        Answer:"4"

    },
    {
        Q:"With the increase of pressure, the boiling point of any substance",
        A:"Increases",
        B:"Decreases",
        C:"Remains Same",
        D:"Becomes zero",
        Answer:"1"

    },
    {
        Q:"Elecronegativity is the measure of",
        A:"Metallic character",
        B:"Non-metallic character",
        C:"Basic Character",
        D:"None of these",
        Answer:"2"

    },
    {
        Q:"	The rotational effect of a force on a body about an axis of rotation is described in terms of the",
        A:"Centre of gravity",
        B:"Centripetal force",
        C:"Centrifugal force",
        D:"Moment of force",
        Answer:"4"

    }
]

var question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")
var nxtBtn=document.getElementById("next")
nxtBtn.setAttribute("class","nextBtn")

var main=document.getElementById("main")
var head=document.getElementById("head")
head.style.backgroundColor="rgba(236, 221, 221, 0.616)"
var resultStatus=document.getElementById("resultStatus")
var obtMrks=document.getElementById("obtMrks")
var percentage=document.getElementById("percentage")
var timeover=document.getElementById("timeover")

var currentQue=0;
var score=0;
var min=0;
var sec=59;
var msec=100;
var secHeading=document.getElementById("sec")
var msecHeading=document.getElementById("msec")
var minHeading=document.getElementById("min")

msecHeading.innerHTML=msec
secHeading.innerHTML=sec
minHeading.innerHTML=min
var interval;
var endInterval;
function timer()
{
    msec--
    msecHeading.innerHTML=msec
    if(msec<=0){
        sec--
        secHeading.innerHTML=sec
        msec=100
    }
    if(sec<=0)
    {
        
        sec=60
    }
}
 interval=setInterval(timer,10)

 function timeOut(){
     clearInterval(interval)
     head.style.backgroundColor="indigo"
     main.innerHTML=""
     var percent=(score/questions.length)*100
    
      head.innerHTML="Result"
      head.style.textAlign="center"
      head.style.color="white"
      head.style.fontWeight="bolder"
      head.style.margin="0px"
      head.style.padding="15px"
      timeover.innerHTML="Time's Up!!!"
      timeover.style.color="indigo"
     if(percent>=50){
         resultStatus.innerHTML="Congratulations!!You have passed the Test."
         resultStatus.style.color="green"
         var resultImg=document.createElement("img")
         resultImg.setAttribute("height","350px")
         resultImg.setAttribute("width","350px")
        resultImg.src="pass2.png"
        document.getElementById("image").appendChild(resultImg)
      }else{
           resultStatus.innerHTML="You Failed!!Better luck next time."
           resultStatus.style.color="red"
           var resultImg=document.createElement("img")
           resultImg.setAttribute("height","350px")
           resultImg.setAttribute("width","350px")
          resultImg.src="fail2.png"
          document.getElementById("image").appendChild(resultImg)
           }
       obtMrks.innerHTML="You scored "+score+" correct out of "+questions.length+" question."
       percentage.innerHTML="You achieved "+percent+"%."
     
     
 }
 endInterval=setTimeout(timeOut,60000)

function renderContent(){
    question.innerHTML="Q"+(currentQue+1)+": "+questions[currentQue].Q
    option1.innerHTML=questions[currentQue].A
    option1.style.fontSize="larger"
    option1.style.fontWeight="bold"
    option2.innerHTML=questions[currentQue].B
    option2.style.fontSize="larger"
    option2.style.fontWeight="bold"
    option3.innerHTML=questions[currentQue].C
    option3.style.fontSize="larger"
    option3.style.fontWeight="bold"
    option4.innerHTML=questions[currentQue].D
    option4.style.fontSize="larger"
    option4.style.fontWeight="bold"
    
}


function nxtQue(){
   
    var options=document.getElementsByName("options")
    var valiDate=false
    
    for(let i=0; i<options.length ; i++){
        if(options[i].checked===true){
           valiDate=true
           console.log(questions[currentQue].Answer)
           console.log(options[i].value)
           if(options[i].value  ===  questions[currentQue].Answer){
               score++
           }
           break;
        }
    }
    if(valiDate===true){
        console.log(score)
        currentQue++
        if(currentQue===9){
            nxtBtn.textContent="Show Result"
        }
        if(currentQue===10  )
        {
            
            head.style.backgroundColor="indigo"
           main.innerHTML=""
           var percent=(score/questions.length)*100
            head.innerHTML="Result"
            head.style.textAlign="center"
            head.style.color="white"
            head.style.fontWeight="bolder"
            head.style.margin="0px"
            head.style.padding="15px"
           if(percent>=50){
               resultStatus.innerHTML="Congratulations!!You have passed the Test."
               resultStatus.style.color="green"
               var resultImg=document.createElement("img")
               resultImg.setAttribute("height","350px")
               resultImg.setAttribute("width","350px")
              resultImg.src="pass2.png"
              document.getElementById("image").appendChild(resultImg)
            }else{
                 resultStatus.innerHTML="You Failed!!Better luck next time."
                 resultStatus.style.color="red"
                 var resultImg=document.createElement("img")
           resultImg.setAttribute("height","350px")
           resultImg.setAttribute("width","350px")
          resultImg.src="fail2.png"
          document.getElementById("image").appendChild(resultImg)
                 }
             obtMrks.innerHTML="You scored "+score+" correct out of "+questions.length+" question."
             percentage.innerHTML="You achieved "+percent+"%."
             clearTimeout(endInterval)
           
        }
        else{
            
        renderContent()
        for(let i=0;i<options.length;i++){
            options[i].checked=false
        }
        
    }

        
    }
}


