# Expense tracking app

## Backend Development - Final Project

## Description

### Assignment

Most of us want to know where our money goes. You now have the chance to create a solution to that question. Create an application for tracking your personal expenses.

## Installing

Installing

```
npm install
```

Starting

```
npm run start
```

Create a .env -file for env variables.

```
HOST=''
DBUSERNAME=''
PASSWORD=''
DATABASE=''
PORT=
```

### SQL statements

Create a table for expenses.

```
CREATE TABLE expenses (
id INT(11) NOT NULL AUTO_INCREMENT,
date DATE DEFAULT NULL,
amount DECIMAL(8,2) DEFAULT NULL,
shop TEXT DEFAULT NULL,
category TEXT DEFAULT NULL,
PRIMARY KEY (id)
);
```

Insert some data into the table.

```
INSERT INTO expenses (date,amount,shop,category) VALUES ('2022-12-22',145.78,'Prisma','Ruoka');
INSERT INTO expenses (date,amount,shop,category) VALUES ('2023-01-14',9.88,'Alko','Viini');
```

##Endpoints

### Frontend

https://expences-app-essi.onrender.com/
_Nevermind the typo_

### Backend server adress

https://expences-app-essi.onrender.com/api/expenses

### Local adress

http://localhost:5000/api/expenses/

| METHOD | URL                                | DESCRIPTION                       |
| :----: | :--------------------------------- | :-------------------------------- |
|  GET   | api/expenses                       | Retrieve all expenses             |
|  GET   | api/expenses/{id}                  | Retrieve expense by id            |
|  POST  | api/expenses/                      | Create new expenses               |
|  PUT   | api/expenses/                      | Update expense                    |
| DELETE | api/expenses/{id}                  | Delete expense by id              |
|  GET   | api/expenses/filter?category=ruoka | Filter expenses by category       |
|  GET   | api/expenses/filter?shop=prisma    | Filter expenses by shop           |
|  GET   | api/expenses/2022/12               | Filter expenses by year and month |

## Project self evaluation

_I did really simple frontend to view, add and delete expenses. I struggled in the React course, so the code itself is not very neat. Since I am 30+ career changer and mom, I really didn't have time to develop this project more for now, but it is a starting point where to develop the app in the future. I know there is **a lot** to improve, but for me it was nice to accomplish something that works in some level at least. This was my first bigger coding project that I did myself. :relaxed: _

### A. Solution Design (20%)

12 Solution partially planned out

### B. Execution (30%)

22 Backend is deployed to a hosting service, reachable and responds to mostly correct to API requests

### C. Requirements Satisfaction (20%)

12 Many parts of the Backend implementation requirements are not implemented

### D. Coding Style (15%)

12 Code hard to follow in one reading; poor use of language capabilites

### E. Documentation (15%)

15 Concise, meaningful, well- formatted API and README documentation<br>
_Comment: Not perfect but not poorly either so maybe something between best and second criteria?_
