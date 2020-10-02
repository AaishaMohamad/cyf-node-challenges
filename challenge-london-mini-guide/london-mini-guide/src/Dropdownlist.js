import React from "react";

const DropdownList = () => {
  return (
    <form>
      <label>select a city:</label>
      <select name="cities" id="cities">
        <option placeholder="^"></option>
        <option value="stratford">Stratford</option>
        <option value="heathrow">Heathrow</option>
        <option value="harrow">Harrow</option>
      </select>
    </form>
  );
};

export default DropdownList;
