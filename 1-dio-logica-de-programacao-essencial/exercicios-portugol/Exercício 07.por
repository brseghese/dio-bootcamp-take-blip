// Matriz - Linha e Coluna

programa
{
	
	funcao inicio()
	{
		inteiro contador = 0
		cadeia cesta[][] = {{"Maça", "100"}, {"Pera", "200"}, {"Jaca", "300"}, {"Kiwi", "400"}}

		escreva("Produto:")
		escreva(cesta[0][0]) // Maça
		escreva(" Quantidade:")
		escreva(cesta[0][1]) // 100
		
		escreva("\n" + "Produto:")
		escreva(cesta[1][0]) // Pera
		escreva(" Quantidade:")
		escreva(cesta[1][1]) // 200
		
		escreva("\n" + "Produto:")
		escreva(cesta[2][0]) // Jaca
		escreva(" Quantidade:")
		escreva(cesta[2][1]) // 300
		
		escreva("\n" + "Produto:")
		escreva(cesta[3][0]) // Kiwi
		escreva(" Quantidade:")
		escreva(cesta[3][1]) // 400
		escreva("\n")

		escreva("\n")

		faca {
			escreva("Produto: " + cesta[contador][0] + 
			" Quantidade: " + cesta[contador][1] + 
			"\n")
			contador++
		} enquanto (contador <4)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 782; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */