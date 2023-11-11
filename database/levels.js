var levels = [
  {
    helpTitle : "Selecione elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    doThis : "Selecione os circulos vermelho",
    selector : "circulo_vermelho",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> selecione todos <tag>div</tag> os elementos.',
      '<strong>p</strong> selecione todos <tag>p</tag> os elementos.',
    ],
    boardMarkup: `
    <circulo_vermelho/>
    <circulo_vermelho/>
    `
  },
  {
    doThis : "Selecione as caixas de quadrado amarelo",
    selector : "quadrado amarelo",
    syntax : "A",
    helpTitle : "Selecione elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> selecione todos <tag>div</tag> os elementos.',
      '<strong>p</strong> selecione todos <tag>p</tag> os elementos.',
    ],
    boardMarkup: `
    <quadrado_amarelo/>
    <circulo_vermelho/>
    <quadrado_amarelo/>
    `
  },
  {
    doThis : "Selecione o circulo vermelho elegante",
    selector : "#elegante",
    selectorName: "ID Selector",
    helpTitle: "Selecione elementos com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com um <strong>id</strong> específico. Você também pode combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#cool</strong> seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#grande</strong> seleciona <tag>ul id="grande"</tag>'
    ],
    boardMarkup : `
    <circulo_vermelho id="elegante"/>
    <circulo_vermelho/>
    <quadrado_amarelo/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro elemento",
    selectorName : "Seletor de Descendente",
    doThis : "Selecione a bolas branca no circulo vermelho",
    selector : "circulo vermelho de bolas branca",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é chamado de descendente porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selecione todos <tag>strong</tag> os elementos que estão dentro de qualquer <tag>p</tag>',
      '<strong>#elegante&nbsp;&nbsp;span</strong> seleciona qualquer <tag>span</tag> elementos que estão dentro do elemento com <strong>id="elegante"</strong>',
    ],
    boardMarkup : `
    <quadrado_amarelo/>
    <circulo_vermelho>
      <bola_branco/>
    </circulo_vermelho>
    <bola_branco/>
    `
  },
  {
    doThis : "Selecione o cilindro azul no circulo vermelho elegante",
    selector : "#elegante cilindro_azul",
    helpTitle: "Combine os Seletores de Descendente e ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selecione todos <tag>span</tag> os elementos que estão dentro de elementos com <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <quadrado_amarelo>
    <bola_ciano/>
    </quadrado_amarelo>
    <circulo_vermelho id="elegante">
      <cilindro_azul/>
    </circulo_vermelho>
    <circulo_vermelho>
      <cilindro_azul/>
    </circulo_vermelho>
    `
  },
  {
    doThis : "Selecione as bolas branca pequenas",
    selector : ".pequeno",
    selectorName: "Seletor de Classe",
    helpTitle: "Selecione elementos pela sua classe",
    syntax: ".classname",
    help : 'O seletor de classe seleciona todos os elementos com aquele atributo de classe. Elementos podem ter apenas um ID, mas muitas classes.',
    examples : [
    '<strong>.neato</strong> selecione todos os elementos com <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <bola_branco/>
    <bola_branco class="pequeno"/>
    <circulo_vermelho>
      <bola_branco class="pequeno"/>
    </circulo_vermelho>
    <circulo_vermelho/>
    `
  },
  {
    doThis : "Selecione as bolas ciana pequenas",
    selector : "bola_ciano.pequeno",
    helpTitle: "Combine o Seletor de Classe",
    syntax: "A.className",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.important</strong> selecione todos <tag>ul</tag> os elementos que têm <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecione todos os elementes <strong>id="big"</strong> que também têm <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <bola_branco/>
    <bola_branco class="pequeno"/>
    <quadrado_amarelo>
      <bola_ciano class="pequeno"/>
    </quadrado_amarelo>
    <circulo_vermelho>
      <bola_ciano/>
    </circulo_vermelho>
    <circulo_vermelho>
      <bola_ciano class="pequeno"/>
    </circulo_vermelho>`
  },
  {
    doThis : "Selecione as pequenas bolas ciana nos quadrados amarelo ",
    selector : "bento bola_ciano.pequeno",
    syntax: "Dê o seu melhor!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver este!',
    boardMarkup : `
    <quadrado_amarelo>
      <bola_ciano/>
    </quadrado_amarelo>
    <bola_ciano class="pequeno"/>
    <quadrado_amarelo>
      <bola_ciano class="pequeno"/>
    </quadrado_amarelo>
    <quadrado_amarelo>
      <bola_branco class="pequeno"/>
    </quadrado_amarelo>
    <quadrado_amarelo>
      <bola_ciano class="pequeno"/>
    </quadrado_amarelo>
    `
  },
  {
    doThis : "Selecione todos os circulos vermelho e quadrados amarelo",
    selector : "circulo_vermelho,quadrado amarelo",
    selectorName : "Combinador de Vírgula",
    helpTitle: "Combine, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Graças à tecnologia Shatner, isso seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar quaisquer seletores dessa maneira, e você pode especificar mais de dois.',
    examples: [
    '<strong>p, .fun</strong> selecione todos <tag>p</tag> os elementos bem como todos os elementos com <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selecione todos <tag>a</tag>, <tag>p</tag> e <tag>div</tag> elementos'
    ],
    boardMarkup : `
    <cilindro_azul class="pequeno"/>
    <cilindro_azul/>
    <circulo_vermelho>
      <cilindro_azul/>
    </circulo_vermelho>
    <quadrado_amarelo>
      <cilindro_azul/>
    </quadrado_amarelo>
    <circulo_vermelho>
      <cilindro_azul/>
    </circulo_vermelho>
    <cilindro_azul/>
    <cilindro_azul class="pequeno"/>
    `
  },
  {
    doThis : "Selecione todas as coisas!",
    selector : "*",
    selectorName:  "O Seletor Universal",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Você pode selecionar todos os elementos com o seletor universal! ',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos <tag>p</tag> os elementos.',
    ],
    boardMarkup : `
    <bola_branco/>
    <circulo_vermelho>
      <bola_ciano class="pequeno" />
    </circulo_vermelho>
    <quadrado_amarelo/>
    <quadrado_amarelo>
      <bola_ciano/>
    </quadrado_amarelo>
    <circulo_vermelho id="elegante"/>
    `
  },
  {
    doThis : "Selecione tudo em um circulo vermelho",
    selector : "circulo_vermelho *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine o seletor universal",
    help : 'Isso seleciona todos os elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos <tag>p</tag> os elementos.',
      '<strong>ul.elegante *</strong> seleciona todos os elementos dentro de todos <tag>ul class="elegante"</tag> os elementos.'
    ],
    boardMarkup: `
    <circulo_vermelho id="elegante">
      <bola_ciano class="pequeno"/>
    </circulo_vermelho>
    <circulo_vermelho>
      <cilindro_azul/>
    </circulo_vermelho>
    <bola_branco class="pequeno"/>
    <circulo_vermelho>
      <bola_branco/>
    </circulo_vermelho>`
  },
  {
    doThis : "Selecione toda bolas branca que está ao lado de um circulo vermelho",
    selector : "circulo_vermelho + bola_branco",
    helpTitle: "Selecione um elemento que segue diretamente outro elemento",
    selectorName: "Seletor de Irmão Adjacente",
    syntax : "A + B",
    help : "Isso seleciona todos os elementos <strong>B</strong> que seguem diretamente <strong>A</strong>. Elementos que se seguem são chamados de irmãos. Eles estão no mesmo nível ou profundidade. <br/><br/>Na marcação HTML para este nível, elementos que têm a mesma indentação são irmãos.",
    examples : [
      '<strong>p + .intro</strong> seleciona todo elemento com <strong>class="intro"</strong> que segue diretamente um(a) <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos <tag>a</tag> os elemento que segue diretamente um(a) <tag>div</tag>'
    ],
    boardMarkup : `
    <quadrado_amarelo>
      <bola_branco class="pequeno"/>
    </quadrado_amarelo>
    <circulo_vermelho />
    <bola_branco class="pequeno"/>
    <circulo_vermelho />
    <bola_branco/>
    <bola_branco class="pequeno"/>
    <bola_branco class="pequeno"/>
    `
  },
  {
    selectorName: "Seletor de Irmão Geral",
    helpTitle: "Selecione elementos que seguem outro elemento",
    syntax: "A ~ B",
    doThis : "Selecione os cilindro azul  ao lado do quadrado amarelo",
    selector : "bento ~ cilindro_azul",
    help : "Você pode selecionar todos os irmãos de um elemento que o seguem. Isso é como o Seletor Adjacente (A + B), exceto que ele seleciona todos os elementos seguintes ao invés de apenas um.",
    examples : [
      '<strong>A ~ B</strong> selecione todos <strong>B</strong> que seguem um(a) <strong>A</strong>'
    ],
    boardMarkup : `
    <cilindro_azul/>
    <quadrado_amarelo>
      <bola_ciano class="pequeno"/>
    </quadrado_amarelo>
    <cilindro_azul class="pequeno"/>
    <cilindro_azul/>
    <circulo_vermelho>
      <cilindro_azul/>
    </circulo_vermelho>
    <circulo_vermelho>
      <cilindro_azul class="pequeno"/>
    </circulo_vermelho>
    `
  },
  {
    selectorName: "Seletor de Filho",
    syntax: "A > B&nbsp;",
    doThis : "Selecione a bolas branca diretamente em um circulo vermelho",
    selector : "circulo vermelho > bolas branca",
    helpTitle: "Selecione os filhos diretos de um elemento",
    help : "Você pode selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está aninhado diretamente em outro elemento. <br><br>Elementos que estão aninhados mais profundamente são chamados de elementos descendentes.",
    examples : [
      '<strong>A > B</strong> selecione todos <strong>B</strong> que são filhos diretos <strong>A</strong>'
    ],
    boardMarkup: `
    <circulo_vermelho>
      <quadrado_amarelo>
        <bola_branco/>
      </quadrado_amarelo>
    </circulo_vermelho>
    <circulo_vermelho>
      <bola_branco/>
    </circulo_vermelho>
    <circulo_vermelho/>
    <bola_branco/>
    <bola_branco class="pequeno"/>
    `
  },
  {
    selectorName: "Seletor Pseudo de Primeiro Filho",
    helpTitle: "Selecione um primeiro elemento filho dentro de outro elemento",
    doThis : "Selecione a bola ciana do topo",
    selector : "circulo vermelho :first-child",
    syntax: ":first-child",

    help : "Você pode selecionar o primeiro elemento filho. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. Você pode combinar este pseudo-seletor com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os primeiros elementos filhos.',
      '<strong>p:first-child</strong> seleciona todos os primeiros filhos <tag>p</tag> dos elementos',
      '<strong>div p:first-child</strong> seleciona todos os primeiros filhos <tag>p</tag> dos elementos que estão em um <tag>div</tag>.'
    ],
    boardMarkup :`
    <quadrado_amarelo/>
    <circulo_vermelho />
    <circulo_vermelho>
      <bola_ciano />
      <bola_ciano />
      <bola_ciano />
    </circulo_vermelho>
    <cilindro_azul class="pequeno" />
    `
  },
  {
    selectorName: "Seletor Pseudo de Filho Único",
    helpTitle: "Selecione um elemento que seja o único elemento dentro de outro.",
    doThis : "Selecione a bolas branca e o cilindro azul  nos circulos vermelho",
    selector : "circulo vermelho :only-child",
    syntax: ":only-child",
    help : "Você pode selecionar qualquer elemento que seja o único elemento dentro de outro.",
    examples : [
      '<strong>span:only-child</strong> seleciona os <tag>span</tag> elementos que são o único filho de algum outro elemento.',
      '<strong>ul li:only-child</strong> selecione apenas os <tag>li</tag> elemento que está em um <tag>ul</tag>.'
    ],
    boardMarkup : `
    <circulo_vermelho>
      <bola_branco/>
    </circulo_vermelho>
    <circulo_vermelho>
      <cilindro_azul />
    </circulo_vermelho>
    <quadrado_amarelo>
      <cilindro_azul />
    </quadrado_amarelo>
    <circulo_vermelho>
      <bola_ciano class="pequeno"/>
      <bola_ciano/>
    </circulo_vermelho>
    <cilindro_azul class="pequeno"/>
    `
  },
  {
    selectorName: "Seletor Pseudo do Último Filho",
    helpTitle: "Selecione o último elemento dentro de outro elemento",
    doThis : "Selecione a bolas branca pequena e o cilindro azul",
    selector : ".pequeno:last-child",
    syntax: ":last-child",
    help : "Você pode usar este seletor para selecionar um elemento que é o último filho dentro de outro elemento. <br><br>Dica Profissional → Em casos onde há apenas um elemento, esse elemento conta como first-child, only-child e last-child!",
    examples : [
      '<strong>:last-child</strong> seleciona todos os elementos last-child.',
      '<strong>span:last-child</strong> seleciona todos os últimos filhos <tag>span</tag> dos elementos.',
      '<strong>ul li:last-child</strong> selecione os útlimos <tag>li</tag> os elementos dentro de qualquer <tag>ul</tag>.'
    ],
    boardMarkup : `
    <circulo_vermelho id="elegante">
      <bola_branco class="pequeno"/>
    </circulo_vermelho>
    <circulo_vermelho/>
    <circulo_vermelho>
      <bola_ciano class="pequeno"/>
      <bola_ciano>
    </circulo_vermelho>
    <cilindro_azul class="pequeno"/>`
  },
  {
    selectorName: "Seletor Pseudo Nth Child",
    helpTitle: "Selecione um elemento pela sua ordem dentro de outro elemento.",
    doThis : "Selecione o terceiro circulo_vermelho",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleciona o <strong>ésimo</strong> (Ex: 1º, 3º, 12º etc.) elemento filho dentro de outro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> Seleciona todos os elementos que são o 8º filho de outro elemento.',
      '<strong>div p:nth-child(2)</strong> selecione o segundo <strong>p</strong> em todos <strong>div</strong>',
    ],
    boardMarkup : `
    <circulo_vermelho/>
    <circulo_vermelho/>
    <circulo_vermelho/>
    <circulo_vermelho id="elegante"/>
    `
  },
  {
    selectorName: "Seletor de Último Filho N-ésimo",
    helpTitle: "Selecione um elemento pela sua ordem em outro elemento, contando de trás para frente.",
    doThis : "Selecione o 1º quadrado amarelo",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Seleciona os filhos a partir do fundo do elemento pai. Isto é como nth-child, mas contando de trás para a frente!",
    examples : [
      '<strong>:nth-last-child(2)</strong> Seleciona todos os elementos que são penúltimos filhos.'
    ],
    boardMarkup: `
    <circulo_vermelho/>
    <quadrado_amarelo/>
    <circulo_vermelho>
      <bola_ciano/>
      <bola_ciano/>
      <bola_ciano/>
    </circulo_vermelho>
    <quadrado_amarelo/>
    `
  },
  {
    selectorName: "Seletor do Primeiro do Tipo",
    helpTitle: "Selecione o primeiro elemento de um tipo específico",
    doThis : "Selecione a 1º bola branca",
    selector : "bola_branco:first-of-type",
    syntax: ":first-of-type",
    help : "Seleciona o primeiro elemento desse tipo dentro de outro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> selecione os primeiros <tag>span</tag> em qualquer elemento.'
    ],
    boardMarkup: `
    <bola_ciano class="pequeno"/>
    <bola_branco/>
    <bola_branco class="pequeno"/>
    <bola_branco/>
    <bola_branco class="pequeno"/>
    <circulo_vermelho>
      <bola_ciano class="pequeno"/>
      <bola_ciano/>
    </circulo_vermelho>
    `
  },
  {
    selectorName: "Seletor Nth-of-Type",
    doThis: "Selecione todos os circulos vermelho pares.",
    selector: "circulo_vermelho:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Seleciona um elemento específico com base em seu tipo e ordem em outro elemento - ou até mesmo instâncias pares ou ímpares desse elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> seleciona a segunda instância de um div.',
      '<strong>.example:nth-of-type(odd)</strong> seleciona todas as instâncias ímpares da classe exemplo.'
    ],
    boardMarkup : `
    <circulo_vermelho/>
    <circulo_vermelho/>
    <circulo_vermelho/>
    <circulo_vermelho/>
    <circulo_vermelho id="elegante"/>
    <circulo_vermelho/>
    `
  },
  {
    selectorName: "Seletor Nth-of-type com Fórmula",
    doThis: "Selecione cada segundo circulo vermelho, começando pelo terceiro",
    selector: "circulo_vermelho:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "A fórmula nth-of-type seleciona cada enésimo elemento, iniciando a contagem a partir de uma instância específica desse elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> seleciona cada 6ª instância de um <tag>span</tag>, começando a partir da (e incluindo) segunda instância.'
    ],
    boardMarkup : `
    <circulo_vermelho/>
    <circulo_vermelho>
      <cilindro_azul class="pequeno" />
    </circulo_vermelho>
    <circulo_vermelho>
      <bola_branco class="pequeno" />
    </circulo_vermelho>
    <circulo_vermelho/>
    <circulo_vermelho>
      <bola_branco />
    </circulo_vermelho>
    <circulo_vermelho/>
    `
  },
  {
    selectorName: "Seletor Apenas do Tipo",
    helpTitle: "Selecione elementos que são os únicos do seu tipo dentro do elemento pai",
    selector : "bola_branco:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecione a bolas branca no circulo vermelho do meio",
    help : "Seleciona o único elemento do seu tipo dentro de outro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> selecione um <tag>span</tag> dentro de qualquer <tag>p</tag> se for o único <tag>span</tag> lá dentro.'
    ],
    boardMarkup: `
    <circulo_vermelho id="elegante">
      <bola_branco class="pequeno" />
      <bola_branco />
    </circulo_vermelho>
    <circulo_vermelho>
      <bola_branco class="pequeno" />
    </circulo_vermelho>
    <circulo_vermelho>
      <cilindro_azul />
    </circulo_vermelho>
    `
  },
  {
    selectorName: "Seletor do Último do Tipo",
    helpTitle: "Selecione o último elemento de um tipo específico",
    doThis : "Selecione a última bolas branca e a última bola ciana",
    selector : ".pequeno:last-of-type",
    syntax: ":last-of-type",
    help : "Seleciona cada último elemento desse tipo dentro de outro elemento. Lembre-se de que tipo se refere ao tipo de tag, então <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Eu me pergunto se foi assim que o último dinossauro foi selecionado antes de se extinguir.",
    examples : [
      '<strong>div:last-of-type</strong> seleciona o último <tag>div</tag> em cada elemento.',
      '<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em cada elemento. <tag>p</tag>.'
    ],
    boardMarkup : `
    <bola_ciano class="pequeno"/>
    <bola_ciano class="pequeno" />
    <cilindro_azul />
    <cilindro_azul />
    <bola_branco class="pequeno" />
    <bola_branco class="pequeno" />
    `
  },
  {
    selectorName: "Seletor Vazio",
    helpTitle: "Selecione elementos que não têm filhos",
    doThis : "Selecione os quadrados amarelo vazios",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Seleciona elementos que não têm outros elementos dentro deles.",
    examples : [
      '<strong>div:empty</strong> seleciona todos <tag>div</tag> os elementos vazios.'
    ],
    boardMarkup:`
    <quadrado_amarelo/>
    <quadrado_amarelo>
      <cilindro_azul class="pequeno"/>
    </quadrado_amarelo>
    <circulo_vermelho/>
    <quadrado_amarelo/>`
  },
  {
    selectorName: "Classe de pseudo-negação",
    helpTitle: "Seleciona todos os elementos que não correspondem ao seletor de negação.",
    doThis : "Selecione as bolas branca grandes",
    selector : "bola_branco:not(.pequeno)",
    syntax: ":not(X)",
    help : 'Você pode usar isso para selecionar todos os elementos que não correspondem ao seletor <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#elegante)</strong> seleciona todos os elementos que não têm <strong>id="elegante"</strong>.',
      '<strong>div:not(:first-child)</strong> selecione todos <tag>div</tag> que não é o primeiro filho.',
      '<strong>:not(.big, .medium)</strong> seleciona todos os elementos que não têm <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <circulo_vermelho id="elegante">
      <bola_branco class="pequeno" />
    </circulo_vermelho>
    <circulo_vermelho>
      <bola_branco />
    </circulo_vermelho>
    <bola_branco />
    <circulo_vermelho>
      <bola_ciano class="pequeno" />
    </circulo_vermelho>
    <cilindro_azul class="pequeno" />
    `
  },
  {
    selectorName: "Seletor de Atributo",
    helpTitle: "Seleciona todos os elementos que possuem um atributo específico.",
    doThis : "Selecione os itens para alguém.",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Os atributos aparecem dentro da tag de abertura de um elemento, assim: <tag>span attribute="value"</tag>. Um atributo nem sempre tem um valor, pode estar em branco!',
    examples : [
      '<strong>a[href]</strong> selecione todos <tag>a</tag> Elementos que possuem um <strong>href="anything"</strong> atributo.',
      '<strong>[type]</strong> seleciona todos os elementos que têm um <strong>type="anything"</strong>. atributo'
    ],
    boardMarkup:`
    <quadrado_amarelo><bola_branco class="pequeno"/></quadrado_amarelo>
    <bola_branco for="Leonardo"/>
    <circulo_vermelho for="Leandro"><cilindro_azul/></circulo_vermelho>
    <quadrado_amarelo for="Diego"><bola_ciano/></quadrado_amarelo>
    <cilindro_azul/>`
  },
  {
    selectorName: "Seletor de Atributo",
    helpTitle: "Selecione todos os elementos que têm um atributo específico",
    doThis : "Selecione os circulos vermelho para alguém",
    selector : "circulo_vermelho[for]",
    syntax: "A[attribute]",
    help : "Combine o seletor de atributos com outro seletor (como o seletor de nome de tag) adicionando-o ao final.",
    examples : [
      '<strong>[value]</strong> seleciona todos os elementos que têm um <strong>value="anything"</strong> atributo.',
      '<strong>a[href]</strong> selecione todos <tag>a</tag> os elementos que tem um <strong>href="anything"</strong> atributo.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elementos com o <strong>disabled</strong> atributo'
    ],
    boardMarkup:`
    <circulo_vermelho for="Leonardo"><cilindro_azul/></circulo_vermelho>
    <circulo_vermelho for="Leandro"><bola_branco/></circulo_vermelho>
    <circulo_vermelho/>
    <quadrado_amarelo for="Diego"><bola_ciano/></quadrado_amarelo>
    `
  },
  {
    selectorName: "Seletor de Valor de Atributo",
    helpTitle: "Selecione todos os elementos que possuem um valor de atributo específico",
    doThis : "Selecione a refeição de Leonardo",
    selector : "[for=Leonardo]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <bola_branco for="Leandro" />
    <quadrado_amarelo for="Diego"><bola_branco /></quadrado_amarelo>
    <quadrado_amarelo for="Leonardo"><bola_ciano/></quadrado_amarelo>
    <cilindro_azul/>
    `
  },
  {
    selectorName: "Seletor de Atributo que Começa Com",
    helpTitle: "Selecione todos os elementos com um valor de atributo que comece com caracteres específicos",
    doThis : "Selecione os itens para nomes que começam com 'Le'",
    selector : '[for^="Le"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> seleciona elementos com classe <strong>toy</strong> e também <strong>category="Swimwear"</strong> ou <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <circulo_vermelho for="Leonardo"><cilindro_azul/></circulo_vermelho>
    <quadrado_amarelo for="Leandro"><bola_branco class="pequeno"/></quadrado_amarelo>
    <quadrado_amarelo for="Diego"><bola_ciano/></quadrado_amarelo>
    `
  },
  {
    selectorName: "Seletor de Atributo que Termina Com",
    helpTitle: "Selecione todos os elementos com um valor de atributo que termina com caracteres específicos",
    doThis : "Selecione os itens para nomes que terminam com 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleciona todas as imagens que exibem uma <strong>.jpg</strong> imagem.',
    ],
    boardMarkup:`
    <bola_branco class="pequeno"/>
    <quadrado_amarelo for="Hayato"><cilindro_azul/></quadrado_amarelo>
    <bola_branco for="Ryota"></bola_branco>
    <circulo_vermelho for="Minato"><bola_ciano/></circulo_vermelho>
    <cilindro_azul class="pequeno"/>
    `
  },
  {
    selectorName: "Seletor de Atributo com Coringa",
    helpTitle: "Selecione todos os elementos com um valor de atributo que contenha caracteres específicos em qualquer lugar.",
    syntax: '[attribute*="value"]',
    doThis : "Selecione as refeições para nomes que contenham 'obb'",
    selector : '[for*="obb"]',
    help : 'Um seletor útil se você pode identificar um padrão comum em coisas como atributos <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> seleciona todos os elementos de imagem que exibem imagens da pasta "thumbnails".',
      '<strong>[class*="heading"]</strong> seleciona todos os elementos com "heading" em sua classe, como <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <quadrado_amarelo for="Robbie"><bola_branco /></quadrado_amarelo>
    <quadrado_amarelo for="Timmy"><cilindro_azul /></quadrado_amarelo>
    <quadrado_amarelo for="Bobby"><bola_ciano /></quadrado_amarelo>
    `
  }
];
