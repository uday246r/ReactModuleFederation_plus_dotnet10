Write-Host "Starting all microfrontends and host app..."

# Start Employee MF
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd employee_mf; npm install; npm run build; npm run preview"

# Start Asset Management
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd AssetManagementSystem/frontend; npm install; npm run build; npm run preview"

# Start Inventory Management
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd InventoryManagement/frontend; npm install; npm run build; npm run preview"

# Start Helpdesk Service
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd HelpdeskService/frontend; npm install; npm run build; npm run preview"

# Start Host App
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd host-app; npm install; npm run dev"

Write-Host "All processes started in separate windows. Please wait for the builds to finish."
