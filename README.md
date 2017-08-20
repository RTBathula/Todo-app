# EBI Search
A Search Engine for finding transcripts with the given amino acid at the specified position.

# Demo(hosted in heroku)
http://ebisearch.herokuapp.com

# My views and strategies
## Frotend
Used ES6,Webpack,Reactjs and Reduxjs for this project. On Using Reduxjs, avoided mutable updates to the data. Also made a good minimalist UI design. Used CSS3 Flexbox module like sticky footer and for other usage.
Throughout the project, respected errors (i.e properly showing) and showing spinners wherever is necessary. 

## Search techniques
Search is done by simply checking the existence of given amino acid letter at given position by using javascript's `slice` method.
Although for real production usage, want to explore more on *Elastic search* and on the data structures like bloom filter etc.

## Testing the app
For Demo purpose, just wrote simple search-components-defined tests by using Reactjs' test framework called [Jest](https://facebook.github.io/jest/) and used Airbnb's [Enzyme](http://airbnb.io/enzyme) lib for Unit testing.
Can test by `npm test`.

For serious deployment tests, can use Jest,Enzyme and Selenium WebDriver for end-to-end testing the application.

## Test Automation
As I am a DevOps engineer for my current company, maintaining Jenkins for Continous Integration and Deployment.
Using the following workflow for best practice.

![alt](http://s3-sa-east-1.amazonaws.com/todovapersonal/gitflow2.png)


Recently I am exploring on Netflix's Spinnaker-> [https://www.spinnaker.io](https://www.spinnaker.io) for multi-cloud continuous delivery platform. Sweetly named "Land of a 1000 Builds". These are the things and my views for testing and automating which I want to use for the app to make SMOOTH and SOLID deployments.

## Containerization and Orchestration
I am using DOCKER for building the images and using KUBERNETES (on GCE/GKE) for Orchestration of containers.
You can check for the Dockerfile which I created in root directory.

# Getting Started to run locally

Fork and clone the repository. Install dependencies with:

``npm install``

# Run Server
After completing all above steps run your node.js server
```
npm start
```
# Now open 
http://localhost:1446

# Getting Started by docker
Run following commands from the root of the directory to pick up Dockerfile

```
docker build -t <tagname> .
docker run -d -p 1446:1446 <tagname>
```
which runs a nodejs server on port on 1446. End point is http://<docker-machine-ip>:1446

# Usage
#### General search example: Input the following respectively in inputs
##### BRAF
##### 6
##### G

#### HGSV string search example
##### "BRCA2.p:G4S"

# Test search components defined
```
npm test
```

## Love :heart: to hear feedback from you
RT Bathula-weirdo,coffee lover
battu.network@gmail.com

