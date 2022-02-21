// While

programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, numero, resultado

		contador = 1
		limite = 10

		escreva("Digite o número da tabuada: ")
		leia(numero)
		escreva("\n")
		escreva("Digite o limite: ")
		leia(limite)
		escreva("\n")
		
		faca {

			resultado = contador * numero
			escreva(contador + " x " + numero + " = " + resultado + "\n")
			contador ++
			
		} enquanto (contador <= limite)

		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 8; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */