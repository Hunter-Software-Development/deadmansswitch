FROM node:alpine AS development

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .

USER node

CMD ["npm", "run", "start"]