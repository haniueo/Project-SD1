$(document).ready(function() {

  // inisiasi variables
  // manusia = terserh pilih apa
  // ai = x or o, yang bukan dipilih player
  var human, ai;

  // cell pada game table
  var c00, c01, c02, c10, c11, c12, c20, c21, c22;

  // to keep track of whose turn it is
  var turn = 0;

  // player pilih x or o
  $("#x").click(function() {
    human = "X";
    ai = "O";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow",1);
  });
  $("#o").click(function() {
    human = "O";
    ai = "X";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow",1);
  });

  //semua bidak harus kosong
  //bersihkan bidak / kotak
  function clearBoard() {
    c00 = $("#c00").text("");
    c01 = $("#c01").text("");
    c02 = $("#c02").text("");
    c10 = $("#c10").text("");
    c11 = $("#c11").text("");
    c12 = $("#c12").text("");
    c20 = $("#c20").text("");
    c21 = $("#c21").text("");
    c22 = $("#c22").text("");
    turn = 0;
  }

  //jika Main lagi dipencet, maka clear kotak
  $("#new-game").click(function() {
    clearBoard();
    $("#final-screen").hide();
    $("#choice").fadeTo("slow",1);
  });

  // Player menklik kotak. If kotak kosong, X diletakan pada kotak tersebut. Jika kotak tidak kosong, human harus pilih kotak lain.
  $("td").click(function() {
    if (turn === 0) {
      if ($(this).text() === "") {
        $(this).text(human);
        checkSquareValues();
        checkBoardState();
        turn = 1;
        aiMove();
        checkSquareValues();
        checkBoardState();
      } else {
        alert("Kotak Penuh! Pilih kotak lain Oni-chan~");
      }
    }
  }); //fuction klik box terakhir

  // The ai mengambil tokenya berdasar rules tictactoe pada umum nya
  // 1. Jika ada kesempatan menang, pilih kotak itu.
  // 2. Jika ada kesempatan mem block jalan lawan, pilih kotak itu.
  // 3. Pusat kosong.
  // 4. jika oponen berada di sudut, the play berada di lawan sudut.
  // 5. sudut kosong.
  // 6. Empty kosong.
  function aiMove() {
    // case 1: jika ada kesempatan menang
    if (c00 === "" && ((c01 === ai && c02 === ai) || (c10 === ai && c20 === ai) || (c11 === ai && c22 === ai))) {
      $("#c00").text(ai);
      turn = 0;
    }
    else if (c01 === "" && ((c00 === ai && c02 === ai) || (c11 === ai && c21 === ai))) {
      $("#c01").text(ai);
      turn = 0;
    }
    else if (c02 === "" && ((c00 === ai && c01 === ai) || (c12 === ai && c22 === ai) || (c11 === ai && c20 === ai))) {
      $("#c02").text(ai);
      turn = 0;
    }
    else if (c10 === "" && ((c00 === ai && c20 === ai) || (c11 === ai && c12 === ai))) {
      $("#c10").text(ai);
      turn = 0;
    }
    else if (c11 === "" && ((c10 === ai && c12 === ai) || (c00 === ai && c22 === ai) || (c02 === ai && c20 === ai))) {
      $("#c11").text(ai);
      turn = 0;
    }
    else if (c12 === "" && ((c10 === ai && c11 === ai) || (c02 === ai && c22 === ai))) {
      $("#c12").text(ai);
      turn = 0;
    }
    else if (c20 === "" && ((c21 === ai && c22 === ai) || (c00 === ai && c10 === ai) || (c02 === ai && c11 === ai))) {
      $("#c20").text(ai);
      turn = 0;
    }
    else if (c21 === "" && ((c20 === ai && c22 === ai) || (c01 === ai && c11 === ai))) {
      $("#c21").text(ai);
      turn = 0;
    }
    else if (c22 === "" && ((c20 === ai && c21 === ai) || (c02 === ai && c12 === ai) || (c00 === ai && c11 === ai))) {
      $("#c22").text(ai);
      turn = 0;
    }
    // case 2: jika ada cara memblock lawan
    else if (c00 === "" && ((c01 === human && c02 === human) || (c10 === human && c20 === human) || (c11 === human && c22 === human))) {
      $("#c00").text(ai);
      turn = 0;
    }
    else if (c01 === "" && ((c00 === human && c02 === human) || (c11 === human && c21 === human))) {
      $("#c01").text(ai);
      turn = 0;
    }
    else if (c02 === "" && ((c00 === human && c01 === human) || (c12 === human && c22 === human) || (c11 === human && c20 === human))) {
      $("#c02").text(ai);
      turn = 0;
    }
    else if (c10 === "" && ((c00 === human && c20 === human) || (c11 === human && c12 === human))) {
      $("#c10").text(ai);
      turn = 0;
    }
    else if (c11 === "" && ((c10 === human && c12 === human) || (c00 === human && c22 === human) || (c02 === human && c20 === human))) {
      $("#c11").text(ai);
      turn = 0;
    }
    else if (c12 === "" && ((c10 === human && c11 === human) || (c02 === human && c22 === human))) {
      $("#c12").text(ai);
      turn = 0;
    }
    else if (c20 === "" && ((c21 === human && c22 === human) || (c00 === human && c10 === human) || (c02 === human && c11 === human))) {
      $("#c20").text(ai);
      turn = 0;
    }
    else if (c21 === "" && ((c20 === human && c22 === human) || (c01 === human && c11 === human))) {
      $("#c21").text(ai);
      turn = 0;
    }
    else if (c22 === "" && ((c20 === human && c21 === human) || (c02 === human && c12 === human) || (c00 === human && c11 === human))) {
      $("#c22").text(ai);
      turn = 0;
    }
    // case 3: center
    else if (c11 === "") {
      $("#c11").text(ai);
      turn = 0;
    }
    // case 4: sisi berlawanan
    else if (c00 === "" && (c02 === human  || c20 === human)) {
      $("#c00").text(ai);
      turn = 0;
    }
    else if (c02 === "" && (c00 === human  || c22 === human)) {
      $("#c02").text(ai);
      turn = 0;
    }
    else if (c22 === "" && (c02 === human  || c20 === human)) {
      $("#c22").text(ai);
      turn = 0;
    }
    else if (c20 === "" && (c00 === human  || c22 === human)) {
      $("#c20").text(ai);
      turn = 0;
    }
    // case 5: tengah
    else if (c00 === "") {
      $("#c00").text(ai);
      turn = 0;
    }
    else if (c02 === "") {
      $("#c02").text(ai);
      turn = 0;
    }
    else if (c20 === "") {
      $("#c20").text(ai);
      turn = 0;
    }
    else if (c22 === "") {
      $("#c22").text(ai);
      turn = 0;
    }
    // case 6: sisi kosong
    else if (c01 === "") {
      $("#c01").text(ai);
      turn = 0;
    }
    else if (c12 === "") {
      $("#c12").text(ai);
      turn = 0;
    }
    else if (c21 === "") {
      $("#c21").text(ai);
      turn = 0;
    }
    else if (c10 === "") {
      $("#c10").text(ai);
      turn = 0;
    }
  }

  // Program akan mengecek disetiap box setelah beberapa move
  function checkSquareValues() {
    c00 = $("#c00").html();
    c01 = $("#c01").html();
    c02 = $("#c02").html();
    c10 = $("#c10").html();
    c11 = $("#c11").html();
    c12 = $("#c12").html();
    c20 = $("#c20").html();
    c21 = $("#c21").html();
    c22 = $("#c22").html();
  }

  // program harus mengecek keadaane: tetep bermain, orang yang menang atau draw
  function checkBoardState() {
    // human wins
    if ((c00 === c01 && c00 === c02 && (c00 === human)) || // baris 1
      (c10 === c11 && c10 === c12 && (c10 === human)) || //baris 2
      (c20 === c21 && c20 === c22 && (c20 === human)) || //baris 3
      (c00 === c10 && c00 === c20 && (c00 === human)) || //kolom 1
      (c01 === c11 && c01 === c21 && (c01 === human)) || //kolom 2
      (c02 === c12 && c02 === c22 && (c02 === human)) || //kolom 3
      (c00 === c11 && c00 === c22 && (c00 === human)) || //diagonal 1
      (c02 === c11 && c02 === c20 && (c02 === human)) //diagonal 2
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("You win!");
      $("#final-screen").fadeTo("slow",3);
    }
    // ai wins
    else if ((c00 === c01 && c00 === c02 && (c00 === ai)) || //baris 1
      (c10 === c11 && c10 === c12 && (c10 === ai)) || //baris 2
      (c20 === c21 && c20 === c22 && (c20 === ai)) || //baris 3
      (c00 === c10 && c00 === c20 && (c00 === ai)) || //kolom 1
      (c01 === c11 && c01 === c21 && (c01 === ai)) || //kolom 2
      (c02 === c12 && c02 === c22 && (c02 === ai)) || //kolom 3
      (c00 === c11 && c00 === c22 && (c00 === ai)) || //diagonal 1
      (c02 === c11 && c02 === c20 && (c02 === ai)) //diagonal 2
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("Computer wins!");
      $("#final-screen").fadeTo("slow",10;
    }
    // tie
    else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {
      $("#board").fadeOut("slow");
      $("#winner").text("Draw!");
      $("#final-screen").fadeTo("slow",10);
    }
  }

}); //end ready function
