//Explore Btn
$(".btn1").hover(function(){
  $(this).css("background","#E6CCB2");
  $(this).css("color","#0000000");
  $(this).css("box-shadow","#7F5539 0px 5px 50px");
});

$(".btn1").mouseleave(function(){
    $(this).css("background","#B08968")
  $(this).css("color","#0000000");
    $(this).css("box-shadow","0px 0px 0px");
});
  //Explore Btn

  //MenuBanner Btn
$(".btn.btn-primary").hover(function(){
  $(this).css("background","#231709");
  $(this).css("color","#FF8E9E");
  $(this).css("box-shadow","#A459D1 0px 5px 50px");
});

$(".btn.btn-primary").mouseleave(function(){
    $(this).css("background","#0BA6FF");
    $(this).css("color","#FFFFFF");
    $(this).css("box-shadow","0px 0px 0px");
});
  //MenuBanner Btn

  // ReadMoreAboutBtn
  $(".ReadMoreAbout").hover(function(){
  $(this).css("background","#E6CCB2");
  $(this).css("color","#000000")
})

$(".ReadMoreAbout").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})
// ReadMoreAboutBtn

 // ReadMoreBtn
 $(".ReadMore1").hover(function(){
  $(this).css("background","#DDB892");
  $(this).css("color","#000000")
})

$(".ReadMore1").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})

$(".ReadMore2").hover(function(){
  $(this).css("background","#DDB892");
  $(this).css("color","#000000")
})

$(".ReadMore2").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})

$(".ReadMore3").hover(function(){
  $(this).css("background","#DDB892");
  $(this).css("color","#000000")
})

$(".ReadMore3").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})

$(".ReadMore4").hover(function(){
  $(this).css("background","#DDB892");
  $(this).css("color","#000000")
})

$(".ReadMore4").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})

$(".ReadMore5").hover(function(){
  $(this).css("background","#DDB892");
  $(this).css("color","#000000")
})

$(".ReadMore5").mouseout(function(){
  $(this).css("background","#B08968");
  $(this).css("color","#000000")
})
// ReadMoreBtn

// CartIcon
$("#cart-icon").click(function() {
  $(".cart").toggle();
});

$("#close-cart").click(function() {
    $(".cart").hide(); 
});
// CartIcon

// BtnCheckOut
$(".btn-checkout").hover(function(){
  $(this).css("background","#C4B0FF");  
})
// BtnCheckOut

// CtrBox
$(".ctr-box").hover(function(){
  $(this).css("transform"," scale(1.1)");
  $(this).css("box-shadow","white 0px 5px 10px 10px")
  $(this).css("transition","1s");
})

$(".ctr-box").mouseout(function(){
  $(this).css("transform","scale(1)");
  $(this).css("box-shadow","transparent 5px 5px 5px 5px")
})
// CtrBox

// HeaderBg
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 80);
});
// HeaderBg

// cart
$(document).ready(function() {
let cartIcon = $('#cart-icon');
let cart = $('.cart');
let cartClose = $('#close-cart');

cartIcon.click(function() {
  cart.addClass("active");
});

cartClose.click(function() {
  cart.removeClass("active");
});
});

$(document).ready(function() {
// Attach event listeners once the document is ready
var removeCartButton = $(".cart-remove");
removeCartButton.click(removeItem);

var qtyInputs = $(".cart-qty");
qtyInputs.change(qtyChanged);

var AddtoCart = $(".add-cart");
AddtoCart.click(AddtoCartClicked);

$(".btn-checkout").click(checkoutBtn);
});

function resetWebsite() {
cartProductTitles = [];

// Reset total price
$(".total-price").text("₱0");

// Remove all cart boxes
$(".cart-content").empty();
}

// removeItem
function removeItem(event) {
var buttonClicked = $(event.target);
buttonClicked.parent().remove();
updateTotal();
}

// qtyChanged
function qtyChanged(event) {
var inputs = $(event.target);
if (isNaN(inputs.val()) || inputs.val() <= 0) {
  inputs.val(1);
}
updateTotal();
}

var cartProductTitles = [];

function AddtoCartClicked(event) {
  var button = $(event.target);
  var shopping = button.parent();
  var title = shopping.find(".product-title").text();
  var price = shopping.find(".price").text();
  var imgProd = shopping.find(".img-product").attr("src");
  addProductinCart(title, price, imgProd);
  updateTotal();
}

function addProductinCart(title, price, imgProd) {
if (cartProductTitles.includes(title)) {
  alert("Product already exists");
  return;
}

  cartProductTitles.push(title);

  var cartBoxShop = $('<div class="cart-box"></div>');
  var Itemscart = $(".cart-content");

  var cartContentBox = `
      <img src="${imgProd}" alt="" class="cart-img"> 
      <div class="box-details"> 
          <div class="cart-product-title">${title}</div>
          <div class="cart-price">${price}</div>
          <input type="number" value="1" class="cart-qty">
      </div>
      <i class="bx bxs-trash-alt cart-remove"></i>
  `;

  cartBoxShop.html(cartContentBox);
  Itemscart.append(cartBoxShop);

  cartBoxShop.find(".cart-remove").click(removeItem);
  cartBoxShop.find(".cart-qty").change(qtyChanged);

  alert("Product added");
}

// Update Total
function updateTotal() {
  var total = 0;

  $(".cart-box").each(function() {
    var priceEl = $(this).find(".cart-price");
    var qtyEl = $(this).find(".cart-qty");
    var price = parseFloat(priceEl.text().replace("₱", ""));
    var qty = parseFloat(qtyEl.val());
    total += price * qty;
  });

  total = Math.round(total * 100) / 100;

  $(".total-price").text("₱" + total);
}

// DialogAbout
$(document).ready(function(){
  // Initialize the dialog
  $("#abt-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 700,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMoreAbout").click(function(){
      $("#abt-ctr").dialog("open");
  });
});   


//// DialogKurt
$(document).ready(function(){
  // Initialize the dialog
  $("#kurt-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 500,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMore1").click(function(){
      $("#kurt-ctr").dialog("open");
  });
});

// DialogJen
$(document).ready(function(){
  // Initialize the dialog
  $("#jen-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 500,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMore2").click(function(){
      $("#jen-ctr").dialog("open");
  });
});

// DialogApril
$(document).ready(function(){
  // Initialize the dialog
  $("#april-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 500,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMore3").click(function(){
      $("#april-ctr").dialog("open");
  });
});

// DialogMack
$(document).ready(function(){
  // Initialize the dialog
  $("#mack-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 500,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMore4").click(function(){
      $("#mack-ctr").dialog("open");
  });
});

// DialogRalph
$(document).ready(function(){
  // Initialize the dialog
  $("#ralph-ctr").dialog({
      autoOpen: false, // Dialog is hidden by default
      modal: true,     // Make it modal (block interactions with the background)
      width: 500,      // Set the width of the dialog
      height: 500
  });

  // Open the dialog when the "Kurt" button is clicked
  $(".ReadMore5").click(function(){
      $("#ralph-ctr").dialog("open");
  });
});


//SliderReview
var mySwiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

//Scroll
document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function (accordion) {
      accordion.addEventListener('show.bs.collapse', function (event) {
          // Adjust scroll position when an accordion item is shown
          var targetElement = event.target;
          var offsetTop = targetElement.getBoundingClientRect().top;
          window.scrollTo({
              top: window.scrollY + offsetTop - 20, // Adjust the offset as needed
              behavior: 'smooth'
          });
      });
  });
});


