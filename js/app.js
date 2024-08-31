document.addEventListener('DOMContentLoaded', function() {
    // Slide show logic
    const slideWrapper = document.querySelector('.slide-wrapper-hotelbooking');
    const images = document.querySelectorAll('.slide-hotelbooking img');
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');

    let currentIndex = 0;

    function updateSlidePosition() {
        const imageWidth = images[0].clientWidth;
        slideWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 3) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    window.addEventListener('resize', updateSlidePosition);
});

//(hotel-item)

document.addEventListener('DOMContentLoaded', function() {
    // Toggle button, arrange items, and highlights logic
    const toggleButton = document.getElementById('toggleSeemoreHide');
    const form4 = document.querySelector('.form-4');

    toggleButton.addEventListener('click', function() {
        form4.classList.toggle('expanded');
        if (form4.classList.contains('expanded')) {
            toggleButton.textContent = '[-] Ẩn xem thêm';
        } else {
            toggleButton.textContent = '[+] Xem thêm';
        }
    });

    const arrangeItem = document.querySelectorAll('.arrange-item');

    arrangeItem.forEach(item => {
        item.addEventListener('click', function() {   
            arrangeItem.forEach(i => i.classList.remove('active'));  
            this.classList.add('active');
        });
    });

    document.getElementById("highlights-title-1").addEventListener("click", function() {
        document.getElementById("highlights-content-1").classList.toggle("shrink");
    });
    document.getElementById("highlights-title-2").addEventListener("click", function() {
        document.getElementById("highlights-content-2").classList.toggle("shrink");
    });
});

//search
document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdown visibility when place-text2 is clicked
    document.getElementById('place-text2').addEventListener('click', function() {
        const dropdown4 = document.getElementById('dropdownContainer');
        dropdown4.style.display = dropdown4.style.display === 'block' ? 'none' : 'block';
    });
    
    // Toggle sub-menu visibility
    function toggleSubMenu(id) {
        const submenu = document.getElementById(id);
        const arrowIcon = document.getElementById('arrow-' + id);
    
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            arrowIcon.classList.remove('show-submenu');
        } else {
            submenu.style.display = 'block';
            arrowIcon.classList.add('show-submenu');
        }
    }

    // Select option and close dropdown
    function selectOption(element) {
        const selectedText = element.querySelector('.dd-name') ? element.querySelector('.dd-name').textContent : element.textContent;
        document.getElementById('place-text2').textContent = selectedText;
        document.getElementById('dropdownContainer').style.display = 'none';
    }
    
    // Add event listeners for dropdown items
    const dropdownItems = document.querySelectorAll('.dropdowns-item'); // Changed to match class in HTML
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (!this.classList.contains('toggle-section') && !this.classList.contains('toggle-submenu')) {
                selectOption(this);
            }
        });
    });

    // Add event listeners for toggle sections
    const toggleSections = document.querySelectorAll('.toggle-section');
    toggleSections.forEach(section => {
        section.addEventListener('click', function() {
            const id = this.nextElementSibling.id;
            toggleSubMenu(id);
        });
    });

    // Add event listeners for toggle submenus
    const toggleSubmenus = document.querySelectorAll('.toggle-submenu');
    toggleSubmenus.forEach(submenu => {
        submenu.addEventListener('click', function() {
            const id = this.nextElementSibling.id;
            toggleSubMenu(id);
        });
    });

    // Hide dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('dropdownContainer');
        const placeText = document.getElementById('place-text2');
        if (!dropdown.contains(event.target) && event.target !== placeText) {
            dropdown.style.display = 'none';
        }
    });
});
//

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dl-text2').addEventListener('click', function() {
        const dropdown = document.getElementById('dropdownPlease');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.querySelectorAll('#dropdownPlease li').forEach(function(item) {
        item.addEventListener('click', function() {
            document.getElementById('dl-text2').textContent = this.getAttribute('data-value');
            document.getElementById('dropdownPlease').style.display = 'none'; // Ẩn dropdown khi chọn
        });
    });
    
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.departure-location')) {
            document.getElementById('dropdownPlease').style.display = 'none'; // Ẩn dropdown nếu click ra ngoài
        }
    });
    });


//SEARCH HOTEL - MAIN
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('locationText2').addEventListener('click', function(event) {
    const dropdown = document.getElementById('locationDropdown2');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
});
    });

document.addEventListener('click', function(event) {
    const dropdown2 = document.getElementById('locationDropdown2');
    if (event.target.closest('#locationDropdown2') === null) {
        dropdown2.style.display = 'none';
    }
});

document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const location = this.getAttribute('data-location');
        document.getElementById('locationText2').textContent = location;
        document.getElementById('locationDropdown2').style.display = 'none';
    });
});

