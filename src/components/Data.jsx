// src/Data.js

export const courses = [
  {
    id: 1,
    title: "Emergency Health Services (EMS) ",
    description: "WHAT IS EMS?",
    video: "https://path/to/video.mp4", // Link to a video
    content:  <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#B22222', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
          What is EMS?
        </h1>
        <img 
          src="https://source.unsplash.com/800x400/?ambulance,emergency" 
          alt="Emergency Medical Services" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          Emergency Medical Services (EMS) is a system that provides emergency medical care. It is activated by incidents that cause serious illness or injury, focusing on rapid emergency medical care for the patient.
        </p>
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          EMS is most recognizable when emergency vehicles or helicopters respond to incidents. However, it is much more than just transportation; it is a coordinated response system involving multiple agencies and organizations.
        </p>

        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Components of an EMS System
        </h2>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
          <li>Agencies and organizations (private and public)</li>
          <li>Communications and transportation networks</li>
          <li>Trauma systems, hospitals, and specialty care centers</li>
          <li>Highly trained medical professionals</li>
          <li>Prehospital personnel, both volunteer and career</li>
          <li>Physicians, nurses, and therapists</li>
          <li>Administrators and government officials</li>
          <li>An informed public that knows how to respond in emergencies</li>
        </ul>

        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          EMS Models
        </h2>
        <img 
          src="https://source.unsplash.com/800x400/?hospital,paramedics" 
          alt="EMS Models" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          EMS systems operate under different models worldwide:
        </p>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
          <li><strong>Anglo-American Model:</strong> Patients are quickly transported to hospitals for treatment.</li>
          <li><strong>Franco-German Model:</strong> Emergency physicians and advanced technology are brought to the patient to stabilize them on-site before transport.</li>
        </ul>
        
        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Countries Utilizing the Anglo-American EMS Model
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          Countries such as the USA, Canada, the UK, Ireland, Australia, Hong Kong, Mexico, South Korea, and Iran follow the Anglo-American EMS model. In the US and Canada, emergency services (fire, police, and ambulance) are managed from a single center, ensuring quick response times.
        </p>

        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Chain of Survival
        </h2>
        <img 
          src="https://source.unsplash.com/800x400/?CPR,first-aid" 
          alt="Chain of Survival" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
          <li>Early recognition of emergency signs</li>
          <li>Prompt activation of EMS</li>
          <li>Basic CPR administration</li>
          <li>Defibrillation</li>
          <li>Intubation</li>
          <li>Administration of medications</li>
        </ul>

        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Ethics in Emergency Call Taking
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          Emergency Medical Call Takers (EMCT) must adhere to the highest ethical standards. Honesty, integrity, and reliability are fundamental in public safety professions, ensuring the best possible response to emergencies.
        </p>

        <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          The Role of Ambulances
        </h2>
        <img 
          src="https://source.unsplash.com/800x400/?ambulance,paramedic" 
          alt="Ambulance" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          An ambulance is a specially equipped vehicle designed for transporting sick or injured individuals to and from hospitals, particularly in emergencies.
        </p>
      </div>
    </div>,
    quiz:[
      {
        question: "What does EMS stand for?",
        options: ["Emergency Medical Services", "Emergency Management System", "Emergency Medical Safety"],
        correctAnswer: "Emergency Medical Services",
      },
      {
        question: "What is the primary focus of EMS?",
        options: ["Transportation of patients", "Emergency medical care of the patient", "Providing hospital beds"],
        correctAnswer: "Emergency medical care of the patient",
      },
      {
        question: "How is EMS activated?",
        options: ["Through a scheduled appointment", "By an incident causing serious illness or injury", "By a hospital referral"],
        correctAnswer: "By an incident causing serious illness or injury",
      },
      {
        question: "Besides transportation, what other role does EMS play?",
        options: ["Only provides patient transport", "Coordinates emergency medical response and care", "Focuses only on hospital care"],
        correctAnswer: "Coordinates emergency medical response and care",
      },
      {
        question: "Which of the following is NOT a component of a comprehensive EMS system?",
        options: ["Highly trained professionals", "Public health clinics", "Communication and transportation networks"],
        correctAnswer: "Public health clinics",
      },
      {
        question: "What is a key issue in pre-hospital emergency care in developing countries?",
        options: ["Lack of hospitals", "Low-quality personnel and poor services", "Too many ambulances"],
        correctAnswer: "Low-quality personnel and poor services",
      },
      {
        question: "What are the two major EMS models in the world?",
        options: ["Anglo-American and Franco-German", "Asian and European", "Urban and Rural"],
        correctAnswer: "Anglo-American and Franco-German",
      },
      {
        question: "What is the key philosophy of the Franco-German EMS model?",
        options: ["Scoop and run", "Stay and stabilize", "Transport first"],
        correctAnswer: "Stay and stabilize",
      },
      {
        question: "What is the key philosophy of the Anglo-American EMS model?",
        options: ["Stay and stabilize", "Scoop and run", "Immediate hospital admission"],
        correctAnswer: "Scoop and run",
      },
      {
        question: "Which countries use the Anglo-American EMS model?",
        options: ["USA, Canada, UK", "Germany, France, Spain", "Russia, China, India"],
        correctAnswer: "USA, Canada, UK",
      },
      {
        question: "Who oversees EMS services in the Anglo-American model?",
        options: ["Emergency physicians", "Authorized paramedics or EMTs", "Hospital administrators"],
        correctAnswer: "Authorized paramedics or EMTs",
      },
      {
        question: "How are emergency calls managed in the US and Canada?",
        options: ["Each agency manages its own calls", "All calls are handled by a single center", "Only hospitals take emergency calls"],
        correctAnswer: "All calls are handled by a single center",
      },
      {
        question: "What is the 'Chain of Survival'?",
        options: ["A process for identifying and treating emergencies", "A system of hospital management", "A fire safety protocol"],
        correctAnswer: "A process for identifying and treating emergencies",
      },
      {
        question: "Which of these is the first step in the Chain of Survival?",
        options: ["Defibrillation", "Early recognition of signs", "Intubation"],
        correctAnswer: "Early recognition of signs",
      },
      {
        question: "What is the purpose of defibrillation in the Chain of Survival?",
        options: ["Prevent heart attacks", "Restart a heart in cardiac arrest", "Control blood pressure"],
        correctAnswer: "Restart a heart in cardiac arrest",
      },
      {
        question: "Why must emergency call centers be well-equipped?",
        options: ["To handle multiple calls effectively", "To diagnose patients remotely", "To reduce emergency room visits"],
        correctAnswer: "To handle multiple calls effectively",
      },
      {
        question: "Who is responsible for handling emergency calls?",
        options: ["Emergency Medical Call Taker (EMCT)", "Doctors only", "Ambulance drivers"],
        correctAnswer: "Emergency Medical Call Taker (EMCT)",
      },
      {
        question: "Why is ethics important in emergency call taking?",
        options: ["Because calls must be handled with honesty and integrity", "To increase emergency calls", "To reduce hospital costs"],
        correctAnswer: "Because calls must be handled with honesty and integrity",
      },
      {
        question: "Which of these is an ethical principle in emergency call taking?",
        options: ["Integrity", "Profit-making", "Patient discharge"],
        correctAnswer: "Integrity",
      },
      {
        question: "What is an ambulance?",
        options: ["A vehicle for emergency transport", "A mobile hospital", "A police vehicle"],
        correctAnswer: "A vehicle for emergency transport",
      },
      {
        question: "How do emergency response systems adapt to modern challenges?",
        options: ["By ignoring technological advances", "By evolving and adapting", "By reducing medical services"],
        correctAnswer: "By evolving and adapting",
      },
      {
        question: "What is the main goal of EMS?",
        options: ["To provide emergency medical care", "To replace hospitals", "To diagnose diseases"],
        correctAnswer: "To provide emergency medical care",
      },
      {
        question: "What is the role of rehabilitation facilities in EMS?",
        options: ["To provide long-term patient recovery", "To transport patients", "To dispatch ambulances"],
        correctAnswer: "To provide long-term patient recovery",
      },
      {
        question: "What is the function of trauma centers in EMS?",
        options: ["To handle critical injuries", "To transport patients", "To train ambulance drivers"],
        correctAnswer: "To handle critical injuries",
      },
      {
        question: "Why is public awareness important in EMS?",
        options: ["To reduce emergency calls", "To educate people on medical emergencies", "To limit healthcare services"],
        correctAnswer: "To educate people on medical emergencies",
      },
      {
        question: "Which emergency response model is integrated with public safety services?",
        options: ["Anglo-American", "Franco-German", "European"],
        correctAnswer: "Anglo-American",
      },
      {
        question: "Which model brings advanced technology to the patient?",
        options: ["Franco-German", "Anglo-American", "Asian"],
        correctAnswer: "Franco-German",
      },
      {
        question: "Which of these is a component of an EMS system?",
        options: ["Public libraries", "Communications and transportation networks", "Retail stores"],
        correctAnswer: "Communications and transportation networks",
      },
      {
        question: "What role do emergency medical technicians (EMTs) play in EMS?",
        options: ["They transport and provide emergency care", "They work only in hospitals", "They diagnose chronic diseases"],
        correctAnswer: "They transport and provide emergency care",
      },
      {
        question: "Which of these is NOT a part of EMS?",
        options: ["Trauma centers", "Fast food chains", "Ambulance services"],
        correctAnswer: "Fast food chains",
      }
    ]
  },
  {
    id: 2,
    title: "Foundations of Emergency Nursing",
    description: "Foundations of Emergency Nursing",
    video: "https://path/to/video.mp4", // Link to a video
    content: 
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#1E3A8A', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
          A Brief History of Emergency Nursing
        </h1>
        <p style={{ color: '#333', lineHeight: '1.8' }}>
          After World War II, private hospital emergency departments were underutilized and staffed on an "as-needed" basis. Public hospitals, serving predominantly indigent patients, devoted staff resources to their EDs. In the 15 to 30 years after WWII, an increase in the use of EDs was due to the changing dynamics of health care.
        </p>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          Community leaders and the medical community understood that WWII and Korean War triage, field treatment, and quick transport principles could be applied to civilian practice. In Korea, injured soldiers were also transported by helicopter.
        </p>

        <h2 style={{ color: '#1E3A8A', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          A New Nursing Specialty: Defining the Scope of Practice
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          <strong>Emergency nursing</strong> involves caring for individuals of all ages with perceived or actual physical, emotional, or psychological health alterations. Care is episodic, primary, and usually acute, occurring in a variety of settings.
        </p>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          <li>Disease and injury prevention</li>
          <li>Lifesaving and limb-saving procedures</li>
          <li>Crisis intervention</li>
          <li>Forensic, palliative, and end-of-life care</li>
        </ul>

        <h2 style={{ color: '#1E3A8A', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          The Emergency Nurses Association (ENA)
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          As emergency nursing entered the 21st century, challenges such as ED crowding, rising costs, workplace safety, and nursing shortages persisted. New practice areas emerged, including urgent care centers and clinical decision units.
        </p>

        <h2 style={{ color: '#1E3A8A', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Nursing Practice Mission and Values
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          The specialty practice of emergency nursing follows the ENA’s mission: <em>“Advocate for patient safety and excellence in emergency nursing practice.”</em>
        </p>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          The ENA’s vision is to be the global emergency nursing resource and advocate for <strong>“Safe Practice and Safe Care.”</strong>
        </p>

        <h2 style={{ color: '#1E3A8A', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Standards of Emergency Nursing Practice
        </h2>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          <li><strong>Practice standards:</strong> Assessment, diagnosis, outcome identification, planning, execution.</li>
          <li><strong>Professional performance standards:</strong> Ethics, cultural sensitivity, communication, leadership, education, research, quality of practice, resource management, and environmental health.</li>
        </ul>

        <h2 style={{ color: '#1E3A8A', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
          Community Education
        </h2>
        <p style={{ color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          Emergency nurses play a vital role in community education to prevent and reduce disease and injury. Prevention efforts are categorized into three levels:
        </p>
        <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8', marginTop: '10px' }}>
          <li><strong>Primary prevention:</strong> Reducing risk factors (e.g., child safety seat education).</li>
          <li><strong>Secondary prevention:</strong> Early diagnosis and disease control (e.g., HIV/STI testing).</li>
          <li><strong>Tertiary prevention:</strong> Reducing impairment and preserving function (e.g., substance use treatment referrals).</li>
        </ul>
      </div>
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
  {
    id: 3,
    title: "Basic Concept in Emergency Care",
    description: "Basic Concept in Emergency Care",
    video: "https://path/to/video.mp4", // Link to a video
    content:
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <section style={{ marginBottom: '40px' }}>
      <h1 style={{ color: '#333', fontSize: '32px', fontWeight: 'bold' }}>What is an Emergency?</h1>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        An emergency is an unexpected and difficult or dangerous situation, especially an accident, that happens suddenly and requires quick action to address.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        A serious, unexpected, and often dangerous situation requiring immediate action.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Although emergencies are unexpected events, it is essential for health and safety practitioners to identify potential hazards, minimize risks, and have emergency plans in place for a rapid response.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        A risk or vulnerability assessment is the first step in devising emergency plans, which should address ways to prevent injury and loss of life.
      </p>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Emergency Treatment and Care
      </h2>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Emergency care involves identifying events that occur within the first 1-2 hours following trauma, injury, or disease and taking immediate action to prevent further harm.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        The first aim is to save the individual’s life.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Timely emergency maintenance is vital, and time management is essential for effective care.
      </p>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Emergency Approach
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: '1', padding: '10px', backgroundColor: '#e7f7ff', borderRadius: '8px', marginRight: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Pre-Hospital</h3>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>First aid and emergency approach</p>
        </div>
        <div style={{ flex: '1', padding: '10px', backgroundColor: '#e7f7ff', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Hospital</h3>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>Emergency units</p>
        </div>
      </div>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        The pre-hospital care of critically ill patients requires careful team selection, training, and the highest standards of care. It’s a complex process that can vary worldwide, with staff ranging from physicians to nurses, paramedics, and emergency medical technicians.
      </p>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        The emergency approach includes:
      </p>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Basic life support</li>
        <li>Advanced life support</li>
        <li>Basic cardiac life support</li>
        <li>Standing patient care</li>
        <li>Monitoring of patients who do not require intensive care</li>
      </ul>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Advanced cardiac life support should be planned with qualified 24-hour services, including facilities for critical and intensive patient care, trauma centers, and advanced imaging facilities.
      </p>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Five Steps of Emergency Care
      </h2>
      <ol style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Triage</li>
        <li>Registration</li>
        <li>Treatment</li>
        <li>Re-evaluation</li>
        <li>Discharge</li>
      </ol>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Emergency Care System
      </h2>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        The emergency care system includes:
      </p>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Community lay-person first response</li>
        <li>Ambulance service response (if available)</li>
        <li>Acute care - Emergency Department</li>
        <li>Definitive care - Surgical, medical</li>
      </ul>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Types of Emergencies
      </h2>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Trauma</li>
        <li>Stroke</li>
        <li>Cardiac</li>
        <li>Burn</li>
        <li>Neuro</li>
        <li>Disaster Response</li>
        <li>Military</li>
        <li>Pediatric</li>
        <li>Adult</li>
        <li>Geriatric</li>
        <li>Pandemics</li>
      </ul>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        A pandemic is a disease that affects people in many countries at the same time. It’s a significant type of emergency due to rising concerns.
      </p>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Role of Emergency Care at Hospital
      </h2>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        The role of emergency care in hospitals includes:
      </p>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Triage and stabilization of patients</li>
        <li>Sending the sickest patients to the Emergency Department</li>
        <li>Maximizing efficiency of care</li>
        <li>Resuscitating patients before surgery</li>
        <li>Starting medical resuscitation early, prior to ICU admission</li>
      </ul>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Planning for emergency units should consider various factors such as location (e.g., highway accidents, industrial zones), the surrounding population, and types of emergencies the hospital is equipped to handle. The layout should ensure easy access for ambulances and effective patient observation areas.
      </p>
    </section>
  
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Emergency Nurse Roles
      </h2>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        ER nurses treat patients suffering from trauma, injury, or severe medical conditions requiring urgent care. They need excellent clinical skills and the ability to remain calm under pressure. They must also be flexible as patient needs can change rapidly.
      </p>
      <h3 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>Specialized Roles</h3>
      <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li><strong>Trauma Nurses:</strong> Work in trauma centers to manage life-threatening injuries.</li>
        <li><strong>Critical Care Nurses:</strong> Handle patients requiring intensive observation and treatment.</li>
        <li><strong>Emergency Department Nurses:</strong> Provide care in emergency rooms for patients with urgent needs.</li>
      </ul>
    </section>

    <section style={{ marginBottom: '40px' }}>
  <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
    Emergency Nurse Roles
  </h2>
  <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
    Just like the wide variation that exists in emergency medicine and emergency departments, there are so many different types of Emergency Nurses.
  </p>

  <h3 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
    Trauma Nurses
  </h3>
  <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
    Trauma Nurses work in Trauma Centers and run the show when trauma patients come in by ambulance, helicopter, or personal vehicle (it totally happens). This role requires specialized training and usually two years of experience.
  </p>

  <h3 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
    Critical-Care Transport (CCT) Nurse (Ambulance)
  </h3>
  <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
    CCT Nurses that work on ambulances are responsible for transporting critical care patients from one facility to another. They work out of an ambulance with a care team of paramedics or EMTs. CCT Nurses usually need several years of experience and optimally, pre-hospital care experience.
  </p>

  <h3 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
    Flight Nurse
  </h3>
  <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
    Flight Nurses are a type of Critical-Care Transport (CCT) Nurses who work out of helicopters and planes to transport critically injured or ill patients to emergency departments or from one ED to another facility. This role usually requires 3-5 years of experience and optimally, experience in the pre-hospital setting.
  </p>

  <h3 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
    Charge Nurse
  </h3>
  <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
    The Charge Nurse is the captain of the ship in the emergency department. They are responsible for staffing, patient assignments, throughput, communication with the ED providers and nursing leadership, and much, much more.
  </p>
</section>

  
    <section>
      <h2 style={{ color: '#B22222', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
        Challenges in Emergency Care
      </h2>
      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
        Emergency care has unique challenges, including managing limited resources, responding to various types of emergencies, and addressing the needs of different age groups and medical conditions.
      </p>
    </section>
  </div>,
    quiz:[
      {
        question: "What is the main responsibility of a Trauma Nurse?",
        options: ["Transporting patients to other hospitals", "Running Trauma Centers during emergencies", "Providing post-operative care"],
        correctAnswer: "Running Trauma Centers during emergencies",
      },
      {
        question: "What type of experience is required for Trauma Nurses?",
        options: ["Two years of specialized training", "One year of nursing experience", "No experience required"],
        correctAnswer: "Two years of specialized training",
      },
      {
        question: "What is the primary responsibility of Critical-Care Transport (CCT) Nurses?",
        options: ["Administering first aid on-site", "Transporting critically ill patients from one facility to another", "Providing emergency surgery"],
        correctAnswer: "Transporting critically ill patients from one facility to another",
      },
      {
        question: "What role do CCT Nurses play in emergency care?",
        options: ["Providing care in the emergency room", "Transporting patients to hospitals", "Evaluating patients' blood pressure"],
        correctAnswer: "Transporting patients to hospitals",
      },
      {
        question: "How many years of experience are usually needed for CCT Nurses?",
        options: ["3-5 years", "2-3 years", "Several years, ideally with pre-hospital care experience"],
        correctAnswer: "Several years, ideally with pre-hospital care experience",
      },
      {
        question: "Which of the following is a responsibility of Flight Nurses?",
        options: ["Performing surgery", "Transporting critically ill patients by helicopter or airplane", "Administering medications to patients in the hospital"],
        correctAnswer: "Transporting critically ill patients by helicopter or airplane",
      },
      {
        question: "What is typically required of Flight Nurses in terms of experience?",
        options: ["1-2 years of experience", "3-5 years of experience, with pre-hospital setting knowledge", "No prior experience needed"],
        correctAnswer: "3-5 years of experience, with pre-hospital setting knowledge",
      },
      {
        question: "What is a key responsibility of a Charge Nurse in the Emergency Department?",
        options: ["Providing patient assessments", "Managing staffing, patient assignments, and communication", "Performing surgeries"],
        correctAnswer: "Managing staffing, patient assignments, and communication",
      },
      {
        question: "What role does a Charge Nurse have in the emergency department?",
        options: ["Directly treating patients", "Coordinating all aspects of emergency care and staff management", "Overseeing post-operative recovery"],
        correctAnswer: "Coordinating all aspects of emergency care and staff management",
      },
      {
        question: "Which type of nurse works directly with trauma patients during emergency situations?",
        options: ["Charge Nurse", "Trauma Nurse", "Flight Nurse"],
        correctAnswer: "Trauma Nurse",
      },
      {
        question: "Which type of nurse provides emergency care while transporting patients between medical facilities?",
        options: ["Trauma Nurse", "Charge Nurse", "Critical-Care Transport (CCT) Nurse"],
        correctAnswer: "Critical-Care Transport (CCT) Nurse",
      },
      {
        question: "What is one of the critical roles of Flight Nurses?",
        options: ["Providing long-term rehabilitation", "Transporting critically ill patients to different hospitals by air", "Conducting surgery on critically ill patients"],
        correctAnswer: "Transporting critically ill patients to different hospitals by air",
      },
      {
        question: "Which nurse is often referred to as the 'captain of the ship' in the emergency department?",
        options: ["Trauma Nurse", "Charge Nurse", "Flight Nurse"],
        correctAnswer: "Charge Nurse",
      },
      {
        question: "How long of experience is generally needed to become a Flight Nurse?",
        options: ["1-2 years", "3-5 years, preferably with pre-hospital care experience", "No experience needed"],
        correctAnswer: "3-5 years, preferably with pre-hospital care experience",
      },
      {
        question: "Which of the following is a responsibility of a Trauma Nurse?",
        options: ["Performing surgeries in the operating room", "Running Trauma Centers and responding to emergency calls", "Administering vaccines"],
        correctAnswer: "Running Trauma Centers and responding to emergency calls",
      },
      {
        question: "What type of emergency care does a Critical-Care Transport (CCT) Nurse specialize in?",
        options: ["Care for minor injuries", "Transporting critically ill patients", "Providing routine checkups"],
        correctAnswer: "Transporting critically ill patients",
      },
      {
        question: "Which of the following nurses deals with critical cases while moving patients from one hospital to another?",
        options: ["Critical-Care Transport (CCT) Nurse", "Flight Nurse", "Charge Nurse"],
        correctAnswer: "Critical-Care Transport (CCT) Nurse",
      },
      {
        question: "What is the key responsibility of a Charge Nurse in emergency care?",
        options: ["Providing direct patient care", "Managing staffing and patient care assignments", "Administering anesthesia"],
        correctAnswer: "Managing staffing and patient care assignments",
      },
      {
        question: "Which of the following nurses typically requires the most experience and responsibility in a hospital setting?",
        options: ["Charge Nurse", "Trauma Nurse", "Flight Nurse"],
        correctAnswer: "Charge Nurse",
      },
      {
        question: "What is an essential skill for Emergency Room nurses?",
        options: ["Ability to manage multiple patients simultaneously", "Performing long-term patient care", "Extensive surgical experience"],
        correctAnswer: "Ability to manage multiple patients simultaneously",
      },
      {
        question: "What is one of the most important skills for an Emergency Nurse?",
        options: ["Leadership in directing the entire department", "Ability to stay calm and focused in chaotic situations", "Ability to perform long-term rehabilitation"],
        correctAnswer: "Ability to stay calm and focused in chaotic situations",
      },
      {
        question: "Which nurse transports patients via ambulance and performs critical care?",
        options: ["Critical-Care Transport (CCT) Nurse", "Charge Nurse", "Trauma Nurse"],
        correctAnswer: "Critical-Care Transport (CCT) Nurse",
      },
      {
        question: "What is required for becoming a Trauma Nurse?",
        options: ["Specialized trauma care training and at least two years of experience", "Basic nursing certification", "Experience in administrative roles"],
        correctAnswer: "Specialized trauma care training and at least two years of experience",
      },
      {
        question: "What role does the Charge Nurse play in managing the emergency department?",
        options: ["Direct patient care and documentation", "Overseeing all aspects of patient flow and nursing assignments", "Coordinating flight transfers"],
        correctAnswer: "Overseeing all aspects of patient flow and nursing assignments",
      },
      {
        question: "Which nurse is responsible for direct patient care in the emergency room during peak times?",
        options: ["Trauma Nurse", "Charge Nurse", "Emergency Room Nurse"],
        correctAnswer: "Emergency Room Nurse",
      },
      {
        question: "What is typically required of Flight Nurses in terms of experience?",
        options: ["1-2 years of experience", "3-5 years of experience, with pre-hospital setting knowledge", "No prior experience needed"],
        correctAnswer: "3-5 years of experience, with pre-hospital setting knowledge",
      },
      {
        question: "What type of setting do Flight Nurses typically work in?",
        options: ["Ground ambulance", "Helicopters or planes", "Office clinics"],
        correctAnswer: "Helicopters or planes",
      },
      {
        question: "Which nurse is responsible for staffing and communication in the emergency department?",
        options: ["Charge Nurse", "Trauma Nurse", "Flight Nurse"],
        correctAnswer: "Charge Nurse",
      },
      {
        question: "Which of the following is the primary responsibility of a Charge Nurse in the emergency department?",
        options: ["Direct patient care", "Managing staffing and patient care assignments", "Overseeing post-operative recovery"],
        correctAnswer: "Managing staffing and patient care assignments",
      },
      {
        question: "What type of experience is important for CCT Nurses?",
        options: ["Experience in surgery", "Experience with critical care and transportation", "Experience with administrative tasks"],
        correctAnswer: "Experience with critical care and transportation",
      },
      {
        question: "What is one of the most important skills for a Charge Nurse?",
        options: ["Leadership in directing the entire department", "Ability to perform long-term rehabilitation", "Critical-thinking and leadership skills"],
        correctAnswer: "Critical-thinking and leadership skills",
      }
    ]
  },
  {
    id: 4,
    title: "Patient Assessment",
    description: "Patient Assessment",
    video: "https://path/to/video.mp4", // Link to a video
    content:
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Systematic Patient Evaluation</h2>
    
    <p>A systematic approach to the evaluation of each patient is essential for:</p>
    <ul style={{ paddingLeft: '20px' }}>
      <li>Immediate recognition of life-threatening conditions</li>
      <li>Identification of signs/symptoms of specific illness or injury</li>
      <li>Determination of priorities of care</li>
      <li>Providing accurate patient care</li>
    </ul>

    <h3 style={{ color: '#16a085' }}>Initial Assessment</h3>
    <p>The initial assessment is divided into two phases:</p>
    <ul style={{ paddingLeft: '20px' }}>
      <li><strong>Primary survey:</strong> Focused on determining life-threatening problems and initiating intervention.</li>
      <li><strong>Secondary survey:</strong> Identify other abnormalities.</li>
    </ul>

    <h3 style={{ color: '#2980b9' }}>Successful Assessment Involves</h3>
    <ul style={{ paddingLeft: '20px' }}>
      <li>Utilizing an organized, systematic approach</li>
      <li>Adherence to standard precautions (universal precautions)</li>
    </ul>

    <h3 style={{ color: '#e74c3c' }}>Process of Assessment</h3>
    <ul style={{ paddingLeft: '20px' }}>
      <li><strong>Collection of data:</strong> Subjective and objective data</li>
      <li><strong>Analysis:</strong> Identify possible causes; differential nursing diagnosis</li>
      <li><strong>Interpretation, Planning, Intervention</strong></li>
      <li><strong>Documentation</strong></li>
    </ul>

    <h3 style={{ color: '#f39c12' }}>Primary Assessment: ABCDE</h3>
    <ul style={{ paddingLeft: '20px' }}>
      <li><strong>A:</strong> Airway with simultaneous cervical spine protection for trauma patients</li>
      <li><strong>B:</strong> Breathing effectiveness</li>
      <li><strong>C:</strong> Circulation effectiveness</li>
      <li><strong>D:</strong> Disability (brief neurologic assessment)</li>
      <li><strong>E:</strong> Exposure/Environmental control</li>
    </ul>

    <h3 style={{ color: '#9b59b6' }}>Secondary Assessment: FGHI</h3>
    <ul style={{ paddingLeft: '20px' }}>
      <li><strong>F:</strong> Full set of vital signs & five interventions (cardiac monitor, pulse oximeter, urinary catheter, gastric tube, lab studies), facilitate family presence</li>
      <li><strong>G:</strong> Give comfort measures</li>
      <li><strong>H:</strong> History and head-to-toe assessment</li>
      <li><strong>I:</strong> Inspect posterior surfaces</li>
    </ul>

    <h3 style={{ color: '#34495e' }}>Airway Management</h3>
    <p>Cervical spine stabilization and/or immobilization. Assess for partial or total airway obstruction:</p>
    <ul style={{ paddingLeft: '20px' }}>
      <li>Ability to talk - verbalization</li>
      <li>Abnormal breathing sounds (Stridors)</li>
      <li>Foreign bodies – blood, vomitus, tongue</li>
      <li>Edema</li>
    </ul>

    <h3 style={{ color: '#27ae60' }}>Maintaining Patient Airway</h3>
    <ul style={{ paddingLeft: '20px' }}>
      <li>Positioning</li>
      <li>Oropharyngeal airway</li>
      <li>Nasopharyngeal airway</li>
      <li>Endotracheal intubation</li>
      <li>Cricothyroidotomy - needle or surgical</li>
      <li>Suctioning</li>
      <li>Relief bronchospasm - epinephrine, nebulizer</li>
    </ul>

    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Airway, Breathing & Circulation Evaluation</h2>
      
      <h3 style={{ color: '#16a085' }}>Evaluation of Airway Patency</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Assessment for vocalization or sounds appropriate for age</li>
        <li>Observing for tongue obstruction</li>
        <li>Presence of foreign bodies in the oropharynx (blood, vomitus, secretions, foreign objects, debris—loose teeth/dentures)</li>
        <li>Presence of edema of the lips, mouth, oropharynx, or neck; drooling</li>
        <li>Dysphagia and abnormal airway sounds (e.g., stridor)</li>
      </ul>

      <h3 style={{ color: '#2980b9' }}>Management of Airway Obstruction</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Open the airway with a head tilt–chin lift (if no trauma) or jaw thrust</li>
        <li>Suctioning</li>
        <li>Insertion of an airway adjunct</li>
        <li>Preparation for endotracheal intubation</li>
      </ul>

      <h3 style={{ color: '#e74c3c' }}>Spinal Protection</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>If cervical spine injury is suspected, provide manual in-line stabilization until a rigid cervical collar is placed</li>
        <li>All airway maneuvers must be done while maintaining cervical spine neutral alignment</li>
      </ul>

      <h3 style={{ color: '#f39c12' }}>How to Evaluate Breathing?</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Assess spontaneous breathing, rate, and pattern</li>
        <li>Observe symmetrical chest rise and fall</li>
        <li>Check for increased work of breathing (nasal flaring, retractions)</li>
        <li>Assess use of accessory muscles, chest wall integrity, and skin color</li>
        <li>Check bilateral breath sounds if breathing appears compromised</li>
      </ul>

      <h3 style={{ color: '#9b59b6' }}>Breathing Management</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>If breathing is absent or ineffective, provide assisted ventilation using a bag-mask device</li>
        <li>Supplemental oxygen</li>
        <li>Position the patient to maximize ventilation</li>
        <li>Occlude open chest wounds and relieve tension pneumothorax</li>
        <li>Any life-threatening ventilation compromise must be addressed before assessing circulation</li>
      </ul>

      <h3 style={{ color: '#34495e' }}>Initial Evaluation of Circulation</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Assess skin color, temperature, and moisture</li>
        <li>Check capillary refill</li>
        <li>Identify external bleeding (in case of trauma)</li>
        <li>Palpate central and peripheral pulses for rate</li>
      </ul>

      <h3 style={{ color: '#27ae60' }}>If Circulation is Ineffective</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Establish cardiac monitoring and vascular access</li>
        <li>If no pulse is present, initiate resuscitative measures (basic and advanced life support)</li>
      </ul>

      <h3 style={{ color: '#8e44ad' }}>Disability: AVPU Mnemonic</h3>
      <p>A rapid screening tool used to assess level of consciousness:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>A:</strong> Alert: Awake, alert, responsive, and oriented</li>
        <li><strong>V:</strong> Verbal: Responds to voice but not fully oriented</li>
        <li><strong>P:</strong> Pain: Responds only to painful stimuli</li>
        <li><strong>U:</strong> Unresponsive: No response to voice or pain</li>
      </ul>
      <p>If LOC is altered, assess pupils for size, equality, and reactivity to light.</p>

      <h3 style={{ color: '#c0392b' }}>Exposure and Environmental Control</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Remove clothing to examine and identify underlying conditions</li>
        <li>Cover patient to maintain privacy and prevent heat loss</li>
      </ul>
    </div>

    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.8', color: '#2c3e50', backgroundColor: '#ecf0f1', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#34495e', fontSize: '28px', fontWeight: 'bold', paddingBottom: '10px', borderBottom: '3px solid #3498db' }}>Secondary Assessment</h2>
      
      <p style={{ fontSize: '18px', color: '#555' }}>A secondary assessment includes the FGHI components of the A-to-I mnemonic and involves:</p>
      <ul style={{ paddingLeft: '20px', fontSize: '16px' }}>
        <li>Vital signs measurement</li>
        <li>Pain assessment</li>
        <li>Patient history</li>
        <li>Head-to-toe assessment</li>
        <li>Assessment of posterior surfaces</li>
      </ul>
      
      <h3 style={{ color: '#2980b9' }}>Full Set of Vital Signs</h3>
      <p>Includes temperature, pulse, respiratory rate, blood pressure, oxygen saturation, and weight.</p>
      <p><strong>Vital signs should be reevaluated:</strong></p>
      <ul>
        <li>To assess treatment efficacy</li>
        <li>When abnormal</li>
        <li>Before discharge, admission, or transfer</li>
      </ul>

      <h3 style={{ color: '#e67e22' }}>Temperature</h3>
      <p>Body temperature is affected by:</p>
      <ul>
        <li>Activity</li>
        <li>Certain conditions (e.g., hypo/hyperthyroidism)</li>
        <li>Environmental factors (e.g., hypo/hyperthermia)</li>
        <li>Inflammation, infection, and injury</li>
      </ul>
      <p>Common measurement sites: <em>oral, tympanic, temporal artery, axillary, rectal</em></p>

      <h3 style={{ color: '#c0392b' }}>Pulse</h3>
      <ul>
        <li>Heart rate and rhythm (regular or irregular)</li>
        <li>Quality (bounding, normal, weak, thready, or absent)</li>
        <li>Comparison of central and peripheral pulses</li>
      </ul>
      <p><strong>Note:</strong> Early volume depletion may cause a slight increase in pulse rate.</p>

      <h3 style={{ color: '#27ae60' }}>Respirations</h3>
      <p>Assess:</p>
      <ul>
        <li>Rate, rhythm, and depth</li>
        <li>Work of breathing</li>
      </ul>
      <p><strong>Signs of increased respiratory effort:</strong></p>
      <ul>
        <li>Tracheal tugging</li>
        <li>Nasal flaring</li>
        <li>Retractions (suprasternal, intercostal, substernal)</li>
        <li>Use of accessory muscles</li>
        <li>Inability to speak in full sentences</li>
      </ul>

      <h3 style={{ color: '#8e44ad' }}>Oxygen Saturation</h3>
      <p>Ensure accurate readings by:</p>
      <ul>
        <li>Positioning the sensor correctly</li>
        <li>Comparing oximeter pulse with radial or apical pulse</li>
      </ul>
      <p><strong>Inaccurate readings may result from:</strong> hypotension, anemia, vasoconstriction, hypothermia, CO poisoning, artificial nails, fluorescent lights.</p>
      
      <h3 style={{ color: '#f1c40f' }}>Blood Pressure</h3>
      <ul>
        <li><strong>Systolic BP</strong>: Function of cardiac output</li>
        <li><strong>Diastolic BP</strong>: Measure of peripheral vascular resistance</li>
        <li><strong>Pulse Pressure</strong>: Difference between systolic and diastolic pressure</li>
      </ul>
      <p><strong>Pulse pressure narrowing</strong> indicates decreased cardiac output and increased vasoconstriction.</p>
      <p>Measurement methods: auscultation, palpation, noninvasive BP monitors, Doppler ultrasound.</p>
      <p><strong>Proper cuff size:</strong> Too small = high readings | Too large = low readings.</p>

      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#7f8c8d' }}>Normal ED blood pressure does not always indicate stability due to compensatory mechanisms.</p>
    </div>

    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
  <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Orthostatic Vital Signs</h2>
  
  <p>Orthostatic vital signs evaluate the BP and pulse rate in two or three positions: lying, sitting, or standing.</p>
  
  <h3 style={{ color: '#16a085' }}>When to Take Orthostatic Vital Signs?</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Syncopal episodes or suspected volume depletion</li>
  </ul>
  
  <h3 style={{ color: '#2980b9' }}>Procedure</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Keep the patient supine for 2-3 minutes, then check the BP and pulse</li>
    <li>Ask the patient to sit for one minute, then check BP, pulse, and associated symptoms</li>
    <li>Assist the patient to a standing position, and after 1 minute, reassess BP, pulse, and symptoms</li>
    <li>The test is positive if the pulse rate increases by 30 beats/min or more, and symptoms (e.g., dizziness or syncope) occur with position change</li>
    <li>A supine-to-standing measurement is more accurate than a supine-to-sitting</li>
  </ul>

  <h3 style={{ color: '#e74c3c' }}>Weight, Height, and Head Circumference</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li><strong>Pediatric patients:</strong> Should be weighed because fluid resuscitation and most medications are dosed by kilogram of body weight.</li>
    <li><strong>Adults:</strong> Weights may or may not be measured unless the patient requires weight-based medications (e.g., vasopressors or heparin infusions).</li>
    <li><strong>Children under 2 years:</strong> Should be evaluated for head circumference in the case of cranial abnormalities and ventriculoperitoneal shunt malfunction.</li>
  </ul>
  
  <h3 style={{ color: '#f39c12' }}>Give Comfort Measures</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Note any self-reports or behavioral cues suggesting discomfort or pain</li>
    <li>Use the PQRST mnemonic (i.e., provoking factors, quality, radiation, severity, and timing) to assess pain</li>
    <li>Use age-appropriate assessment tools (e.g., numeric rating scale 0 to 10, FACES Pain Rating Scale) to quantify the severity of pain or discomfort</li>
  </ul>

  <h3 style={{ color: '#9b59b6' }}>Comfort Measures</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li><strong>Nonpharmacological measures:</strong> Reassurance, positioning the patient to minimize discomfort, covering open wounds, stabilizing suspected fractures, applying cold or warm packs.</li>
    <li><strong>Pharmacological (analgesics):</strong> If necessary</li>
  </ul>

  <h3 style={{ color: '#34495e' }}>History Taking</h3>
  <p>The patient interview is often conducted simultaneously with the head-to-toe survey.</p>
  <p>History includes:</p>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Chief complaint, present illness or injury</li>
    <li>Past medical history, current medications (prescription, over-the-counter, herbal supplements, recreational substances), and allergies</li>
    <li>Why the patient came to the ED</li>
  </ul>
  <p>The chief complaint should be recorded as the reason for the visit, e.g., "fell from a stepladder, now pain and swelling in left arm" (instead of "possible fractured left arm").</p>

  <h3 style={{ color: '#27ae60' }}>AMPLE Mnemonic</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li><strong>A:</strong> Allergies</li>
    <li><strong>M:</strong> Medication (current medication)</li>
    <li><strong>P:</strong> Past health history</li>
    <li><strong>L:</strong> Last meal eaten</li>
    <li><strong>E:</strong> Event leading to illness/injury</li>
  </ul>

  <h3 style={{ color: '#8e44ad' }}>Head-to-Toe Assessment</h3>
  <p>A complete head-to-toe assessment is necessary for all critically ill or injured patients.</p>
  <p>For patients with minor illness or injury or symptoms isolated to one body system, clinicians may rapidly and systematically complete the various components of the head-to-toe evaluation, then focus the assessment on the specific problem.</p>

  <h3 style={{ color: '#2c3e50' }}>Head and Face</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Inspect and palpate head and face for tenderness, lacerations, abrasions, avulsions, puncture wounds, foreign objects, and edema</li>
    <li>Note any discharge from the nose, ears, or eyes</li>
    <li>Assess oral mucosa: color, hydration status, inflammation, swelling, bleeding</li>
    <li>Examine teeth for malocclusion and loose or missing teeth</li>
    <li>Examine eyes and lids for ptosis, exophthalmos, subconjunctival hemorrhage, or redness</li>
    <li>Check for recent visual changes and perform visual acuity tests for ocular complaints</li>
  </ul>

  <h3 style={{ color: '#c0392b' }}>Perform Neurologic Assessment</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>The most important indicator of cerebral function is the patient’s level of consciousness</li>
    <li>Assess orientation to time, place, person, and situation</li>
    <li>If no response to verbal commands, apply noxious or painful stimuli (e.g., squeeze of trapezius muscle)</li>
    <li>Use the Glasgow Coma Scale (GCS) to measure neurologic status</li>
    <li>Evaluate pupil size, shape, and reactivity</li>
    <li>Further neurologic assessment includes evaluation of muscle strength, tone, sensation, and cranial nerve function</li>
  </ul>

  <h3 style={{ color: '#9b59b6' }}>Potential Causes of Altered LOC (AEIOU-TIPPS)</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li><strong>A:</strong> Alcohol</li>
    <li><strong>E:</strong> Epilepsy/electrolytes</li>
    <li><strong>I:</strong> Insulin (hypo/hyperglycemia)</li>
    <li><strong>O:</strong> Opiates</li>
    <li><strong>U:</strong> Uremia</li>
    <li><strong>T:</strong> Trauma</li>
    <li><strong>I:</strong> Infection</li>
    <li><strong>P:</strong> Poison</li>
    <li><strong>P:</strong> Psychosis</li>
    <li><strong>S:</strong> Syncope</li>
  </ul>
</div>

<div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
  <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Neck</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Observe the neck for soft-tissue injury, deformity or crepitus, edema, rashes, lesions, masses</li>
    <li>Check the appearance of jugular veins</li>
    <li>Palpate the neck to determine tracheal position, signs of subcutaneous emphysema, and tenderness</li>
    <li>Palpate the cervical spine for tenderness</li>
    <li>Assess complaints of dysphagia (difficulty swallowing) and hoarseness</li>
  </ul>

  <h2 style={{ color: '#16a085' }}>Chest</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Assess respiratory rate (RR) and depth, degree of effort, symmetry of chest wall expansion, use of accessory or abdominal muscles, paradoxical chest wall movement</li>
    <li>Inspect the anterior & posterior chest for lacerations, contusions, lesions, rashes, puncture wounds, impaled objects, swelling, scars</li>
    <li>Check for the presence of central venous access devices, pacemakers, ICDs, and patches</li>
    <li>Palpate the chest for deformity, crepitus, tenderness, and emphysema</li>
    <li>Auscultate breath sounds for bilateral equality (normal, decreased, or absent), wheezes, crackles, and rhonchi</li>
    <li>Assess heart sounds for murmurs and friction rubs</li>
    <li>ECG for ischemic chest pain</li>
  </ul>

  <h2 style={{ color: '#2980b9' }}>Abdomen</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Observe the abdomen for distention, ascites, lacerations, abrasions, contusions, rashes, masses, pulsations, impaled objects, ecchymosis, feeding tubes, and stomas</li>
    <li>Assess bowel sounds</li>
    <li>Palpate all four quadrants for rigidity, tenderness, and guarding. Start away from any reported pain or tenderness</li>
    <li>Rebound tenderness (sharp pain upon sudden removal of fingers) suggests peritoneal irritation</li>
    <li>Emesis or stool should be tested for blood</li>
  </ul>

  <h2 style={{ color: '#e74c3c' }}>Pelvis/Perineum</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Observe the pelvis and perineal area for lacerations, abrasions, rashes, lesions, edema, or bleeding</li>
    <li>Check for drainage or discharge from the vagina or penis</li>
    <li>Vaginal bleeding: A saturated pad holds 20 to 30 mL of blood</li>
    <li>Priapism (penis remains erect for hours without stimulation) may indicate pathological conditions such as sickle cell crisis or spinal cord injury</li>
    <li>Palpate the pelvis for bony stability and assess anal sphincter tone</li>
    <li>Assess patients with urinary complaints for pain or burning with urination, frequency, hematuria, decreased urination, dribbling, and flank tenderness</li>
    <li>A urine sample should be obtained for analysis</li>
    <li>For female patients of reproductive age, consider the possibility of an unknown pregnancy, obtain a menstrual history, and perform a urine pregnancy test</li>
    <li>If the patient is pregnant, assess fetal heart tones using Doppler ultrasonography (first heard at around 10 to 12 weeks gestation)</li>
  </ul>

  <h2 style={{ color: '#9b59b6' }}>Extremities</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Assess extremities for redness, edema, rashes, lesions, scars; pulse quality, movement, and sensation</li>
    <li>Palpate limbs for pain, tenderness, deformity, and open or puncture wounds</li>
    <li>Evaluate neurovascular status distal to the site of injury for pulse quality, skin temperature, capillary refill, sensation, and movement</li>
  </ul>

  <h2 style={{ color: '#34495e' }}>Posterior Surfaces</h2>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Evaluate the patient’s back and posterior aspects of the arms and legs for bleeding, wounds, hematomas, rashes, and edema</li>
    <li>Palpate the vertebral column for tenderness and deformity</li>
    <li>A rectal examination may be performed to determine rectal tone, stool character, and presence of blood</li>
  </ul>

  <h2 style={{ color: '#f39c12' }}>Ongoing Assessment</h2>
  <p><strong>Goals:</strong></p>
  <ul style={{ paddingLeft: '20px' }}>
    <li>To identify the individual patient’s response to interventions</li>
    <li>To determine improvement or deterioration in patient status</li>
    <li>Reassessment intervals based on the patient’s clinical status</li>
    <li>Follow facility protocols for specific situations</li>
    <li>Trauma score calculation on arrival and 1 hour after presentation</li>
    <li>Repeat vital signs (VS) and neurologic assessments every 15 minutes for patients receiving fibrinolytic therapy</li>
    <li>Reassess pain score 30 minutes after parenteral opioids have been administered</li>
  </ul>

  <h3 style={{ textAlign: 'center', color: '#2c3e50', marginTop: '40px' }}>Summary</h3>
  <p>The ED patient's initial assessment is covered in this presentation.</p>
  <p>A systematic approach to evaluation ensures that life-threatening conditions are immediately identified in the primary assessment (ABCDE portion of the A-to-I mnemonic) and that all indicators of illness or injury are addressed in the secondary assessment.</p>
  <p>Most patients present with non-life-threatening conditions that require resuscitation (FGHI portion of the A-to-I mnemonic). Based on the patient's condition, chief complaint, and setting, the emergency nurse determines the extent of the evaluation.</p>
</div>

  </div>,
    quiz:[
      {
        question: "What is the primary goal of a systematic approach to patient evaluation?",
        options: ["Immediate recognition of life-threatening conditions", "Providing accurate patient care", "Diagnosing the specific illness or injury"],
        correctAnswer: "Immediate recognition of life-threatening conditions",
      },
      {
        question: "Which of the following is included in the initial assessment phase?",
        options: ["Primary survey", "Secondary survey", "Physical examination only"],
        correctAnswer: "Primary survey",
      },
      {
        question: "What is the first step in the primary assessment?",
        options: ["Breathing", "Airway", "Circulation"],
        correctAnswer: "Airway",
      },
      {
        question: "What does the acronym AVPU stand for in the context of disability assessment?",
        options: ["Alert, Visual, Pain, Unresponsive", "Alert, Verbal, Pain, Unresponsive", "Airway, Ventilation, Pulse, Unresponsive"],
        correctAnswer: "Alert, Verbal, Pain, Unresponsive",
      },
      {
        question: "Which assessment is done to identify life-threatening issues in trauma patients?",
        options: ["Primary assessment", "Secondary assessment", "Tertiary assessment"],
        correctAnswer: "Primary assessment",
      },
      {
        question: "What is the purpose of a secondary survey?",
        options: ["To assess for life-threatening conditions", "To identify other abnormalities", "To perform emergency surgeries"],
        correctAnswer: "To identify other abnormalities",
      },
      {
        question: "In the ABCDE primary survey, what does 'E' represent?",
        options: ["Exposure/Environmental control", "External bleeding assessment", "Evaluation of pulse"],
        correctAnswer: "Exposure/Environmental control",
      },
      {
        question: "What is a common airway management technique for a patient with no trauma?",
        options: ["Endotracheal intubation", "Oropharyngeal airway", "Cricothyroidotomy"],
        correctAnswer: "Oropharyngeal airway",
      },
      {
        question: "When should cervical spine stabilization be provided during airway management?",
        options: ["Before airway maneuvers", "After airway obstruction is resolved", "Only in unconscious patients"],
        correctAnswer: "Before airway maneuvers",
      },
      {
        question: "What is the first action to take when assessing breathing effectiveness?",
        options: ["Assessing spontaneous breathing", "Providing oxygen", "Performing CPR"],
        correctAnswer: "Assessing spontaneous breathing",
      },
      {
        question: "What is used to treat breathing impairment in a patient?",
        options: ["Bag-mask device", "Cricothyroidotomy", "Suctioning"],
        correctAnswer: "Bag-mask device",
      },
      {
        question: "What does the 'C' in the ABCDE assessment stand for?",
        options: ["Circulation effectiveness", "Chest assessment", "Consciousness"],
        correctAnswer: "Circulation effectiveness",
      },
      {
        question: "What should you check during circulation assessment?",
        options: ["Skin color, temperature, and moisture", "Pulse rate only", "Mental status"],
        correctAnswer: "Skin color, temperature, and moisture",
      },
      {
        question: "What action should be taken if there is no pulse during circulation assessment?",
        options: ["Start resuscitation", "Give pain relief", "Reposition the patient"],
        correctAnswer: "Start resuscitation",
      },
      {
        question: "What does the term 'disability' refer to in the ABCDE assessment?",
        options: ["Neurological status", "Breathing status", "Pain level"],
        correctAnswer: "Neurological status",
      },
      {
        question: "Which of the following is part of the secondary assessment?",
        options: ["Pain assessment", "Airway management", "Oxygen therapy"],
        correctAnswer: "Pain assessment",
      },
      {
        question: "What is a critical component of history taking in the patient assessment process?",
        options: ["The chief complaint", "Physical exam results", "Medication history only"],
        correctAnswer: "The chief complaint",
      },
      {
        question: "What is the AMPLE mnemonic used for?",
        options: ["Assessing pain", "Taking patient history", "Airway management"],
        correctAnswer: "Taking patient history",
      },
      {
        question: "What does 'P' in the AMPLE mnemonic represent?",
        options: ["Past health history", "Pain level", "Physical assessment"],
        correctAnswer: "Past health history",
      },
      {
        question: "What should be included in a full set of vital signs?",
        options: ["Temperature, pulse, respiratory rate", "Pulse, blood pressure, ECG", "Heart rate, respiratory rate, oxygen saturation"],
        correctAnswer: "Temperature, pulse, respiratory rate",
      },
      {
        question: "When should you reassess vital signs?",
        options: ["Only after 24 hours", "When abnormal or prior to discharge", "Only in critical patients"],
        correctAnswer: "When abnormal or prior to discharge",
      },
      {
        question: "What method should be used to assess oxygen saturation?",
        options: ["Pulse oximeter", "Nasal cannula", "Endotracheal intubation"],
        correctAnswer: "Pulse oximeter",
      },
      {
        question: "What is the primary purpose of assessing skin color, temperature, and moisture during circulation evaluation?",
        options: ["To assess hydration levels", "To detect signs of shock", "To monitor pain levels"],
        correctAnswer: "To detect signs of shock",
      },
      {
        question: "What is the role of the Glasgow Coma Scale (GCS)?",
        options: ["To assess level of consciousness", "To assess oxygen levels", "To determine blood pressure"],
        correctAnswer: "To assess level of consciousness",
      },
      {
        question: "Which of the following is not a typical assessment of the neck in trauma patients?",
        options: ["Check for jugular vein distention", "Palpate for tracheal position", "Perform a full range of motion test"],
        correctAnswer: "Perform a full range of motion test",
      },
      {
        question: "What is checked in the chest assessment?",
        options: ["Breath sounds", "Visual appearance of the abdomen", "Heart rate and rhythm"],
        correctAnswer: "Breath sounds",
      },
      {
        question: "How should you assess for abdominal tenderness?",
        options: ["Palpate all four quadrants", "Use a stethoscope to listen", "Ask the patient about pain only"],
        correctAnswer: "Palpate all four quadrants",
      },
      {
        question: "When should rectal tone be assessed?",
        options: ["Only for suspected spinal cord injuries", "In cases of abdominal tenderness", "In patients with altered mental status"],
        correctAnswer: "In patients with altered mental status",
      },
      {
        question: "What should be done for pelvic trauma assessment?",
        options: ["Palpate for bony stability", "Perform an abdominal exam", "Reassess vital signs"],
        correctAnswer: "Palpate for bony stability",
      },
      {
        question: "What is assessed during extremity evaluation?",
        options: ["Redness, edema, and rashes", "Skin color and temperature only", "Body temperature and pulse rate"],
        correctAnswer: "Redness, edema, and rashes",
      },
      {
        question: "What does the ongoing assessment aim to determine?",
        options: ["Patient response to interventions", "Patient's medication history", "Patient's medical history"],
        correctAnswer: "Patient response to interventions",
      },
      {
        question: "How often should vital signs be reassessed for a patient receiving fibrinolytic therapy?",
        options: ["Every 15 minutes", "Every 30 minutes", "Once an hour"],
        correctAnswer: "Every 15 minutes",
      }
    ]
  },

  // Add more courses here as needed
];
