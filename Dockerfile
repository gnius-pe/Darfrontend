FROM node:18-alpine as buildFrontend_image

WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as productionFrontend_image

WORKDIR /app/react-app

COPY --from=buildFrontend_image /app/react-app/dist/ ./dist/


EXPOSE 8081

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
EXPOSE 8081
CMD [ "npm", "run", "preview" ]