//-----------------------------LOGIN-LOGOUT------------------------------------
// showpassword
const eyeIcons = document.querySelectorAll(".showpassword");
   
eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener("click",()=>{
        const pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type==="password"){
            eyeIcon.classList.replace("fa-eye-slash","fa-eye");
            return(pInput.type="text");
        }
        eyeIcon.classList.replace("fa-eye","fa-eye-slash");
        pInput.type="password";
    });
});
//------------------------------------------------JS HOTEL - KHACH SAN -T1----------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const imageWrapper = document.querySelector('.image-wrapper-hotel');
    const leftIcon = document.querySelector('.left-icon-et');
    const rightIcon = document.querySelector('.right-icon-et');

    let currentIndex = 0;
    const cardWidth = document.querySelector('.image-card-et').offsetWidth + 
                    parseInt(window.getComputedStyle(document.querySelector('.image-card-et')).marginLeft) + 
                    parseInt(window.getComputedStyle(document.querySelector('.image-card-et')).marginRight);

    rightIcon.addEventListener('click', () => {
    if (currentIndex < 3) { // Chỉ cho phép dịch chuyển tối đa 3 lần (7 - 4)
        currentIndex++;
        imageWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
    });

    leftIcon.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        imageWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
    });
});




//-----------------------------------------------JS TOUR BOOKING -T2--------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 5; i++) { 
        document.getElementById(`toggle-tb-${i}`).addEventListener("click", function() {
            document.getElementById(`question-tb-${i}`).classList.toggle("shrink");
        });
    }
});  
 //----------------------------------------------JS TOUR DETAIL -T2---------------------------------------------------------
// Khởi tạo flatpickr cho ngày đi
document.addEventListener("DOMContentLoaded", function() {
    let selectDepartureDate = flatpickr("#selectDepartureDate", {
     dateFormat: "d/m/Y",
     minDate: "today",
     onChange: function(selectedDates, dateStr, instance) {
         document.getElementById('selectDepartureDate').textContent = dateStr;
     }
 })
    });
 
    document.addEventListener('DOMContentLoaded', function() {
     let adultCount = 0;
   let childCount = 0;
   let infantCount = 0;
 
 function updateGuestDisplay() {
       const totalGuests = adultCount + childCount + infantCount;
       document.getElementById('guestCount').textContent = totalGuests;
   }
 // Số lượng người lớn
 document.getElementById('adultPlus').addEventListener('click', () => {
       adultCount++;
       document.getElementById('adultCount').textContent = adultCount;
       updateGuestDisplay();
   });
 
   document.getElementById('adultMinus').addEventListener('click', () => {
       if (adultCount > 0) {
           adultCount--;
           document.getElementById('adultCount').textContent = adultCount;
           updateGuestDisplay();
       }
   });
 
   // Số lượng trẻ em
   document.getElementById('childPlus').addEventListener('click', () => {
       childCount++;
       document.getElementById('childCount').textContent = childCount;
       updateGuestDisplay();
   });
 
   document.getElementById('childMinus').addEventListener('click', () => {
       if (childCount > 0) {
           childCount--;
           document.getElementById('childCount').textContent = childCount;
           updateGuestDisplay();
       }
   });
 
   // Số lượng em bé
   document.getElementById('infantPlus').addEventListener('click', () => {
       infantCount++;
       document.getElementById('infantCount').textContent = infantCount;
       updateGuestDisplay();
   });
 
   document.getElementById('infantMinus').addEventListener('click', () => {
       if (infantCount > 0) {
           infantCount--;
           document.getElementById('infantCount').textContent = infantCount;
           updateGuestDisplay();
       }
   });
 });

//---------------------------------JS HEADER---------------------------------------- 

window.onscroll = function() {stickyMenu()};

var navbar = document.getElementById("headerMain");
var sticky = headerMain.offsetTop;

function stickyMenu() {
  if (window.scrollY >= sticky) {
    headerMain.classList.add("sticky");
  } else {
    headerMain.classList.remove("sticky");
  }
}

