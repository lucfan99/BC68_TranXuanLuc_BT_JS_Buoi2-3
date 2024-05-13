//Bài 1 : Tính tiền lương nhân viên
document.querySelector(".btn_TienLuong").onclick = function () {
  let luong1Ngay = 100000;
  let soNgayLam = document.getElementById("ngayLam").value * 1;
  let soTienLuong = luong1Ngay * soNgayLam;
  document.querySelector(
    ".ketQuaTienLuong"
  ).innerHTML = `Lương của bạn sau ${soNgayLam} ngày bạn đã làm là : ${soTienLuong.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};
//Bài 2 : tính trung bình 5 số thực

document.querySelector(".btn_TinhTrungBinh").onclick = function () {
  let number1 = document.getElementById("num1").value * 1;
  let number2 = document.getElementById("num2").value * 1;
  let number3 = document.getElementById("num3").value * 1;
  let number4 = document.getElementById("num4").value * 1;
  let number5 = document.getElementById("num5").value * 1;
  console.log(typeof number1);
  console.log(number2);
  console.log(number3);
  console.log(number4);
  console.log(number5);
  let num1 = Number(number1);
  let num2 = Number(number2);
  let num3 = Number(number3);
  let num4 = Number(number4);
  let num5 = Number(number5);
  let soTrungBinhTong = (num1 + num2 + num3 + num4 + num5) / 5;
  document.querySelector(
    ".ketQuaTinhTrungBinh"
  ).innerHTML = `Giá trị trung bình của 5 số trên là: ${soTrungBinhTong}`;
};

//bài 3: Quy đổi tiền
document.querySelector(".btn_QuyDoi").onclick = function () {
  let giaTriVND = 23500;
  let soTienUSD = document.getElementById("USDNumber").value * 1;
  let ketQuaQuyDoi = giaTriVND * soTienUSD;
  document.querySelector(".ketQuaQuyDoi").innerHTML =
    ketQuaQuyDoi.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

//Bài 4: Tính diện tích chu vi hình chữ nhật
document.querySelector(".btn_TinhToan").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.querySelector(
    ".ketQuaCV_DT"
  ).innerHTML = `Hình chữ nhật có chu vi = ${chuVi} và diện tích = ${dienTich}`;
};
//Bài 5: Tính tổng kí số
function chiaLayDu(n, t) {
  if (n === 0) {
    return t;
  }
  let h = n % 10;
  let r = Math.floor(n / 10);
  t += h;
  return chiaLayDu(r, t);
}
// function congTong(n) {
//   if (Math.floor(n / 10) === 0) {
//     return n;
//   }
//   n = chiaLayDu(n, 0);
//   return congTong(n);
// }

document.querySelector(".btn_TinhTong").onclick = function () {
  let nb = document.getElementById("soBatKi").value * 1;

  let sum = chiaLayDu(nb, 0);
  console.log(sum);
  document.querySelector(
    ".ketQuaTinhTong"
  ).innerHTML = `Tổng hai kí số là ${sum}`;
};
