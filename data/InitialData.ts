type Step = {
    name: string;
    description: string;
    status: "complete" | "current" | "upcoming";
};
export const initialSteps: Step[] = [
    {
        name: "Washing machine repair, Dishwasher",
        description: "121 Rue Manin, 75019 Paris, France",
        status: "current",
    },
    {
        name: "Breakdown",
        description: "Appliance 1 Washing machine, Appliance 2 Dishwasher",
        status: "upcoming",
    },
    {
        name: "Appointment",
        description: "Saturday May 4, Between 11 a.m. and 4 p.m.",
        status: "upcoming",
    },
    {
        name: "Information",
        description: "",
        status: "upcoming",
    },
    {
        name: "Validation",
        description: "",
        status: "upcoming",
    },
    // Add more steps as needed
];