import React, { useState } from "react";
import { reduxForm, Field, reset } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import UserValidation from "../../validations/userValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  // console.log(state.transaksi.getTransaksiDetail?.saldo ? state.transaksi.getTransaksiDetail?.saldo[0]?.nomor_rekening : undefined)
  return {
    getResponseDataTransaksiEdit: state.transaksi.getResponseDataTransaksiEdit,
    errorResponseDataTransaksiEdit: state.transaksi.errorResponseDataTransaksiEdit,
    initialValues : {
      // nomor_rekening : state.transaksi.getTransaksiDetail?.saldo ? state.transaksi.getTransaksiDetail?.saldo[0]?.nomor_rekening : undefined,
      jenis_transaksi : state.transaksi.getTransaksiDetail.jenis_transaksi,
      // nama : state.transaksi.getTransaksiDetail?.saldo ? state.transaksi.getTransaksiDetail?.saldo[0]?.nama : undefined,
      // jumlah : state.transaksi.getTransaksiDetail.jumlah
    }
  }
}

const FormComponent = (props) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   props.reset("formCreateTransaksi"); // Clear input fields
  // };

  // const handleFormSubmit = (values) => {
  //   const isFormValid = props.valid; // Check if the form is valid
  //   if (isFormValid) {
  //     setIsModalOpen(true); // Open the modal
  //   }
  // };

  if(props.getResponseDataTransaksiEdit || props.errorResponseDataTransaksiEdit) {
    if (props.errorResponseDataTransaksi) {
      swal("Transaksi Failed", props.errorResponseDataTransaksiEdit , "error");
    } else {
      swal("Transaksi Updated", props.getResponseDataTransaksiEdit.jenis_transaksi , "success");
      props.reset("formCreateTransaksi"); // Clear input fields
    }
  }

  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <FormGroup row>
        {/* <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="nomor_rekening"
              component={renderField}
              label="Nomor Rekening :"
            />
          </FormGroup>
        </Col> */}

        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="jenis_transaksi"
              component={renderField}
              label="Jenis Transaksi :"
            />
          </FormGroup>
        </Col>

        {/* <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="saldo[0].nama"
              component={renderField}
              label="Nama :"
            />
          </FormGroup>
        </Col> */}
{/* 
        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="jumlah"
              component={renderField}
              label="Jumlah :"
            />
          </FormGroup>
        </Col> */}
      </FormGroup>

      <FormGroup row>
        <Col md="12">
          <FormGroup>
            <Button color="dark" type="submit" layer="success" disabled={props.submitting}>
              Submit
            </Button>
          </FormGroup>
        </Col>
      </FormGroup>
    </form>

      {/* <Modal isOpen={isModalOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Success! <FontAwesomeIcon icon={faCheckCircle} color="#52b963" /> </ModalHeader>
        <ModalBody>
          Your form has been successfully submitted.
        </ModalBody>
      </Modal> */}
    </div>

    
  );
};

const FormReduxComponent = reduxForm({
  form: "formCreateTransaksi",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormReduxComponent);
