# Informações sobre o backend

* dominio principal do backend: https://dnd-party.herokuapp.com

## Lidando com erros
Erros podem acontecer durante uma requisição no endpoint, por isso há um sistema para lidar com cada tipo de situação

Os dados retornados no body da resposta sempre serão
* "state" -> variável que será sempre "success","warning" ou "error" de acordo com o que acontecer
* "message" -> variável que informará o que aconteceu no erro caso ocorra ou os dados requisitados quando der certo
* "status" -> variável com os status http da requisição (é so pesquisar no google o que cada um significa), alguns exemplos são:
    * 200 -> Sucesso!
    * 201 -> Objeto criado! 
    * 400 -> Requisição errada (alguma coisa está errada na requisição)
    * 404 -> Resultado não encontrado (Pode ser desde um pedido não encontrado à requisições em um endpoint inexistente)
    * 500 -> Erro interno do servidor (É muito variavel e depende do que aconteceu, sempre mande uma mensagem se ver um desses)


## Endpoints
Cada endpoint é uma endereço derivado do dominio principal onde podemos realizar requests http para obtermos dados, cadastrarmos dados ou realizarmos operações

Cada endpoint terá suas respectivas operações ao lado


### Endpoint de Login
Endereço: https://dnd-party.herokuapp.com/database/login

Operações: 
* POST -> Login do usuario
    * Pode receber um header de "x-access-token" (token recebido anteriormente no login) ou um body com "user_name" e "user_password_hash" (hash de sha256 da senha do usuário)

## Endpoint de Cadastro
Endereço: https://dnd-party.herokuapp.com/database/users

Operações:
* POST -> Cadastro do usuário
    * Recebe um body com "user_name", "user_password_hash" e "email"

## Endpoint de Personagem
Endereço: https://dnd-party.herokuapp.com/database/character

Operações:
* POST -> Registra um personagem
    * Recebe o header de "x-access-token" e retorna o id do personagem criado
* PATCH -> Atualiza um personagem com base no id
    * O endpoint recebe o id do personagem tambem, como https://dnd-party.herokuapp.com/database/character/1235642
    * Deve receber um body com pelo menos um dos itens abaixo:
        * "character_name" - string
        * "current_hp" - int
        * "max_hp" - int
        * "inventory" - string (ids separados por espaços)
        * "class" - string
        * "race" - string
        * "skills" - string (ids separados por espaços)
        * "attributes" - string
        (valores separados por espaço na ordem força,destreza,constituição,sabedoria,carisma)
        * "background" - string
    