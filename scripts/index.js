var animData = {
    wrapper: document.querySelector('#animationWindow'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/egg_data.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(1);
//bodymovin.setSubframeRendering(false);

var dragSVG = document.querySelector('.dragSVG'), 
dragger = document.querySelector('.dragger'),
animationWindow = document.querySelector('#animationWindow'),
dragMaxX = 444,
maxRunSpeed = 2,
runSpeed,
dragPercent;

animationWindow.appendChild(dragSVG)

Draggable.create(dragger, {
type:'x',
bounds:{minX:0, maxX:dragMaxX},
onDrag:onDrag
})


function onDrag(){
dragPercent = dragger._gsTransform.x/dragMaxX;
runSpeed = dragPercent * maxRunSpeed;
//console.log(runSpeed)
anim.setSpeed(runSpeed)

}

TweenMax.set(dragger, {
x:dragMaxX/2,
//y:510,
onComplete:onDrag
})