function swapItems(event, newText, newIconClass) {
    event.preventDefault();
    
    let fixedItem = document.getElementById('fixedItem');
    let dropdownContent = document.querySelector('.dropdown-menu-content');
    let dropdownItems = Array.from(dropdownContent.querySelectorAll('a'));
    
    // Lấy thẻ <a> bên trong mục cố định hiện tại
    let fixedItemAnchor = fixedItem.querySelector('a');
    
    // Lấy thông tin của mục cố định hiện tại
    let oldText = fixedItem.querySelector('span').textContent;
    let oldIconClass = fixedItem.querySelector('i').className;
    
    // Cập nhật tiêu đề của mục cố định, bao gồm cả biểu tượng
    fixedItem.innerHTML = `<i class="${newIconClass}"></i><span>${newText}</span>`;
    fixedItem.classList.add('fixed-item');
    // Tạo mục mới cho dropdown với thông tin của mục cố định cũ
    let newDropdownItem = document.createElement('a');
    newDropdownItem.href = '#';
    newDropdownItem.dataset.text = oldText;
    newDropdownItem.dataset.icon = oldIconClass;
    newDropdownItem.innerHTML = `<i class="${oldIconClass}"></i>${oldText}`;
    newDropdownItem.onclick = (e) => swapItems(e, oldText, oldIconClass);

    // Thêm mục cũ vào dropdown nếu chưa có
    if (![...dropdownItems].some(item => item.dataset.text === oldText)) {
        dropdownContent.appendChild(newDropdownItem);
    }
    
    // Xóa mục đã chọn ra khỏi dropdown để tránh trùng lặp
    dropdownItems.forEach(item => {
        if (item.dataset.text === newText) {
            item.remove();
        }
    });

    closeDropdown(); // Đóng dropdown sau khi chọn
}

// Hàm để mở/đóng dropdown
function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = event.currentTarget.parentNode;
    dropdown.classList.toggle('active');
}

// Hàm để đóng tất cả các dropdown
function closeDropdown() {
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('active');
    });
}

// Đóng dropdown khi nhấp chuột ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-menu, .dropdown-menu *')) {
        closeDropdown();
    }
}

//------------------------------------------JS MAIN - TRANG CHỦ-----------------------------------------------------
// Slide-show ( MAIN + HOTEL)
document.addEventListener('DOMContentLoaded', function() {
    const listImage = document.querySelector('.list-images')
    const imgs = document.querySelectorAll('.imgs')
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')
    const length = imgs.length
    let current = 0

    const handleChangeSlide = () => {
        if (current == length - 1){
            current = 0
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(0px)`
            document.querySelector('.active').classList.remove('active')
            document.querySelector('.index-item-'+ current).classList.add('active')
        } else{
            current ++
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(${width * -1 * current}px)`
            document.querySelector('.active').classList.remove('active')
            document.querySelector('.index-item-'+ current).classList.add('active')
        }
    }

    let handleEvent = setInterval(handleChangeSlide, 4000)

    arrowRight.addEventListener('click', () =>{
        clearInterval(handleEvent)
        handleChangeSlide()
        handleEvent = setInterval(handleChangeSlide, 4000)
    })

    arrowLeft.addEventListener('click', () =>{
        clearInterval(handleEvent)
        if (current == 0){
            current = length - 1
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(0px)`
            document.querySelector('.active').classList.remove('active')
            document.querySelector('.index-item-'+ current).classList.add('active')
        } else{
            current --
            let width = imgs[0].offsetWidth
            listImage.style.transform = `translateX(${width * -1 * current}px)`
            document.querySelector('.active').classList.remove('active')
            document.querySelector('.index-item-'+ current).classList.add('active')
        }
        handleEvent = setInterval(handleChangeSlide, 4000)
    })
});

// filter-search
    document.addEventListener("DOMContentLoaded", function() {
        //Hiển thị từng container search
        function showContainer(index) {
            var containers = document.querySelectorAll('.container-index');
            containers.forEach(function(container) {
                container.classList.remove('active');
            });
            document.getElementById('containerIndex' + index).classList.add('active');
    
            var items = document.querySelectorAll('.list-menu-index li');
            items.forEach(function(item) {
                item.classList.remove('active');
            });
            document.getElementById('itemIndex' + index).classList.add('active');
        }
    
        // Kích hoạt mục đầu tiên
        document.getElementById('itemIndex1').classList.add('active');
    
        var menuItems = document.querySelectorAll('.list-menu-index li');
        menuItems.forEach(function(item, index) {
            item.addEventListener('click', function() {
                showContainer(index + 1);
            });
        });
    
        // swap - hoán đổi 
        document.getElementById('swap').addEventListener('click', function() {
            let swaptext1 = document.getElementById('swaptext1');
            let swaptext2 = document.getElementById('swaptext2');
            
            let parent1 = swaptext1.parentNode;
            let sibling1 = swaptext1.nextSibling === swaptext2 ? swaptext1 : swaptext1.nextSibling;
            
            swaptext2.parentNode.insertBefore(swaptext1, swaptext2.nextSibling);
            parent1.insertBefore(swaptext2, sibling1);
        });
    });

    //search-main
    document.addEventListener('click', function(event) {
        var departureSelector = document.getElementById('departureSelector');
        var arrivalSelector = document.getElementById('arrivalSelector');
        var isClickInsideDeparture = departureSelector.contains(event.target);
        var isClickInsideArrival = arrivalSelector.contains(event.target);
        var isClickOnSwaptext1 = document.getElementById('swaptext1').contains(event.target);
        var isClickOnSwaptext2 = document.getElementById('swaptext2').contains(event.target);
    
        if (!isClickInsideDeparture && !isClickOnSwaptext1) {
            departureSelector.classList.remove('show');
        }
    
        if (!isClickInsideArrival && !isClickOnSwaptext2) {
            arrivalSelector.classList.remove('show');
        }
    });
    
     function toggleSelector(selectorId) {
        var selector = document.getElementById(selectorId);
        var isVisible = selector.classList.contains('show');
        
        // Ẩn tất cả các bảng chọn
        document.querySelectorAll('.location-selector').forEach(function(el) {
            el.classList.remove('show');
        });
        
        // Hiển thị bảng chọn nếu nó chưa hiển thị
        if (!isVisible) {
            selector.classList.add('show');
    
        }
    }
    
    function showOptions(type, category) {
        // Ẩn tất cả các tùy chọn cho bảng chọn này
        document.querySelectorAll(`#${type}Selector .location-options`).forEach(function(el) {
            el.classList.remove('show');
        });
        
        // Hiển thị tùy chọn của loại đã chọn
        document.getElementById(`${type}-${category}`).classList.add('show');
    }
    
    function selectOption(textId, selectorId) {
        var textElement = document.getElementById(textId);
        var selectedOption = event.target.innerText;
        
        // Cập nhật văn bản của chọn địa điểm
        textElement.innerText = selectedOption;
        
        // Ẩn bảng chọn sau khi chọn
        document.getElementById(selectorId).classList.remove('show');
    }

//SEARCH TIME - GUEST - 1
// Khởi tạo flatpickr cho ngày đi
let departureDateTextMain = flatpickr("#departureDateText", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('departureDateText').textContent = dateStr;
        // Cập nhật minDate cho ngày về dựa trên ngày đi
        returnDateTextMain.set('minDate', dateStr);
        // Nếu ngày đi được chọn sau ngày về thì xóa ngày về
        if (returnDateTextMain.input.value && new Date(dateStr) > new Date(returnDateTextMain.input.value)) {
            returnDateTextMain.clear();
            document.getElementById('returnDateText').textContent = "Chọn ngày";
        }
    }
});

