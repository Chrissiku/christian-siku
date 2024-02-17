interface Company {
  name: string;
  location: string;
  start: string;
  end: string;
  type: string;
  skills: string[];
  url: string;
}

interface Experience {
  position: string;
  company: Company;
  description: string[];
}

interface Category {
  career: Experience[];
  achievement: Experience[];
  education: Experience[];
}

const careerPath: Category = {
  career: [
    {
      position: "Frontend developer 1",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer 2",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
  ],

  achievement: [
    {
      position: "Frontend developer 3",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer 4",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
  ],
  education: [
    {
      position: "Frontend developer",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
    {
      position: "Backend developer",
      company: {
        name: "Apple Inc",
        location: "California, United State (Remote)",
        start: "November 2020",
        end: "present",
        type: "Full-time",
        skills: ["swift", "go"],
        url: "/",
      },
      description: [
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
        "You can also use variant modifiers to target media queries like",
      ],
    },
  ],
};

export type { Company, Experience, Category };
export default careerPath;
