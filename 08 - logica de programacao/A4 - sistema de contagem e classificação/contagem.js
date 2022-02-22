//******************************************************************************************************
//**********************************  CONTAGEM E CLASSIFICAÇÃO *****************************************
//******************************************************************************************************
//************************ by: Tatiane A. Nicchetti | tanicchetti@hotmail.com **************************
//******************************************************************************************************
//                                                                        Atividade do Senai, 22/02/2022
//
// requisitos: criar um sistema que tem um núm máx de alunos. de 0 ao núm máx deve-se escrever se o número
// é 0, impar ou par

let nAlunos = 10;

for (let i=0 ; i<=nAlunos; i++) {
    if (i == 0) {

        console.log(`${i} é zero`);

    } else if (i%2 == 0){

                console.log(`${i} é par`);

        } else {

            console.log(`${i} é impar`);
            
        }
    }