// Khởi tạo flatpickr cho ngày về
let returnDateTextMain = flatpickr("#returnDateText", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('returnDateText').textContent = dateStr;
        // Cập nhật maxDate cho ngày đi dựa trên ngày về
        departureDateTextMain.set('maxDate', dateStr);
        // Nếu ngày về được chọn trước ngày đi thì xóa ngày đi
        if (departureDateTextMain.input.value && new Date(dateStr) < new Date(departureDateTextMain.input.value)) {
            departureDateTextMain.clear();
            document.getElementById('departureDateText').textContent = "Chọn ngày";
        }
    }
});
const guestPickerContainerMain = document.getElementById('guestPickerContainer');
  const guestDropdownMain = document.getElementById('guestDropdown');

  let adultCountMain = 0;
  let childCountMain = 0;
  let infantCountMain = 0;

  // Cập nhật hiển thị tổng số khách
  function updateGuestDisplay() {
      const totalGuests = adultCountMain + childCountMain + infantCountMain;
      document.getElementById('guestCount').textContent = totalGuests;
  }

  // Số lượng người lớn
  document.getElementById('adultPlus').addEventListener('click', () => {
      adultCountMain++;
      document.getElementById('adultCount').textContent = adultCountMain;
      updateGuestDisplay();
  });

  document.getElementById('adultMinus').addEventListener('click', () => {
      if (adultCountMain > 0) {
          adultCountMain--;
          document.getElementById('adultCount').textContent = adultCountMain;
          updateGuestDisplay();
      }
  });

  // Số lượng trẻ em
  document.getElementById('childPlus').addEventListener('click', () => {
      childCountMain++;
      document.getElementById('childCount').textContent = childCountMain;
      updateGuestDisplay();
  });

  document.getElementById('childMinus').addEventListener('click', () => {
      if (childCountMain > 0) {
          childCountMain--;
          document.getElementById('childCount').textContent = childCountMain;
          updateGuestDisplay();
      }
  });

  // Số lượng em bé
  document.getElementById('infantPlus').addEventListener('click', () => {
      infantCountMain++;
      document.getElementById('infantCount').textContent = infantCountMain;
      updateGuestDisplay();
  });

  document.getElementById('infantMinus').addEventListener('click', () => {
      if (infantCountMain > 0) {
          infantCountMain--;
          document.getElementById('infantCount').textContent = infantCountMain;
          updateGuestDisplay();
      }
  });

  // Hiển thị dropdown khi click vào số khách
  document.getElementById('guestPickerContainer').addEventListener('click', (event) => {
      document.getElementById('guestDropdown').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', (event) => {
    if (!document.getElementById('guestPickerContainer').contains(event.target) && !document.getElementById('guestDropdown').contains(event.target)) {
        document.getElementById('guestDropdown').style.display = 'none';
    }
    document.getElementById('overlay').style.display = 'none'; // Ẩn lớp overlay khi click ra ngoài
});

