import React, { useEffect, useCallback, useRef } from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { requestThings, incPage } from "../../actions/things";
import AllThings from "../allThings/allThings";
import "./things.css";

const Things = () => {
  const dispatch = useDispatch();
  const things = useSelector((rootState) => rootState.things.things);
  const page = useSelector((rootState) => rootState.things.page);
  const allThingsRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrolled = Math.floor(allThingsRef.current.scrollTop + allThingsRef.current.clientHeight);
    const fullHeight = Math.floor(allThingsRef.current.scrollHeight);
    const currentScroll = scrolled === fullHeight;
    if (currentScroll) {
      dispatch(requestThings(page));
      dispatch(incPage());
    }
  }, [page, dispatch]);


  useEffect(() => {
    if (page === 1) {
      dispatch(requestThings(page));
      dispatch(incPage());
    }
    const element = ReactDOM.findDOMNode(allThingsRef.current);
    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, dispatch, page]);

  return (
    <div className="things-container">
      <header>
        <h1>Things-react-redux</h1>
        <h3>by Andrew Shamrey</h3>
      </header>
      {things && <AllThings forRef={allThingsRef} things={things} />}
    </div>
  );
};

export default Things;
