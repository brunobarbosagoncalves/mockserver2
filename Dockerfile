FROM node:15-alpine
WORKDIR /app
COPY . .
EXPOSE 9876
RUN npm install
CMD [ "npm","run","dev" ]