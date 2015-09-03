## User Services

Services to handle user login and data, for ProjectJLOR.  


### Setup
```
npm install
```

### Development

Make sure mongo is running locally and run `node src/server.js`.


### Routes

#### POST /api/user

Pass an access token, a user's Facebook ID and email.  Additional request parameters will be safely ignored, meaning you can send large chunks of user data without having to parse it to match the DB schema.

```
{
    "token": "token1234",
    "userData": {
        "id":"1649273925343025",
        "name":"Omar Shaikh",
        "gender":"male",
        "location": {"id":"111304768888099","name":"Dhahran, Ash Sharqiyah"},
        "website":"www.awesomeomar.com",
        "picture":{
            "data": {
                "is_silhouette":true,
                "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/c15.0.50.50\/p50x50\/10354686_10150004552801856_220367501106153455_n.jpg?oh=82c2ce067f9c7f2c0a66d1efb16730e7&oe=5670F72F&__gda__=1450287355_17925d7381c8da5663c2349483f4b032"
            }
        },
        "email":"omar\u0040awesomeomar.com"
    }
}
```
