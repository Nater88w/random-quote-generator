export default function getColor(){
    const colors=[
        '#34568B','#FF6F61','#6B5B95','#88B04B','#F7CAC9','#92A8D1','#FDAC53','#9BB7D4','#B55A30','#F5DF4D',
        '#0072B5','#A0DAA9','#E9897E','#00A170','#926AA6','#D2386C'
    ];
    const ranNum = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[ranNum];
    document.querySelector('#text').style.color=colors[ranNum];
    document.querySelector('#author').style.color=colors[ranNum];
}