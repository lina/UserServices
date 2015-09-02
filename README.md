## User Services

Services to handle user login and data, for ProjectJLOR.  


### Setup
```
npm install
```

### Development

```
node server.js
```
### User Data Params

The token given as a req is the access token. Store that in the entry for the token on the DB.
Next, you need to store the email. That is a key in the object of userdata. Same with the facebook.

This is sample user data...


```
{
    "id":"1649273925343025",
    "name":"Omar Shaikh",
    "gender":"male",
    "location": {"id":"111304768888099","name":"Dhahran, Ash Sharqiyah"},
    "website":"www.awesomeomar.com",
    "picture":
        {"data":
            {"is_silhouette":true,
             "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/c15.0.50.50\/p50x50\/10354686_10150004552801856_220367501106153455_n.jpg?oh=82c2ce067f9c7f2c0a66d1efb16730e7&oe=5670F72F&__gda__=1450287355_17925d7381c8da5663c2349483f4b032"
             }
         },
    "email":"omar\u0040awesomeomar.com"
}
```