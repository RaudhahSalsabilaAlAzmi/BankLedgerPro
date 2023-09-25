import newRequest from "../utils/newRequest";

export const GET_TRANSAKSI_LIST = "GET_TRANSAKSI_LIST";
export const GET_TRANSAKSI_DETAIL = "GET_TRANSAKSI_DETAIL";
export const POST_TRANSAKSI_CREATE = "POST_TRANSAKSI_CREATE";
export const PUT_TRANSAKSI_EDIT = "PUT_TRANSAKSI_EDIT";
export const DELETE_TRANSAKSI = "DELETE_TRANSAKSI";

export const getTransaksiList = () => {
    return (dispatch) => {
        newRequest
        .get("/transaksi")
        .then(function (response) {
          dispatch({
            type: GET_TRANSAKSI_LIST,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: GET_TRANSAKSI_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const getTransaksiDetail = (id) => {
    return (dispatch) => {
        newRequest
        .get("/transaksi/"+id)
        .then(function (response) {
            console.log(response)
          dispatch({
            type: GET_TRANSAKSI_DETAIL,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: GET_TRANSAKSI_DETAIL,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const deleteTransaksiDetail = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TRANSAKSI_DETAIL,
            payload: {
              data: false,
              errorMessage: false,
            },
        });

        dispatch({
            type: POST_TRANSAKSI_CREATE,
            payload: {
              data: false,
              errorMessage: false,
            },
        });

        dispatch({
            type: PUT_TRANSAKSI_EDIT,
            payload: {
              data: false,
              errorMessage: false,
            },
        });
    };
  };

  export const postTransaksiCreate = (data) => {
    return (dispatch) => {
        newRequest
        .post("/transaksi/new", data)
        .then(function (response) {
          dispatch({
            type: POST_TRANSAKSI_CREATE,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: POST_TRANSAKSI_CREATE,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const putTransaksiEdit = (data, id) => {
    console.log(id)
    return (dispatch) => {
        newRequest
        .put("/transaksi/update/"+id, data)
        .then(function (response) {
          dispatch({
            type: PUT_TRANSAKSI_EDIT,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: PUT_TRANSAKSI_EDIT,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const deleteTransaksi = (id) => {
    return (dispatch) => {
        newRequest
        .delete("/transaksi/delete/"+id)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  };