import React from 'react';
import { connect } from 'react-redux';
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getTransaksiDetail: state.transaksi.getTransaksiDetail,
    errorTransaksiDetail: state.transaksi.errorTransaksiDetail
  };
};

const Detail = (props) => {
  const transaksiDetail = props.getTransaksiDetail;

  // Check if getTransaksiDetail is undefined
  if (!transaksiDetail) {
    return <p>No transaction detail available.</p>;
  }

  // Check if saldo array is undefined or empty
  if (!transaksiDetail.saldo || transaksiDetail.saldo.length === 0) {
    return <p>No saldo data available.</p>;
  }

  // Assuming saldo always contains at least one element
  const firstSaldoData = transaksiDetail.saldo[0];

  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID Transaksi</td>
          <td width="10">:</td>
          <td>{transaksiDetail.id_transaksi}</td>
        </tr>

        <tr>
          <td width="200">Nomor Rekening</td>
          <td width="10">:</td>
          <td>{firstSaldoData.id_rekening}</td>
        </tr>

        <tr>
          <td width="200">Nomor Rekening</td>
          <td width="10">:</td>
          <td>{firstSaldoData.nama}</td>
        </tr>

        <tr>
          <td width="200">Saldo</td>
          <td width="10">:</td>
          <td>{firstSaldoData.current_saldo}</td>
        </tr>

        <tr>
          <td width="200">Jenis Transaksi</td>
          <td width="10">:</td>
          <td>{transaksiDetail.jenis_transaksi}</td>
        </tr>

        <tr>
          <td width="200">Nominal Transaksi</td>
          <td width="10">:</td>
          <td>{transaksiDetail.nominal}</td>
        </tr>

        <tr>
          <td width="200">Tanggal Transaksi</td>
          <td width="10">:</td>
          <td>{transaksiDetail.tanggal_transaksi}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(Detail);
