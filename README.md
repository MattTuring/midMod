Things to note, later iterations broke the current test. I was also unable to properly figure out how to test stringifiy 
       "http://localhost:3001/api/v1/reservations",
              Object {
            -   "body": Object {
            -     "date": "",
            -     "name": "",
            -     "number": "",
            -     "time": "",
            +   "body": "{\"name\":\"\",\"date\":\"\",\"time\":\"\",\"number\":\"\"}",
            +   "headers": Object {
            +     "Content-Type": "application/json",
                },
                "method": "POST",
              }
              
              
   or the difference between a monk function and a mock constructor
   deleteReservation={[Function mockConstructor]}
 + deleteReservation={[Function anonymous]}


I completed all itertion but ran out of time to refactor to move one of the 3 fetches into the the app.js
