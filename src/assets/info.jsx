import { useEffect } from "react";

export default function Info({ count }) {
  useEffect(() => {
    if (count >= 20) {
      console.log("🧠 Count มากกว่า 20 แล้ว เทพจัด!");
    } else if (count >= 10) {
      console.log("🔥 เกิน 10 แล้ว กำลังมาดี!");
    } else {
      console.log("📉 ยังต่ำกว่า 10 อยู่นะ");
    }
  }, [count]);

  return (
    <div>
      <h1>You clicked {count} times</h1>

      {count >= 18 ? (
        <h1>ใกล้ถึงแล้วคลิกอีกนิดเดียวมา ๆ เดีี๋ยวเลี้ยงหนม</h1>
      ) : count >= 16 ? (
        <h1>งั้นก็แค่คลิกแล้วเจอกันนะ</h1>
      ): count >= 14 ? (
        <h1>คุณแค่คลิกไปเรื่่อยๆเท่านั้นแหละ</h1>
      ): count >= 12 ? (
        <h1>หลักคำใบผมหรอไม่มหรอก</h1>
      ): count >= 10 ? (
        <h1>เดินสวนกันทุกวัน</h1>
      ): count >= 8 ? (
        <h1>โดยหาตัวผมง่ายมากจริง ๆ แล้ว</h1>
      ): count >= 6 ? (
        <h1>นี่คือ web app ที่ผมเขียนมาเพื่อช่วยคุณ</h1>
      ): count >= 4 ? (
        <h1>ผมเป็นพี่รหัสพวกคุณแหละ</h1>
      ): count >= 2 ? (
        <h1>Hello BIS3R1 Jr.</h1>
      ) :(
        <h1>IG: newna_03_</h1>
      )}
    </div>
  );
}
