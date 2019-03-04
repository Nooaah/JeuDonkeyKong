var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_image = new Image();
img_image.src = "IMG/sprite-donkeykong.png";

var img_image_inv = new Image();
img_image_inv.src = "IMG/sprite-donkeykong_inv.png";

var img_tuyau = new Image();
img_tuyau.src = "IMG/tuyau32.png";

var map = new Image();
map.src = "IMG/map.png";

var map2 = new Image();
map2.src = "IMG/map2.png";

var donkey_tombe = new Image();
donkey_tombe.src = "IMG/donkey_tombe.png";

var image_debut_donkey = new Image();
image_debut_donkey.src = "IMG/image_debut_donkey.png";




var ligne = new Array() ;
ligne[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[1]  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[2]  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[3]  = [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[4]  = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[5]  = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[6]  = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ligne[7]  = [0,0,0,0,0,0,0,0,2,0,2,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0];
ligne[8]  = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0];
ligne[9]  = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0];
ligne[10] = [0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0];
ligne[11] = [0,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0];
ligne[12] = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0];
ligne[13] = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0];
ligne[14] = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0];
ligne[15] = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0];
ligne[16] = [1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1];
ligne[17] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[18] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[19] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[20] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[21] = [0,1,1,2,1,1,0,0,1,1,2,1,1,1,1,1,1,2,1,0,0,1,1,1,2,1,1,0];
ligne[22] = [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0];
ligne[23] = [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0];
ligne[24] = [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0];
ligne[25] = [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0];
ligne[26] = [0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,0];
ligne[27] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[28] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[29] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[30] = [0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0];
ligne[31] = [1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1];



//DÃ©claration des variables

var chute_tonneau=0;
var num_baril=0;
var num_moteur=0;
var largeur_baril = 48;
var largeur_moteur=48;
var x_donkey=(canvas.width-96)/2-10;
var y_donkey=104;
var anim_donkey='jette_tonneau';
var donkey_part = 0;
var compteur_baril_moteurs = 0;
var y_tuyau=canvas.height-17;
var life = 3;
var compteur_echelle=0;
var x=90;
var y=canvas.height+32;
var sens='right';
var compteur_mario = 0;
var num_image=0;
var marteau = 1 ;
var marteau_2 = 1 ;
var sens_bonus='';
var temps_bonus=0;
var coeur=1;
var compteur_donkey=0;
var chute_donkey=0;
var fin_de_partie=0;
var cercle=0;
var thank_you=0;
// var gagner=prompt('Voulez vous pouvoir gagner cette partie ou bien la continuer ?')
var gagner=1;

function son_tuyau()
{
	document.querySelector("#tuyau").play()
	clearTimeout(son_tuyau)
}

function son_bg()
{
	document.querySelector("#bg").play()
}

function fin_bonus()
{
	sens_bonus='';
	clearTimeout(fin_bonus);
}


