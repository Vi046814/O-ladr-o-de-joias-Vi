var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a0cc65f2-ddc6-486d-9977-7025d5769ef0","da1c422a-1023-48af-a6ba-a6e78420c24a","a5d861e8-8cfc-437e-8e9f-a2889f20e011","2a013976-3885-4e5e-80c1-9612b8a04594"],"propsByKey":{"a0cc65f2-ddc6-486d-9977-7025d5769ef0":{"name":"kid_42_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png","frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ol296q7gAf0h40KzajFDpJw7o6mUWSV6","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ol296q7gAf0h40KzajFDpJw7o6mUWSV6/category_people/kid_42.png"},"da1c422a-1023-48af-a6ba-a6e78420c24a":{"name":"museu","sourceUrl":"assets/v3/animations/eK2wvtcbbbN6FaggpBoOVKJyf5U1zEUzRsuyRPAMiZ0/da1c422a-1023-48af-a6ba-a6e78420c24a.png","frameSize":{"x":626,"y":535},"frameCount":1,"looping":true,"frameDelay":4,"version":"vSJFk9JsSS_BrNn6FgJxrNthXV_W9GSc","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":535},"rootRelativePath":"assets/v3/animations/eK2wvtcbbbN6FaggpBoOVKJyf5U1zEUzRsuyRPAMiZ0/da1c422a-1023-48af-a6ba-a6e78420c24a.png"},"a5d861e8-8cfc-437e-8e9f-a2889f20e011":{"name":"perdeu","sourceUrl":"assets/v3/animations/eK2wvtcbbbN6FaggpBoOVKJyf5U1zEUzRsuyRPAMiZ0/a5d861e8-8cfc-437e-8e9f-a2889f20e011.png","frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":4,"version":"bnjtFeq61lZjX7JlC.K7zWgwHJ1Iqs.Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/v3/animations/eK2wvtcbbbN6FaggpBoOVKJyf5U1zEUzRsuyRPAMiZ0/a5d861e8-8cfc-437e-8e9f-a2889f20e011.png"},"2a013976-3885-4e5e-80c1-9612b8a04594":{"name":"diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var fundo = createSprite(200,200);
  fundo.setAnimation("museu");
   
//ladrão e diamante
 var ladrao = createSprite(20,350,20,20);
 ladrao.setAnimation("kid_42_1");
 ladrao.scale =0.1;
 var diamante = createSprite(380,22,10,10);
  diamante.setAnimation("diamond_1");
  diamante.scale =0.1;


//lazers
 var lazer1 = createSprite(300,51,200,5);
 lazer1.shapeColor ="red";
 var lazer2 = createSprite(99,297,200,5);
 lazer2.shapeColor ="red";
 
 //barreiras e bolas
 var barrier1 = createSprite(175,375,50,50);
  barrier1.shapeColor ="blue";
 var barrier2 = createSprite(175,325,50,50);
  barrier2.shapeColor ="blue";
 var barrier3 = createSprite(285,265,10,80);
  barrier3.shapeColor ="black";
 var barrier4 = createSprite(240,300,82,10);
  barrier4.shapeColor ="black";
 var barrier5 = createSprite(203,255,10,80);
  barrier5.shapeColor ="purple";
 var barrier6 = createSprite(376,288,50,10);
  barrier6.shapeColor ="black";
 var barrier7 = createSprite(260,328,10,50);
  barrier7.shapeColor ="black";
 var barrier8 = createSprite(310,220,60,10);
  barrier8.shapeColor ="black";
 var barrier9 = createSprite(356,145,90,10);
  barrier9.shapeColor ="black";
 var barrier10 = createSprite(240,193,10,150);
  barrier10.shapeColor ="black";
 var barrier11 = createSprite(288,75,10,40);
  barrier11.shapeColor ="black";
 var barrier12 = createSprite(176,51,50,9);
  barrier12.shapeColor ="black";
 var barrier13 = createSprite(146,97,10,100);
  barrier13.shapeColor ="black";
 var barrier14 = createSprite(146,250,10,90);
  barrier14.shapeColor ="black";
 var barrier15 = createSprite(111,142,60,10);
  barrier15.shapeColor ="black";
 var barrier16 = createSprite(78,152,10,100);
  barrier16.shapeColor ="black";
 var barrier17 = createSprite(35,142,73,10);
  barrier17.shapeColor ="green";
 var barrier18 = createSprite(106,52,74,10);
  barrier18.shapeColor ="blue";
 var barrier19 = createSprite(36,26,68,50);
  barrier19.shapeColor ="black";
 var barrier20 = createSprite(205,24,10,48);
  barrier20.shapeColor ="blue";
 var ball1 = createSprite(78,264,25,25);
  ball1.shapeColor ="purple";
 
  

 function draw() {
  background("white");
   drawSprites();
   
  if (ladrao.isTouching(diamante)) {
     textSize(30);
     fill("darkblue");
     stroke("lightblue");
     text("Você venceu",130,200);
     barrier5.velocityY =0;
     ball1.velocityX =0;
     playSound("assets/category_achievements/peaceful_win_8.mp3",false);
     
   }
    
  
 if (keyDown("enter")) {
  barrier5.velocityY =5;
  ball1.velocityX =4;
}
   
   //movimentos ladrão
 
   if (keyDown("up")) {
    ladrao.y=ladrao.y-3;
 }
   if (keyDown("down")) {
    ladrao.y=ladrao.y+3;
 }
   if (keyDown("right")) {
    ladrao.x=ladrao.x+3;
 }
   if (keyDown("left")) {
    ladrao.x=ladrao.x-3;
 }
 //batidas
 createEdgeSprites();
 ladrao.bounceOff(edges);
 ladrao.bounce(barrier3);
 ladrao.bounce(barrier4);
 ladrao.bounce(barrier6);
 ladrao.bounce(barrier7);
 ladrao.bounce(barrier8);
 ladrao.bounce(barrier9);
 ladrao.bounce(barrier10);
 ladrao.bounce(barrier11);
 ladrao.bounce(barrier13);
 ladrao.bounce(barrier14);
 ladrao.bounce(barrier15);
 ladrao.bounce(barrier16);
 ladrao.displace(barrier17);
 ladrao.collide(diamante);
 barrier5.bounceOff(lazer1);
 barrier5.bounceOff(bottomEdge);
 ball1.bounceOff(barrier14);
 ball1.bounceOff(leftEdge);
 barrier17.bounceOff(edges);
 barrier17.collide(barrier19);
 
//destruir 
  if (ladrao.isTouching(barrier1)) {
   barrier1.destroy();
 }
  if (ladrao.isTouching(barrier2)) {
   barrier2.destroy();
 }
  if (ladrao.isTouching(barrier12)){
    barrier12.destroy();
 }
  if (ladrao.isTouching(barrier18)){
    barrier18.destroy();
 }
  if (ladrao.isTouching(barrier20)){
    barrier20.destroy();
} 

//mudança de imagem
  if (ladrao.isTouching(lazer1)) {
   ladrao.setAnimation("perdeu");
 } 
  if (ladrao.isTouching(lazer2)) {
   ladrao.setAnimation("perdeu");
 } 
  if (ladrao.isTouching(barrier5)) {
   ladrao.setAnimation("perdeu");
 } 
  if (ladrao.isTouching(ball1)) {
   ladrao.setAnimation("perdeu");
 }  
  
  
  
 }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
