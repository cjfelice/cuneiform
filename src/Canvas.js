import React, { useState } from "react";
import "./react_resizable_styles.scss";
import "./react_grid_styles.scss";
import renderHTML from "react-render-html";
import _ from "lodash";
import "./App.scss";
import ReactPlayer from "react-player";

import GridLayout from "react-grid-layout";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Canvas() {
  const [layout, setLayout] = useState([]);
  const [newCounter, setNewCounter] = useState(0);
  const [boxes, setBoxes] = useState([]);

  const newFunk = (boxes) => {
    let squares = "";
    const boxi = boxes.map((box) => `<div key="${box}">${box}</div>`);

    for (const box of boxi) {
      squares += box;
    }
    return squares;
  };

  // const onAddItem = (x, y, w, h) => {
  //   /*eslint no-console: 0*/
  //   console.log("adding", "n" + state.newCounter);
  //   setState({
  //     // Add a new item. It must have a unique key!
  //     items: state.items.concat({
  //       i: "n" + state.newCounter,
  //       x: x,
  //       y: y, // puts it at the bottom
  //       w: w,
  //       h: h,
  //     }),
  //     // Increment the counter to ensure key is always unique.
  //     newCounter: this.state.newCounter + 1,
  //   });
  // };

  // const onDrop = (layout, layoutItem, event) => {
  //   alert("hi");
  //   onAddItem(layoutItem.x, layoutItem.y, layoutItem.w, layoutItem.h);
  //   setState({
  //     // Add a new item. It must have a unique key!
  //     items: state.layout.concat({
  //       i: "n" + state.newCounter,
  //       x: (this.state.items.length * 2) % (this.state.cols || 12),
  //       y: Infinity, // puts it at the bottom
  //       w: 2,
  //       h: 2,
  //     }),
  //     // Increment the counter to ensure key is always unique.
  //     newCounter: state.newCounter + 1,
  //   });
  // };
  const onDrop = (layout, layoutItem, event) => {
    console.log(boxes, layout);
    setLayout(
      layout.concat({
        i: newCounter,
        x: layoutItem.x,
        y: layoutItem.y,
        w: 5,
        h: 5,
      })
    );
    setBoxes(boxes.concat(newCounter));
    setNewCounter(newCounter + 1);
  };
  return (
    <div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>

      <ResponsiveReactGridLayout
        className="canvas-window"
        layout={layout}
        rowHeight={30}
        width={1200}
        isDroppable={true}
        autoSize={false}
        verticalCompact={false}
        onDrop={onDrop}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 60, md: 40, sm: 30, xs: 20, xxs: 10 }}
      >
        {renderHTML(newFunk(boxes))}
      </ResponsiveReactGridLayout>
    </div>
  );
}

// class Canvas extends React.Component {
//   static defaultProps = {
//     className: "layout",
//     rowHeight: 30,
//     onLayoutChange: function () {},
//     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [0, 1, 2, 3, 4].map(function (i, key, list) {
//         return {
//           i: i.toString(),
//           x: i * 2,
//           y: 0,
//           w: 2,
//           h: 2,
//           add: i === list.length - 1,
//         };
//       }),
//       newCounter: 0,
//     };

//     this.onAddItem = this.onAddItem.bind(this);
//     this.onBreakpointChange = this.onBreakpointChange.bind(this);
//   }

//   createElement(el) {
//     const removeStyle = {
//       position: "absolute",
//       right: "2px",
//       top: 0,
//       cursor: "pointer",
//     };
//     const i = el.add ? "+" : el.i;
//     return (
//       <div className="canvas_item" key={i} data-grid={el}>
//         {el.add ? (
//           <span
//             className="add text"
//             onClick={this.onAddItem}
//             title="You can add an item by clicking here, too."
//           >
//             Add +
//           </span>
//         ) : (
//           <span className="text">{i}</span>
//         )}
//         <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, i)}
//         >
//           <i class="fas fa-times"></i>
//         </span>
//       </div>
//     );
//   }

//   onAddItem(x, y, w, h) {
//     /*eslint no-console: 0*/
//     console.log("adding", "n" + this.state.newCounter);
//     this.setState({
//       // Add a new item. It must have a unique key!
//       items: this.state.items.concat({
//         i: "n" + this.state.newCounter,
//         x: x,
//         y: y, // puts it at the bottom
//         w: w,
//         h: h,
//       }),
//       // Increment the counter to ensure key is always unique.
//       newCounter: this.state.newCounter + 1,
//     });
//   }

//   onBreakpointChange = (breakpoint) => {
//     this.setState({
//       currentBreakpoint: breakpoint,
//     });
//   };

//   onRemoveItem(i) {
//     console.log("removing", i);
//     this.setState({ items: _.reject(this.state.items, { i: i }) });
//   }

//   onDrop = (layout, layoutItem, event) => {
//     this.onAddItem(layoutItem.x, layoutItem.y, layoutItem.w, layoutItem.h);
//     this.setState({
//       // Add a new item. It must have a unique key!
//       items: this.state.items.concat({
//         i: "n" + this.state.newCounter,
//         x: (this.state.items.length * 2) % (this.state.cols || 12),
//         y: Infinity, // puts it at the bottom
//         w: 2,
//         h: 2,
//       }),
//       // Increment the counter to ensure key is always unique.
//       newCounter: this.state.newCounter + 1,
//     });
//   };

//   render() {
//     return (
//       <div className="canvas">
//         <button
//           onClick={this.onAddItem}
//           draggable={true}
//           onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
//           onDrop={this.onDrop}
//         >
//           Add Item
//         </button>
//         <ResponsiveReactGridLayout
//           onLayoutChange={this.onLayoutChange}
//           onBreakpointChange={this.onBreakpointChange}
//           onDrop={this.onDrop}
//           isDroppable={true}
//           {...this.props}
//         >
//           {_.map(this.state.items, (el) => this.createElement(el))}
//         </ResponsiveReactGridLayout>
//       </div>
//     );
//   }
// }

// function Canvas({}) {
//   const layout = {};
//   const onDrop = (layout, layoutItem, event) => {
//     alert(
//       `Dropped element props:\n${JSON.stringify(
//         layoutItem,
//         ["x", "y", "w", "h"],
//         2
//       )}`
//     );
//   };
//   return (
//     <div>
//       <div
//         className="droppable-element"
//         draggable={true}
//         unselectable="on"
//         // this is a hack for firefox
//         // Firefox requires some kind of initialization
//         // which we can do by adding this attribute
//         // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
//         onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
//       >
//         Droppable Element (Drag me!)
//       </div>
//       <div>
//         <ResponsiveGridLayout
//           className="layout"
//           layout={layout}
//           onDrop={onDrop}
//           breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//           cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//         >
//           <div key="1">1</div>
//           <div key="2">2</div>
//           <div key="3">3</div>
//         </ResponsiveGridLayout>
//       </div>
//     </div>
//   );
// }

//       <div
//         className="droppable-element"
//         draggable={true}
//         unselectable="on"
//         // this is a hack for firefox
//         // Firefox requires some kind of initialization
//         // which we can do by adding this attribute
//         // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
//         onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
//       >
//         Droppable Element (Drag me!)
//       </div>

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
