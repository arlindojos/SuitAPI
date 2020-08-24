# SuitAPI
<h1 align="center">
  <img width=500px src="https://github.com/arlindojos/SuitAPI/blob/master/suit-api/src/assets/images/SuitAPI-equipe.png" alt="Logo da Proffy" />
</h1>

Suit API, um sistema que determina o perfil do investidor com base em uma
<br/>análise de dados que são obtidos através de 2 APIs da plataforma GR1D:
<br/>A API de consulta de dados de correntistas via Open Banking da TecBan.
<br/>A API da google para obter localização do investidor,
<br/>E a API de GeoMarketing, de estimativa de renda domiciliar: Renda Provável que utiliza projeções de renda feitas pela Geofusion.
<br/>Obtemos uma estimativa de renda domiciliar baseado na localização do investidor, 
<br/>Obtemos também todas as transações e pagamentos do cliente e salvamos em um banco de dados.
<br/>A partir daí, uma aplicação de Data Science vai definir, com base nesses dados,
um score de 0 a 100, sendo 0 mais conservador e 100 mais agressivo.
<br/>O score é enviado para a corretora e a partir daí ela tem o perfil do investidor baseado
em dados bancários e de estimativa de renda por localização.
<br/>Ela ainda pode aplicar seu formulário de perguntas e respostas, mas agora ela também tem uma análise baseada em dados e não apenas em perguntas.

## ❔
[Como realmente funciona?](https://www.youtube.com/watch?v=o1fsfpvQGyY)
<br/>[Como é usado?](https://www.youtube.com/watch?v=CVWPfqzTFtk)
