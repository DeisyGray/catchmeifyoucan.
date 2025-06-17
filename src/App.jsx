import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Info from "./info";

function App() {
  const [count, setCount] = useState(0);
  // สมมติว่ารูปภาพ mycat01.jpg และ mycat02.jpg อยู่ในโฟลเดอร์ public
  // ดังนั้น path จะเป็น /mycat01.jpg และ /mycat02.jpg
  const catImage1 =
    "https://preview.redd.it/po1bme7vddj81.png?auto=webp&s=4ee1fd630d379d74baed7656ee5822dea7a18c58";
  const catImage2 = "https://i.imgflip.com/65y6r1.png?a485904";
  const [currentCatImage, setCurrentCatImage] = useState(catImage1);

  const toggleCatImage = () => {
    // สลับรูปภาพโดยเช็คว่าปัจจุบันเป็นรูปไหน แล้วเปลี่ยนเป็นอีกรูป
    setCurrentCatImage((prevImage) =>
      prevImage === catImage1 ? catImage2 : catImage1
    );
  };

  return (
    <>
      <div>
        {/* แสดงรูปแมวที่สลับได้แทนโลโก้ และให้คลิกที่รูปเพื่อสลับ */}
        <img
          src={currentCatImage}
          className="logo" // ใช้ class เดิมของ logo เพื่อสไตล์ที่คล้ายกัน
          alt="Switchable Cat"
          onClick={toggleCatImage}
          style={{ cursor: "pointer" }} // เพิ่ม cursor pointer เพื่อให้รู้ว่าคลิกได้
        />
      </div>
      <h1>Catch Me If You Can</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            toggleCatImage();
          }}
        >
          count is {count}
        </button>

        <p>Welcome BIS3R1 do you know who I am ?</p>

        <Info count={count} />

        {/* ปุ่มสลับรูปภาพเดิมถูกย้ายไปรวมกับการคลิกที่รูปภาพด้านบนแล้ว */}
      </div>
      <p className="read-the-docs">
        Click on the stupid button to get more information about me
      </p>
    </>
  );
}

export default App;
