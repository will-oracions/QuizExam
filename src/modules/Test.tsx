import React from "react";
// import { useSprings, animated } from "@react-spring/web";
// import { useDrag } from "react-use-gesture";
//@ts-ignore
import clamp from "lodash.clamp";
//@ts-ignore
import swap from "lodash-move";

// import styles from "../styles.module.scss";

// interface DraggableListProps {
//   items: string[];
// }

// const fn =
//   (
//     order: number[],
//     active: boolean = false,
//     originalIndex: number = 0,
//     curIndex = 0,
//     y = 0
//   ) =>
//   (index: number) =>
//     active && index === originalIndex
//       ? {
//           y: curIndex * 50 + y,
//           scale: 1.1,
//           zIndex: 1,
//           shadow: 15,
//           immediate: (key: string) => key === "y" || key === "zIndex",
//         }
//       : {
//           y: order.indexOf(index) * 50,
//           scale: 1,
//           zIndex: 0,
//           shadow: 1,
//           immediate: false,
//         };

// const DraggableList: React.FC<DraggableListProps> = ({ items }) => {
//   const [height, setHeight] = React.useState<number>(items.length * 50);
//   const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
//   const [springs, api] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
//   const bind = useDrag(
//     ({
//       args: [originalIndex],
//       active,
//       movement: [, y],
//     }: {
//       args: [number];
//       active: boolean;
//       movement: [number, number];
//     }) => {
//       const curIndex = order.current.indexOf(originalIndex);
//       const curRow = clamp(
//         Math.round((curIndex * 100 + y) / 100),
//         0,
//         items.length - 1
//       );
//       const newOrder = swap(order.current, curIndex, curRow);
//       api.start(fn(newOrder, active, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
//       if (!active) order.current = newOrder;
//     }
//   );

//   React.useEffect(() => {
//     setHeight(items.length * 50);
//   }, [items]);

//   return (
//     <div className={styles.content} style={{ height }}>
//       {springs.map(({ zIndex, shadow, y, scale }: any, i: number) => (
//         <animated.div
//           {...bind(i)}
//           key={i}
//           style={{
//             zIndex,
//             boxShadow: shadow.to(
//               (s: any) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
//             ),
//             y,
//             scale,
//           }}>
//           {items[i]}
//         </animated.div>
//       ))}
//     </div>
//   );
// };

const Test: React.FC = () => {
  const [items, setItems] = React.useState<string[]>(
    "Lorem ipsum dolor sit".split(" ")
  );

  return (
    <>
      <button onClick={() => setItems(["new Item " + items.length, ...items])}>
        Add item
      </button>

      {/* <div className={styles.container}>
        <DraggableList items={items} />
      </div> */}
    </>
  );
};

export default Test;
