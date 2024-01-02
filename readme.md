Il s'agit d'une api d'authentification avec Express JS et MongoDB

Vous pouvez tiliser des outils comme Postman ou Thunderclient pour envoyer des requêtes à l'api

Pour vous inscrire (avec Postman)
URL: http://localhost:8080/auth/register
Méthode: POST
Corps de la requête JSON
{
    "username":"votre-nom-d-utilisateur",
    "email":"votre-adresse-email",
    "password":"votre-mot-de-passe"
}


Pour vous connecter(avec Postman)
URL: http://localhost:8080/auth/login
Méthode: POST
Corps de la requête JSON
{
    "email":"votre-adresse-email",
    "password":"votre-mot-de-passe"
}

by Yann Biko
