<div align="center"><img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/logo.png?raw=true" height="90px"></div>

<h3>Descrição: </h3>
<p>Website de Sugestão de Filmes baseado no catálogo do TMDB. Dados acessados via API pública.</a></p>

<h3>Status: </h3>
<p>🚧  Em construção...  🚧</p>

<h3>Lógica básica: </h3>
<p>Front-end gera um ID aleatório e faz uma chamada na API do Back-end passando esse ID como parâmetro.
O Back-end monta a URL da API do TMDB com esse ID, faz a chamada, e retorna para o Front-end os dados de título, banner, sinopse, ano e rating do filme.
Eventualmente, se a API do TMDB não retornar um filme válido, o Front-end tratará isso, ao invés de não exibir nada.</a></p>

<h3>Tecnologias: </h3>
<p>
<img src="https://img.shields.io/static/v1?label=language&message=JavaScript&color=F7DF1E&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=style&message=CSS&color=1572B6&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=markup&message=HTML&color=E34F26&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=BACK&message=NODE/NODEMON&color=339933&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=SERVER&message=EXPRESS&color=000000&style=for-the-badge"/>
</p>

<h3>Features:</h3>

- [x] Layout
- [x] Estilização
- [x] Função para Encontrar Filme
- [x] Tratamento de Filme Inválido
- [ ] Tratamento de Sinopse (700 caracteres)
- [x] Tratamento de Filme sem Banner
- [ ] Responsividade

<h3>Telas:</h3>
<h4><em>Página Inicial:</em></h4>
<img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/ss-1.png?raw=true">
<h4><em>Filme Aleatório:</em></h4>
<img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/ss-2.png?raw=true">
<h4><em>Tratamento de Filme Inválido:</em></h4>
<img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/ss-3.png?raw=true">
<h4><em>Sinopse com mais de 700 caracteres:</em></h4>
<img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/ss-4.png?raw=true">
<h4><em>Filme sem banner (imagem default):</em></h4>
<img src="https://raw.githubusercontent.com/thiagoabaguiar/superNiceTV/main/images/ss-5.png?raw=true">

<hr>
<p align="center">
<img src="https://img.shields.io/badge/license-MIT-blue"/>
<span>&nbsp</span>
<img src="https://img.shields.io/badge/nodemon-2.0.16-339933"/>
<span>&nbsp</span>
<img src="https://img.shields.io/badge/express-4.18.1-000000"/>
</p>
