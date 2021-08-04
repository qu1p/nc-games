import React, { useState, useContext } from "react";
import { patchVotes } from "../Utils/api";
import { LogonContext } from "../Contexts/Logon";
// import {{votes, username}} from "../Components/SingleReview"

const IncrementCount = ({ votes, username, review_id, review }) => {
  const [count, setCount] = useState(0);
  const { logon, setLogon } = useContext(LogonContext);
  console.log(logon);
  const [disableButton, setDisableButton] = useState(false);

  const incrementCount = (incrementBy) => {
    patchVotes(review_id, incrementBy).then(() => {
      setCount((currCount) => {
        setDisableButton(true);
        return currCount + incrementBy;
      });
    });
  };



  return (
    <div>
      <button
        disabled={!logon}
        // disabled={disableButton}
        onClick={() => incrementCount(1)}
      >
        👍
      </button>
      <button
        disabled={!logon}
        //  disabled={disableButton}
        onClick={() => incrementCount(-1)}
      >
        👎
      </button>
      <p>{votes + count}</p>
    </div>
  );
};

export default IncrementCount;
