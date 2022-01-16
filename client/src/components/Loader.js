// Imported React library.
import React, { useState } from "react";
// Imported spinner from React Spinners.
import RingLoader from "react-spinners/RingLoader";

/**
 * Created a spinner component using React Spinners for when the page is loading.
 * Set the initial state of loading to true.
 * Passed the props to the component.
 */

const Loader = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <RingLoader color="#2feaff" loading={loading} size={30} id="loader" />
    </div>
  );
};

// Exporting Loader.js to Booking.js and Home.js.
export default Loader;
