# NuReview

## Random Media Service
#### UML Diagram
![UML Diagram - Random Media Service](https://github.com/philipscoderepo/NuReview/blob/main/random-media-service/random-media-uml.png?raw=true)

#### About
The Random Media Service is a microservice which, upon request, will provide a list of random media with information you can use to help a user decide what media they should consume that day. The service uses HTTP as it's communication, and accepts HTTP requests through a simple call either through a browser, or through any programming library capable of sending HTTP requests. The data returned in the HTTP response bodies are formated in JSON.

## Requesting Data 
To request data from the Random Media Service send a request to the read-all-media GET endpoint.

#### - Example call in Javascript
```
await fetch("http://localhost:3000/send-message");
```

## Receiving Data
Data from the Random Media Service is sent as an HTTP response with the data in the body formatted in JSON. The list of media is stored as an array under the key "media", so to access each piece of media individually, you have to access each individual index of the array. 

#### - Example response body
```
{ 
  "media": [
    {
      "title": "Count of Monte Cristo",
      "type": "book",
      "vibe": "classic",
      "description": "Literary classic by Alexander Dumas. Came out in 1844. An epic adventurous tale about a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment."
    },...
  ]
}
```

#### - Example reading the data from response body in Javascript
```
fetch("http://localhost:3000/read-all-media")
  .then(res => res.json())
  .then(data => {
    const display = document.getElementById("message-display")
    display.innerText = ''
    for(let m in data.media) {
      display.innerText += JSON.stringify(data.media[m]) + '\n'
    }
  })
```
