window.addEventListener('turbo:load', () => {

//   // 割引方法の選択ボタンを取得
  const percentBtn = document.getElementById("percent-btn");
  const fractionBtn = document.getElementById("fraction-btn");

//   // 割引率の選択エリア（％ / 割引）の取得
  const percentDiv = document.getElementById("discount-percent");
  const fractionDiv = document.getElementById("discount-fraction");

  const priceSection = document.getElementById("price-section");
  const resultSection = document.getElementById("result-section");

  const priceInput = document.getElementById("price-input");
  const percentInput = document.getElementById("percent-input");
  const fractionInput = document.getElementById("fraction-input");
  const result = document.getElementById("discounted-price");

  // 初期状態は全部非表示にしておく
  percentDiv.style.display = "none";
  fractionDiv.style.display = "none";
  priceSection.style.display = "none";
  resultSection.style.display = "none";

  // 「％引き」ボタンを押したとき
  if (percentBtn){
    percentBtn.addEventListener("click", () => {
      percentDiv.style.display = "block";
      fractionDiv.style.display = "none";
      priceSection.style.display = "block";
      resultSection.style.display = "block";
    });
  }

  // 「割引」ボタンを押したとき
  if (fractionBtn) {
    fractionBtn.addEventListener("click", () => {
    percentDiv.style.display = "none";
    fractionDiv.style.display = "block";
    priceSection.style.display = "block";
    resultSection.style.display = "block";
    });
  }

  // 割引後の価格を計算して表示する関数
  function calculateDiscountedPrice() {
    const price = parseFloat(priceInput.value);
    const percent = parseFloat(percentInput.value);
    const fraction = parseFloat(fractionInput.value);

    let discountRate = null;

    if (!isNaN(percent)) {
      discountRate = percent / 100;
    } else if (!isNaN(fraction)) {
      discountRate = fraction * 0.1;
    }

    if (!isNaN(price) && discountRate !== null) {
      const discounted = Math.floor(price * (1 - discountRate));
      result.textContent = discounted;
    } else {
      result.textContent = "---";
    }
  }

  // 入力のたびに再計算
  if (priceInput) priceInput.addEventListener("input", calculateDiscountedPrice);
  if (percentInput) percentInput.addEventListener("input", calculateDiscountedPrice);
  if (fractionInput) fractionInput.addEventListener("input", calculateDiscountedPrice);

  // ％ボタン用の処理
  document.querySelectorAll('#discount-percent button').forEach(button => {
    button.addEventListener("click", () => {
      const value = parseInt(button.textContent); // "10%" → 10
      percentInput.value = value;
      calculateDiscountedPrice();
    });
  });

  // 割ボタン用の処理
  document.querySelectorAll('#discount-fraction button').forEach(button => {
    button.addEventListener("click", () => {
      const value = parseInt(button.textContent); // "1割" → 1
      fractionInput.value = value;
      calculateDiscountedPrice();
    });
  });

});





