# Guia de execução

## Pré-requisitos

- Docker instalado e rodando

---


## Subir o projeto pela primeira vez 

```bash
docker compose up --build
```

- Builda a imagem do Node
- Sobe o container
- Inicia o servidor em `http://localhost:5173/`

---

## Das próximas vezes

```bash
docker compose up
```

---

## Parar o container

```bash
docker compose down
```

---

## Rebuild

Rebuild é necessário quando ao alterar dockerfile ou o package.json (pois docker precisa instalar novas dependências)

