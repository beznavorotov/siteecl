   // Отримуємо необхідні елементи
   const modal = document.getElementById("modal");
   const btn = document.getElementById("open-modal");
   const btn2 = document.getElementById("open-modal-2");
   const btn3 = document.getElementById("open-modal-3");
   const btn4 = document.getElementById("open-modal-4");
   const btn5 = document.getElementById("open-modal-5");
   const btn6 = document.getElementById("open-modal-6");
   const span = document.getElementsByClassName("close")[0];

   // Додаємо обробник подій для відкриття модального вікна
   btn.onclick = function() {
     modal.style.display = "block";
   }
   btn2.onclick = function() {
    modal.style.display = "block";
  }
  btn3.onclick = function() {
    modal.style.display = "block";
  }
  btn4.onclick = function() {
    modal.style.display = "block";
  }
  btn5.onclick = function() {
    modal.style.display = "block";
  }
  btn6.onclick = function() {
    modal.style.display = "block";
  }
// Додаємо обробник подій для закриття модального вікна
       span.onclick= function() {
        modal.style.display = "none";
      }
      
      // Додаємо обробник подій для закриття модального вікна при натисканні на поза ним
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      
