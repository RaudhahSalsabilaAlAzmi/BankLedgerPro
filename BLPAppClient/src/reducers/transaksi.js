import { DELETE_TRANSAKSI, GET_TRANSAKSI_DETAIL, GET_TRANSAKSI_LIST, POST_TRANSAKSI_CREATE, PUT_TRANSAKSI_EDIT } from "../actions/transaksiAction";

let initialState = {
    getTransaksiList: false,
    errorTransaksiList: false,
    getTransaksiDetail: false,
    errorTransaksiDetail: false,
    getResponseDataTransaksi: false,
    errorResponseDataTransaksi: false,
    getResponseDataTransaksiEdit: false,
    errorResponseDataTransaksiEdit: false,
    getTransaksiDelete: false,
    errorTransaksiDelete: false
};

const transaksi = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSAKSI_LIST:
        return {
            ...state,
            getTransaksiList: action.payload.data,
            errorTransaksiList: action.payload.errorMessage
        }

    case GET_TRANSAKSI_DETAIL:
        return {
            ...state,
            getTransaksiDetail: action.payload.data,
            errorTransaksiDetail: action.payload.errorMessage
        }

    case POST_TRANSAKSI_CREATE:
        return {
            ...state,
            getResponseDataTransaksi: action.payload.data,
            errorResponseDataTransaksi: action.payload.errorMessage
        }
    
    case PUT_TRANSAKSI_EDIT:
        return {
            ...state,
            getResponseDataTransaksiEdit: action.payload.data,
            errorResponseDataTransaksiEdit: action.payload.errorMessage
        }

    case DELETE_TRANSAKSI:
        return {
            ...state,
            getTransaksiDelete: action.payload.data,
            errorTransaksiDelete: action.payload.errorMessage
        }
        
    default:
        return state;
    }
};

export default transaksi;
