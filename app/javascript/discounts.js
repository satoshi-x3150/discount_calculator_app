document.addEventListener("DOMContentLoaded", function() {
  // 割引方法の選択ボタンを取得
  const percentBtn = document.getElementById("percent-btn");
  const fractionBtn = document.getElementById("fraction-btn");

  // 割引率の選択エリア（％ / 割引）の取得
  const percentDiv = document.getElementById("discount-percent");
  const fractionDiv = document.getElementById("discount-fraction");

  // 割引方法のボタンをクリックしたときの処理
  percentBtn.addEventListener("click", function() {
    percentDiv.style.display = "block"; // 〇％引きエリアを表示
    fractionDiv.style.display = "none"; // 〇割引エリアを非表示
  });

  fractionBtn.addEventListener("click", function() {
    fractionDiv.style.display = "block"; // 〇割引エリアを表示
    percentDiv.style.display = "none"; // 〇％引きエリアを非表示
  });
});
