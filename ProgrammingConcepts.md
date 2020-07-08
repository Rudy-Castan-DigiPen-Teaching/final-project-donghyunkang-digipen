// Donghyun Kang
// Final Project - ProgrammingConcepts.md
// cs099
// Spring 2020


**1.	Shapes**
Shapes are showing us the shape in the screen using p5.js syntax. Shapes functions are ‘arc(),

ellipse(), circle(), line(), point(), quad(), rect(), square(), triangle()’ and also we can make shapes using

‘beginShape(), vertex(), and endShape()’. Also, there is some functions makes programmer easier

like ‘rectMode() and ellipseMode()’. This is important because it shows us what is it. We can express

somethings in the canvas using this function. We can use it like arc(x, y, width, height, start, stop),

ellipse(x, y, width, height), circle(x, y, diameter), line(x1, y1, x2, y2), point(x, y), quad(x1, y1, x2, y2, x3,

y3, x4, y4), rect(x, y, width, height), square(x, y, diameter), triangle(x1, y1, x2, y2, x3, y3). In my game 

project, for example, I draw Rok’s face using push(); fill('red'); rectMode(CENTER); rect(40, 20, 80, 100); pop(); 

in sketch.js line number 331.


**2.	Colors**
Colors are filling the shapes or the background or many things. We can color it using fill() when we

fill something like shapes. We can also use stroke(). It makes the color of the outline. When we 

make the color, we can call a color function with 1~4 arguments or the Hexadecimal color codes 

or just the color names. Also, we can make draw a shape with no fill using noFill() and draw a shape

with no outline using noStroke(). We can change the stroke weight too. This is important because 

it makes more fascinated to others. If there is only shape and no color it will be so boring. Colors 

makes more beautiful to see. We can use 1~4 like if it is 1 argument you can choose between

0~255 and its grey scale. 0 is the darkest and if numbers up it make more brighter than less number. 

If it is 3 arguments it is an RGB. If it is 2, 4 argruments it is based on 1,3 arguments and last sector 

is making transparent. In my game, for example, I use Rok’s mouth using the 3 arguments. It is 

push(); fill(242, 132, 130); arc(width - Face_x, Face_y, 200, 300, 0, PI); pop();. If we want to use it in 

Hexadecimal color code it is ‘#F28482’. This example is in the Mainmenu.js line number 142.


**3.	Variables**
A variable stores a value in memory so that it can be used later in a program. We can change the 

value easily while the program is running. We can use variables using var, let and const. We say this 

in front of the code and it has global variables and local variables. Global variables are say out of 

the function so we can use it anywhere after it spoken but local variables are only can use in that 

function. This is important because we can use variables to avoid repeating ourselves in the code. 

If you are typing the same number more than once, it will be hard to change it all. It makes easy 

to change some positions and or the scores. We can use it like ‘let/var/const OO(name of something)

or let/var/const OO(name of something) = OO(number or true/false)’. In my game, for example, ‘let 

active_sign = false’ in the Win_ai.js line number 7 and ‘let End_score = 5’ in the sketch.js line number

27 and ‘const MAIN_MENU = 1’ in the SceneConstants.js line number 6.


**4.	Conditional Statements**
Conditional statements are making the situation and responds to the situation. Like what if this one 

does this? Then the statement will be this. In conditional statements we use simple operators like 

relational, logical, ternary. In relational operators we have <, <=, >,>=, ==, ===, !=, !== and in 

logical operators we have &&, ||, !. we can use these operators making the conditional statements. 

This is important because we can use these conditional statements to make the situation. In games 

we meet a lot of situation and we have to choose what will I do. When the player choose the next 

step this statements will make the next scenario of the game. We can use it like ‘if(test){statements}

or if(test1){statements1}else if(test2){statement2} and etc. When we use switch we can use 

‘switch(value){case0: (statement) break; case1: (statement) break; ~~~ }. In my game, for example, I 

