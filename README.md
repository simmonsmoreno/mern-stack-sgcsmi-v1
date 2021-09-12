# Sistema de Gestão de Centros de Saúde Materno Infantil

<h3> Descrição </h3>
O principal problema que motiva a implementação do sistema descrito acima, é a inexistência duma maneira capaz de armazenar e processar todos os dados relativamente ao atendimento às crianças de uma forma eficiente e disponibilizar informações precisas e em tempo suficiente útil. Em alguns casos de centro de saúde existe um sistema instalado, mas que, maioria das vezes, quando os funcionários tentam utilizar não funciona, e quando funcionar consumia tempo excessivo para responder. Quando responde às vezes era incorreta. Por essa razão única saída que tiveram era por abandonar sua utilização. 
Quando uma criança é vacinada ou levada á consulta, seja a consulta de avaliação ou consulta médica todos os dados são registados nos cadernos dos centros de saúde e nos cadernos das crianças. Isso inevitavelmente leva a que esses dados, estejam sujeitos a qualquer momento, serem totalmente perdidas, devido a qualquer situação que ponha em causa o desaparecimento desses cadernos, como de entre muitas, por exemplo se o caderno da criança e do centro se extraviarem ou de qualquer forma se perder os dados que ali registados, o que implica perda total dos dados com consequências imprevisíveis. 
Também um dos grandes e grave problema é de uma criança não pode ser submetida consulta médica mesmo se for de urgência, porque existe um número definido de pessoas que podem ser consultadas por dia, quer crianças ou adultos que são a maioria. Caso uma criança ser dirigido ao centro de saúde e se confrontar com número definido já alcançado, esta ficará condicionada a ser consultado num outro dia. 
Ainda pode-se verificar outros problemas existentes realçadas a seguir: 
•	Dificuldade e muita demora na obtenção das informações; 
•	Falta de controlo nas marcações de consultas; 
•	Falta de controlo nas filas de espera para realização das consultas e vacinas; 
•	Insegurança das informações devido a forma inadequada de armazená-las; 
•	Muita demora nos processos de marcação de consultas; 
•	Dificuldade de obter informações de alto nível (através de um dashboard), que possa permitir tomar decisões relevantes, tais como: 
  -	Saber quantas crianças estão registadas; 
	-  Quantas consultas já foram feitas num dia, mês ou ano; 
  -	Saber a quantidade das crianças que foram registadas num dia, mês ou ano; 
  -	Ver qual a aderência das crianças aos centros de saúde para consultas e vacinas; 
  -	Saber o número de crianças que não estão a comparecer nas consultas marcadas;   
  -	Quais os sintomas e diagnósticos são mais registados; 
  -	Saber a classificação do peso, altura e perímetro cefálico das crianças; 
  -	Quais os tipos de consultas médicas são mais realizadas e quais delas estão a ter maior custo por dia, mês ou ano; 
  -	Saber quais os tipos de exames são mais requisitados; 
  -	Ver quais os tipos de materiais são mais usados nas consultas; 
  -	Ver o custo total das consultas no decorrer do dia, mês ou ano. 


<h3> Possíveis requisitos funcionais do sistema: </h3>
Os requisitos do sistema referem a um conjunto de funções que os utilizadores do sistema querem ou precisam que o software ofereça, isto é, definem a funcionalidade desejada do software. Utilizamos a técnica de revisão da documentação, recorrendo aos cadernos de saúde integral das crianças disponibilizadas no centro de saúde. O termo função é usado no sentido de operação que pode ser efetuada pelo sistema, através do comando do utilizador, ou seja, pela ocorrência de eventos internos ou externos ao sistema, como se segue: 

