// Case

programa
{
	
	funcao inicio()
	{	
		inteiro menu = 0
		
		escreva("Escolha uma das opções:" + "\n\n" + "1 - Netflix" + "\n" + "2 - Amazon Prime" + "\n" + "3 - Disney Plus" + "\n" + "4 - Direct Go" + "\n"  + "5 - Sair" + "\n\n")
		escreva("Sua escolha: ")
		leia(menu)
		
		escolha (menu) {

			caso 1:
			escreva("\n" + "OK!! Abrindo Netflix..." + "\n") 
			pare

			caso 2:
			escreva("\n" + "OK!! Abrindo Amazon Prime..." + "\n") 
			pare

			caso 3:
			escreva("\n" + "OK!! Abrindo Disney Plus..." + "\n") 
			pare

			caso 4:
			escreva("\n" + "OK!! Abrindo Direct Go..." + "\n") 
			pare

			caso 5:
			escreva("\n" + "OK!! Saindo..." + "\n") 
			pare

			caso contrario:
			escreva("\n" + "Por favor, escolha uma opção válida!" + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 7; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */