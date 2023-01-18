# Sistema de Gestão de Centros de Saúde Materno Infantil

<h3> Descrição </h3>
O principal problema que motiva a implementação do sistema descrito acima, é a inexistência duma maneira capaz de armazenar e processar todos os dados relativamente ao atendimento às crianças de uma forma eficiente e disponibilizar informações precisas e em tempo suficiente útil. Em alguns casos de centro de saúde existe um sistema instalado, mas que, maioria das vezes, quando os funcionários tentam utilizar não funciona, e quando funcionar consumia tempo excessivo para responder. Quando responde às vezes era incorreta. Por essa razão única saída que tiveram era por abandonar sua utilização. 

Quando uma criança é vacinada ou levada á consulta, seja a consulta de avaliação ou consulta médica todos os dados são registados nos cadernos dos centros de saúde e nos cadernos das crianças. Isso inevitavelmente leva a que esses dados, estejam sujeitos a qualquer momento, serem totalmente perdidas, devido a qualquer situação que ponha em causa o desaparecimento desses cadernos, como de entre muitas, por exemplo se o caderno da criança e do centro se extraviarem ou de qualquer forma se perder os dados que ali registados, o que implica perda total dos dados com consequências imprevisíveis. 

Também um dos grandes e grave problema é de uma criança não pode ser submetida consulta médica mesmo se for de urgência, porque existe um número definido de pessoas que podem ser consultadas por dia, quer crianças ou adultos que são a maioria. Caso uma criança ser dirigido ao centro de saúde e se confrontar com número definido já alcançado, esta ficará condicionada a ser consultado num outro dia. 
Ainda pode-se verificar outros problemas existentes realçadas a seguir: 
-	Dificuldade e muita demora na obtenção das informações; 
-	Falta de controlo nas marcações de consultas; 
-	Falta de controlo nas filas de espera para realização das consultas e vacinas; 
-	Insegurança das informações devido a forma inadequada de armazená-las; 
-	Muita demora nos processos de marcação de consultas; 
-	Dificuldade de obter informações de alto nível (através de um dashboard), que possa permitir tomar decisões relevantes, tais como: 
  -	Saber quantas crianças estão registadas; 
  -	Quantas consultas já foram feitas num dia, mês ou ano; 
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

-	<b>Fazer login e logout:</b> Para ter acesso ao sistema o utilizador terá de fazer login, e para sair do sistema o utilizador terá de fazer logout. 
-	<b>Manter dados das crianças:</b> O sistema deverá permitir registar, editar, e pesquisar crianças pelos rececionistas, enfermeiros ou médicos. 
-	<b>Manter dados dos pais da criança:</b> O sistema deverá permitir registar, alterar e pesquisar mãe e pai das crianças pelos rececionistas, enfermeiros ou médicos. 
-	<b>Manter dados da criança:</b> Permitir que o diretor de um determinado centro regista, edita e pesquisa agendamentos de consultas médicas para referido centro. 
-	<b>Manter dados das triagens:</b> O sistema deverá permitir registar, editar e pesquisar triagens por enfermeiros e médicos. 
-	<b>Manter dados das consultas médicas:</b> O sistema deverá permitir registar, editar e pesquisar consultas médicas pelos médicos e paciente. 
-	<b>Manter dados das consultas de avaliação:</b> O sistema deverá permitir registar, editar e pesquisar consultas de avaliação pelos enfermeiros e médicos e pacientes.  
-	<b>Manter dados das vacinas:</b> O sistema deverá permitir registar, editar e pesquisar vacinas pelos enfermeiros médicos e pacientes.  
-	<b>Manter dados dos serviços de marcações:</b> O sistema deverá permitir registar, editar, pesquisar e eliminar serviços de marcação das consultas de avaliação, consultas médicas e vacinas pelos médicos, enfermeiros, rececionistas e pacientes. 
-	<b>Manter dados de exame:</b> O sistema deverá permitir registar, editar e pesquisar exame por médico e paciente.  
-	<b>Manter dados de medicamentos:</b> O sistema deverá permitir registar, editar e pesquisar medicamento por médico e paciente. 
-	<b>Manter dados de operação:</b> O sistema deverá permitir registar, editar e pesquisar operação por médico e paciente.  
-	<b>Manter dados de internamento:</b> O sistema deverá permitir registar, editar e pesquisar internamento por médico e paciente.  
-	<b>Notificação:</b> O sistema poderá permitir aos médicos, enfermeiros ou pacientes receberem alguma notificação (por exemplo alerta de consulta).  
-	<b>Disponibilizar listas de espera:</b> O sistema deverá permitir disponibilizar aos pacientes a lista de espera para consultas ou vacinas num determinado dia. 
-	<b>Disponibilizar o preçário:</b> O sistema deverá permitir disponibilizar aos pacientes a lista de preços para cada tipo de consultas médicas.  
-	<b>Manter perfil do utilizador:</b> O sistema deverá permitir qualquer utilizador editar o password, o nome, o email ou a foto do seu perfil. 
-	<b>Recuperação do password:</b> O sistema deverá permitir a recuperação de password a qualquer utilizador desde que seja registado com um email válido para receber confirmação.   
-	<b>Marcar consulta médica online:</b> O sistema deverá permitir aos pacientes registar, editar, pesquisar e eliminar marcação de consultas médicas online.  
-	<b>Disponibilizar gráfico de crescimento da criança:</b> O sistema deverá permitir qualquer utilizador consultar os gráficos de crescimento e desenvolvimento para verem estado do crescimento da criança (peso, altura, e perímetro cefálico).  
-	<b>Estabelecer contato com os centros de saúde:</b> O sistema deverá permitir que os clientes contactem qualquer centro de saúde, selecionando o centro através de um dropdown list e informando o seu email, telefone e a mensagem que desejam enviar. 
-	<b>Manter dados de fatura:</b> Permitirá registar, editar e pesquisar dados da fatura pelo rececionista, e permitir que a fatura seja imprimida quando registado. 
-	<b>Manter dados do pagamento:</b> Permitirá registar, editar e pesquisar dados do pagamento das consultas médicas pelo rececionista, e permitir que o recibo seja imprimido quando registado o pagamento. 
-	<b>Log do sistema:</b> O sistema registará todas as alterações que foram feitas no sistema e o administrador deverá ver essas informações quando necessário.  
-	<b>Ver informações através de dashboard:</b> O sistema deverá permitir que os diretores dos centros nacionais, municipais e locais verem informações importantes e de alto nível através de um dashboard disponibilizado através de gráficos.  
-	<b>Fazer backup e restauro dos dados:</b> O sistema deverá permitir que sejam feitos o backup e o restauro dos dados.  


## Setup

- Server

-- Instalar adonisjs: <b>npm i -g @adonisjs/cli</b></br>
-- Gerar chave da aplicação adonisjs: <b>adonis key:generate</b> (será guardado a chave APP_KEY no ficheiro .env)</br>
-- Criar uma base de dados e inserir o nome deste no .env assim comos o username e a password</br>
-- Instalar os modulos: <b>npm install</b></br>
-- Executar as migrações para criar a base de dados: <b>node ace migration:run</b></br>
