import React, { useEffect, useState } from "react";
import ComboBoxAutocomplete from "./ComboBoxAutocomplete";
import axios from "axios";

export const Homepage = () => {
  //   const numArr = Array.from({ length: 30 }, (el, idx) => ({
  //     item: `item${idx}`,
  //   }));
  const onCreateOption = (e) => {
    console.log("oncreateoption: ", e);
  };
  const onApply = (e) => {
    console.log("onApply: ", e);
  };
  const onSelect = (e) => {
    console.log("onselect: ", e);
  };
  const [response, setResponse] = useState([]);
  useEffect(() => {
    // const fetch = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://nextmov.webpipl.com/api/v1/skills/"
    //     );
    //     setResponse(res.data.result);
    //   } catch (err) {
    //     console.log({ err });
    //   }
    // };
    // fetch();
    const numArr = Array.from({ length: 30 }, (el, idx) => ({
      item: `item${idx}`,
    }));
    setResponse(numArr);
  }, []);
  return (
    <div>
      <h2>dropdown</h2>
      <ComboBoxAutocomplete
        options={response}
        // apiCallInfo={apiCallOptions}
        // transformResponse={(res) => res.result}
        placeholder="Select skills"
        virtualized
        // components={{ InputControl: TextInput }}
        creatable={(newSkill) => newSkill}
        // name="items"
        // value={values.skills}
        getValue={(o) => o?.item}
        getLabel={(o) => o?.item}
        onCreateNewOption={onCreateOption}
        onApply={onApply}
        onSelect={onSelect}
      />
    </div>
  );
};
