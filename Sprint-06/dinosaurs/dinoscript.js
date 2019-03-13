/* Ignore this Javascript */
var lastStep, path, step, nextstep, steps, content, challenge;

lastStep = 10;
path = document.location.pathname;
step = parseInt(path.slice(path.lastIndexOf('/step')+5, path.lastIndexOf('.html')));

nextstep = step + 1;
steps = [
  `<ul><li>Diagnose why the image is broken using the dev tools and fix it. We want a compy dinosaur to show up.</li>`,
  `<ul><li>Write some CSS to make the dino only 50px wide and tall. Target the <code>dino</code> class.</li>`,
  `<ul><li>Add 4 more little dinos.</li>`,
  `<ul><li>Add a Spinosaurus in the middle of the 6 little dinos.</li>`,
  `<ul><li>Make the Spinosaurus bigger than the Compys. Write some new classes so we can target it.</li>`,
  `<ul>
    <li>Make the dinos on the left running away from the Spinosaurus instead of towards. (Use Google to learn how to flip an image.)</li>
    <li>Put the compys on the ground by moving them down from the top (use <code>relative</code> positioning).
  </ul>`,
  `<p>Use CSS grid to line up the dinosaurs so they always stay on one line even when the page is very narrow.</p>
      <ol>
      <li>Google search for "grid-template-columns" or "CSS Grid"</li>
      <li>Create 50px columns for Compys and a 300px column for the Spinosaurus.</li>
      </ol>`,
  `<p>Put the Compys on the ground and make them run away from the Spinosaurus when the page is expanded.</p>
    <ol>
      <li>Use Fractions instead of pixels for the columns.</li>
      <li>Use Google to learn how to make an item go to the bottom of a CSS column.</li>
    </ol>`,
  `<ol><li>Switch out the Spinosaurus with a Trex. Make sure it's positioned on the ground.</li>`,
  `<ol><li>Make the Compy that's about to be caught smaller and slower than the others.</li>`,
];
content = `
  <h3>Step ${step} Challenge</h3>
  ${steps[step]}
  <a href="step${nextstep}.html">To Step ${nextstep} &rarr;</a>
`;

if(step < lastStep) {
  challenge = document.createElement("div")
  challenge.setAttribute("class", "challenge");
  document.querySelector('body').appendChild(challenge);
  document.querySelector('.challenge').innerHTML = content;
}