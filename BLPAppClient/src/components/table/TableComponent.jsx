import React from "react";
import "./TableComponent.scss";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { faEdit, faInfo, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import swal from "sweetalert";
import { deleteTransaksi } from "../../actions/transaksiAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteTransaksi(id))
      swal("Deleted!", "Your imaginary file has been deleted.", "success", {
        icon: "success",
      });
      window.location.reload(false);
    } else {
      swal("Data gagal dihapus");
    }
  });
}

const defaultSorted = [
  {
    dataField: "_id",
    order: "asc",
  },
];

// ganti
const mapStateToProps = (state) => {
  return {
    getTransaksiList: state.transaksi.getTransaksiList,
    errorTransaksiList: state.transaksi.errorTransaksiList
  }
}

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "id_transaksi",
      text: "ID Transaksi",
      sort: true,
      headerStyle: () => {
        return { width: "18%" };
      },
    },
    {
      dataField: "saldo[0].id_rekening",
      text: "ID Rekening",
      headerStyle: () => {
        return { width: "10%" };
      },
      sort: true,
    },
    {
      dataField: "saldo[0].nama",
      text: "Nama",
      headerStyle: () => {
        return { width: "10%" };
      },
      sort: true,
    },
    {
      dataField: "nominal",
      text: "Nominal",
      headerStyle: () => {
        return { width: "8%" };
      },
      sort: true,
    },
    {
      dataField: "jenis_transaksi",
      text: "Jenis Transaksi",
      headerStyle: () => {
        return { width: "11%" };
      },
    },
    {
      dataField: "tanggal_transaksi",
      text: "Tanggal Transaksi",
      sort: true,
      headerStyle: () => {
        return { width: "18%" };
      },
    },
    {
      dataField: "saldo[0].current_saldo",
      text: "Saldo Saat Ini",
      headerStyle: () => {
        return { width: "11%" };
      },
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/detail/"+row._id} >
              <Button color="dark" className="m">
                <FontAwesomeIcon icon={faInfo}> </FontAwesomeIcon>
                Detail
              </Button>
            </Link>
  
            <Link to={"/edit/"+row._id} >
              <Button color="dark" className="m">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                Edit
              </Button>
            </Link>
  
  
            <Button color="danger" className="m" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              Delete
            </Button>
  
          </div>
        );
      },
    },
  ];

  return (
    <div className="container">
      { props.getTransaksiList ?       <ToolkitProvider
        bootstrap4
        // harus berbeda karena untuk pagination
        keyField="_id"
        data={props.getTransaksiList}
        columns={columns}
        defaultSorted={defaultSorted}
        search
        className="table"
      >
        {(props) => (
          <div>

            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <Link to={"/create"} >
                  <Button color="dark" className="m">
                    <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon>
                    Transaksi Baru
                  </Button>
                </Link>
              </Col>

              <Col xs={12} md={6} className="d-flex justify-content-end">
                <div>
                  <SearchBar {...props.searchProps} placeholder="Search ..." />
                </div>
              </Col>
            </Row>
            <hr />
            <BootstrapTable {...props.baseProps} pagination={ paginationFactory() } />
          </div>
        )}
      </ToolkitProvider> : <div className="text-center">{props.errorTransaksiList ? <h4>{props.errorTransaksiList}</h4> : <Spinner></Spinner> }</div> }
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