used changing scenes in function ai_battle(){ if (solo_score == End_score) {CurrentScene = WIN_ai;

reset_score()} else if (ai_score == End_score) {CurrentScene = LOSE_ai; reset_score()}} in sketch.js line 

number 220 and I used switch switch (CurrentScene) { case CREDITS_SCREEN: CreditsScene.Update(); 

CreditsScene.Draw(); break; ~~~} in sketch.js line number 55.


**5.	Loops**
Loops are making thing again and again before it requires the test. In loops we have for loop and

while loop. We can make nested loop too. These loops are using also like the operators. We can 

make the situation during the loop. This is important because when we think that lines of code are

repeated, but with slight variations, we can use loops make it possible to run a line of code more

than once to reduce this type of repetition into fewer lines. This makes us more modular and easier

to change. We use this like for((set start value); (during value); (change value)){statement} or 

while(during value){statement} noLoop();. When we use these, we should more carefully to use. This 

can make the computer stop. In my game, for example, for (let val_y = 0; val_y < 5; val_y++) { for 

(let val_x = 0; val_x < 4; val_x++) {push(); fill(0); textSize(40); text("You Lose!", 200 + val_x * xgap,

150 + val_y * ygap); pop()} in Lose_ai.js line number 29. I made this to show the player they are lose.


**6.	Functions**
When we write functions to computer, computer will show the function. This is a broad perspective 

of functions. But in the narrow perspective, we can make function. Making function is like making 

a chunk. We can make chunk and use ‘translate()’ to put it in the anywhere. This is important 

because we don’t have to make same things again and again. The lines will be shorter than before 

and become modular. We can duplicate objects easily. It makes neat too. We can use this like 

‘function OOO(name of something)(values){statement}’ It’s really easy to make and easy to use. 

When we want to use this made function, we can just put it ‘OOO(name of something)(values)’. In

my game, for example, I used it making function ai_battle() {if (solo_score == End_score) 

{CurrentScene = WIN_ai; reset_score()} else if (ai_score == End_score) {CurrentScene = LOSE_ai;

reset_score()}} in sketch.js line number 219 this makes who will win.


**7.	Classes**
Classes are using for an object orientated programming. Classes makes encapsulation and making 

a chunk of data with functionality or behavior. In class, we make constructor() which is to make the

first decision of the data. We use ‘this.OO’ to make the object orientated programming. This is 

important because we can make classes and use it for the making new object which is same. We 

can make a lot of objects. We can make fireworks using this object with arrays and loops. This class

it really important when we have a player. We can make like one object. We can use this like class

OO(name of something){constructor(){} draw(){} ~~(something more) }. In my game, for example, 

class Particle { constructor(x, y, speed, direction){ this.position = new Vec2(x,y); this.velocity = new Vec2(0,0);

this.velocity.setLength(speed); this.velocity.setAngle(direction); } update(){this.position.addTo(this.velocity);} 

draw(){push(); stroke('#7A3B32'); fill(random(255),random(255),random(255)); strokeWeight(1); 

circle(this.position.x, this.position.y, 5); pop();}} in Particle.js line 6. I used this to make the firework effect. 


**8.	Arrays**
 Array is a list of variables that have each sector and name. Array is starting from 0, so we should 
 
 be careful about the order. We can make dungeons using 2D arrays. This is important because it 
 
 makes possible to work with more variables without creating a new name for each one. We can just 
 
 call it. We can use this like make an array like ‘var p = [ ];’ and assign values to each element. 
 
 When we use array with object, we should put ‘new’ in front of the object. In my game, for example, I
 
 used it in the winning effect with particles. let p = []; constructor(){this.particles = new Particle(width / 2, height / 2, 0.001, 2);}
 
 Update(){for (var i = 0; i < p.length; i++) {p[i].update(); p[i].draw();} for (let i = 0; i < 1000; ++i) 
 
 p[i] = (new Particle(width / 2, height / 2, random(3, 5), random(2 * PI)));} this is in Win_ai.js line number 6,12,17.
