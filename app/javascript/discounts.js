window.addEventListener('turbo:load', () => {

//   // 割引方法の選択ボタンを取得
  const percentBtn = document.getElementById("percent-btn");
  const fractionBtn = document.getElementById("fraction-btn");

//   // 割引率の選択エリア（％ / 割引）の取得
  const percentDiv = document.getElementById("discount-percent");
  const fractionDiv = document.getElementById("discount-fraction");

  const priceSection = document.getElementById("price-section");
  const resultSection = document.getElementById("result-section");

    // 初期状態は全部非表示にしておく
    percentDiv.style.display = "none";
    fractionDiv.style.display = "none";
    priceSection.style.display = "none";
    resultSection.style.display = "none";

    // 「％引き」ボタンを押したとき
    percentBtn.addEventListener("click", () => {
      percentDiv.style.display = "block";
      fractionDiv.style.display = "none";
      priceSection.style.display = "block";
      resultSection.style.display = "block";
    });

      // 「割引」ボタンを押したとき
  fractionBtn.addEventListener("click", () => {
    percentDiv.style.display = "none";
    fractionDiv.style.display = "block";
    priceSection.style.display = "block";
    resultSection.style.display = "block";
  });
});

//     // 金額入力と結果表示を表示
//     document.getElementById("price-section").style.display = "block";
//     document.getElementById("result-section").style.display = "block";
//   });

//   fractionBtn.addEventListener("click", function() {
//     fractionDiv.style.display = "block"; // 〇割引エリアを表示
//     percentDiv.style.display = "none"; // 〇％引きエリアを非表示

//     // 金額入力と結果表示を表示
//     document.getElementById("price-section").style.display = "block";
//     document.getElementById("result-section").style.display = "block";
//   });

//   // 計算処理
//   function calculateDiscountedPrice() {
//     const price = parseFloat(document.getElementById("price-input").value);
//     const percentInput = parseFloat(document.getElementById("percent-input").value);
//     const fractionInput = parseFloat(document.getElementById("fraction-input").value);

//     let discountRate = null;
  
//     if (!isNaN(percentInput)) {
//       discountRate = percentInput / 100; // ％ → 割引率
//     } else if (!isNaN(fractionInput)) {
//       discountRate = fractionInput * 0.1; // 割 → 割引率
//     }

//     if (!isNaN(price) && discountRate !== null){ 
//       const discounted = Math.floor(price * (1 - discountRate));
//       document.getElementById("discounted-price").textContent = discounted;
//     } else {
//       document.getElementById("discounted-price").textContent = "---";
//     }
//   }

//   // 入力のたびに計算
//   document.getElementById("price-input").addEventListener("input", calculateDiscountedPrice);
//   document.getElementById("percent-input").addEventListener("input", calculateDiscountedPrice);
//   document.getElementById("fraction-input").addEventListener("input", calculateDiscountedPrice);
// });

