// If

programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, nota4, soma, media
		cadeia aluno

		escreva("Digite o nome do aluno: ")
		leia(aluno)
		
		escreva("\n" + "Digite a nota 1: ")
		leia(nota1)
		
		escreva("\n" + "Digite a nota 2: ")
		leia(nota2)
		
		escreva("\n" + "Digite a nota 3: ")
		leia(nota3)
		
		escreva("\n" + "Digite a nota 4: ")
		leia(nota4)

		soma = (nota1 + nota2 + nota3 + nota4)
		media =  soma / 4

		// escreva("O aluno: " + aluno + " obteve a média " + media + "\n")

		// Verifica aprovação

		se (media >= 7) {
			escreva("\n" + aluno + " foi aprovado," + " com média: " + media + "\n")
		} senao {
			escreva("\n" + aluno + " foi reprovado," + " com média: " + media  + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 5; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */