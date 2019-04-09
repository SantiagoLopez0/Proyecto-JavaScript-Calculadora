var Calculadora = {
	teclas: document.getElementsByClassName("tecla"),
	display: document.getElementById("display"),
	arregloNum: [],
	resultado: 0,
	init: function()
	{
		this.modificarTeclasPrimeraFila();
		this.modificarTeclasSegundaFila();
		modificarDisplay();
		
	},
	modificarTeclasPrimeraFila: function()
	{
		document.querySelectorAll(".teclado img")[0].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[0].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[0].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[0].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[1].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[1].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[1].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[1].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[2].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[2].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[2].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[2].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[3].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[3].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[3].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[3].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[4].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[4].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[4].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[4].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[5].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[5].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[5].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[5].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[6].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[6].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[6].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[6].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[7].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[7].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[7].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[7].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[8].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[8].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[8].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[8].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[9].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[9].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[9].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[9].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[10].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[10].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[10].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[10].style.width="22%";	
		}
		
		document.querySelectorAll(".teclado img")[11].onmousedown = function()
		{
			document.querySelectorAll(".teclado img")[11].style.width="20%";		
		}
		document.querySelectorAll(".teclado img")[11].onmouseup = function()
		{
			document.querySelectorAll(".teclado img")[11].style.width="22%";	
		}
	},
	modificarTeclasSegundaFila: function()
	{
		document.querySelectorAll(".teclado .row .col1 img")[0].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[0].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[0].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[0].style.width="29%";	
		}
		
		document.querySelectorAll(".teclado .row .col1 img")[1].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[1].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[1].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[1].style.width="29%";	
		}
		
		document.querySelectorAll(".teclado .row .col1 img")[2].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[2].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[2].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[2].style.width="29%";	
		}
		
		document.querySelectorAll(".teclado .row .col1 img")[3].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[3].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[3].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[3].style.width="29%";	
		}
		
		document.querySelectorAll(".teclado .row .col1 img")[4].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[4].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[4].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[4].style.width="29%";	
		}
		
		document.querySelectorAll(".teclado .row .col1 img")[5].onmousedown = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[5].style.width="27%";		
		}
		document.querySelectorAll(".teclado .row .col1 img")[5].onmouseup = function()
		{
			document.querySelectorAll(".teclado .row .col1 img")[5].style.width="29%";	
		}
		
		document.getElementById("mas").onmousedown = function()
		{
			document.getElementById("mas").style.width="85%";		
		}
		document.getElementById("mas").onmouseup = function()
		{
			document.getElementById("mas").style.width="100%";	
		}
	},
	darMensaje: function(i)
	{
		if(display.innerText=="0")
		{
			display.innerText="";
		}	
		var parametro = i; 
		var newContent = document.createTextNode(parametro); 
		display.appendChild(newContent);
		this.arregloNum.push(parametro);
	},
	ponerNegativo: function()
	{
		if(display.innerText=="0")
		{
			display.innerText="";
		}
		var negativo = "-";
		return display.innerText=negativo;		
		this.arregloNum.push(parametro);
	},
	verificarPunto: function()
	{
		for(var i =0; i<=this.arregloNum.length; i++)
		{
			if(this.arregloNum[i]==".")
			{
				if(this.teclas[16].onclick != null)
				{
					alert("No se pueden poner mas puntos.");
				}
			}
		}
	},
	hacerSuma: function(num1, num2){
		return this.resultado = num1+num2;
	},
	hacerResta: function(num1, num2){
		return this.resultado = num1-num2;
	},
	hacerMultiplicacion: function(num1, num2){
		return this.resultado = num1*num2;
	},
	hacerDivision: function(num1, num2){
		return this.resultado = num1/num2;
	},
	hacerOperaciones: function(i)
	{
		//var num1 = 
		//var num2 = 
		//if()
		//{
			
		//}
	}
}
function modificarDisplay()
{	
		
		Calculadora.teclas[4].onclick = function(){Calculadora.darMensaje(7)};
		Calculadora.teclas[5].onclick = function(){Calculadora.darMensaje(8)};
		Calculadora.teclas[6].onclick = function(){Calculadora.darMensaje(9)};
		
		Calculadora.teclas[8].onclick = function(){Calculadora.darMensaje(4)};
		Calculadora.teclas[9].onclick = function(){Calculadora.darMensaje(5)};
		Calculadora.teclas[10].onclick = function(){Calculadora.darMensaje(6)};
		
		Calculadora.teclas[12].onclick = function(){Calculadora.darMensaje(1)};
		Calculadora.teclas[13].onclick = function(){Calculadora.darMensaje(2)};
		Calculadora.teclas[14].onclick = function(){Calculadora.darMensaje(3)};
		Calculadora.teclas[15].onclick = function(){Calculadora.darMensaje(0)};
		Calculadora.teclas[16].onclick = function(){Calculadora.verificarPunto(); Calculadora.darMensaje(".");};
		
		Calculadora.teclas[0].onclick = function(){Calculadora.display.innerText = "0"; Calculadora.arregloNum=[];};
		Calculadora.teclas[1].onclick = Calculadora.ponerNegativo;
	
}
Calculadora.init();


