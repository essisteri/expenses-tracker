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
INSERT INTO expenses (date,amount,category,shop) VALUES ('2022-12-22',145.78,'ruoka','prisma');
INSERT INTO expenses (date,amount,category,shop) VALUES ('2023-01-14',9.88,'viini','alko');
```

##Endpoints

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

### A. Solution Design (20%)

12 Solution partially planned out

### B. Execution (30%)

22 Backend is deployed to a hosting service, reachable and responds to mostly correct to API requests

### C. Requirements Satisfaction (20%)

12 Many parts of the Backend implementation requirements are not implemented

### D. Coding Style (15%)

12 Code hard to follow in one reading; poor use of language capabilites
_Comment: I would say something between 1 and 2 criteria_

### E. Documentation (15%)

15 Concise, meaningful, well- formatted API and README documentation
