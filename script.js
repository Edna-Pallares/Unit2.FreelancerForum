// List of freelancers
const names = [
  "Bruce Wayne",
  "Peter Parker",
  "Tony Stark",
  "Steve Rogers",
  "Bruce Banner",
  "Clark Kent",
  "Natasha Romanoff",
  "Harley Quinn",
  "Selina Kyle",
];

// Occupations
const occupations = ["writer", "teacher", "programmer", "painter", "nurse", "counselor"];

// Initial freelancers
const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

const averagePriceSpan = document.querySelector("span");
  const freelancersTbody = document.querySelector("tbody");


// Function to calculate the average starting price
function getAverageStartingPrice() {
  return (
    freelancers.reduce((total, freelancer) => freelancer.price + total, 0) /
    freelancers.length
  ).toFixed(2);
}

function render() {
  // render the freelancers
  const freelancerRows = freelancers.map((freelancer) => {
    const freelancerRow = document.createElement("tr");
    freelancerRow.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;

    return freelancerRow;
  });
  freelancersTbody.replaceChildren(...freelancerRows);

  // update the starting average price
  averagePriceSpan.textContent = getAverageStartingPrice();
}

render();

// New freelancers will be added every few seconds
function addFreelancer() {
  if (freelancers.length < 5) {
    freelancers.push({
      name: "Carol",
      occupation: "programmer",
      price: 70,
    });

    return;
  }
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 75) + 25;
  freelancers.push({ name, occupation, price });
}

setInterval(() => {
  addFreelancer();
  render();
}, 5000); // Add a new freelancer every 5 seconds