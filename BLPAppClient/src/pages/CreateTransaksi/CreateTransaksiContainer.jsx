import React from 'react'
import Back from '../../components/back/Back'
import FormComponent from '../../components/formCreate/FormCreateComponent'
import {connect} from 'react-redux';
import { postTransaksiCreate } from '../../actions/transaksiAction';
import swal from 'sweetalert';
import { reduxForm, Field, reset } from "redux-form";

// const mapStateToProps = (state) => {
//   return {
//     getResponseDataTransaksi: state.transaksi.getResponseDataTransaksi,
//     errorResponseDataTransaksi: state.transaksi.errorResponseDataTransaksi
//   }
// }

const CreateTransaksiContainer = (props) => {

  const handleSubmit = (data) => {
    props.dispatch(postTransaksiCreate(data))
  };

  // if(props.getResponseDataTransaksi) {
  //   swal("Transaksi Created", props.getResponseDataTransaksi.jenis_transaksi , "success");
  //   reset("formCreateTransaksi"); // Use the reset function from Redux Form
  // }

  return (
    <div className='container'>
      <h1>Create</h1>
      <Back />
      <FormComponent onSubmit={(data) => handleSubmit(data)} />
    </div>
  )
}

export default connect(null)(CreateTransaksiContainer)