// Ngăn đóng dropdown khi click bên trong dropdown
document.getElementById('guestDropdown').addEventListener('click', (event) => {
    event.stopPropagation();
});

//SEARCH HOTEL - MAIN
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('locationText').addEventListener('click', function(event) {
    const dropdown = document.getElementById('locationDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
});
    });

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('locationDropdown');
    if (event.target.closest('#locationDropdown') === null) {
        dropdown.style.display = 'none';
    }
});

document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const location = this.getAttribute('data-location');
        document.getElementById('locationText').textContent = location;
        document.getElementById('locationDropdown').style.display = 'none';
    });
});

//---------------------------------------------------JS AIRLINE TICKET - VE MAY BAY------------------------------------

//lịch trình
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`toggle-question-${i}`).addEventListener("click", function() {
            document.getElementById(`question-item-${i}`).classList.toggle("shrink");
        });
    }
    
});

// SEARCH TIME - GUEST - 2
// Khởi tạo flatpickr cho ngày đi
let departureDateTextMain2 = flatpickr("#departureDateText2", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('departureDateText2').textContent = dateStr;
        // Cập nhật minDate cho ngày về dựa trên ngày đi
        returnDateTextMain2.set('minDate', dateStr);
        // Nếu ngày đi được chọn sau ngày về thì xóa ngày về
        if (returnDateTextMain2.input.value && new Date(dateStr) > new Date(returnDateTextMain2.input.value)) {
            returnDateTextMain2.clear();
            document.getElementById('returnDateText2').textContent = "Chọn ngày";
        }
    }
});

