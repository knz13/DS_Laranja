# Informações sobre o backend

* dominio principal do backend: https://dnd-party.herokuapp.com

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
    