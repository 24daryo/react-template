import React from "react";
import { useRecoilValue } from "recoil";
import { ageState, detailState, genderState, nameState, yearState } from "./state";

const Result = () => {
  // global state
  const name = useRecoilValue(nameState);
  const age = useRecoilValue(ageState);
  const gender = useRecoilValue(genderState);
  const year = useRecoilValue(yearState);
  const detail = useRecoilValue(detailState);

  return (
    <>
      <h2>Result:</h2>
      <div>name:{name}</div>
      <div>age:{age}</div>
      <div>gender:{gender}</div>
      <div>year:{year}</div>
      <div>detail:{detail}</div>
    </>
  );
};

export default Result;
