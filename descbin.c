#include <stdio.h>
#define TAM 12
#define TRUE 0
#define FALSE -1
#define MAX_LINHAS 800

// A implementação (corpo) destas funções está lá embaixo
void imprime_numero(char, unsigned int);            // imprime em binário ou hexadecimal
void imprime_vazios(char, int);                     // imprime espaços vazios

// Este programa lê um arquivo e o imprime de duas formas:
//  1. em binário/hexadecimal
//  2. em texto (segundo a tabela ASCII)
//
int main(int argc, char* argv[])
{
    FILE *arqptr;
    unsigned int ch;
    int j, not_eof;
    unsigned char string[TAM+1];
    char* caminho_arquivo = argv[2];
    unsigned int linhas_lidas = 0;

    // Pára se encontra erros
    if (argc != 3)
    {
        // Erro de chamada: precisa chamar o programa com um argumento
        printf("Como usar o aplicativo descbin:\n\n");
        printf("C:> descbin.exe base arq.xxx\n\n  Onde:\n");
        printf("\t - 'base' deve ser a letra 'b' para binario ou 'h' para hexadecimal\n");
        printf("\t - 'arq.xxx' deve ser o caminho para um arquivo\n");
        return(0);
    }
    char base = argv[1][0];     // 'b' ou 'h'

    if ((arqptr = fopen(caminho_arquivo, "rb")) == NULL)
    {
        // Erro ao abrir o arquivo: provavelmente o arquivo especificado na chamada
        // não foi encontrado
        printf("Nao posso abrir o arquivo %s.", caminho_arquivo);
        return(0);
    }

    not_eof = TRUE;
    do
    {
        for (j=0; j<TAM && not_eof == TRUE; j++)
        {
            // Lê um caractere do arquivo
            ch = getc(arqptr);
            if (ch == (unsigned)EOF) {
                not_eof = FALSE;
                // Imprime espaços vazios
                imprime_vazios(base, (TAM-j-1));
            } else {
                // Imprime o caractere lido, no formato de número hexadecimal
                imprime_numero(base, ch);
                printf(" ");

                // Na tabela ASCII, os códigos de 0 a 31 não representam caracteres,
                // mas operações (nova linha, tab, nulo etc.)
                if (ch > 31) {
                    // Salva na variável "string" o conteúdo do arquivo
                    *(string+j) = ch;
                }
                else {
                    // Salva na variável "string" o caractere '.'
                    *(string+j) = '.';
                }
            }

        }

        // Termina a linha (ao colocar '\0' no final)
        *(string+j) = '\0';
        // Imprime a variável linha contendo TAM caracteres
        printf("  %s\n", string);

        linhas_lidas++;
    } while (not_eof == TRUE && linhas_lidas < MAX_LINHAS);


    fclose(arqptr);
    return 0;
}



void imprime_binario(unsigned int v) {
    int bytes = 1;
    unsigned int i, s = 1<<((bytes<<3)-1);

    for (i = s; i; i>>=1) {
        printf("%d", v & i || 0 );
    }
}

void imprime_hexadecimal(unsigned int v) {
    // Referência da função printf:
    // http://www.cplusplus.com/reference/cstdio/printf/
    printf("%02x", v);
}

void imprime_vazios(char base, int espacos) {
    for (; espacos>=0; espacos--)
        printf(base == 'h' ? "   " : "         ");
}

void imprime_numero(char base, unsigned int num) {
    switch (base) {
    case 'b':
        imprime_binario(num);
        break;
    case 'h':
    default:
        imprime_hexadecimal(num);
        break;
    }
}
