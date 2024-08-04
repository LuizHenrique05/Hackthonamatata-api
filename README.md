# Braza: União pelo bem.

## Índice
1. [Como rodar a API](#como-rodar-a-api)
2. [Endpoints disponíveis](#endpoints-disponiveis)
3. [Links úteis](#links-uteis)
4. [Novas features futuras](#novas-features-futuras)

## Como rodar a API
Para rodar a API localmente, siga os passos abaixo:
1. Baixe as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

3. Acesse [http://localhost:3001](http://localhost:3001) em seu navegador para ver o resultado.

## Endpoints disponíveis
Para rodar os testes, utilize o seguinte comando:
**ONGs:** `GET /api/ongs`
**CAMPAIGNS:** `GET /api/campaigns`
**PROPERTIES:** `GET /api/properties`
**VOLUNTEERS:** `GET /api/volunteers
**POSTS:** `GET /api/posts`

É possível também adicionar ao final do do endpoint também da seguinte forma `/api/posts/[id]` para busca de resultados específicos.

## Links úteis
### Site hospedado consumidor desta API
O site esta hospedado [Aqui](https://hackthonamatata.vercel.app/)

### Link da API
A API hospedada criada para este hackathon está disponível [Aqui](https://hackthonamatata-api-i83l.vercel.app/).

## Novas features futuras
Aqui estão algumas funcionalidades planejadas para versões futuras do projeto:
- [ ] Gestão de login/cadastro.
	- [ ] Utilizando permissões de acesso para cada tipo de login (Admins, ONGs e Usuários).
- [ ] Gestão de cadastros, edições, soft deletes para:
	- [ ] Campanhas.
	- [ ] Imóveis.
	- [ ] Voluntários.
- [ ] Integração com serviços de pagamento para facilitar a doação em campanhas.
 
#### Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato. 
