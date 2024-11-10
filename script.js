const accordionQuestion = document.querySelectorAll(".question");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const paraHiden = document.querySelectorAll(".para.hidden");

//global state
let iconToggleResponse = false;

function faqResponse(index) {
  paraHiden.forEach((item, i) => {
    if (index == i) {
      iconToggleResponse
        ? toggleMinusResponse(i, item)
        : togglePlusResponse(i, item);

      return;
    }
  });
}

const togglePlusResponse = (index, selectedClassVisibility) => {
  plus.forEach((item, i) => {
    if (index == i) {
      // item.addEventListener("click", () => {
      selectedClassVisibility.className = "para pVisible";
      iconToggleResponse = true;
      // console.log(iconToggleResponse, "iconToggleResponse2");

      //hide plus icon and make minus icon visible
      item.className = "plus hidden";
      minus.forEach((item, i) => {
        if (i == index) {
          item.className = "minus pVisible";
        }
        //   });
      });
    }
  });
};
const toggleMinusResponse = (index, selectedClassVisibility) => {
  minus.forEach((item, i) => {
    if (index == i) {
      selectedClassVisibility.className = "para hidden";
      item.className = "plus hidden";
      plus.forEach((item, i) => {
        if (i == index) {
          item.className = "minus pVisible";
        }
      });
      iconToggleResponse = false;
      // console.log(iconToggleResponse, "iconToggleResponse2-minus");
    }
  });
};

const rendered = () => {
  accordionQuestion.forEach((singleQuestion, index) => {
    //  console.log("rendered", singleQuestion);
    singleQuestion.addEventListener("click", function () {
      faqResponse(index);

      // console.log(iconToggleResponse, "accordion-clicked");
    });
  });
};
rendered();
