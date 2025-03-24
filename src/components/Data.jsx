// src/Data.js

export const courses = [
  {
    id: 1,
    title: "Lesson 1: What is Public Health?",
    description: "An introduction to public health nursing.",
    video: "https://path/to/video.mp4", // Link to a video
    content: `Public health is the science of protecting and improving the health of people and their communities. 
              It is achieved through education, promotion of healthy lifestyles, and research for disease and injury prevention.`,
    quiz:[
      {
        question: "After World War II, private hospital emergency departments were:",
        options: ["Overcrowded", "Underutilized", "Fully staffed"],
        correctAnswer: "Underutilized",
      },
      {
        question: "What war introduced the use of helicopters for medical transport?",
        options: ["World War I", "Korean War", "Vietnam War"],
        correctAnswer: "Korean War",
      },
      {
        question: "What legislative action in the 1960s impacted emergency care?",
        options: [
          "Establishment of Emergency Medical Services (EMS)",
          "Creation of national health insurance",
          "Privatization of hospitals",
        ],
        correctAnswer: "Establishment of Emergency Medical Services (EMS)",
      },
      {
        question: "What technology helped boost emergency care in the 1960s?",
        options: ["X-ray machines", "Telemetry and portable defibrillators", "MRI scanners"],
        correctAnswer: "Telemetry and portable defibrillators",
      },
      {
        question: "Why did emergency medicine and nursing become specializations?",
        options: [
          "Advancements in medical transport and treatment",
          "Shortage of hospital beds",
          "The rise of private healthcare",
        ],
        correctAnswer: "Advancements in medical transport and treatment",
      },
      {
        question: "Emergency nursing involves the care of:",
        options: [
          "Only trauma patients",
          "Individuals of all ages with perceived or actual health issues",
          "Patients with chronic conditions only",
        ],
        correctAnswer: "Individuals of all ages with perceived or actual health issues",
      },
      {
        question: "Emergency nursing care is primarily:",
        options: ["Episodic, primary, and acute", "Long-term and specialized", "Home-based and non-urgent"],
        correctAnswer: "Episodic, primary, and acute",
      },
      {
        question: "Unlike other nursing specialties, emergency nurses care for:",
        options: [
          "Only children and pregnant women",
          "A specific body system or disease",
          "Patients of all ages and conditions",
        ],
        correctAnswer: "Patients of all ages and conditions",
      },
      {
        question: "Emergency nursing includes:",
        options: ["Only crisis intervention", "Nursing procedure, diagnosis, and decision-making", "Non-clinical administrative work"],
        correctAnswer: "Nursing procedure, diagnosis, and decision-making",
      },
      {
        question: "What is a key requirement for emergency nurses?",
        options: ["Ability to work in a single specialty", "Specialized knowledge, accountability, and teamwork", "Experience in long-term patient care"],
        correctAnswer: "Specialized knowledge, accountability, and teamwork",
      },
      {
        question: "What challenge did emergency nursing face entering the 21st century?",
        options: ["Overstaffing of emergency departments", "Decreasing patient numbers", "ED crowding and rising costs"],
        correctAnswer: "ED crowding and rising costs",
      },
      {
        question: "Which new practice areas emerged in emergency care?",
        options: ["Rehabilitation centers", "Urgent care centers and clinical decision units", "Maternity wards"],
        correctAnswer: "Urgent care centers and clinical decision units",
      },
      {
        question: "What is the ENA’s primary focus?",
        options: ["Advocating and providing resources for emergency nurses", "Managing hospital administration", "Training paramedics exclusively"],
        correctAnswer: "Advocating and providing resources for emergency nurses",
      },
      {
        question: "How has internet technology helped the ENA?",
        options: ["Delaying communication", "Expediting resource acquisition and networking", "Reducing nurse workload"],
        correctAnswer: "Expediting resource acquisition and networking",
      },
      {
        question: "The ENA has members in how many countries?",
        options: ["Over 10", "Over 20", "Over 32"],
        correctAnswer: "Over 32",
      },
      {
        question: "What is the ENA’s mission statement?",
        options: [
          "Advocate for patient safety and excellence in emergency nursing practice.",
          "Provide nursing services at a lower cost.",
          "Limit emergency services to critical cases only.",
        ],
        correctAnswer: "Advocate for patient safety and excellence in emergency nursing practice.",
      },
      {
        question: "What is the ENA’s vision?",
        options: [
          "To be the global emergency nursing resource and advocate for Safe Practice and Safe Care.",
          "Reduce emergency nursing practice worldwide.",
          "Focus on administrative nursing roles.",
        ],
        correctAnswer: "To be the global emergency nursing resource and advocate for Safe Practice and Safe Care.",
      },
      {
        question: "The ENA’s mission and vision are achieved through:",
        options: ["Informal training and self-study", "Standards of emergency nursing practice", "Government funding"],
        correctAnswer: "Standards of emergency nursing practice",
      },
      {
        question: "Which is NOT a practice standard?",
        options: ["Diagnosis", "Outcome identification", "Financial planning"],
        correctAnswer: "Financial planning",
      },
      {
        question: "Professional performance standards include:",
        options: ["Ethics, leadership, and communication", "Only clinical procedures", "Non-medical business strategies"],
        correctAnswer: "Ethics, leadership, and communication",
      },
      {
        question: "The competencies in emergency nursing are defined by:",
        options: ["The nurse’s role (RN, graduate-level RN, APRN)", "The number of patients treated", "The hospital administrator’s guidelines"],
        correctAnswer: "The nurse’s role (RN, graduate-level RN, APRN)",
      },
      {
        question: "What is the goal of emergency nurses in community education?",
        options: ["Increasing hospital admissions", "Decreasing disease, illness, and injury", "Reducing healthcare funding"],
        correctAnswer: "Decreasing disease, illness, and injury",
      },
      {
        question: "Primary prevention aims to:",
        options: ["Reduce disease or injury risk factors", "Treat chronic conditions", "Focus on rehabilitation"],
        correctAnswer: "Reduce disease or injury risk factors",
      },
      {
        question: "An example of secondary prevention is:",
        options: ["Distributing child safety seats", "HIV/STI testing for high-risk individuals", "Referral to treatment programs for substance use"],
        correctAnswer: "HIV/STI testing for high-risk individuals",
      },
      {
        question: "Tertiary prevention focuses on:",
        options: ["Preventing disease before it starts", "Reducing impairment and preserving function", "Conducting first aid training"],
        correctAnswer: "Reducing impairment and preserving function",
      },
      {
        question: "Goal 1 of the National Patient Safety Goals focuses on:",
        options: ["Identifying patients correctly", "Reducing staff workload", "Increasing patient admissions"],
        correctAnswer: "Identifying patients correctly",
      },
      {
        question: "What is the purpose of Goal 2?",
        options: ["Improve staff communication", "Reduce emergency room visits", "Limit medical tests"],
        correctAnswer: "Improve staff communication",
      },
      {
        question: "Which goal aims to reduce healthcare-associated infections?",
        options: ["Goal 3", "Goal 7", "Goal 15"],
        correctAnswer: "Goal 7",
      },
      {
        question: "The Universal Protocol is designed to:",
        options: ["Prevent mistakes in surgery", "Limit the number of surgical procedures", "Improve post-surgical care only"],
        correctAnswer: "Prevent mistakes in surgery",
      },
      {
        question: "How does Goal 6 improve emergency care?",
        options: ["Encouraging faster emergency responses", "Using alarms safely", "Limiting medical technology use"],
        correctAnswer: "Using alarms safely",
      },
    ]
  },
  {
    id: 2,
    title: "Foundations of Emergency Nursing",
    description: "Foundations of Emergency Nursing",
    video: "https://path/to/video.mp4", // Link to a video
    content: <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px' }}>
    <h1 style={{ textAlign: 'center', color: 'darkblue' }}>A Brief History of Emergency Nursing</h1>
    <p>After World War II, private hospital emergency departments were underutilized and staffed on an "as-needed" basis. Public hospitals, serving predominately indigent patients, devoted staff resources to their EDs. In the 15 to 30 years after WWII, an increase in the use of EDs was due to the changing dynamics of health care.</p>
    <p>Community leaders and the medical community understood that WWII and Korean War triage, field treatment, and quick transport principles could be applied to civilian practice. In Korea, injured soldiers were also transported by helicopter.</p>
    <p>In the 1960s, legislation established community and instructional programs for modern Emergency Medical Services (EMS). Space-age technology like telemetry and portable defibrillators boosted emergency care. Due to these advancements, emergency medicine and nursing became specializations.</p>
    
    <h2 style={{ color: 'darkblue' }}>A New Nursing Specialty: Defining the Scope of Practice</h2>
    <p><strong>Emergency nursing</strong> involves caring for individuals of all ages with perceived or actual physical, emotional, or psychological health alterations. Care is episodic, primary, and usually acute, occurring in a variety of settings.</p>
    <p>Unlike most specialist nursing organizations that focus on a specific bodily system, disease, or population, emergency nurses provide comprehensive care for:</p>
    <ul style={{ paddingLeft: '20px' }}>
        <li>Disease and injury prevention</li>
        <li>Lifesaving and limb-saving procedures</li>
        <li>Crisis intervention</li>
        <li>Forensic, palliative, and end-of-life care</li>
    </ul>
    <p>Emergency nursing involves assessment, diagnosis, treatment, and evaluation, requiring specialized knowledge, accountability, communication, autonomy, and collaboration.</p>
    
    <h2 style={{ color: 'darkblue' }}>The Emergency Nurses Association (ENA)</h2>
    <p>As emergency nursing entered the 21st century, challenges such as ED crowding, rising costs, workplace safety, and nursing shortages persisted. New practice areas emerged, including urgent care centers and clinical decision units.</p>
    <p>The ENA evolved from a teaching and networking platform to an authoritative advocate and global voice for emergency nursing. It continues to expand, representing members from over 32 countries.</p>
    
    <h2 style={{ color: 'darkblue' }}>Nursing Practice Mission and Values</h2>
    <p>The specialty practice of emergency nursing follows the ENA’s mission: <em>“Advocate for patient safety and excellence in emergency nursing practice.”</em></p>
    <p>The ENA’s vision is to be the global emergency nursing resource and advocate for <strong>“Safe Practice and Safe Care.”</strong></p>
    
    <h2 style={{ color: 'darkblue' }}>Standards of Emergency Nursing Practice</h2>
    <p>The standards include:</p>
    <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Practice standards:</strong> Assessment, diagnosis, outcome identification, planning, execution.</li>
        <li><strong>Professional performance standards:</strong> Ethics, cultural sensitivity, communication, leadership, education, research, quality of practice, resource management, and environmental health.</li>
    </ul>
    <p>Competencies are defined based on the role of registered nurses (RNs), graduate-level RNs, and advanced practice registered nurses (APRNs).</p>
    
    <h2 style={{ color: 'darkblue' }}>Community Education</h2>
    <p>Emergency nurses play a vital role in community education to prevent and reduce disease and injury. Prevention efforts are categorized into three levels:</p>
    <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Primary prevention:</strong> Reducing risk factors (e.g., child safety seat education).</li>
        <li><strong>Secondary prevention:</strong> Early diagnosis and disease control (e.g., HIV/STI testing).</li>
        <li><strong>Tertiary prevention:</strong> Reducing impairment and preserving function (e.g., substance use treatment referrals).</li>
    </ul>
    
    <h2 style={{ color: 'darkblue' }}>2019 National Patient Safety Goals</h2>
    <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Goal 1:</strong> Identify patients correctly</li>
        <li><strong>Goal 2:</strong> Improve staff communication</li>
        <li><strong>Goal 3:</strong> Improve the safety of medication use</li>
        <li><strong>Goal 6:</strong> Use alarms safely</li>
        <li><strong>Goal 7:</strong> Reduce the risk of healthcare-associated infections</li>
        <li><strong>Goal 15:</strong> Identify patient safety risks</li>
    </ul>
    
    <h2 style={{ color: 'darkblue' }}>Universal Protocol</h2>
    <p>Designed to prevent mistakes in surgery, the universal protocol emphasizes correct patient identification, procedure verification, and site marking before surgery.</p>
</div>,
    quiz: [
      {
        question: "After World War II, private hospital emergency departments were:",
        options: ["Overcrowded", "Underutilized", "Fully staffed"],
        correctAnswer: "Underutilized",
      },
      {
        question: "What war introduced the use of helicopters for medical transport?",
        options: ["World War I", "Korean War", "Vietnam War"],
        correctAnswer: "Korean War",
      },
      {
        question: "What legislative action in the 1960s impacted emergency care?",
        options: [
          "Establishment of Emergency Medical Services (EMS)",
          "Creation of national health insurance",
          "Privatization of hospitals",
        ],
        correctAnswer: "Establishment of Emergency Medical Services (EMS)",
      },
      {
        question: "What technology helped boost emergency care in the 1960s?",
        options: ["X-ray machines", "Telemetry and portable defibrillators", "MRI scanners"],
        correctAnswer: "Telemetry and portable defibrillators",
      },
      {
        question: "Why did emergency medicine and nursing become specializations?",
        options: [
          "Advancements in medical transport and treatment",
          "Shortage of hospital beds",
          "The rise of private healthcare",
        ],
        correctAnswer: "Advancements in medical transport and treatment",
      },
      {
        question: "Emergency nursing involves the care of:",
        options: [
          "Only trauma patients",
          "Individuals of all ages with perceived or actual health issues",
          "Patients with chronic conditions only",
        ],
        correctAnswer: "Individuals of all ages with perceived or actual health issues",
      },
      {
        question: "Emergency nursing care is primarily:",
        options: ["Episodic, primary, and acute", "Long-term and specialized", "Home-based and non-urgent"],
        correctAnswer: "Episodic, primary, and acute",
      },
      {
        question: "Unlike other nursing specialties, emergency nurses care for:",
        options: [
          "Only children and pregnant women",
          "A specific body system or disease",
          "Patients of all ages and conditions",
        ],
        correctAnswer: "Patients of all ages and conditions",
      },
      {
        question: "Emergency nursing includes:",
        options: ["Only crisis intervention", "Nursing procedure, diagnosis, and decision-making", "Non-clinical administrative work"],
        correctAnswer: "Nursing procedure, diagnosis, and decision-making",
      },
      {
        question: "What is a key requirement for emergency nurses?",
        options: ["Ability to work in a single specialty", "Specialized knowledge, accountability, and teamwork", "Experience in long-term patient care"],
        correctAnswer: "Specialized knowledge, accountability, and teamwork",
      },
      {
        question: "What challenge did emergency nursing face entering the 21st century?",
        options: ["Overstaffing of emergency departments", "Decreasing patient numbers", "ED crowding and rising costs"],
        correctAnswer: "ED crowding and rising costs",
      },
      {
        question: "Which new practice areas emerged in emergency care?",
        options: ["Rehabilitation centers", "Urgent care centers and clinical decision units", "Maternity wards"],
        correctAnswer: "Urgent care centers and clinical decision units",
      },
      {
        question: "What is the ENA’s primary focus?",
        options: ["Advocating and providing resources for emergency nurses", "Managing hospital administration", "Training paramedics exclusively"],
        correctAnswer: "Advocating and providing resources for emergency nurses",
      },
      {
        question: "How has internet technology helped the ENA?",
        options: ["Delaying communication", "Expediting resource acquisition and networking", "Reducing nurse workload"],
        correctAnswer: "Expediting resource acquisition and networking",
      },
      {
        question: "The ENA has members in how many countries?",
        options: ["Over 10", "Over 20", "Over 32"],
        correctAnswer: "Over 32",
      },
      {
        question: "What is the ENA’s mission statement?",
        options: [
          "Advocate for patient safety and excellence in emergency nursing practice.",
          "Provide nursing services at a lower cost.",
          "Limit emergency services to critical cases only.",
        ],
        correctAnswer: "Advocate for patient safety and excellence in emergency nursing practice.",
      },
      {
        question: "What is the ENA’s vision?",
        options: [
          "To be the global emergency nursing resource and advocate for Safe Practice and Safe Care.",
          "Reduce emergency nursing practice worldwide.",
          "Focus on administrative nursing roles.",
        ],
        correctAnswer: "To be the global emergency nursing resource and advocate for Safe Practice and Safe Care.",
      },
      {
        question: "The ENA’s mission and vision are achieved through:",
        options: ["Informal training and self-study", "Standards of emergency nursing practice", "Government funding"],
        correctAnswer: "Standards of emergency nursing practice",
      },
      {
        question: "Which is NOT a practice standard?",
        options: ["Diagnosis", "Outcome identification", "Financial planning"],
        correctAnswer: "Financial planning",
      },
      {
        question: "Professional performance standards include:",
        options: ["Ethics, leadership, and communication", "Only clinical procedures", "Non-medical business strategies"],
        correctAnswer: "Ethics, leadership, and communication",
      },
      {
        question: "The competencies in emergency nursing are defined by:",
        options: ["The nurse’s role (RN, graduate-level RN, APRN)", "The number of patients treated", "The hospital administrator’s guidelines"],
        correctAnswer: "The nurse’s role (RN, graduate-level RN, APRN)",
      },
      {
        question: "What is the goal of emergency nurses in community education?",
        options: ["Increasing hospital admissions", "Decreasing disease, illness, and injury", "Reducing healthcare funding"],
        correctAnswer: "Decreasing disease, illness, and injury",
      },
      {
        question: "Primary prevention aims to:",
        options: ["Reduce disease or injury risk factors", "Treat chronic conditions", "Focus on rehabilitation"],
        correctAnswer: "Reduce disease or injury risk factors",
      },
      {
        question: "An example of secondary prevention is:",
        options: ["Distributing child safety seats", "HIV/STI testing for high-risk individuals", "Referral to treatment programs for substance use"],
        correctAnswer: "HIV/STI testing for high-risk individuals",
      },
      {
        question: "Tertiary prevention focuses on:",
        options: ["Preventing disease before it starts", "Reducing impairment and preserving function", "Conducting first aid training"],
        correctAnswer: "Reducing impairment and preserving function",
      },
      {
        question: "Goal 1 of the National Patient Safety Goals focuses on:",
        options: ["Identifying patients correctly", "Reducing staff workload", "Increasing patient admissions"],
        correctAnswer: "Identifying patients correctly",
      },
      {
        question: "What is the purpose of Goal 2?",
        options: ["Improve staff communication", "Reduce emergency room visits", "Limit medical tests"],
        correctAnswer: "Improve staff communication",
      },
      {
        question: "Which goal aims to reduce healthcare-associated infections?",
        options: ["Goal 3", "Goal 7", "Goal 15"],
        correctAnswer: "Goal 7",
      },
      {
        question: "The Universal Protocol is designed to:",
        options: ["Prevent mistakes in surgery", "Limit the number of surgical procedures", "Improve post-surgical care only"],
        correctAnswer: "Prevent mistakes in surgery",
      },
      {
        question: "How does Goal 6 improve emergency care?",
        options: ["Encouraging faster emergency responses", "Using alarms safely", "Limiting medical technology use"],
        correctAnswer: "Using alarms safely",
      },
    ]
  },

  // Add more courses here as needed
];
