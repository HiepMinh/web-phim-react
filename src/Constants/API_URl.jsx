const API_URL = "http://sv2.myclass.vn/api/";
const GROUP_ID = "GP07";

//movies
const API_GET_MOVIELIST = `${API_URL}QuanLyPhim/LayDanhSachPhim?MaNhom=${GROUP_ID}`;
const API_GET_MOVIE_DETAIL = (id) => `${API_URL}QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
const API_GET_MOVIEROOM_DETAIL = (MaPhongVe) => `${API_URL}ChiTietPhongVe?MaLichChieu=${MaPhongVe}`;
const API_POST_TICKET = `${API_URL}QuanLyDatVe/DatVe`;

//user
const API_POST_REGISTER_USER = `${API_URL}QuanLyNguoiDung/ThemNguoiDung`;
const API_POST_UPDATE_INFOUSER = `${API_URL}QuanLyNguoiDung/CapNhatThongTin`;
const API_POST_LOGIN_USER = (tk, mk) => `${API_URL}QuanLyNguoiDung/DangNhap?TaiKhoan=${tk}&matkhau=${mk}`;
const API_POST_HISTORYMOVIE_USER = (tk) => `http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${tk}`;

export default { 
    API_GET_MOVIELIST,
    API_GET_MOVIE_DETAIL,
    API_GET_MOVIEROOM_DETAIL,
    API_POST_TICKET,

    API_POST_REGISTER_USER,
    API_POST_UPDATE_INFOUSER,
    API_POST_LOGIN_USER,
    API_POST_HISTORYMOVIE_USER
};