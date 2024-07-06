import React, { useState } from "react";

const MoreAboutUseState = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length != 0 ? (
            list.map((ele, idx) => {
              return (
                <tr key={idx}>
                  <td>{ele}</td>
                  <td>
                    <button
                      onClick={(idx) => {
                        list.splice(idx, 1);
                        setList([...list]);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input onChange={(e) => setItem(e.target.value)} placeholder="Item" />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default MoreAboutUseState;
