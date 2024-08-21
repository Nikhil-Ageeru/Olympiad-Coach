const svg = `<svg height="24" width="24" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="#fff"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z">
                    </path>
            </svg>`;


const plan1 = [
    {
      id: 1,
      name: "Free Package",
      discount: "FREE",
      off: "",
      description: "Access basic Olympiad preparation resources at no cost.",
      icon: svg,
      points: [
        "Downloadable Mock Tests",
        "Chapter Summaries",
        "Chapter-wise Test Bank",
        "Previous Year Papers (Level 1)",
        "Detailed Question Explanations",
      ],
    },
    {
      id: 2,
      name: "Subscription Package",
      discount: "20%",
      off: "OFF",
      description: "Get a comprehensive Olympiad learning package at a discounted rate.",
      icon: svg,
      points: [
        "Downloadable Mock Tests",
        "Chapter Summaries",
        "Chapter-wise Test Bank",
        "Previous Year Papers (Level 1)",
        "Detailed Question Explanations",
      ],
    },
    {
      id: 3,
      name: "Montly Olympiad",
      discount: "30%",
      off: "OFF",
      description: "Unlock full access to all Olympiad preparation materials.",
      icon: svg,
      points: [
        "Downloadable Mock Tests",
        "Chapter Summaries",
        "Chapter-wise Test Bank",
        "Previous Year Papers (Level 1)",
        "Detailed Question Explanations",
      ],
    },
  ];
  
  const plan2 = [
    {
      id: 1,
      name: "Basic Plan",
      discount: "FREE",
      off: "",
      description: "Start your Olympiad preparation with essential resources at no cost.",
      icon: svg,
      points: [
        "Downloadable Mock Tests",
        "Chapter Summaries",
        "Chapter-wise Test Bank",
        "Level 1 Previous Year Papers",
        "Basic Performance Analytics",
      ],
    },
    {
      id: 2,
      name: "Advanced Plan",
      discount: "15%",
      off: "OFF",
      description: "Upgrade your preparation with advanced resources at a discounted price.",
      icon: svg,
      points: [
        "All Basic Plan Features",
        "Level 2 Previous Year Papers",
        "Personalized Study Plan",
        "Interactive Quizzes",
        "Priority Support",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      discount: "25%",
      off: "OFF",
      description: "Gain complete access to all Olympiad preparation materials and exclusive features.",
      icon: svg,
      points: [
        "All Advanced Plan Features",
        "Live Doubt Clearing Sessions",
        "Video Tutorials",
        "Monthly Performance Reports",
        "Access to Expert Webinars",
      ],
    },
  ];
  
function generatePlanCards(plans) {
  const container = document.getElementById("plans-container"); // Assuming you have a container with this ID in your HTML
  container.innerHTML = "";
  plans.forEach((plan) => {
    const planCard = document.createElement("div");
    planCard.className = "col-12 col-lg-4 mb-4 mb-md-2";

    planCard.innerHTML = `
                <div class="plan">
                    <div class="inner">
                        <span class="pricing">
                            <span>
                                <strong>${plan.discount}</strong><small>${
      plan.off
    }</small>
                            </span>
                        </span>
                        <p class="title">${plan.name}</p>
                        <p class="info">${plan.description}</p>
                        <ul class="features">
                            ${plan.points
                              .map(
                                (point) => `
                                <li>
                                    <span class="icon">${plan.icon}</span>
                                    <span>${point}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                        <div class="action">
                            <a class="button" href="#">
                                Choose plan
                            </a>
                        </div>
                    </div>
                </div>
            `;

    container.appendChild(planCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generatePlanCards(plan1);
});
