// Matriz

programa
{
	
	funcao inicio()
	{
		inteiro contador = 0
		cadeia cliente[][] = {
			{"Bruno |", "Rio Preto |", "SP"}, 
			{"Liane |", "Goiania |", "GO"}, 
			{"Eduardo |", "Salvador |", "BA"}, 
			{"Valentina |", "Niteroi |", "RJ"}}

		faca {
			escreva("Nome: " + cliente[contador][0] + 
			" Cidade: " + cliente[contador][1] + 
			" Estado: " + cliente[contador][2] + 
			"\n")
			contador++
		} enquanto (contador < 4)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 62; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {contador, 8, 10, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */