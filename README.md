<h1>NewTab Academy</h1>
<h2>Projeto HTML, CSS e JAVASCRIPT (individual)</h2>

Você vai continuar desenvolvendo o projeto que começou no módulo anterior, mas agora é hora de aplicar os conhecimentos de JavaScript! Reveja o escopo para lembrar o que é preciso ser feito.

Lembrando que nos inspiramos no teste técnico de front-end para a empresa Via Varejo (responsável pelas Casas Bahia, Pontofrio e outras marcas). O link do teste técnico original: https://github.com/viavarejo/frontend-test

Vamos lá?

Introdução
Seu objetivo é criar uma SPA (Single Page Application) seguindo o layout que está nesta url https://goo.gl/yMrCaf.

No layout original, vocês vão ver que existem itens no menu sem utilidade. Vamos alterar e criar funcionalidades pra eles? 

Durante o desenvolvimento portanto, vocês devem:

Alterar o link “Resumo” para “Cadastro de transações”.
Alterar o link “Dashboard” para “Limpar dados”.
Excluir o link “Configurações”.
O que sua aplicação deverá fazer
Incluir transações de compra ou venda de mercadoria.
Criar um extrato das transações incluídas. As transações deverão ser mostradas na ordem em que foram incluídas.
Mostrar o saldo final e destacar se houve lucro ou prejuízo.
A aplicação deverá ser responsiva e estar de acordo com o layout fornecido.
Persistir as transações no Local Storage.
Outros requisitos
HTML:

As opções do campo “Tipo de transação” são: Compra e Venda.
Caso não exista nenhuma transação cadastrada, adicione a mensagem “Nenhuma transação cadastrada.” na lista do Extrato.
CSS:

Testar em smartphones, tablets (modos portrait e landscape) e monitores a partir de 1024px até 1900px. (Através do inspecionar elemento no navegador)
A fonte utilizada é a Lato.
A largura máxima do conteúdo é 1100px.
JavaScript:

Validar o formulário para que todos os campos sejam preenchidos.
Adicionar uma máscara no campo “Valor” para que apenas números sejam preenchidos e com a formatação correta. (Padrão: 10,90)
Ao adicionar uma nova transação, persistir no Local Storage e já atualizar a lista com o extrato. Atualizar também o cálculo apresentado.
Ao clicar no link “Limpar dados”, apresentar uma mensagem de confirmação e em seguida apagar as informações, atualizando a lista.
Divisão de atividades
HTML e CSS (atividades já desenvolvidas no módulo anterior).

Javascript:

ATIVIDADE 1 – JAVASCRIPT:
Validação e máscara do formulário
ATIVIDADE 2 – JAVASCRIPT:
Registro em local storage e listagem das transações
Funcionalidade de limpar dados