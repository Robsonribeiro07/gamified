# Gamified

## Descrição

Gamified é uma plataforma open-source de gamificação voltada para a educação. O sistema permite que estudantes acumulem pontos ao longo do ano letivo, troquem por prendas configuráveis e promove a motivação no ambiente escolar. Também oferece a possibilidade de expansão com módulos adicionais para uma gestão escolar completa.

## Objetivos

- **Motivar estudantes:** Estimular a participação ativa com a possibilidade de acumular pontos e conquistar prêmios.
- **Configuração flexível:** Permitir que escolas configurem as regras do sistema conforme suas necessidades.
- **Expansão modular:** Facilitar a integração de módulos para funções administrativas, como gestão financeira e acadêmica.

## Funcionalidades Previstas

- Sistema de cadastro de estudantes com informações pessoais, incluindo e-mail e CPF.
- Registro de movimentações de pontos por professores e funcionários (positivas e negativas).
- Notificações automáticas por e-mail para estudantes sobre movimentações de pontos.
- Painel de pontuação configurável.
- Loja para conversão de pontos em prendas configuráveis.
- Painel administrativo para configurações gerais.
- Relatórios de desempenho.

## Estrutura Inicial

```
Gamified/
├── docs/                # Documentação do projeto
├── src/                 # Código-fonte do projeto
├── tests/               # Casos de teste
└── README.md            # Documento inicial do projeto
```

## Fluxo de Dados Revisado

1. Um **professor ou funcionário da escola** registra ações do estudante no sistema, que podem resultar em pontuação positiva (participação, presença, boas ações) ou pontuação negativa (atrasos, faltas, má conduta).
2. O backend processa a pontuação com a devida validação.
3. O sistema envia uma **notificação ao estudante via e-mail**, informando a movimentação de pontuação.
4. O estudante consulta seu saldo de pontos no frontend e pode acessar a **loja** para converter pontos em prêmios.

## Modelo de Dados

### **Estudantes**

```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "cpf": "123.456.789-00",
  "points": 1500,
  "status": "Ativo"
}
```

### **Movimentações de Pontos**

```json
{
  "id": 101,
  "student_id": 1,
  "type": "positivo",
  "reason": "Participação em aula",
  "points": 50,
  "timestamp": "2025-02-07T12:00:00Z"
}
```

### **Prendas (Brindes)**

```json
{
  "id": 1,
  "name": "Chocolate",
  "cost": 500,
  "stock": 20
}
```

## Como Contribuir

1. Clone o repositório:
   ```bash
   git clone https://github.com/Maldazzar/gamified.git
   ```
2. Crie uma branch para sua funcionalidade ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie suas modificações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   git push origin minha-feature
   ```
4. Abra um Pull Request (PR).

## Regras de Contribuição

- Escreva código limpo e bem documentado.
- Teste suas alterações antes de submeter um PR.
- Certifique-se de seguir o padrão de commits definido pela equipe.

## Roadmap Inicial

### **Março:**

- Finalizar documentação inicial.
- Primeira reunião com a equipe para definição do MVP.
- Estruturação do repositório.

### **Abril:**

- Entrega do MVP com cadastro de alunos e sistema básico de pontuação.

### **Maio:**

- Adição do catálogo de prendas e painel administrativo.

## Contato

Se tiver dúvidas ou sugestões, entre em contato.

---

**Obs.:** Vamos ajustando conforme a equipe definir novas ideias e objetivos.