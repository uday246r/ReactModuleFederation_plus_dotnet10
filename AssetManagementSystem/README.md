# Asset Management System


## Project Structure

```text
AssetManagementSystem
├── frontend
├── backend
├── database
└── README.md
```

## 1. Backend

Backend path:

```bash
cd backend
```

Main folders:

```text
backend
├── Controllers
│   ├── AssetsController.cs
│   ├── AssignmentsController.cs
│   ├── DashboardController.cs
│   └── EmployeesController.cs
├── Data
│   └── AppDbContext.cs
├── DTOs
├── Migrations
├── Models
├── Services
├── Program.cs
└── appsettings.json
```

APIs:

```text
GET    /api/dashboard

GET    /api/assets?search=&page=1&pageSize=10
GET    /api/assets/{id}
POST   /api/assets
PUT    /api/assets/{id}
DELETE /api/assets/{id}

GET    /api/employees?search=&page=1&pageSize=10
GET    /api/employees/{id}
POST   /api/employees
PUT    /api/employees/{id}
DELETE /api/employees/{id}

GET    /api/assignments
GET    /api/assignments/{id}
POST   /api/assignments
POST   /api/assignments/{id}/return
```

Backend setup commands:

```bash
dotnet restore
dotnet tool install --global dotnet-ef
dotnet ef database update
dotnet run
```

Backend runs on:

```text
http://localhost:5088
https://localhost:7048
```

## 2. Database

Create a PostgreSQL database:

```sql
CREATE DATABASE asset_management_db;
```

Default connection string in `backend/appsettings.json`:

```json
"DefaultConnection": "Host=localhost;Port=5432;Database=asset_management_db;Username=postgres;Password=postgres"
```

Change `Username` and `Password` if your PostgreSQL credentials are different.

Database tables:

```text
Assets
- Id
- AssetName
- Category
- Brand
- PurchaseDate
- Status

Employees
- Id
- Name
- Email
- Department

Assignments
- Id
- AssetId
- EmployeeId
- AssignedDate
- ReturnedDate
```

Relationships:

```text
Assignments.AssetId -> Assets.Id
Assignments.EmployeeId -> Employees.Id
```

The database also has a filtered unique index on active assignments so the same asset cannot be assigned to multiple employees at the same time.

Optional plain SQL setup:

```bash
psql -U postgres -d asset_management_db -f database/schema.sql
psql -U postgres -d asset_management_db -f database/seed.sql
```

## 3. Frontend

Frontend path:

```bash
cd frontend
```

Main folders:

```text
frontend/src
├── components
├── pages
│   ├── Assignments.jsx
│   ├── Assets.jsx
│   ├── Dashboard.jsx
│   └── Employees.jsx
├── services
├── App.jsx
├── main.jsx
└── styles.css
```

Frontend setup commands:

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

If your backend API URL changes, create `frontend/.env`:

```text
VITE_API_BASE_URL=http://localhost:5088/api
```

## 4. API Integration

Axios is configured in:

```text
frontend/src/services/api.js
```

Service files:

```text
frontend/src/services/assetsService.js
frontend/src/services/employeesService.js
frontend/src/services/assignmentsService.js
frontend/src/services/dashboardService.js
```

The frontend includes:

- Dashboard counts and recent assignments
- Asset CRUD, search, and pagination
- Employee CRUD, search, and pagination
- Asset assignment and return
- Loading states
- Error messages
- Basic form validation
- Responsive layout

## 5. Module Federation Configuration

The Vite Module Federation setup is in:

```text
frontend/vite.config.js
```

Expose configuration:

```js
exposes: {
  "./AssetApp": "./src/App.jsx"
}
```

Build the remote module:

```bash
cd frontend
npm run build
```

The generated remote entry will be available in the build output as:

```text
dist/assets/remoteEntry.js
```

## 6. Run Instructions

Start PostgreSQL and create the database:

```sql
CREATE DATABASE asset_management_db;
```

Run backend:

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

Run frontend in another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

No authentication is included because the Host Dashboard will handle it later.
