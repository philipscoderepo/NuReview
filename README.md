# NuReview

# Random Media Service 
 UML Diagram
![UML Diagram - Random Media Service](https://github.com/philipscoderepo/NuReview/blob/main/random-media-uml.png?raw=true)

about:
The Random Media Service accepts HTTP requests through a simple call either through a browser, or through any programming library capable of sending HTTP requests. The data returned in the HTTP response bodies are formated in JSON. 

## Requesting Data 
To request data from the Random Media Service send a request to the read-all-media GET endpoint which will return a list of random medias.

#### - Example call in Javascript
```
await fetch("http://localhost:3000/send-message");
```

## Receiving Data
Data from the Random Media Service is sent as an HTTP response with the data in the body formatted in JSON.

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
