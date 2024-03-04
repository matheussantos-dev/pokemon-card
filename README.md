# README - Projeto Angular Pokémon TCG

Este é um projeto Angular desenvolvido com a versão 16+ do Angular e estilizado com Tailwind CSS utilizando o Visual Studio Code como ambiente de desenvolvimento.

## Visão Geral

O projeto consiste em uma aplicação que consulta a API do Pokémon TCG (Trading Card Game) disponível em [https://docs.pokemontcg.io/#api_v1cards_list](https://docs.pokemontcg.io/#api_v1cards_list), permitindo aos jogadores montar seus próprios baralhos de cartas.

## Funcionalidades

### Lista de Baralhos

- Os usuários podem visualizar uma lista de seus baralhos existentes.
- É possível criar novos baralhos.
- Os usuários podem remover baralhos existentes.
- A edição de baralhos também é suportada.
- Ao clicar em um baralho, é possível visualizar seus detalhes.

### Criação de Baralho

- Os usuários podem atribuir um nome ao seu baralho.
- É permitido adicionar cartas ao baralho.
- O baralho deve ter entre 24 e 60 cartas.
- Apenas até 4 cartas com o mesmo nome podem ser adicionadas ao baralho.
- Após a criação do baralho, a lista de baralhos é atualizada automaticamente.
- Os baralhos são armazenados apenas em memória.

### Detalhes do Baralho

- Os usuários podem visualizar quantos Pokémon e cartas de treinador existem no baralho (atributo 'supertype').
- É possível identificar quantas cores diferentes compõem o baralho e quantos tipos de cartas únicos estão presentes.

## Como Executar o Projeto

1. Clone este repositório.
2. Abra o projeto no Visual Studio Code.
3. Certifique-se de ter o Angular CLI instalado globalmente (`npm install -g @angular/cli`).
4. Execute `npm install` para instalar as dependências.
5. Execute `ng serve` para iniciar o servidor de desenvolvimento.
6. Navegue até `http://localhost:4200/` em seu navegador para visualizar o projeto.

## Configuração da API
Para acessar a API do Pokémon TCG, é necessário configurar uma chave de acesso. Esta chave é requerida para autenticar as solicitações à API. No entanto, por motivos de segurança, a chave de acesso não é incluída no repositório público. Você pode obter sua própria chave de acesso registrando-se em https://dev.pokemontcg.io/. Uma vez registrado, insira sua chave de acesso no arquivo environment.development.ts.

## Estratégia de Desenvolvimento
Devido a restrições de tempo, minha abordagem de desenvolvimento priorizou a demonstração de práticas sólidas de codificação e organização de projeto em detrimento do aspecto visual. O foco foi na implementação de padrões de codificação limpa e na arquitetura robusta da aplicação, garantindo assim uma base sólida para futuras iterações e melhorias.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para sugestões e melhorias.

## Autor

Este projeto foi desenvolvido por Matheus dos Santos da Silva.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
