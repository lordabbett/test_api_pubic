# FROM node:4.2
# COPY . /src
# RUN cd /src && npm install
# EXPOSE 4000
# CMD ["node", "/src/server.js"]
FROM node:12.18.1

WORKDIR /app 
COPY .  /app
RUN npm install
EXPOSE 4000
CMD [ "node", "/app/server.js" ]