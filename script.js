
        var isMenuOpen = false;
  
        function toggleMenu() {
          var menu = document.getElementById('Bmenu');
          var burgerIcon = document.getElementById('burger-icon');
          if (isMenuOpen) {
            // Возвращаем иконку бургера
            burgerIcon.innerHTML = `
              <rect y="18" width="30" height="3" fill="#2F366A"/>
              <rect y="9" width="30" height="3" fill="#2F366A"/>
              <rect width="30" height="3" fill="#2F366A"/>
            `;
            menu.classList.remove('active');
            isMenuOpen = false;
          } else {
            // Меняем на крестик
            burgerIcon.innerHTML = `
              <line x1="11.0766" y1="0.300248" x2="0.399757" y2="14.5176" stroke="#2F366A"/>
              <line x1="0.402437" y1="0.703278" x2="10.9531" y2="15.0129" stroke="#2F366A"/>
            `;
            menu.classList.add('active');
            isMenuOpen = true;
          }
        }