import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import FormComponent from '../../components/fromEdit/FormEditComponent';
import Back from '../../components/back/Back';
import { getTransaksiDetail, putTransaksiEdit } from '../../actions/transaksiAction';
import { useParams } from 'react-router-dom';

const EditTransaksiContainer = ( { dispatch } ) => {

  // Agar dapat membaca/read data dari API
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTransaksiDetail(id));
  }, [dispatch]);

  const handleSubmit = (data, id) => {
    dispatch(putTransaksiEdit(data, id)); // Use 'dispatch' directly, no need for 'props'
  };

  return (
    <div className='container'>
      <Back />
      <FormComponent onSubmit={(data) => handleSubmit(data, id)} />
      <h1>Edit</h1>
    </div>
  )
}

export default connect(null)(EditTransaksiContainer)