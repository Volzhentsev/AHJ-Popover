import Popover from './popover';

// import Popover from './Popover';

const button = document.querySelector('.btn');
const parent = document.querySelector('.container');
const title = 'Popover title';
const text = "And here's some amazing content. It's very engaging. Rignt?";
const popover = new Popover(parent, title, text);

button.addEventListener('click', () => {
  popover.init();
});

// function main() {
//   let flag = 0;

//   const popoverValues = {
//     title: 'Popover title',
//     body: "And here's some amazing content. It's very engaging. Rignt?",
//   };

//   const btn = document.querySelector('.btn');
//   const popov = new Popover(btn, popoverValues);

//   btn.addEventListener('click', () => {
//     if (flag === 0) {
//       popov.showPopover();
//       flag += 1;
//     } else {
//       popov.hidePopover();
//       flag -= 1;
//     }
//   });
// }

// main();
