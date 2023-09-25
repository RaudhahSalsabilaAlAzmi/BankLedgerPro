const UserValidation = (values) => {
    const errors = {};
  
    if (!values.saldo || !values.saldo[0] || !values.saldo[0].id_rekening || values.saldo[0].id_rekening === "") {
        errors.saldo = [{ id_rekening: "Nomor rekening harus diisi" }];
    }

    if (!values.saldo || !values.saldo[0] || !values.saldo[0].nama || values.saldo[0].nama === "") {
      errors.saldo = [{ id_rekening: "Nama harus diisi" }];
    }

    if (!values.jenis_transaksi || values.jenis_transaksi === "") {
      errors.jenis_transaksi = "Jenis transaksi harus diisi";
    }
  
    if (!values.nominal || values.nominal === "") {
      errors.nominal = "Nominal harus diisi";
    }
  

    return errors
  };
  
export default UserValidation;