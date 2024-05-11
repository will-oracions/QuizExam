// import React, { useState } from "react";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// interface Question {
//   id: number;
//   text: string;
// }

// interface QuestionItemProps {
//   question: Question;
//   index: number;
//   moveQuestion: (dragIndex: number, hoverIndex: number) => void;
// }

// const QuestionItem: React.FC<QuestionItemProps> = ({
//   question,
//   index,
//   moveQuestion,
// }) => {
//   const [{ isDragging }, drag] = useDrag({
//     item: { type: "QUESTION", id: question.id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     } as any),
//   });

//   const [, drop] = useDrop({
//     accept: "QUESTION",
//     hover(item: { id: number; index: number }, monitor) {
//       if (!dragRef.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) {
//         return;
//       }

//       moveQuestion(dragIndex, hoverIndex);
//       item.index = hoverIndex;
//     },
//   });

//   const dragRef = React.useRef(null);
//   drag(drop(dragRef));

//   return (
//     <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
//       {question.text}
//     </div>
//   );
// };

// interface QuestionListProps {
//   questions: Question[];
// }

// const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
//   const [items, setItems] = useState(questions);

//   const moveQuestion = (dragIndex: number, hoverIndex: number) => {
//     const dragItem = items[dragIndex];
//     setItems((prevState) => {
//       const updatedItems = [...prevState];
//       updatedItems.splice(dragIndex, 1);
//       updatedItems.splice(hoverIndex, 0, dragItem);
//       return updatedItems;
//     });
//   };

//   return (
//     <div>
//       {items.map((question, index) => (
//         <QuestionItem
//           key={question.id}
//           question={question}
//           index={index}
//           moveQuestion={moveQuestion}
//         />
//       ))}
//     </div>
//   );
// };

// const TestApp: React.FC = () => {
//   const initialQuestions: Question[] = [
//     { id: 1, text: "Question 1" },
//     { id: 2, text: "Question 2" },
//     { id: 3, text: "Question 3" },
//   ];

//   return <QuestionList questions={initialQuestions} />;
// };

// export default TestApp;
