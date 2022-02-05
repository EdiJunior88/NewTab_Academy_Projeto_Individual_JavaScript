<h1>NewTab Academy</h1>
<h2>Projeto HTML, CSS e JAVASCRIPT (individual)</h2>

<p>Você vai continuar desenvolvendo o projeto que começou no módulo anterior, mas agora é hora de aplicar os conhecimentos de JavaScript! Reveja o escopo para lembrar o que é preciso ser feito.</p>

<p>Lembrando que nos inspiramos no teste técnico de front-end para a empresa Via Varejo (responsável pelas Casas Bahia, Pontofrio e outras marcas). O link do teste técnico original: <a href="https://github.com/viavarejo/frontend-test">https://github.com/viavarejo/frontend-test</a></p>

<p>Vamos lá?</p>

<h3>Introdução</h3>

<p>Seu objetivo é criar uma SPA (Single Page Application) seguindo o layout que está nesta url <a href="https://goo.gl/yMrCaf">https://goo.gl/yMrCaf</a>.</p>

<p>No layout original, vocês vão ver que existem itens no menu sem utilidade. Vamos alterar e criar funcionalidades pra eles? </p>

<p>Durante o desenvolvimento portanto, vocês devem:</p>

<ul>
  <li>Alterar o link “Resumo” para “Cadastro de transações”.</li>
  <li>Alterar o link “Dashboard” para “Limpar dados”.</li>
  <li>Excluir o link “Configurações”.</li>
</ul>

<hr>

<h3>O que sua aplicação deverá fazer</h3>

<ul>
  <li>Incluir transações de compra ou venda de mercadoria.</li>
  <li>Criar um extrato das transações incluídas. As transações deverão ser mostradas na ordem em que foram incluídas.</li>
  <li>Mostrar o saldo final e destacar se houve lucro ou prejuízo.</li>
  <li>A aplicação deverá ser responsiva e estar de acordo com o layout fornecido.</li>
  <li>Persistir as transações no Local Storage.</li>
</ul>

<hr>

<h3>Outros requisitos</h3>

<p><strong>HTML:</strong></p>

<ul>
  <li>As opções do campo “Tipo de transação” são: Compra e Venda.</li>
  <li>Caso não exista nenhuma transação cadastrada, adicione a mensagem “Nenhuma transação cadastrada.” na lista do Extrato.</li>
</ul>

<p><strong>CSS:</strong></p>

<ul>
  Testar em smartphones, tablets (modos portrait e landscape) e monitores a partir de 1024px até 1900px. (Através do inspecionar elemento no navegador)
  A fonte utilizada é a Lato.
  A largura máxima do conteúdo é 1100px.
</ul>

<p><strong>JavaScript:</strong></p>

<ul>
  <li>Validar o formulário para que todos os campos sejam preenchidos.</li>
  <li>Adicionar uma máscara no campo “Valor” para que apenas números sejam preenchidos e com a formatação correta. (Padrão: 10,90)</li>
  <li>Ao adicionar uma nova transação, persistir no Local Storage e já atualizar a lista com o extrato. Atualizar também o cálculo apresentado.</li>
  <li>Ao clicar no link “Limpar dados”, apresentar uma mensagem de confirmação e em seguida apagar as informações, atualizando a lista.</li>
</ul>

<hr>

<h3>Divisão de atividades</h3>

<p><strong>HTML e CSS (atividades já desenvolvidas no módulo anterior).</strong></p>

<p><strong>Javascript:</strong></p>

<ul>
  <li>ATIVIDADE 1 – JAVASCRIPT:</li>
  <ul>
    <li>Validação e máscara do formulário</li>
  </ul>
</ul>

<ul>
  <li>ATIVIDADE 2 – JAVASCRIPT:</li>
  <ul>
    <li>Registro em local storage e listagem das transações</li>
    <li>Funcionalidade de limpar dados</li>
  </ul>
</ul>