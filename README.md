# Optical Character Recognition

A simple app for recognizing characters in the image, a nodejs implementation of the python ocr

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Nodejs

```
http://nodejs.org/
```

Tesseract

```
pip install pytesseract
```

Docker

```
https://www.docker.com/
```
* Gulp

```
http://gulpjs.com/
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

* Docker

```
sudo docker build -t <your username>/node-tesseract .
sudo docker run -p 3000:3000 -d <your username>/node-tesseract
```

* Local

```
gulp
npm start
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To test the server running properly, a http request has to be sent to the server

```
curl http://localhost:3000/test
```

The response will be
```
{"message":"Everything's OK"}
```

## Deployment

Open the ```https://localhost:3000/``` in the browser and follow the onscreen instructions

## Authors

Built from scratch by ```Fizan Nagarchi```