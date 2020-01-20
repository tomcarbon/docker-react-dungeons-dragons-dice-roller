
**DOCKER-REACT-DUNGEONS-DRAGONS-DICE-ROLLER** (and notepad)

******************************************************************************

SCREENSHOTS: [link](https://imgur.com/a/VnovNsb)

TLDR: This 'website' has a GUI and is meant to assist the D&D Dungeon Master with Rolling the Dice. Also this application has a notepad feature which facilitates sending private messages to player/charcters. 

******************************************************************************

This is a D&D Dice Rolling website that runs from a docker container on localhost port 80, using yarn, node, and react. The docker container uses a robust installation of Ubuntu 18.04 with several common tools (such as htop and vim) installed. 

The program is easy to install if you're running linux: first install docker. Then run the 'doit' script (options b, then r). Finally, after a minute, check localhost on your browser.

**Notes**
1) The first time is probably going to take several minutes, and the install may even appear to hang after the "Happy hacking! Done in xx.xxs." messages. Hang in there. After the first time things should go much quicker. Also, the first time, if you get a timeout error (esp. with yarn install), run option 'b' again and that should resolve the issue.
2) After running the container, make sure to give yarn a few seconds to start up the server, before checking the output on your browser at localhost.
3) 'doit' is a LINUX script. If you are not running linux then deconstruct this script to determine your build and run docker commands. 

**Known Issues**
1) On the docker image build there are some warnings on the yarn calls, related to typescript/react-scripts. Installing the latest version of typescript in the Dockerfile before the call to "yarn create react-app" does not alleviate the issue. They appear to be benign. There is also a warning related to sha.js. If anyone can help make these go away, please advise.

************************************************

This D&D Dice Roller application was built using the 'docker-react-website starter': https://github.com/tomcarbon/docker-react-website-starter.


*(this page last updated: 20200120)*
