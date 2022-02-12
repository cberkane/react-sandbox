import React from "react";

function memoNote({ noteName }) {
  console.log("render from Memo Note");
  return <div>Note: {noteName}</div>;
}

export const MemoNote = React.memo(memoNote);
