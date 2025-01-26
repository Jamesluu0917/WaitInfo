import React from "react";

interface User {
  id: string;
  name: string;
  phone: string;
}

interface TableViewProps {
  data: User[];
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const TableView: React.FC<TableViewProps> = ({ data, onUpdate, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID #</th>
            <th>Phone Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn update-btn"
                  onClick={() => onUpdate(user.id)}
                >
                  ✏️
                </button>
              </td>
              <td>
                <button
                  className="btn delete-btn"
                  onClick={() => onDelete(user.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;

// CSS Styling
const styles = `
.table-container {
  margin: 20px auto;
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tr:hover {
  background-color: #f1f1f1;
}

.btn {
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.update-btn {
  background-color: #4CAF50;
  color: white;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}
`;

// Inject CSS into the DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Usage Example
const sampleData: User[] = [
  { id: "87654321", name: "Jane Doe", phone: "514-982-1273" },
  { id: "12345678", name: "Samy Sabir", phone: "819-234-1093" },
  { id: "09876543", name: "Julia B. Grenier", phone: "819-234-1093" },
  { id: "09876543", name: "James Luu", phone: "418-125-1223" },
];

const handleUpdate = (id: string) => {
  alert(`Update user with ID: ${id}`);
};

const handleDelete = (id: string) => {
  alert(`Delete user with ID: ${id}`);
};

// Render
export const App = () => (
  <TableView
    data={sampleData}
    onUpdate={handleUpdate}
    onDelete={handleDelete}
  />
);