// Khởi tạo flatpickr cho ngày về
let returnDateTextMain2 = flatpickr("#returnDateText2", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('returnDateText2').textContent = dateStr;
        // Cập nhật maxDate cho ngày đi dựa trên ngày về
        departureDateTextMain2.set('maxDate', dateStr);
        // Nếu ngày về được chọn trước ngày đi thì xóa ngày đi
        if (departureDateTextMain2.input.value && new Date(dateStr) < new Date(departureDateTextMain2.input.value)) {
            departureDateTextMain2.clear();
            document.getElementById('departureDateText2').textContent = "Chọn ngày";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
const guestPickerContainerMain2 = document.getElementById('guestPickerContainer2');
  const guestDropdownMain2 = document.getElementById('guestDropdown2');

  let adultCountMain2 = 0;
  let childCountMain2 = 0;
  let infantCountMain2 = 0;

  // Cập nhật hiển thị tổng số khách
  function updateGuestDisplay() {
      const totalGuests2 = adultCountMain2 + childCountMain2 + infantCountMain2;
      document.getElementById('guestCount2').textContent = totalGuests2;
  }

  // Số lượng người lớn
  document.getElementById('adultPlus2').addEventListener('click', () => {
      adultCountMain2++;
      document.getElementById('adultCount2').textContent = adultCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('adultMinus2').addEventListener('click', () => {
      if (adultCountMain2 > 0) {
          adultCountMain2--;
          document.getElementById('adultCount2').textContent = adultCountMain2;
          updateGuestDisplay();
      }
  });

  // Số lượng trẻ em
  document.getElementById('childPlus2').addEventListener('click', () => {
      childCountMain2++;
      document.getElementById('childCount2').textContent = childCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('childMinus2').addEventListener('click', () => {
      if (childCountMain2 > 0) {
          childCountMain2--;
          document.getElementById('childCount2').textContent = childCountMain2;
          updateGuestDisplay();
      }
  });

  // Số lượng em bé
  document.getElementById('infantPlus2').addEventListener('click', () => {
      infantCountMain2++;
      document.getElementById('infantCount2').textContent = infantCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('infantMinus2').addEventListener('click', () => {
      if (infantCountMain2 > 0) {
          infantCountMain2--;
          document.getElementById('infantCount2').textContent = infantCountMain2;
          updateGuestDisplay();
      }
  });

  // Hiển thị dropdown khi click vào số khách
  document.getElementById('guestPickerContainer2').addEventListener('click', (event) => {
      document.getElementById('guestDropdown2').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', (event) => {
    if (!document.getElementById('guestPickerContainer2').contains(event.target) && !document.getElementById('guestDropdown2').contains(event.target)) {
        document.getElementById('guestDropdown2').style.display = 'none';
    }
    document.getElementById('overlay').style.display = 'none'; // Ẩn lớp overlay khi click ra ngoài
});

// Ngăn đóng dropdown khi click bên trong dropdown
document.getElementById('guestDropdown2').addEventListener('click', (event) => {
    event.stopPropagation();
});
});

// swap - hoán đổi 
document.getElementById('swap-air').addEventListener('click', function() {
    let swaptext1 = document.getElementById('swaptext1');
    let swaptext2 = document.getElementById('swaptext2');
    
    let parent1 = swaptext1.parentNode;
    let sibling1 = swaptext1.nextSibling === swaptext2 ? swaptext1 : swaptext1.nextSibling;
    
    swaptext2.parentNode.insertBefore(swaptext1, swaptext2.nextSibling);
    parent1.insertBefore(swaptext2, sibling1);
});



//-------------------------------------------------JS HOTEL ITEM - T2------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     // Toggle button, arrange items, and highlights logic
//     const toggleButton = document.getElementById('toggleSeemoreHide');
//     const form4 = document.querySelector('.form-4');

//     toggleButton.addEventListener('click', function() {
//         form4.classList.toggle('expanded');
//         if (form4.classList.contains('expanded')) {
//             toggleButton.textContent = '[-] Ẩn xem thêm';
//         } else {
//             toggleButton.textContent = '[+] Xem thêm';
//         }
//     });

//     const arrangeItem = document.querySelectorAll('.arrange-item');

//     arrangeItem.forEach(item => {
//         item.addEventListener('click', function() {   
//             arrangeItem.forEach(i => i.classList.remove('active'));  
//             this.classList.add('active');
//         });
//     });

//     document.getElementById("highlights-title-1").addEventListener("click", function() {
//         document.getElementById("highlights-content-1").classList.toggle("shrink");
//     });
//     document.getElementById("highlights-title-2").addEventListener("click", function() {
//         document.getElementById("highlights-content-2").classList.toggle("shrink");
//     });
// });


//-------------------------------JS HOTEL BOOKING T3-----------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     // Slide show logic
//     const slideWrapper = document.querySelector('.slide-wrapper-hotelbooking');
//     const images = document.querySelectorAll('.slide-hotelbooking img');
//     const nextButton = document.querySelector('.arrow-right');
//     const prevButton = document.querySelector('.arrow-left');

//     let currentIndex = 0;

//     function updateSlidePosition() {
//         const imageWidth = images[0].clientWidth;
//         slideWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
//     }

//     nextButton.addEventListener('click', () => {
//         if (currentIndex < images.length - 3) {
//             currentIndex++;
//             updateSlidePosition();
//         }
//     });

//     prevButton.addEventListener('click', () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateSlidePosition();
//         }
//     });

//     window.addEventListener('resize', updateSlidePosition);
// });


// //introduce-menu active
// const introduceMenuItem = document.querySelectorAll('.introduce-menu-item');

// introduceMenuItem.forEach(item => {
//     item.addEventListener('click', function() {   
//         introduceMenuItem.forEach(i => i.classList.remove('active'));  
//         this.classList.add('active');
//     });
// });
// //utilities shrink

// document.getElementById("up-down").addEventListener("click", function() {
//     document.getElementById("utilities-left").classList.toggle("shrink");
//   });

  //SEARCH-HOTEL BOOKING
   // Khởi tạo flatpickr cho ngày đi
document.addEventListener('DOMContentLoaded', function() {
let departureDateText = flatpickr("#departureDateText", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('departureDateText').textContent = dateStr;
        // Cập nhật minDate cho ngày về dựa trên ngày đi
        returnDateText.set('minDate', dateStr);
        // Nếu ngày đi được chọn sau ngày về thì xóa ngày về
        if (returnDateText.input.value && new Date(dateStr) > new Date(returnDateText.input.value)) {
            returnDateText.clear();
            document.getElementById('returnDateText').textContent = "Chọn ngày";
        }
    }
});

// Khởi tạo flatpickr cho ngày về
let returnDateText = flatpickr("#returnDateText", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        document.getElementById('returnDateText').textContent = dateStr;
        // Cập nhật maxDate cho ngày đi dựa trên ngày về
        departureDateText.set('maxDate', dateStr);
        // Nếu ngày về được chọn trước ngày đi thì xóa ngày đi
        if (departureDateText.input.value && new Date(dateStr) < new Date(departureDateText.input.value)) {
            departureDateText.clear();
            document.getElementById('departureDateText').textContent = "Chọn ngày";
        }
    }
});


  const guestPickerContainer = document.getElementById('guestPickerContainer');
  const roomPickerContainer = document.getElementById('roomPickerContainer');
  const guestDropdown = document.getElementById('guestDropdown');
  const roomDropdown = document.getElementById('roomDropdown');

  let adultCount = 0;
  let childCount = 0;
  let infantCount = 0;

  // Cập nhật hiển thị tổng số khách
  function updateGuestDisplay() {
      const totalGuests = adultCount + childCount + infantCount;
      document.getElementById('guestCount').textContent = totalGuests;
  }

  // Số lượng người lớn
  document.getElementById('adultPlus').addEventListener('click', () => {
      adultCount++;
      document.getElementById('adultCount').textContent = adultCount;
      updateGuestDisplay();
  });

  document.getElementById('adultMinus').addEventListener('click', () => {
      if (adultCount > 0) {
          adultCount--;
          document.getElementById('adultCount').textContent = adultCount;
          updateGuestDisplay();
      }
  });

  // Số lượng trẻ em
  document.getElementById('childPlus').addEventListener('click', () => {
      childCount++;
      document.getElementById('childCount').textContent = childCount;
      updateGuestDisplay();
  });

  document.getElementById('childMinus').addEventListener('click', () => {
      if (childCount > 0) {
          childCount--;
          document.getElementById('childCount').textContent = childCount;
          updateGuestDisplay();
      }
  });

  // Số lượng em bé
  document.getElementById('infantPlus').addEventListener('click', () => {
      infantCount++;
      document.getElementById('infantCount').textContent = infantCount;
      updateGuestDisplay();
  });

  document.getElementById('infantMinus').addEventListener('click', () => {
      if (infantCount > 0) {
          infantCount--;
          document.getElementById('infantCount').textContent = infantCount;
          updateGuestDisplay();
      }
  });

  // Hiển thị dropdown khi click vào số khách
  document.getElementById('guestPickerContainer').addEventListener('click', (event) => {
      document.getElementById('guestDropdown').style.display = 'block';
      document.getElementById('roomDropdown').style.display = 'none'; // Ẩn dropdown số phòng nếu mở số khách
      document.getElementById('overlay').style.display = 'block';
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  });


  // Hiển thị dropdown khi click vào số phòng
  document.getElementById('roomPickerContainer').addEventListener('click', (event) => {
      document.getElementById('roomDropdown').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  });

  // Cập nhật số phòng khi chọn
  document.querySelectorAll('#roomDropdown .room-item').forEach(item => {
      item.addEventListener('click', (event) => {
          const value = event.target.getAttribute('data-value');
          document.getElementById('numberRoomCount').textContent = value;
          document.getElementById('roomDropdown').style.display = 'none';
          document.getElementById('overlay').style.display = 'none'; 
      });
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', (event) => {
      if (!document.getElementById('guestPickerContainer').contains(event.target) && !document.getElementById('guestDropdown').contains(event.target)) {
          document.getElementById('guestDropdown').style.display = 'none';
      }
      if (!document.getElementById('roomPickerContainer').contains(event.target) && !document.getElementById('roomDropdown').contains(event.target)) {
          document.getElementById('roomDropdown').style.display = 'none';
      }
      document.getElementById('overlay').style.display = 'none'; // Ẩn lớp overlay khi click ra ngoài
  });

  // Ngăn đóng dropdown khi click bên trong dropdown
  document.getElementById('guestDropdown').addEventListener('click', (event) => {
      event.stopPropagation();
  });

  document.getElementById('roomDropdown').addEventListener('click', (event) => {
      event.stopPropagation();
  });
});
//total-price

  const basePrice = 1785000; // Giá tiền cố định
  const taxRate = 0.176;
  let quantity = 0;

  function updateDisplay() {
      // Hiển thị giá tiền cố định
      document.getElementById('price').innerText = basePrice.toLocaleString();

      if (quantity > 0) {
          const totalPrice = basePrice * quantity;
          const tax = basePrice * taxRate * quantity;
          const total = totalPrice + tax;

          document.getElementById('tax').innerText = tax.toLocaleString();
          document.getElementById('total').innerText = total.toLocaleString();

          document.getElementById('taxRow').style.display = 'block';
          document.getElementById('totalRow').style.display = 'block';
          document.getElementById('btnBookNow').style.display = 'flex';
          document.getElementById('roomCount').innerText = `${quantity} /room${quantity > 1 ? 's' : ''}/night`;
      } else {
          document.getElementById('taxRow').style.display = 'none';
          document.getElementById('totalRow').style.display = 'none';
          document.getElementById('btnBookNow').style.display = 'none';
          document.getElementById('roomCount').innerText = '/phòng/đêm';
      }

      document.getElementById('quantity').innerText = quantity;

      document.getElementById('decreaseButton').disabled = (quantity === 0);
  }

  function increase() {
      quantity++;
      updateDisplay();
  }

  function decrease() {
      if (quantity > 0) {
          quantity--;
          updateDisplay();
      }
  }

  updateDisplay();

  //introduce-menu active
const introduceMenuItem = document.querySelectorAll('.introduce-menu-item');

introduceMenuItem.forEach(item => {
    item.addEventListener('click', function() {   
        introduceMenuItem.forEach(i => i.classList.remove('active'));  
        this.classList.add('active');
    });
});
//utilities shrink

document.getElementById("up-down").addEventListener("click", function() {
    document.getElementById("utilities-left").classList.toggle("shrink");
  });

  //-----------------------------------------JS HOTEL DETAIL - T4------------------------------------------------------

//input contact
function validateForm() {
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const phoneFormatError = document.getElementById('phone-format-error');
    const emailError = document.getElementById('email-error');
    const emailFormatError = document.getElementById('email-format-error');

    // Đặt tất cả các thông báo lỗi về trạng thái ẩn ban đầu
    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    phoneFormatError.style.display = 'none';
    emailError.style.display = 'none';
    emailFormatError.style.display = 'none';

    // Đặt tất cả các ô nhập liệu về trạng thái mặc định
    fullname.classList.remove('valid', 'invalid');
    phone.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');

    let isValid = true;

    // Kiểm tra ô họ và tên
    if (!fullname.value.trim()) {
        nameError.style.display = 'block';
        fullname.classList.add('invalid');
        isValid = false;
    } else {
        fullname.classList.add('valid');
    }

    // Kiểm tra ô số điện thoại
    if (!phone.value.trim()) {
        phoneError.style.display = 'block';
        phone.classList.add('invalid');
        isValid = false;
    } else {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phoneFormatError.style.display = 'block';
            phone.classList.add('invalid');
            isValid = false;
        } else {
            phone.classList.add('valid');
        }
    }

    // Kiểm tra ô email
    if (!email.value.trim()) {
        emailError.style.display = 'block';
        email.classList.add('invalid');
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailFormatError.style.display = 'block';
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.add('valid');
        }
    }

    if (isValid) {
        showNotification('Successfully !');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
  //-----------------------------------------JS HOTEL  - T1------------------------------------------------------



const guestPickerContainerMain2 = document.getElementById('guestPickerContainer2');
  const guestDropdownMain2 = document.getElementById('guestDropdown2');

  let adultCountMain2 = 0;
  let childCountMain2 = 0;
  let infantCountMain2 = 0;

  // Cập nhật hiển thị tổng số khách
  function updateGuestDisplay() {
      const totalGuests2 = adultCountMain2 + childCountMain2 + infantCountMain2;
      document.getElementById('guestCount3').textContent = totalGuests2;
  }

  // Số lượng người lớn
  document.getElementById('adultPlus2').addEventListener('click', () => {
      adultCountMain3++;
      document.getElementById('adultCount2').textContent = adultCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('adultMinus2').addEventListener('click', () => {
      if (adultCountMain2 > 0) {
          adultCountMain2--;
          document.getElementById('adultCount2').textContent = adultCountMain2;
          updateGuestDisplay();
      }
  });

  // Số lượng trẻ em
  document.getElementById('childPlus2').addEventListener('click', () => {
      childCountMain2++;
      document.getElementById('childCount2').textContent = childCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('childMinus2').addEventListener('click', () => {
      if (childCountMain2 > 0) {
          childCountMain2--;
          document.getElementById('childCount2').textContent = childCountMain2;
          updateGuestDisplay();
      }
  });

  // Số lượng em bé
  document.getElementById('infantPlus2').addEventListener('click', () => {
      infantCountMain2++;
      document.getElementById('infantCount2').textContent = infantCountMain2;
      updateGuestDisplay();
  });

  document.getElementById('infantMinus2').addEventListener('click', () => {
      if (infantCountMain2 > 0) {
          infantCountMain2--;
          document.getElementById('infantCount2').textContent = infantCountMain2;
          updateGuestDisplay();
      }
  });

  // Hiển thị dropdown khi click vào số khách
  document.getElementById('guestPickerContainer2').addEventListener('click', (event) => {
      document.getElementById('guestDropdown2').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', (event) => {
    if (!document.getElementById('guestPickerContainer2').contains(event.target) && !document.getElementById('guestDropdown2').contains(event.target)) {
        document.getElementById('guestDropdown2').style.display = 'none';
    }
    document.getElementById('overlay').style.display = 'none'; // Ẩn lớp overlay khi click ra ngoài
});

// Ngăn đóng dropdown khi click bên trong dropdown
document.getElementById('guestDropdown2').addEventListener('click', (event) => {
    event.stopPropagation();
});

//-----------------------------------------JS TOUR  - T1------------------------------------------------------

