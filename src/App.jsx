  import { useState } from "react";
  import "./App.css";
  import { AnimatedTree } from "react-tree-graph";
  import "react-tree-graph/dist/style.css";

  function App() {
    // const [name, setName] = useState("");
    const [data, setData] = useState({ name: "", children: [] });

    const dummy = [
      {
        name: "shahzain",
        department: "teaching",
        reportingTo: "wasiq",
      },
      {
        name: "hamza",
        department: "teaching",
        reportingTo: "wasiq",
      },
      {
        name: "wasiq",
        department: "teaching",
        reportingTo: "shahzain",
      },
      {
        name: "omer",
        department: "teaching",
        reportingTo: "hamza",
      },
      {
        name: "usman",
        department: "teaching",
        reportingTo: "shahzain",
      },
      {
        name: "sabiha",
        department: "teaching",
        reportingTo: "wasiq",
      },
      {
        name: "ahmed",
        department: "teaching",
        reportingTo: "shahzain",
      },
      {
        name: "shozab",
        department: "teaching",
        reportingTo: "wasiq",
      },
      {
        name: "noman",
        department: "teaching",
        reportingTo: "shahzain",
      },
    ];

    
    const buildHierarchy = (name, visited = new Set()) => {
      if (visited.has(name)) return null;
      visited.add(name);

      const node = { name, children: [] };
      const children = dummy.filter((item) => item.reportingTo === name);
      for (const child of children) {
        const childNode = buildHierarchy(child.name, visited);
        if (childNode) node.children.push(childNode);
      }
      return node;
    };

    const filteredData = (name) => {
      const hierarchy = buildHierarchy(name);
      setData(hierarchy);
    };

    const handleClick = (name) =>{
      console.log(name)
    }

    return (
      <>
        <div className="">
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Reporting To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {renderRows()} */}
        {dummy.map((row, index) => (
          <tr key={index}>
          <td>{row.name}</td>
          <td>{row.department}</td>
          <td>{row.reportingTo}</td>
          <td>
            <button onClick={() => filteredData(row.name)}>Click</button>
          </td>
        </tr>
      ))}
      </tbody>
      </table>
        </div>
        <AnimatedTree data={data} height={400} width={400} />
      </>
    );
  }

  export default App;
