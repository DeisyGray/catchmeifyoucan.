import { useEffect } from "react";

export default function Info({ count }) {
  useEffect(() => {
    if (count >= 500) {
      console.log(
        "chairat kananthong 001-9 it's me. nice to meet you noobs!!!"
      );
    } else if (count >= 250) {
      console.log("🔥 are you stupid why you so westing time wiht my app");
    } else if (count >= 1000) {
      console.log("Password: 001-50 free give you money");
    }
  }, [count]);

  return (
    <div>
      {count >= 1000 ? (
        <h1>
          ถ้าคุณรู้ว่าผมคือใครแล้ว แคปหน้าจอมาว่าคุณกดครบและ บอก รหัส ใน
          console.log โดยการเช็ค Inspect{" "}
        </h1>
      ) : count >= 500 ? (
        <button
          onAuxClick={() => console.log("🧠 Count มากกว่า 500 แล้ว เทพจัด!")}
        >
          {" "}
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target=" _blank"
          >
            ปุ่มแห่งความจริง
          </a>
        </button>
      ) : count >= 350 ? (
        <h1>เดี๋ยวเลี้ยงหนม</h1>
      ) : count >= 250 ? (
        <h1>ใกล้ถึงแล้วคลิกอีกนิดเดียวมา ๆ</h1>
      ) : count >= 80 ? (
        <h1>สายรหัสหรอผมเป็นสาย 1 เองแหละเลขท้ายอะไรน้า</h1>
      ) : count >= 70 ? (
        <h1>งั้นก็แค่คลิกแล้วเจอกันนะ</h1>
      ) : count >= 60 ? (
        <h1>คุณแค่คลิกไปเรื่่อยๆแบบนี้ก็พอละ</h1>
      ) : count >= 50 ? (
        <h1>หาคำใบ้จากผมหรอไม่มีหรอก</h1>
      ) : count >= 40 ? (
        <h1>เดินสวนกันทุกวัน</h1>
      ) : count >= 30 ? (
        <h1>โดยหาตัวผมง่ายมากจริง ๆ แล้ว</h1>
      ) : count >= 20 ? (
        <h1>นี่คือ web app ที่ผมเขียนมาเพื่อช่วยคุณ</h1>
      ) : count >= 10 ? (
        <h1>ผมเป็นพี่รหัสพวกคุณแหละ</h1>
      ) : count >= 2 ? (
        <h1>hello BIS3R1 Jr.</h1>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