function drawMario()
{
	//Afficher les Ã©chelles une fois le y_echelle de chacunes dÃ©finies
	ctx.drawImage(img_image,1652,303,24,33,28,y_echelle1,24,33);
	ctx.drawImage(img_image,1652,303,24,33,396,y_echelle2,24,33);
	
	if (sens=='right')
	{
		if (sens_bonus=='marteau')
		{
			if (compteur_mario<=3.5)
			{
				num_image=0;
			}
			else if (compteur_mario<=5.5)
			{
				num_image=1;
			}
			else if (compteur_mario<=7.5)
			{
				num_image=2;
			}
			//Dessiner le mario avec bonus marteau vers droite â†’
			ctx.drawImage(img_image_inv,585+num_image*62,2,55,53,x,y-21,55,53);
			//Mettre fin au bonus au bout de 5 secondes
			setTimeout(fin_bonus,5000);
		}
		else
		{
			if (compteur_mario<=3.5)
			{
				num_image=0;
			}
			else if (compteur_mario<=5.5)
			{
				num_image=1;
			}
			else if (compteur_mario<=7.5)
			{
				num_image=2;
			}
			
			if (right_pressed==false || debut < 200)
			{
				num_image=0;
			}
			//Dessiner le mario vers droite â†’
			ctx.drawImage(img_image,num_image*32,352+32,32,32,x,y,32,32);
		}

	}
	if (sens=='left')
	{
		if (sens_bonus=='marteau')
		{
			if (compteur_mario<=3.5)
			{
				num_image=0;
			}
			else if (compteur_mario<=5.5)
			{
				num_image=1;
			}
			else if (compteur_mario<=7.5)
			{
				num_image=2;
			}
			//Dessiner le mario avec bonus marteau vers gauche â†
			ctx.drawImage(img_image,1111+num_image*62,2,55,53,x,y-21,55,53);
			//Mettre fin au bonus au bout de 5 secondes
			setTimeout(fin_bonus,5000);
		}
		else
		{
			if (compteur_mario<=3.5)
			{
				num_image=0;
			}
			else if (compteur_mario<=5.5)
			{
				num_image=1;
			}
			else if (compteur_mario<=7.5)
			{
				num_image=2;
			}
			
			if (left_pressed==false)
			{
				num_image=0;
			}
			//Dessiner le mario vers gauche â†
			ctx.drawImage(img_image,num_image*32-1,352+0,32,32,x,y,32,32);
		}
		
	}
	else if (sens=='top')
	{
		if (compteur_mario<=3)
		{
			num_image=3;
			num_image_y=0;
		}
		else if (compteur_mario<=6)
		{
			num_image=3;
			num_image_y=1;
		}
		else if (compteur_mario<=9)
		{
			num_image=3;
			num_image_y=0;
		}
		if (top_pressed==false && bottom_pressed==false)
		{
			num_image=6;
		}
		//Dessiner le mario qui monte
		ctx.drawImage(img_image,32*num_image,352+32*num_image_y,32,32,x,y,32,32);
		
		
	}
	else if (sens=='dos')
	{
		//Dessiner le mario de dos
		ctx.drawImage(img_image,6*32,352+0,32,32,x,y,32,32);
	}
	else if (sens=='tombe')
	{
		//Dessiner le mario qui tombe
		ctx.drawImage(img_image,15*32,352+0,32,32,x,y,32,32);
	}
	else if (sens=='allonge')
	{
		//Dessiner le allongÃ©
		ctx.drawImage(img_image,17*32,352+0,32,32,x,y,32,32);
	}
	compteur_mario++;
	
	if (compteur_mario>=9.5)
	{
		compteur_mario=0;
	}
	
}

//Scoreboard

var bonus=1000;

function drawBonus()
{
	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.font = "18px Arial";
	ctx.fillText(bonus,362,110); 
	ctx.fillText(life,390,61); 
	ctx.fillText('0',380,61);
	ctx.closePath();
}

function ajouter_points()
{
	bonus=bonus+100;
	drawBonus();
}
setInterval(ajouter_points, 3000);

//Fonction quand mario perd une vie
function mort()
{
	document.querySelector("#mario-mort").play()
	life=life-1;
	bonus=bonus-500;
	sens='right';
}

