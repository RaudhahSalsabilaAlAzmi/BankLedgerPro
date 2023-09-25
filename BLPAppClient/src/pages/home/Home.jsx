import React, { useEffect } from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import TableComponent from "../../components/table/TableComponent.jsx";
import { connect } from "react-redux";
import { deleteTransaksiDetail, getTransaksiList } from "../../actions/transaksiAction";

const Home = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getTransaksiList());
    dispatch(deleteTransaksiDetail());
  }, [dispatch]);

  return (
    <div className="home">
      <TableComponent />
    </div>
  );
};

export default connect()(Home);
