import React from "react";
import dayjs from "dayjs";

const ProfileTable = ({ user }) => {
  return (
    <>
      <div className="mt-10 overflow-x-scroll px-10 scrollbar-profile">
        <table className="w-full text-left text-sm md:text-lg">
          <thead>
            <tr className="text-white">
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                #
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                Hình ảnh
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800 hidden md:table-cell">
                Tên phim
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                Ngày đặt
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800  ">
                Tên rạp
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800  ">
                Rạp
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800 ">
                Số ghế
              </th>
              <th className="th font-normal px-3 pt-0 pb-3 border-b border-gray-800  ">
                Tổng tiền
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {user.thongTinDatVe?.map((ve, index) => (
              <tr key={ve.maVe}>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {index + 1}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  <img
                    className="h-20 w-20 object-cover "
                    src={ve.hinhAnh}
                    alt={ve.tenPhim}
                  />
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {ve.tenPhim}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {dayjs(ve.ngayDat).format("MMM D, YYYY")}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {ve.danhSachGhe[0].tenHeThongRap}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {ve.danhSachGhe[0].tenCumRap}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {ve.danhSachGhe.map((ghe, index) => (
                    <>
                      <span key={index}>{ghe.tenGhe}</span> &nbsp;
                    </>
                  ))}
                </td>
                <td className="td sm:p-3 py-2 px-1 border-b border-gray-800">
                  {(ve.giaVe * ve.danhSachGhe.length).toLocaleString()} vnđ
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProfileTable;