function drawDecors()
{
	//Afficher le tuyau et le faire descendre aprÃ¨s
	if (debut<2000)
	{
		sens='right';
	}
	else
	{
		if (y_tuyau==canvas.height-17)
		{
			son_tuyau()
		}
		y_tuyau=y_tuyau+2;
	}
	ctx.drawImage(img_tuyau,0,0,32,32,90,y_tuyau,32,32);
	
	//Afficher le scoreboard (Ex : Bonus)
	drawBonus()
	
	//Affichage des marteaux
	if (marteau==1 && donkey_part==0)
	{
		ctx.drawImage(img_image,694,219,21,24,16*13,16*24,21,24);
	}
	if (marteau_2==1)
	{
		ctx.drawImage(img_image,694,219,21,24,16*5,16*19,21,24);
	}
	
	//Affichage des vies de mario
	if (life==3)
	{
		for (i = 10; i <= 50; i=i+20)
		{
			ctx.drawImage(img_image,1120,214,17,30,i,40,17,20);
		}
	}
	else if (life==2)
	{
		for (i = 10; i <= 30; i=i+20)
		{
			ctx.drawImage(img_image,1120,214,17,30,i,40,17,20);
		}
	}
	else if (life==1)
	{
		ctx.drawImage(img_image,1120,214,17,30,10,40,17,20);
	}
	else
	{
		fin_de_partie=1;
		texte_fin_partie='   Vous Ãªtes mort';
	}

	//Calcul des positions du baril et des moteurs dans le sx
	if(compteur_baril_moteurs%20 == 0)
	{
		num_baril++;
		if (num_baril==5)
		{
			num_baril=1;
		}
	}
	// Dessiner le baril
	if (donkey_part==0)
	{
		ctx.drawImage(img_image,num_baril * largeur_baril+785,273,45,62,207,225,45,62);
	}
	
	
	if (compteur_baril_moteurs%20==0)
	{
		num_moteur++;
		if (num_moteur==3)
		{
			num_moteur=0;
		}
	}
	compteur_baril_moteurs++;
	
	//Afficher tous les moteurs
	ctx.drawImage(img_image,1700 + num_moteur*largeur_moteur,276,32,32,420,172,32,32);
	ctx.drawImage(img_image,1790 - num_moteur*largeur_moteur,276,32,32,414,412,32,32);
	
	ctx.drawImage(img_image,1700 + num_moteur*largeur_moteur,276+32,32,32,4,172,32,32);
	ctx.drawImage(img_image,1790 - num_moteur*largeur_moteur,276+32,32,32,-3,412,32,32);
	
	if (donkey_part==0)
	{
		ctx.drawImage(img_image,1700 + num_moteur*largeur_moteur,276,32,32,185,252,32,32);
		ctx.drawImage(img_image,1790 - num_moteur*largeur_moteur,276+32,32,32,231,252,32,32);
	}
	
	
	if (anim_donkey=='jette_tonneau')
	{
		if (compteur_donkey<=50)
		{
			chute_tonneau=0;
			num_image_donkey=1;
			num_image_peach=0;
			x_donkey=(canvas.width-96)/2-10;
		}
		else if (compteur_donkey<=100)
		{
			num_image_donkey=10;
			num_image_peach=1;
		}
		else if (compteur_donkey<=250)
		{
			num_image_donkey=2;
			num_image_peach=2;
			x_donkey=(canvas.width-96)/2-6;
		}
		//Dessiner Donkey Kong
		ctx.drawImage(img_image,96*num_image_donkey,104,96,73,x_donkey,y_donkey,96,73);
		//Dessiner Peach
		ctx.drawImage(img_image,223+48*num_image_peach,211,40,80,(canvas.width-96)/2+15,70,40,73);
		//Lancer le tonneau (dans nouveau if car le tonneau doit Ãªtre au dessus de Donkey Kong)
		if (compteur_donkey>100 && compteur_donkey<=250)
		{
			lancer_tonneau();
		}
	}
	else if (anim_donkey=='monte')
	{
		if (compteur_donkey<10)
		{
			chute_tonneau=0;
			coeur=0;
			num_image_donkey=610;
			num_image_coeur=592;
		}
		else if (compteur_donkey<20)
		{
			num_image_donkey=1253;
			num_image_coeur=592;
			
		}
		else if (compteur_donkey<30)
		{
			num_image_donkey=1160;
			num_image_coeur=637;
		}
		else if (compteur_donkey<40)
		{
			num_image_donkey=1253;
		}
		else if (compteur_donkey<50)
		{
			num_image_donkey=1160;
		}
		//Dessiner Donkey Kong qui monte
		ctx.drawImage(img_image,num_image_donkey,109,80,73,x_donkey,y_donkey,80,73);
		//Dessiner Coeur qui se brise
		ctx.drawImage(img_image,num_image_coeur,211,35,35,200,70,35,35);
	}
	else if (anim_donkey=='tombe')
	{
		if (compteur_donkey<10)
		{
			chute_tonneau=0;
			num_image_donkey=0;
			num_image_peach=0;
		}
		else if (compteur_donkey<20)
		{
			num_image_donkey=4;
			num_image_peach=1;
		}
		else if (compteur_donkey<30)
		{
			num_image_donkey=5;
			num_image_peach=2;
		}
		else if (compteur_donkey<40)
		{
			num_image_donkey=4;
			num_image_peach=0;
		}
		else if (compteur_donkey<50)
		{
			num_image_donkey=5;
			num_image_peach=1;
		}
		else if (compteur_donkey<60)
		{
			compteur_donkey=0;
		}
		//Dessiner Donkey Kong qui tombe
		ctx.drawImage(img_image,num_image_donkey*100,105,90,73,x_donkey,y_donkey,90,73);
		//Dessiner Peach
		ctx.drawImage(img_image,223+48*num_image_peach,211,40,73,(canvas.width-96)/2+15,66,40,73);
		//Dessiner Coeur entier
		ctx.drawImage(img_image,592,211,35,35,220,50,35,35);
	}
	else if (anim_donkey=='retourne')
	{
		if (compteur_donkey<10)
		{
			chute_tonneau=0;
			num_image_donkey=0;
			num_image_peach=0;
		}
		else if (compteur_donkey<20)
		{
			num_image_donkey=1;
			num_image_peach=1;
		}
		else if (compteur_donkey<30)
		{
			compteur_donkey=0;
		}
		//Dessiner Donkey Kong qui tombe
		ctx.drawImage(donkey_tombe,num_image_donkey*124,0,120,70,x_donkey,y_donkey,120,70);
		//Dessiner Peach
		ctx.drawImage(img_image,223+48*num_image_peach,211,40,73,(canvas.width-96)/2+15,66,40,73);
		//Dessiner Coeur entier
		ctx.drawImage(img_image,592,211,35,35,220,50,35,35);
	}
	//Dessiner les 4 tonneaux
	ctx.drawImage(img_image,435,271,42,65,(canvas.width-96)/2-65,111,42,65);

	if (compteur_donkey==250)
	{
		compteur_donkey=0;
	}
	else
	{
		compteur_donkey++;
	}
}

