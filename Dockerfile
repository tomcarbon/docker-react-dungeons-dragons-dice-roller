#pull base image
FROM ubuntu:18.04

# apply updates and install a bunch of things
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget iputils-ping && \
  apt-get install -y nodejs npm

#install yarn and create a generic react-app project
WORKDIR /app
RUN npm install yarn -g
RUN yarn create react-app docker-react-dungeons-dragons-dice-roller

#copy the dungeons and dragons app to replace the generic react-app project
COPY src/ /app/docker-react-dungeons-dragons-dice-roller/src/
COPY public/ /app/docker-react-dungeons-dragons-dice-roller/public/
COPY package.json /app/docker-react-dungeons-dragons-dice-roller/
COPY yarn.lock /app/docker-react-dungeons-dragons-dice-roller/

# just copy these things to the container for safekeeping
COPY Dockerfile /app/docker-react-dungeons-dragons-dice-roller/
COPY LICENSE /app/docker-react-dungeons-dragons-dice-roller/
COPY README.md /app/docker-react-dungeons-dragons-dice-roller/

#install react-bootstrap
WORKDIR /app/docker-react-dungeons-dragons-dice-roller
RUN yarn add react-bootstrap
RUN yarn add styled-components
RUN yarn install
RUN yarn add react-modal

#run the server
EXPOSE 80
CMD ["yarn","start"]
