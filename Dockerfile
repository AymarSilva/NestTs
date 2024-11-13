# Usar uma imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependência para o contêiner
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Instalar o Nest CLI globalmente
RUN npm install -g @nestjs/cli

# Copiar todo o código-fonte da aplicação para o contêiner
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
