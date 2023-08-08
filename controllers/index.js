import { Student } from "../models/student.js";
import { Employee } from "../models/employee.js";
import { Customer } from "../models/customer.js";

import { ListPerson } from "../services/listPerson.js";

const listPerson = new ListPerson();
let validation = new Validation();
const domID = (id) => document.getElementById(id);
const layThongTinHS = (isAdd) => {
  const id = domID("id").value;
  const name = domID("name").value;
  const address = domID("address").value;
  const email = domID("email").value;
  const toan = domID("toan").value;
  const li = domID("li").value;
  const hoa = domID("hoa").value;
  const type = domID("client").value;

  var isValid = true;
  if (isAdd) {
    isValid &= validation.kiemTraRong(id, "tbId", "(*) Vui lòng nhập id")
    && validation.kiemTraIDTonTai(
      id,
      "tbId",
      "(*) ID đã tồn tại",
      listPerson.list
    );
  }
  isValid &= 
    validation.kiemTraRong(name, "tbTen", "(*) Vui lòng nhập tên")
    && validation.kiemTraDoDaiKyTu(
      name,
      "tbTen",
      "(*) Vui lòng nhập 3-20 ký tự",
      3,
      20
    ) 
    && validation.checkPattern(
      name,
      "tbTen",
      "(*) Vui lòng nhập ký tự",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\\s]+$"
    );
  isValid &= 
    validation.kiemTraRong(address, "tbDiaChi", "(*) Vui lòng nhập địa chỉ");

  isValid &= 
    validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email")
    && validation.checkPattern(
      email,
      "tbEmail",
      "(*) Vui lòng nhập đúng định dạng",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

  isValid &= 
    validation.kiemTraRong(toan, "tbToan", "(*) Vui lòng nhập điểm toán")
    && validation.checkAbout(
      toan,
      "tbToan",
      "(*) Vui lòng nhập đúng điểm",
      /^[0-9]+$/,
      1,
      10
    );

  isValid &= 
    validation.kiemTraRong(li, "tbLi", "(*) Vui lòng nhập diểm lí")
    && validation.checkAbout(
      li,
      "tbLi",
      "(*) Vui lòng nhập đúng điểm",
      /^[0-9]+$/,
      1,
      10
    );

  isValid &= 
    validation.kiemTraRong(hoa, "tbHoa", "(*) Vui lòng nhập điểm hóa")
    && validation.checkAbout(
      hoa,
      "tbHoa",
      "(*) Vui lòng nhập đúng điểm",
      /^[0-9]+$/,
      1,
      10
    );


  if (isValid) {
    const HS = new Student(id, name, address, email, toan, li, hoa, type);
    let DTB = HS.tinhDiemTB();
    HS.diemTB = DTB.toFixed(2);
    return HS;
  }
  return null;
};
const layThongTinNV = (isAdd) => {
  const id = domID("id").value;
  const name = domID("name").value;
  const address = domID("address").value;
  const email = domID("email").value;
  const day = domID("ngay").value;
  const luong = domID("luong").value;
  const type = domID("client").value;

  var isValid = true;
  if (isAdd) {
    isValid &= validation.kiemTraRong(id, "tbId", "(*) Vui lòng nhập id")
    && validation.kiemTraIDTonTai(
      id,
      "tbId",
      "(*) ID đã tồn tại",
      listPerson.list
    );
  }
  isValid &= 
    validation.kiemTraRong(name, "tbTen", "(*) Vui lòng nhập tên")
    && validation.kiemTraDoDaiKyTu(
      name,
      "tbTen",
      "(*) Vui lòng nhập 3-20 ký tự",
      3,
      20
    ) && validation.checkPattern(
      name,
      "tbTen",
      "(*) Vui lòng nhập ký tự",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ\\s]+$"
    );

  isValid &= 
    validation.kiemTraRong(address, "tbDiaChi", "(*) Vui lòng nhập địa chỉ");

  isValid &= 
    validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email")
    && validation.checkPattern(
      email,
      "tbEmail",
      "(*) Vui lòng nhập đúng định dạng",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

  isValid &= 
    validation.kiemTraRong(day, "tbNgay", "(*) Vui lòng nhập số ngày làm")
    &&
    validation.checkAbout(
      day,
      "tbNgay",
      "(*) Vui lòng nhập đúng số ngày làm",
      /^[0-9]+$/,
      80,
      200
    );

  isValid &= 
    validation.kiemTraRong(luong, "tbLuong", "(*) Vui lòng nhập lương 1 ngày")
    &&
    validation.checkAbout(
      luong,
      "tbLuong",
      "(*) Vui lòng nhập đúng số lương 1 ngày",
      /^[0-9]+$/,
      100000,
      20000000
    );
  if(isValid){
  const employee = new Employee(id, name, address, email, day, luong, type);
  let total = employee.tinhTongLuong();
  employee.tongLuong = total;
  return employee;
  }
  return null;
};
const layThongTinKH = (isAdd) => {
  const id = domID("id").value;
  const name = domID("name").value;
  const address = domID("address").value;
  const email = domID("email").value;
  const tenCT = domID("tenCT").value;
  const value = domID("bill").value;
  const rate = domID("danhGia").value;
  const type = domID("client").value;

  var isValid = true;
  if (isAdd) {
    isValid &= validation.kiemTraRong(id, "tbId", "(*) Vui lòng nhập id")
    && validation.kiemTraIDTonTai(
      id,
      "tbId",
      "(*) ID đã tồn tại",
      listPerson.list
    );
  }
  isValid &= 
    validation.kiemTraRong(name, "tbTen", "(*) Vui lòng nhập tên")
    && validation.kiemTraDoDaiKyTu(
      name,
      "tbTen",
      "(*) Vui lòng nhập 3-20 ký tự",
      3,
      20
    ) && validation.checkPattern(
      name,
      "tbTen",
      "(*) Vui lòng nhập ký tự",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\\s]+$"
    );

  isValid &= 
    validation.kiemTraRong(address, "tbDiaChi", "(*) Vui lòng nhập địa chỉ");

  isValid &= 
    validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email")
    && validation.checkPattern(
      email,
      "tbEmail",
      "(*) Vui lòng nhập đúng định dạng",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

  isValid &= 
    validation.kiemTraRong(tenCT, "tbCongTy", "(*) Vui lòng nhập tên công ty")
    && validation.checkPattern(
      tenCT,
      "tbCongTy",
      "(*) Vui lòng nhập ký tự",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ\\s]+$"
    );

  isValid &= 
    validation.kiemTraRong(value, "tbGia", "(*) Vui lòng nhập hóa đơn")
    &&
    validation.checkAbout(
      value,
      "tbGia",
      "(*) Vui lòng nhập đúng trị giá hóa đơn",
      /^[0-9]+$/,
      1,
      9000000000
    );

  isValid &= 
    validation.kiemTraRong(rate, "tbDanhGia", "(*) Vui lòng cho đánh giá")
    && validation.checkPattern(
      rate,
      "tbDanhGia",
      "(*) Vui lòng nhập ký tự",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ\\s]+$"
    );
  

  if(isValid){
  const customer = new Customer(
    id,
    name,
    address,
    email,
    tenCT,
    value,
    rate,
    type
  );
  return customer;
  }
  return null;
};
domID("btnThem").onclick = () => {
  domID("header-title").innerHTML = "Thêm người dùng";
  domID("client").disabled = false;
  domID("id").disabled = false;
  domID("client").style.display = "block";
  domID("math").style.display = "none";
  domID("physics").style.display = "none";
  domID("science").style.display = "none";
  domID("day").style.display = "none";
  domID("luongngay").style.display = "none";
  domID("company").style.display = "none";
  domID("value").style.display = "none";
  domID("rate").style.display = "none";
};
domID("client").onchange = () => {
  const type = domID("client").value;
  // const e = domID("client");
  // const LKH = e.options[e.selectedIndex].text;
  console.log(type);
  if (type === "Student") {
    domID("math").style.display = "block";
    domID("physics").style.display = "block";
    domID("science").style.display = "block";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";
    domID("btnThemND").style.display = "none";
    domID("btnThemHS").style.display = "block";
    domID("btnThemNV").style.display = "none";
    domID("btnThemKH").style.display = "none";
  } else if (type === "Employee") {
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";
    domID("day").style.display = "block";
    domID("luongngay").style.display = "block";
    domID("btnThemND").style.display = "none";
    domID("btnThemNV").style.display = "block";
    domID("btnThemHS").style.display = "none";
    domID("btnThemKH").style.display = "none";
  } else if (type === "Customer") {
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "block";
    domID("value").style.display = "block";
    domID("rate").style.display = "block";
    domID("btnThemND").style.display = "none";
    domID("btnThemHS").style.display = "none";
    domID("btnThemNV").style.display = "none";
    domID("btnThemKH").style.display = "block";
  } else {
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";
    domID("btnThemHS").style.display = "none";
    domID("btnThemNV").style.display = "none";
    domID("btnThemKH").style.display = "none";
    domID("btnThemND").style.display = "block";
  }

  domID("btnThemHS").onclick = () => {
    const student = layThongTinHS(true);
    if (student) {
      listPerson.add(student);
      saveData();
    }
  };
  domID("btnThemNV").onclick = () => {
    const employee = layThongTinNV(true);
    if(employee){
    listPerson.add(employee);
    saveData();
    }
  };
  domID("btnThemKH").onclick = () => {
    const customer = layThongTinKH(true);
    if(customer){
    listPerson.add(customer);
    console.log(listPerson.list);
    saveData();
  };
}
};
const renderTable = (data = listPerson.list) => {
  const content = data.reduce((total, element, index, array) => {
    total += `
      <tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.address}</td>
          <td>${element.email}</td>
          <td>${element.type}</td>
          <td>
            <button class="btn btn-danger" onclick="btnXoa('${
              element.id
            }')">Xóa</button>
            <button class="btn btn-primary" data-toggle="modal"
            data-target="#myModal" onclick="btnSua('${
              element.id
            }')">Sửa</button>
            <button class="btn btn-success" data-toggle="modal"
            data-target="#myModal" onclick="btnShow('${
              element.id
            }')">Show</button>
          </td>
        <td>${
          element.type === "Student"
            ? element.diemTB
            : element.type === "Employee"
            ? element.tongLuong
            : "Không có"
        }</td>
      </tr>
    `;
    return total;
  }, "");
  domID("tableDanhSach").innerHTML = content;
};
window.btnShow = (id) => {
  domID("header-title").innerHTML = "Show thông tin";
  const ND = listPerson.findById(id);
  console.log(ND.type);
  if (ND.type === "Student") {
    domID("client").style.display = "block";
    domID("math").style.display = "block";
    domID("physics").style.display = "block";
    domID("science").style.display = "block";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";
    // Dom thông tin
    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("toan").value = ND.toan;
    domID("li").value = ND.li;
    domID("hoa").value = ND.hoa;
  } else if (ND.type === "Employee") {
    domID("client").style.display = "block";
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "block";
    domID("luongngay").style.display = "block";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";

    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("ngay").value = ND.ngaylam;
    domID("luong").value = ND.luong;
  } else if (ND.type === "Customer") {
    domID("client").style.display = "block";
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "block";
    domID("value").style.display = "block";
    domID("rate").style.display = "block";

    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("tenCT").value = ND.company;
    domID("bill").value = ND.value;
    domID("danhGia").value = ND.rate;
  }
};
window.btnSua = (id) => {
  domID("header-title").innerHTML = "Sửa thông tin";
  domID("client").disabled = true;
  domID("id").disabled = true;
  const ND = listPerson.findById(id);
  if (ND.type === "Student") {
    domID("client").style.display = "block";
    domID("client").style.display = "block";
    domID("math").style.display = "block";
    domID("physics").style.display = "block";
    domID("science").style.display = "block";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";
    // Dom thông tin
    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("toan").value = ND.toan;
    domID("li").value = ND.li;
    domID("hoa").value = ND.hoa;
  } else if (ND.type === "Employee") {
    domID("client").style.display = "block";
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "block";
    domID("luongngay").style.display = "block";
    domID("company").style.display = "none";
    domID("value").style.display = "none";
    domID("rate").style.display = "none";

    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("ngay").value = ND.ngaylam;
    domID("luong").value = ND.luong;
  } else if (ND.type === "Customer") {
    domID("client").style.display = "block";
    domID("math").style.display = "none";
    domID("physics").style.display = "none";
    domID("science").style.display = "none";
    domID("day").style.display = "none";
    domID("luongngay").style.display = "none";
    domID("company").style.display = "block";
    domID("value").style.display = "block";
    domID("rate").style.display = "block";

    domID("client").value = ND.type;
    domID("id").value = ND.id;
    domID("name").value = ND.name;
    domID("address").value = ND.address;
    domID("email").value = ND.email;
    domID("tenCT").value = ND.company;
    domID("bill").value = ND.value;
    domID("danhGia").value = ND.rate;
  }
};
domID("btnCapNhat").onclick = () => {
  const loai = domID("client").value;
  if (loai === "Student") {
    const HS = layThongTinHS();
    listPerson.update(HS);
  } else if (loai === "Employee") {
    const NV = layThongTinNV();
    listPerson.update(NV);
  } else if (loai === "Customer") {
    const KH = layThongTinKH();
    listPerson.update(KH);
  }
  console.log(listPerson);
  saveData();
};
window.btnXoa = (id) => {
  listPerson.delete(id);
  saveData();
};
domID("loaiND").onchange = () => {
  const type = domID("loaiND").value;
  const data = listPerson.filterByType(type);
  renderTable(data);
};
const sapXep = (list, sort) => {
  let listSort = [...list];
  // console.log(listSort);
  if (sort === "A-Z") {
    listSort.sort(function (ND1, ND2) {
      let a = ND1.name.split(" ");
      let b = ND2.name.split(" ");
      let lastA = a[a.length - 1];
      let lastB = b[b.length - 1];
      return lastA.localeCompare(lastB);
    });
  } else if (sort === "Z-A") {
    listSort.sort(function (ND1, ND2) {
      let a = ND1.name.split(" ");
      let b = ND2.name.split(" ");
      let lastA = a[a.length - 1];
      let lastB = b[b.length - 1];
      return lastB.localeCompare(lastA);
    });
  }
  return listSort;
};

domID("sort").onchange = () => {
  const sort = domID("sort").value;
  let sortList = sapXep(listPerson.list, sort);
  renderTable(sortList);
};

const saveData = () => {
  setLocalStorage();
  renderTable();
};

const setLocalStorage = () => {
  const stringify = JSON.stringify(listPerson.list);

  localStorage.setItem("LIST", stringify);
};
const getLocalStorage = () => {
  const stringify = localStorage.getItem("LIST");

  if (stringify) {
    listPerson.list = JSON.parse(stringify);
  }
};
window.onload = () => {
  getLocalStorage();
  renderTable();
};
