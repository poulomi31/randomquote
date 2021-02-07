const quotes=[
    {quote:'Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck'},
    {quote:'To succeed in your mission, you must have a single-minded devotion to your goal.'},
    {quote:'If you fail, never give up because FAIL means “First Attempt In Learning'},
    {quote:'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.'},
    {quote:'Be active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others'},
    {quote:'You cannot change your future, but you can change your habits, and surely your habits will change your future'},
    {quote:'We have no ability to be equal to all have opportunities equal to their ability lane'},
    {quote:'It is very Easy To Defeat Someone, But it is Very Hard To Win Someone'},
    {quote:'If you want to shine like a sun, First burn like the sun.'},
    {quote:'Your best teacher is your last mistake.'}
]
var heading=document.getElementById('heading');
var color=["#033d7","#f368e0","#B1786C","#22313f","#41C6BC"," #93a0ac","#455261","#8c7ba8","#0e3663","#628a04"]
const qouteBtn=document.getElementById('quote-btn')
const qoute=document.querySelector('.quote')
const body=document.querySelector('body')



qouteBtn.addEventListener('click',()=>{
    let random=Math.ceil(Math.random()*10)
    console.log(quotes[random])
    qoute.innerHTML=quotes[random].quote;
    body.style.background=color[random];
    qoute.style.color=color[random];
    qouteBtn.style.background=color[random];


})
function time(){
    const time=new Date(),hr=time.getHours();
    var a="day"
    console.log(hr)
   if(hr>18){
    a="night"
   }
   heading.innerText=`Lets start ${a} with a new quote`

}


