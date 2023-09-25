import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Back from '../../components/back/Back';
import { getTransaksiDetail } from '../../actions/transaksiAction';
import Detail from "../../components/detail/Detail";

const DetailTransaksiContainer = ({ dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTransaksiDetail(id));
  }, [dispatch]);

  return (
    <div className='container'>
      <Back></Back>
      <h1>Detail Transaksi</h1>
      <Detail />
    </div>
  );
};

export default connect(null)(DetailTransaksiContainer);
