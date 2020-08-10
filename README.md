# Expedia Project
For interview project


## Start
Please use command line and input follow command

### Start Backend server
Step 1. ```cd backend```

Step 2. create .env file at root path and add following line:
DB_ROOT=$db

DB_NAME=$dbuser

DB_HOST=$address

DB_PASS=$password

Step 3. ```npm install```

Step 4. ``` npm start```

---

DB_ROOT is the mysql root user name of your local machine

DB_NAME is the database name of your mysql

DB_HOST is the db ip address 

DB_PASS is the db password

---

### Start Frontend server
Step 1. ```cd frontend```

Step 2. create .env file at root path and add followed line:
REACT_APP_API_URL=http://${localhost}:3001

Step 3. ```npm install```

Step 4. ``` npm start```

---

localhost is the ip address of your local machine

---


Total Time cost 12 hours

Frontend: React
Backend: Nodejs
DB: MySQL

sort, search, only work on data which shows on the page.
Skipped requirenment: page to show the contact details because of current work load.

Possible improvement:
1. Add more error handling
2. Add more unit tests
