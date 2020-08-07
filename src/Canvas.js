import React, { forwardRef, useState, useImperativeHandle } from "react";
import "./react_resizable_styles.scss";
import "./react_grid_styles.scss";
import _ from "lodash";
import "./App.scss";
import Mediabox from "./Mediabox";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Canvas = forwardRef((props, ref) => {
  const [state, setState] = useState({
    items: [1].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 8,
        h: 8,
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
          <span className="text">
            <DragIndicatorIcon style={{ color: "white", cursor: "pointer" }} />
          </span>
        )}
        <Mediabox />
        <span
          className="remove"
          style={removeStyle}
          onClick={onRemoveItem.bind(this, i)}
        >
          <CloseIcon style={{ color: "white", fontSize: "25" }} />
        </span>
      </div>
    );
  };

  const onAddItem = () => {
    console.log("adding", "n" + state.newCounter);
    console.log(state.items);
    setState({
      items: state.items.concat({
        i: "n" + state.newCounter,
        x: state.newCounter,
        y: 0,
        w: 8,
        h: 8,
      }),
      newCounter: state.newCounter + 1,
    });
  };

  useImperativeHandle(ref, () => ({
    passCall() {
      onAddItem();
    },
  }));

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
        w: 8,
        h: 8,
      }),
      newCounter: state.newCounter + 1,
    });
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 64, md: 48, sm: 40, xs: 32, xxs: 24 }}
        rowHeight={10}
        maxRows={31}
        isDroppable={true}
        onDrop={onDrop}
        preventCollision={true}
        verticalCompact={false}
      >
        {_.map(state.items, (el) => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  );
});

export default Canvas;
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
