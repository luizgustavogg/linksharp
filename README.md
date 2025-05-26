
# 🔗 LinkSharp — Angular + REST

Uma aplicação **moderna**, **standalone** e com **UX aprimorada** para encurtar URLs com estilo.

> Digite, gere, copie e compartilhe. Totalmente integrado com backend REST, com feedbacks em tempo real: **toast de sucesso**, **pop-up de erro** e **cópia automática para a área de transferência**.

---

## ✨ Funcionalidades

- Interface independente usando Angular Standalone Components
- Envio de link e código personalizado
- Geração automática de URL encurtada
- Cópia com um clique e toast de confirmação
- Pop-ups amigáveis para sucesso e erro
- Integração com backend RESTful

---

## 🖥️ Prévia da Interface

```html
<form class="input-form" (submit)="clickCreateLink($event)">
  <input type="text" name="link" placeholder="Link Original" [(ngModel)]="urlOriginal" />
  <input type="text" name="code" placeholder="Código do encurtador" [(ngModel)]="shortCode" />
  <button type="submit">Enviar</button>
</form>
```

---

## 🚀 Como Rodar

### 1. Clone o projeto
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o frontend Angular
```bash
ng serve
```

### 4. Backend

Este frontend depende de um backend RESTful para funcionar corretamente. Certifique-se de que o backend esteja rodando localmente.

👉 Repositório do backend: [linksharp-backend](https://github.com/luizgustavogg/linksharp-backend)
Certifique-se de que o seu backend REST esteja rodando em `http://localhost:3000` com o endpoint:
```
POST /shorten
```
Payload esperado:
```json
{
  "urlOriginal": "https://exemplo.com",
  "shortCode": "meulink"
}
```

---

## 🧩 Estrutura do Projeto

- `MainComponent`: Componente principal da interface
- `BackendService`: Serviço Angular para comunicação com o backend via `HttpClient`
- `popup`, `toast`: Feedbacks visuais com base nas ações do usuário

---

## 📦 Dependências Importantes

- `@angular/forms`
- `@angular/common/http`
- `rxjs` para gerenciamento de observables

---

## 📋 Exemplo de Uso

1. Digite um link original e um código curto.
2. Clique em "Enviar".
3. Veja o link encurtado gerado em um pop-up.
4. Clique para copiar — e o toast confirma!

---

## 📁 Código Importante

### `createLink()` no serviço:
```ts
createLink(urlOriginal: String, shortCode: String): Observable<Link> {
  return this.http.post<Link>('http://localhost:3000/shorten', {
    urlOriginal,
    shortCode,
  });
}
```

### Abertura do link automaticamente:
```ts
redirectionUser(url: string) {
  window.open(url, '_blank');
}
```

---

## 📌 TODOs / Melhorias Futuras

- Validação mais robusta dos campos
- Loader/spinner durante requisição
- Listagem de links criados anteriormente
- Integração com encurtadores externos (Bitly, TinyURL, etc.)

---
