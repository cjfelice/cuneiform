import React, { useState } from "react";
import "./react_resizable_styles.scss";
import "./react_grid_styles.scss";
import _ from "lodash";
import "./App.scss";
import ReactPlayer from "react-player";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Canvas() {
  const [state, setState] = useState({
    items: [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === list.length - 1,
      };
    }),
    newCounter: 0,
  });

  const createElement = (el) => {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  };

  const onAddItem = () => {
    console.log("adding", "n" + state.newCounter);
    setState({
      items: state.items.concat({
        i: "n" + state.newCounter,
        x: (state.items.length * 2) % 12,
        y: Infinity,
        w: 2,
        h: 2,
      }),
      newCounter: state.newCounter + 1,
    });
  };

  const onRemoveItem = (i) => {
    console.log("removing", i);
    setState({ ...state, items: _.reject(state.items, { i: i }) });
  };

  const onDrop = (layout, layoutItem, event) => {
    console.log("adding", "n" + state.newCounter);
    console.log(layoutItem);
    setState({
      items: state.items.concat({
        i: "n" + state.newCounter,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 2,
        h: 2,
      }),
      newCounter: state.newCounter + 1,
    });
  };

  return (
    <div>
      <button
        onClick={onAddItem}
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Add Item
      </button>
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        isDroppable={true}
        onDrop={onDrop}
        verticalCompact={false}
      >
        {_.map(state.items, (el) => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
// function Canvas() {
//   const [item, setItem] = useState({
//     layout: [{ i: "a", x: 6, y: 6, w: 1, h: 2 }],
//     boxes: ["a"],
//   });
//   const [layout, setLayout] = useState([]);
//   const [newCounter, setNewCounter] = useState(0);
//   const [boxes, setBoxes] = useState([]);

//   const boxMapper = (boxes) => {
//     let squares = "";
//     const boxi = boxes.map((box) => `<div key="${box}">${box}</div>`);

//     for (const box of boxi) {
//       squares += box;
//     }
//     return squares;
//   };

//   const onDrop = (layout, layoutItem, event) => {
//     console.log(boxes, layout);
//     setLayout(
//       layout.concat({
//         i: "n" + newCounter,
//         x: layoutItem.x,
//         y: layoutItem.y,
//         w: 5,
//         h: 5,
//       })
//     );
//     setBoxes(boxes.concat("n" + newCounter));
//     setNewCounter(newCounter + 1);
//   };
//   return (
//     <div>
//       <div
//         className="droppable-element"
//         draggable={true}
//         unselectable="on"
//         onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
//       >
//         Droppable Element (Drag me!)
//       </div>

//       <ResponsiveReactGridLayout
//         className="canvas-window"
//         layout={layout}
//         rowHeight={5}
//         maxRows={12}
//         isDroppable={true}
//         autoSize={false}
//         onDrop={onDrop}
//         breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//         cols={{ lg: 20, md: 17, sm: 14, xs: 10, xxs: 5 }}
//       >
//         {renderHTML(boxMapper(boxes))}
//       </ResponsiveReactGridLayout>
//     </div>
//   );
// }

/* <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/BGhqlJnFIXU"
            controls
            muted
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <img
            width="100%"
            height="100%"
            src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv"
            alt="tree"
          ></img> */

export default Canvas;
