// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  ///////////////////////////t-shirt code///////////
  $(document).on("change", "#t-shirt", chkTshirt);

  function chkTshirt() {
    //alert("dropdown-changed");
    let tShirt = $("#t-shirt").val();

    if (tShirt === "CUSTOM") {
      $("#custom").show();
      $("#custom").removeAttr("disabled");
      $("#custom").attr("required", true);
    } else {
      $("#custom").hide();
      $("#custom").removeAttr("required");
      $("#custom").val("");
      $("#custom").attr("disabled", true);
    }
  }

  ///////////////////////////t-shirt code///////////
  //
  //
  //
  //
  //
  //
  //
  //
  ///////////////////////////checkbox code///////////
  $(document).on("click", ".submit, .checkbox", chkCheckboxes);

  function chkCheckboxes() {
    //alert("checkboxes test");

    var myCounter = 0;

    // The .each() method is unnecessary here:
    $(".checkbox").each(function () {
      //alert("checkbox clicked");
      //myCounter = myCounter + 1;
      //alert("checkbox clicked" + myCounter);
      if ($(this).is(":checked")) {
        myCounter = myCounter + 1;

        $(".checkbox").removeAttr("required")
      } else {
        if (myCounter < 1) {
          $(".checkbox").attr("required", true);
        }
      }
    });
  }
});

//
//
//
//
//
//
//
//
//
//
//
//

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
