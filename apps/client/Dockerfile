FROM node:alpine AS development

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
USER node

CMD ["npm", "run", "start"]