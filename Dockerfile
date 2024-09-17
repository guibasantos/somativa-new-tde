# Etapa 1: Construir a aplicação React
FROM node:18 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json (se houver)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código-fonte da aplicação para o container
COPY . .

# Construir a aplicação React
RUN npm run build

# Etapa 2: Configurar o servidor Node.js para servir a aplicação
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas os arquivos de produção necessários do estágio de build anterior
COPY --from=builder /app/build ./build

# Copiar novamente o package.json e instalar apenas as dependências de produção
COPY package*.json ./
RUN npm install --only=production

# Copiar o restante dos arquivos, exceto o build
COPY . .

# Expõe a porta onde a aplicação será servida
EXPOSE 3000

# Definir o comando padrão para rodar o servidor
CMD ["npm", "start"]
