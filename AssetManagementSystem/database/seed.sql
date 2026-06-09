INSERT INTO "Assets" ("AssetName", "Category", "Brand", "PurchaseDate", "Status") VALUES
('Dell Inspiron Laptop', 'Laptop', 'Dell', '2025-01-10', 'Available'),
('HP LaserJet Printer', 'Printer', 'HP', '2025-02-15', 'Available'),
('Epson Projector', 'Projector', 'Epson', '2024-11-20', 'Available')
ON CONFLICT DO NOTHING;

INSERT INTO "Employees" ("Name", "Email", "Department") VALUES
('Aarav Sharma', 'aarav.sharma@example.com', 'Computer Science'),
('Meera Iyer', 'meera.iyer@example.com', 'Administration')
ON CONFLICT ("Email") DO NOTHING;