function lancer_tonneau()
{
	chute_tonneau=chute_tonneau+5;
	ctx.drawImage(img_image,736,309,32,22,200,150+chute_tonneau,32,22);
	//Si mario est touchÃ© par le tonneau
	if (150+chute_tonneau+22>=y && 150+chute_tonneau+32<=y+32 && x+32>=200 && x<=200+32 && sens_bonus!='marteau')
	{
		x=10;
		y=canvas.height-48;
		mort()
	}
}

function draw()
{
	if (compteur_echelle<=40)
	{
		y_echelle1=216;
		y_echelle2=192;
		for (i = 12; i <= 16; i++)
		{
			ligne[i][25]=2;
		}
		for (i = 12; i <= 15; i++)
		{
			ligne[i][2]=0;
		}
		ligne[16][2]=1;
	}
	else if (compteur_echelle<=80)
	{
		y_echelle1=192;
		y_echelle2=216;
		
		for (i = 12; i <= 16; i++)
		{
			ligne[i][2]=2;
		}
		
		for (i = 12; i <= 15; i++)
		{
			ligne[i][25]=0;
		}
		ligne[16][25]=1;
	}
	else 
	{
		compteur_echelle=0;
	}
	compteur_echelle++;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	line=Math.floor((y/16))+2;
	colonne=Math.floor((x/16))+1;
	verifie_si_gagner() //VÃ©rifier si Mario est sur la plateforme de la fin
	
	
	if (donkey_part==0 || gagner==0)
	{
		ctx.drawImage(map,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
	}
	else if (donkey_part==1 && gagner==1)
	{
		ctx.drawImage(map2,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
	}
	
	drawMario(); //Redessiner le mario a chaque dÃ©placement
	drawDecors() //Afficher tous les moteurs, le baril, donkey, peach etc...
	fin_partie();
	

	if (line==26)
	{
		if (colonne==13 || colonne==14)
		{
			if (marteau==1)
			{
				marteau=0;
				sens_bonus='marteau';
			}
		}
	}
	if (line==21)
	{
		if (colonne==5 || colonne==6)
		{
			if (marteau_2==1)
			{
				marteau_2=0;
				sens_bonus='marteau';
			}
		}
	}
	

	if (line==26 || line==16 && x>=207)
	{
		if (right_pressed && x<=canvas.width)
		{
			x=x+1;
		}
		else
		{
			x=x-1;
		}
		if (left_pressed && x>0)
		{
			x=x-3;
		}
	} 
	else if (line==11 || x<=207 && line==16)
	{
		if (left_pressed && x>0)
		{
			x=x-1;
		}
		else
		{
			x=x+1;
		}
		if (right_pressed && x<=canvas.width)
		{
			x=x+3;
		}
	}
	
	if (line==16 && x>=184 && x<=184+45)
	{
		x=10;
		y=canvas.height-48;
		mort()
	}
	
	if (ligne[line][colonne]==0 && debut >=1000)
	{
		y=y+8;
		sens='tombe';
	}
	//Se dÃ©place Ã  droite â†’
	if (right_pressed && x + 32 <canvas.width)
	{
		x=x+5;
		sens='right';
	}
	//Monte Ã  l'Ã©chelle
	if (top_pressed && ligne[line][colonne]==2)
	{
		y=y-16;
		sens='top';
	}
	//Se met de dos aprÃ¨s avoir montÃ© l'Ã©chelle
	if (sens=='top' && ligne[line][colonne]==1)
	{
		sens='dos';
	}
	//Se dÃ©place Ã  gauche â†
	if (left_pressed && x > -5)
	{
		x=x-5;
		sens='left';
	}
	if (bottom_pressed && ligne[line+1][colonne]==2)
	{
		y=y+8;
		sens='top';
	}
	if (ligne[line][colonne]==1 && sens=='tombe')
	{
		sens='allonge';
	}
	image_debut()
}
setInterval(draw,50);

function verifie_si_gagner()
{
	if (ligne[line][colonne]==4 || space_pressed || donkey_part==1) //Si mario est sur la Plateforme de Peach
	{
		if (donkey_part==0)
		{
			document.querySelector("#victoire").play()
			compteur_donkey=0;
			donkey_part=1;
		}
		if (gagner==0) //Si Donkey Kong s'en va et que la partie est censÃ©e continuer
		{
			anim_donkey='monte';
			
			if (x_donkey>125)
			{
				x_donkey=x_donkey-5;
			}
			else if (x_donkey<=125)
			{
				y_donkey=y_donkey-5;
			}
		}
		else if (gagner==1) //Si la partie est finie Donkey tombe
		{
			if (chute_donkey<=400)
			{
				anim_donkey='tombe';
				chute_donkey=chute_donkey+10;
				if (chute_donkey>=300)
				{
					anim_donkey='retourne';
				}
			}
			else
			{
				if (y_donkey<360)
				{
					y_donkey=y_donkey+5;
				}
				else
				{
					setTimeout(apparition_cercle,1000)
				}
			}
			
			for (i = 11; i <= 26; i++)
			{
				for (j = 10; j <= 17; j++)
				{
					ligne[i][j]=0;
				}
			}
		}
		
	}
}

function apparition_cercle()
{
	fin_de_partie=1;
	texte_fin_partie='Vous avez gagnÃ©';
}

function fin_partie()
{
	
	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, cercle, 0, Math.PI*2, false);
	ctx.fillStyle = "#FEDA00";
	ctx.fill();
	ctx.closePath();
	if (fin_de_partie==1)
	{
		cercle=cercle+10;
		ctx.font="50px arial";
		ctx.fillStyle = "black";
		ctx.fillText(texte_fin_partie,canvas.width/2-200,250);
		ctx.font="20px arial";
		ctx.fillText("\"Thank you so much for playing my game\"",50,300);
		ctx.fillText("Mario",320,350);
		ctx.fillText("Developed By Noah ChÃ¢telain",150,400);
		if (thank_you==0)
		{
			document.querySelector("#thankyou").play()
			thank_you=1;
		}
		
	}
}

var debut=0;

function start()
{
	if (debut<200)
	{
		y=y-2;
	}
	debut=debut+5;
	
}
setInterval(start,10);

affichage_image_debut=0;

function image_debut()
{
	if (affichage_image_debut<60)
	{
		ctx.drawImage(image_debut_donkey, 0, 0, canvas.width, canvas.height);
		document.querySelector("#entre").play()
		setTimeout(son_bg,5000);
	}
	
	affichage_image_debut++
}




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

right_pressed = true;
right_pressed = false;
left_pressed = true;
left_pressed = false;
top_pressed = true;
top_pressed = false;
bottom_pressed = true;
bottom_pressed = false;
space_pressed = true;
space_pressed = false;

function keyDownHandler(e){
    if(e.keyCode == 39) {
        right_pressed = true;
    }
    if(e.keyCode == 37) {
        left_pressed = true;
    }
    if(e.keyCode == 38) {
        top_pressed = true;
    }
    if(e.keyCode == 40) {
        bottom_pressed = true;
    }
    if(e.keyCode == 32) {
        space_pressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        right_pressed = false;
    }
    if(e.keyCode == 37) {
        left_pressed = false;
    }
    if(e.keyCode == 38) {
        top_pressed = false;
    }
    if(e.keyCode == 40) {
        bottom_pressed = false;
    }
    if(e.keyCode == 32) {
        space_pressed = false;
    }
}