•	Fazer login e logout. – Para ter acesso ao sistema o utilizador terá de fazer login, e para sair do sistema o utilizador terá de fazer logout. 
•	Manter dados das crianças. – O sistema deverá permitir registar, editar, e pesquisar crianças pelos rececionistas, enfermeiros ou médicos. 
•	Manter dados do país da criança. – O sistema deverá permitir registar, alterar e pesquisar mãe e pai das crianças pelos rececionistas, enfermeiros ou médicos. 
•	Manter dados da criança. -  Permitir que o diretor de um determinado centro regista, edita e pesquisa agendamentos de consultas médicas para referido centro. 
•	Manter dados das triagens. - O sistema deverá permitir registar, editar e pesquisar triagens por enfermeiros e médicos. 
•	Manter dados das consultas médicas. – O sistema deverá permitir registar, editar e pesquisar consultas médicas pelos médicos e paciente. 
•	Manter dados das consultas de avaliação. - O sistema deverá permitir registar, editar e pesquisar consultas de avaliação pelos enfermeiros e médicos e pacientes.  
•	Manter dados das vacinas. – O sistema deverá permitir registar, editar e pesquisar vacinas pelos enfermeiros médicos e pacientes.  
•	Manter dados dos serviços de marcações. – O sistema deverá permitir registar, editar, pesquisar e eliminar serviços de marcação das consultas de avaliação, consultas médicas e vacinas pelos médicos, enfermeiros, rececionistas e pacientes. 
•	Manter dados de exame. – O sistema deverá permitir registar, editar e pesquisar exame por médico e paciente.  
•	Manter dados de medicamentos. – O sistema deverá permitir registar, editar e pesquisar medicamento por médico e paciente. 
•	Manter dados de operação. - O sistema deverá permitir registar, editar e pesquisar operação por médico e paciente.  
•	Manter dados de internamento. - O sistema deverá permitir registar, editar e pesquisar internamento por médico e paciente.  
•	Notificação. - O sistema poderá permitir aos médicos, enfermeiros ou pacientes receberem alguma notificação (por exemplo alerta de consulta).  
•	Disponibilizar listas de espera. – O sistema deverá permitir disponibilizar aos pacientes a lista de espera para consultas ou vacinas num determinado dia. 
•	Disponibilizar o preçário. – O sistema deverá permitir disponibilizar aos pacientes a lista de preços para cada tipo de consultas médicas.  
•	Manter perfil do utilizador. – O sistema deverá permitir qualquer utilizador editar o password, o nome, o email ou a foto do seu perfil. 
•	Recuperação do password. – O sistema deverá permitir a recuperação de password a qualquer utilizador desde que seja registado com um email válido para receber confirmação.   
•	Marcar consulta médica online. – O sistema deverá permitir aos pacientes registar, editar, pesquisar e eliminar marcação de consultas médicas online.  
•	Disponibilizar gráfico de crescimento da criança. – O sistema deverá permitir qualquer utilizador consultar os gráficos de crescimento e desenvolvimento para verem estado do crescimento da criança (peso, altura, e perímetro cefálico).  
•	Estabelecer contato com os centros de saúde. – O sistema deverá permitir que os clientes contactem qualquer centro de saúde, selecionando o centro através de um dropdown list e informando o seu email, telefone e a mensagem que desejam enviar. 
•	Manter dados de fatura. – Permitirá registar, editar e pesquisar dados da fatura pelo rececionista, e permitir que a fatura seja imprimida quando registado. 
•	Manter dados do pagamento. - Permitirá registar, editar e pesquisar dados do pagamento das consultas médicas pelo rececionista, e permitir que o recibo seja imprimido quando registado o pagamento. 
•	Log do sistema. – O sistema registará todas as alterações que foram feitas no sistema e o administrador deverá ver essas informações quando necessário.  
•	Ver informações através de dashboard. – O sistema deverá permitir que os diretores dos centros nacionais, municipais e locais verem informações importantes e de alto nível através de um dashboard disponibilizado através de gráficos.  
•	Fazer backup e restauro dos dados. – O sistema deverá permitir que sejam feitos o backup e o restauro dos dados.  
