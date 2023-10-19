# Tyler, the Quotemaker API
The Tyler, the Quotemaker API provides access to quotes from the artist Tyler, the Creator. You can use this API to retrieve all available quotes or request a random quote. The base URL for the API is https://tyler-the-quotemaker.netlify.app/.netlify/functions/api/.

## Endpoints
###  Get All Quotes
- Endpoint: /all
- Description: Retrieve all available quotes from Tyler, the Creator.
- HTTP Method: GET
- URL: https://tyler-the-quotemaker.netlify.app/.netlify/functions/api/all

Example Request:
```
GET https://tyler-the-quotemaker.netlify.app/.netlify/functions/api/all
```
Example Response (200 OK):
```
{
"response": {
        "quotes": {
            "1": "I just want everyone to be awesome. That’s all it is. I want everyone to be cool in their own way.",
            "2": "I’m an optimistic guy. I’m one of those big dreamers. I’m one of those kids with that annoying imagination.",
            // continues
}
```
### Get Random Quote
- Endpoint: /random
- Description: Retrieve a random quote from Tyler, the Creator.
- HTTP Method: GET
- URL: https://tyler-the-quotemaker.netlify.app/.netlify/functions/api/random

Example Request:
```
GET https://tyler-the-quotemaker.netlify.app/.netlify/functions/api/random
```
Example Response (200 OK):
```
{"response": "I’m not hip-hop. I’m Tyler."}
```
