# Mini Expense Tracker

## Overview

A full-stack expense tracking application built using React and Node.js. Users can create, edit, delete, filter, analyze, and export expenses through an interactive dashboard.

## Live Demo

Frontend: https://expense-tracker-project-khaki.vercel.app/

Backend: https://expense-tracker-project-6cpe.onrender.com/

## Features

### Expense Management

* Add expenses
* Edit expenses
* Delete expenses
* Expense validation

### Analytics Dashboard

* Total spent this month
* Highest expense
* Category-wise totals
* Pie chart visualization

### Filters

* Category filtering
* Date range filtering

  * All Time
  * This Month
  * Last Month

### Export

* CSV export functionality

### Persistence

* JSON file-based storage

## Tech Stack

### Frontend

* React
* Vite
* Axios
* Recharts

### Backend

* Node.js
* Express.js

### Deployment

* Vercel
* Render

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## API Endpoints

GET /api/expenses

POST /api/expenses

PUT /api/expenses/:id

DELETE /api/expenses/:id

GET /api/expenses/summary

GET /api/expenses/export/csv

## Future Improvements

* Authentication
* Database integration
* Recurring expenses
* Budget tracking
* Dark mode

##Author
*Subhava Ojha
