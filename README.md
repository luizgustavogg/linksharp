# 🔗 Encurtador de Links — Projeto Node.js + Prisma

Bem-vindo ao **Encurtador de Links**, um projeto simples, direto e funcional, desenvolvido para transformar URLs longas em links curtos e fáceis de compartilhar!  

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Backend com JavaScript.
- **Express.js** — Framework minimalista para criação de rotas HTTP.
- **Prisma ORM** — Conexão simplificada com banco de dados.
- **JavaScript ES6+** — Código moderno e limpo.
- **Banco de Dados Relacional** — Flexível para SQLite, MySQL ou PostgreSQL.

---

## 💡 Funcionalidades

- Encurtar qualquer URL com um código personalizado.
- Redirecionamento automático para o link original.
- Validação de URLs e shortCodes.
- Controle de duplicação no banco.
- Mensagens de erro claras e status HTTP adequados.

---

## 📂 Estrutura Simples de Rotas

| Rota                  | Método | Descrição                                     |
|------------------------|--------|-----------------------------------------------|
| `/shorten`             | POST   | Recebe uma URL original e um shortCode customizado. |
| `/:shortCode`          | GET    | Redireciona para a URL original baseada no shortCode. |

---

## ⚙️ Como Rodar o Projeto

Clone o repositório:
```bash
git clone https://github.com/luizgustavogg/linksharp.git
