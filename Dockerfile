

FROM node:15-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY . .
EXPOSE 9876
RUN npm install
CMD ["sh","-c" ,"npm run $NODE_ENV" ]
