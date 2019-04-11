var Calculadora = {
	teclas: document.getElementsByClassName("tecla"),
	display: document.getElementById("display"),
	verificado: false,
	operandoA: 0.0,
	operandoB: 0.0,
	operacion: "",
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
	verificarDimensionDisplay: function()
	{
		var cadena = display.innerText;
		var arregloCadena = cadena.split("");
		if(arregloCadena.length > 8)
		{
			this.verificado = true;
		}
		else{
			this.verificado = false;
		}
	},
	darMensaje: function(i)
	{
		if(display.innerText=="0")
		{
			display.innerText="";
		}	
		this.verificarDimensionDisplay();
		var parametro = i;
		if(this.verificado==false)
		{
			var contenido = document.createTextNode(parametro); 
			display.appendChild(contenido);
			this.verificarPunto();
		}
		else{
			alert("no se puede poner mas numeros");
		}
		
	},
	ponerNegativo: function()
	{
		if(display.innerText=="0")
		{
			display.innerText="";
		}
		var negativo = "-";
		display.innerText=negativo;	
	},
	verificarPunto: function()
	{
		var cadena = display.innerText;
		var arregloCadena = cadena.split("");
		var verificado = arregloCadena.includes(".");
		if(verificado == true)
		{
			this.teclas[16].onclick = null;
		}
	},
	hacerSuma: function(){
		var numero = parseFloat(this.display.innerText);
		this.operandoA = numero;
		this.operacion = "+"
		this.limpiarDisplay();
	},
	hacerResta: function(){
		var numero = parseFloat(this.display.innerText);
		this.operandoA = numero;
		this.operacion = "-"
		this.limpiarDisplay();
	},
	hacerMultiplicacion: function(){
		var numero = parseFloat(this.display.innerText);
		this.operandoA = numero;
		this.operacion = "*"
		this.limpiarDisplay();
	},
	hacerDivision: function(){
		var numero = parseFloat(this.display.innerText);
		this.operandoA = numero;
		this.operacion = "/"
		this.limpiarDisplay();
	},
	hacerOperacion: function()
	{
		var resultado = 0.0;
		switch(this.operacion)
		{
			case "+":
			resultado = parseFloat(this.operandoA)+parseFloat(this.operandoB);
			break;
			
			case "-":
			resultado = parseFloat(this.operandoA)-parseFloat(this.operandoB);
			break;
			
			case "*":
			resultado = parseFloat(this.operandoA)*parseFloat(this.operandoB);
			break;
			
			case "/":
			resultado = parseFloat(this.operandoA)/parseFloat(this.operandoB);
			break;
		}
		display.innerText = resultado;
		resultado = this.operandoA;
	},
	darResultado: function()
	{
		this.operandoB = display.innerText;
		this.hacerOperacion();
	},
	limpiarDisplay()
	{
		display.innerText = "";
	},
	reiniciar: function()
	{
		this.display.innerText = "0";
		this.operandoA = 0.0;
		this.operandoB = 0.0;
		this.operacion = "";
	}
}
function modificarDisplay()
{	
		Calculadora.teclas[15].onclick = function(){Calculadora.darMensaje(0)};
		Calculadora.teclas[12].onclick = function(){Calculadora.darMensaje(1)};
		Calculadora.teclas[13].onclick = function(){Calculadora.darMensaje(2)};
		Calculadora.teclas[14].onclick = function(){Calculadora.darMensaje(3)};
		
		Calculadora.teclas[8].onclick = function(){Calculadora.darMensaje(4)};
		Calculadora.teclas[9].onclick = function(){Calculadora.darMensaje(5)};
		Calculadora.teclas[10].onclick = function(){Calculadora.darMensaje(6)};
		
		Calculadora.teclas[4].onclick = function(){Calculadora.darMensaje(7)};
		Calculadora.teclas[5].onclick = function(){Calculadora.darMensaje(8)};
		Calculadora.teclas[6].onclick = function(){Calculadora.darMensaje(9)};

		Calculadora.teclas[16].onclick = function(){Calculadora.darMensaje(".")}
		Calculadora.teclas[0].onclick = function(){Calculadora.reiniciar()};
		Calculadora.teclas[1].onclick = Calculadora.ponerNegativo;
		
		Calculadora.teclas[3].onclick = function(){Calculadora.hacerDivision()};
		Calculadora.teclas[7].onclick = function(){Calculadora.hacerMultiplicacion()};
		Calculadora.teclas[11].onclick = function(){Calculadora.hacerResta()};
		Calculadora.teclas[18].onclick = function(){Calculadora.hacerSuma()};
		
		Calculadora.teclas[17].onclick = function(){Calculadora.darResultado()};
		
	
}
Calculadora.init();


