import { Visualizer } from './';

export default {
  title: 'Example/Visualizer',
  component: Visualizer,
};

const Template = (args) => <Visualizer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // items: [
  //   {
  //     flags: [
  //       {
  //         file: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  //       }
  //     ]
  //   }
  // ]
  items: [
    {
      patient: {
      dateOfBirth: "1940-06-12T00:00:00",
      emrId: "MT00034",
      firstName: "Michael",
      homePhone: "650-477-4676",
      lastName: "Thompson",
      middleName: "B",
      mobilePhone: "",
      workPhone: ""
      },
      patientScore: 114.562,
      summary: "Medical History",
      summaryScore: 0.4,
      files: [
      "001-history-1.png",
      "001-history-2.png",
      "001-history-3.png"
      ],
      flags: [
      {
      name: "PrimaryCareProvider/FollowUp",
      humanName: "Follow up",
      confidence: 1,
      weight: 0.7,
      page: 0,
      box: {
      t: 675,
      b: 720,
      l: 870,
      r: 1100
      },
      file: "history-follow-up.png"
      },
      {
      name: "CardiacFaliure/Symptoms",
      humanName: "Heart failure",
      confidence: 1,
      weight: 1.2,
      page: 0,
      box: {
      t: 1275,
      b: 1320,
      l: 335,
      r: 635
      },
      file: "history-heart-failure.png"
      }
      ],
      problems: [
      {
      name: "SleepApnea",
      humanName: "Sleep apnea",
      icd10Code: "G47.30",
      confidence: 1,
      weight: 0.8,
      page: 1,
      box: {
      t: 750,
      b: 780,
      l: 600,
      r: 735
      },
      file: "history-sleep-apnea.png"
      },
      {
      name: "GERD",
      humanName: "Acid reflux",
      icd10Code: "G21",
      confidence: 0.9,
      weight: 0.7,
      page: 1,
      box: {
      t: 535,
      b: 565,
      l: 600,
      r: 660
      },
      file: "history-gerd.png"
      }
      ],
      allergies: [
      {
      name: "Penacillin",
      humanName: "Penacillin",
      drugBankCode: "DB01053",
      confidence: 1,
      weight: 1.2,
      page: 1,
      box: {
      t: 862,
      b: 897,
      l: 870,
      r: 1010
      },
      file: "history-allergy.png"
      }
      ],
      medications: [
      {
      name: "Aspirin",
      humanName: "Aspirin",
      drugBankCode: "DB00945",
      confidence: 1,
      weight: 0.5,
      page: 2,
      box: {
      t: 1072,
      b: 1107,
      l: 120,
      r: 375
      },
      file: "history-medication.png"
      }
      ]
      },
  ]
};
