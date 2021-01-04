import React, {useState} from "react";


const Filter = props => {

  const { addFilter} = props;
  const [input, setInput] = useState("");
  return(
    <div className="py-5">
      <div className="input-group w-25 mx-auto" > 

        <input 
          type="text" 
          className="form-control" 
          placeholder="Write Filer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={() => addFilter(input)}>filter</button>
        </div>
      </div>  
    </div>
  );
};

export default Filter;