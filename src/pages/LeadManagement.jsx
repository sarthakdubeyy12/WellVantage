import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

// Reusable Filter Button
function FilterButton({ children }) {
  return (
    <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50">
      {children} ⌵
    </button>
  );
}

// View for Adding a New Lead
const AddLeadView = () => {
  const [addLeadTab, setAddLeadTab] = useState("basic");

  const InputField = ({ label, type = "text", placeholder, required = false, children }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center">
        {children || (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#28a745] focus:border-[#28a745]"
          />
        )}
      </div>
    </div>
  );

  // Reusable SelectField component for dropdowns
  const SelectField = ({ label, options = [], placeholder }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select defaultValue="" className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#28a745] focus:border-[#28a745] appearance-none bg-white bg-no-repeat" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill=\"gray\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>')`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}>
        <option value="" disabled>{placeholder || `Select ${label}`}</option>
        {options.map(option => (
          <option key={option} value={option.toLowerCase().replace(/ /g, '-')}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
        ))}
      </select>
    </div>
  );

//three consecutive buttons for Basic, Preferences, Status

  return (
    <>
      <div className="border-b border-gray-300">
        <div className="flex space-x-8 -mb-px">
          <button
            onClick={() => setAddLeadTab("basic")}
            className={`pb-3 px-1 text-lg font-poppins focus:outline-none ${
              addLeadTab === "basic"
                ? "border-b-4 border-[#28a745] text-[#28a745] font-semibold"
                : "text-gray-500"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setAddLeadTab("preferences")}
            className={`pb-3 px-1 text-lg font-poppins focus:outline-none ${
              addLeadTab === "preferences"
                ? "border-b-4 border-[#28a745] text-[#28a745] font-semibold"
                : "text-gray-500"
            }`}
          >
            Preferences
          </button>
          <button
            onClick={() => setAddLeadTab("status")}
            className={`pb-3 px-1 text-lg font-poppins focus:outline-none ${
              addLeadTab === "status"
                ? "border-b-4 border-[#28a745] text-[#28a745] font-semibold"
                : "text-gray-500"
            }`}
          >
            Status
          </button>
        </div>
      </div>

      <div className="mt-8">
        {addLeadTab === "basic" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-8xl">
              <InputField label="First Name" required />
              <InputField label="Last Name" required />
              <InputField label="Phone">
                <div className="flex w-full">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +91 ⌵
                  </span>
                  <input
                    type="tel"
                    className="rounded-none rounded-r-md bg-white border text-gray-900 focus:ring-[#28a745] focus:border-[#28a745] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  />
                </div>
              </InputField>
              <InputField label="Email" type="email" />
              <InputField label="Gender">
                <select className="w-full px-13 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#28a745] focus:border-[#28a745]">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </InputField>
              <InputField label="Date of Birth" type="date" />
              <InputField label="Height">
                <div className="flex w-full">
                  <input
                    type="number"
                    className="rounded-none rounded-l-md bg-white border text-gray-900 focus:ring-[#28a745] focus:border-[#28a745] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  />
                  <span
                    className="inline-flex items-center px-3 text-sm font-medium border border-l-0 border-gray-300 rounded-r-md"
                    style={{
                        backgroundColor: "#e7fbfa",
                        color: "#28a745",
                    }}
                    >
                    cm ⌵
                  </span>

                </div>
              </InputField>
              <InputField label="Weight">
                <div className="flex w-full">
                  <input
                    type="number"
                    className="rounded-none rounded-l-md bg-white border text-gray-900 focus:ring-[#28a745] focus:border-[#28a745] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  />
                  <span
                    className="inline-flex items-center px-3 text-sm font-medium border border-l-0 border-gray-300 rounded-r-md"
                    style={{
                        backgroundColor: "#e7fbfa",
                        color: "#28a745",
                    }}
                    >
                    kg ⌵
                  </span>

                </div>
              </InputField>
            </div>

            <div className="mt-8 flex justify-center">
  <button
    className="bg-[#28A745] text-white font-semibold rounded-[7px] hover:bg-opacity-90"
    style={{
      width: "393px",
      height: "55px",
      top: "23px",
      left: "6px",
      opacity: 1,
      paddingTop: "15px",
      paddingRight: "72px",
      paddingBottom: "15px",
      paddingLeft: "72px",
      gap: "10px",
      position: "relative",
    }}
  >
    Update
  </button>
</div>
          </div>
        )}

        {addLeadTab === "preferences" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Preference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-8xl">
              <SelectField label="Activity Level" options={['Very Active', 'Active', 'Lightly Active']} />
              <SelectField label="Wellness Goals" options={['Lose Weight', 'Gain Muscle', 'Improve Endurance']} />
              <SelectField label="Primary Fitness Focus" options={['Gym Workout', 'Yoga', 'Cardio']} />
              <SelectField label="Preferred Gym Time" options={['Morning', 'Afternoon', 'Evening']} />
              <SelectField label="Preferred Workout Intensity" options={['Light', 'Moderate', 'Intense']} />
              <SelectField label="Medical Concerns" options={['Diabetes', 'Hypertension', 'None']} />
              <SelectField label="Previous Gym Experience" options={['Yes', 'No']} />
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="bg-[#28A745] text-white font-semibold rounded-[7px] hover:bg-opacity-90"
                style={{
                  width: "393px",
                  height: "55px",
                  top: "23px",
                  left: "30px",
                  opacity: 1,
                  paddingTop: "15px",
                  paddingRight: "72px",
                  paddingBottom: "15px",
                  paddingLeft: "72px",
                  gap: "10px",
                  position: "relative",
                }}
              >
                Update
              </button>
            </div>
          </div>
        )}
        {addLeadTab === "status" && (
          <StatusForm />
        )}
      </div>
    </>
  );
};


// Main Lead Management Page

export default function LeadManagement() {
  const [showAddLead, setShowAddLead] = useState(false);
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-white h-screen overflow-y-auto">
        {/* Top Bar */}
        <div className="w-[1420px] h-[95px] bg-[#F9F9FA] shadow-sm relative">
          <h2
            className="font-poppins font-semibold text-[#474747] absolute"
            style={{
              width: "298px",
              height: "20px",
              top: "38px",
              left: "48px",
              fontSize: "31px",
              lineHeight: "20px",
              fontWeight: 600,
              letterSpacing: "0px",
            }}
          >
            Lead Management
          </h2>

          {/* Vector Icon (Add Lead) */}
          <img
            src="/Vector.png"
            alt="Add Lead"
            onClick={() => setShowAddLead(true)}
            className="absolute cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{
              width: "48px",
              height: "51.0628px",
              top: "33px",
              left: "1332px",
            }}
          />
        </div>

        {/* Conditional Rendering */}
        <div className="p-8">
          {showAddLead ? (
            <AddLeadView />
          ) : (
            <>
              {/* Tab Navigation */}
              <div className="border-b border-gray-300">
                <div className="flex space-x-8 -mb-px">
                  <button
                    onClick={() => setActiveTab("active")}
                    className={`pb-3 px-1 text-lg font-poppins transition-colors duration-200 focus:outline-none ${
                      activeTab === "active"
                        ? "border-b-4 border-[#28a745] text-[#28a745] font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setActiveTab("archived")}
                    className={`pb-3 px-1 text-lg font-poppins transition-colors duration-200 focus:outline-none ${
                      activeTab === "archived"
                        ? "border-b-4 border-[#28a745] text-[#28a745] font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Archived
                  </button>
                </div>
              </div>

              {/* Active Tab Content */}
              <div className="mt-6">
                {activeTab === "active" && (
                  <div>
                    {/* Search and Filter Section */}
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                      <div className="relative flex-grow max-w-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </span>
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28a745]"
                        />
                      </div>
                      <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50">
                        Last interaction : 1 June 2025 ⌵
                      </button>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <FilterButton>Interest Level</FilterButton>
                        <FilterButton>Assigned to</FilterButton>
                        <FilterButton>Created At</FilterButton>
                        <FilterButton>Name Alphabetical</FilterButton>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 bg-gray-100 rounded-full px-4 py-1">
                        <span>60 of 120 leads selected</span>
                        
                      </div>
                    </div>

                    {/* Leads Table Placeholder */}
                    <LeadsTable />
                  </div>
                )}

                {activeTab === "archived" && (
                  <p className="text-gray-700">
                    Archived leads content will be displayed here.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable component for dropdowns
const SelectField = ({ label, options = [], placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select defaultValue="" className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#28a745] focus:border-[#28a745] appearance-none bg-white bg-no-repeat" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="gray" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}>
            <option value="" disabled>{placeholder}</option>
            {options.map(option => (
                <option key={option} value={option.toLowerCase().replace(/ /g, '-')}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

// Reusable DateField component
const DateField = ({ label, value }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <input type="text" readOnly value={value} className="w-full pl-3 pr-10 py-3 bg-gray-100 border border-gray-300 rounded-md" />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
        </div>
    </div>
);


// The Status Form Component
function StatusForm() {
    const [notes, setNotes] = useState([
        { id: 1, date: '30 July 2025', text: 'Called the customer again.' },
        { id: 2, date: '12 July 2025', text: 'Customer walked in, offered 10% discount.' },
        { id: 3, date: '12 July 2025', text: 'Lead created.' },
    ]);

    const handleAddNote = () => {
        const newNote = {
            id: notes.length + 1,
            date: new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()),
            text: ''
        };
        setNotes([newNote, ...notes]);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Status Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-9xl">
                <DateField label="Inquiry Date" value="22 July 2025" />
                <SelectField label="Assigned To Admin/Receptionist" options={['Ram Mohan', 'Sita Devi']} placeholder="Ram Mohan" />
                <SelectField label="Interest Level" options={['Hot', 'Warm', 'Cold']} placeholder="Hot" />
                <SelectField label="Follow Up Status" options={['Needs Follow Up', 'Contacted', 'Converted']} placeholder="Needs Follow Up" />
                <SelectField label="Preferred Package" options={['Package A', 'Package B']} placeholder="Package" />
                <SelectField label="Preferred PT Package (If Any)" options={['Package X', 'Package Y']} placeholder="Package" />
                <SelectField label="How They Heard About The Gym" options={['Social Media', 'Friend', 'Advertisement']} placeholder="Social Media" />
            </div>

            <div className="mt-8 max-w-5xl">
                <div className="flex items-center mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Custom notes</h4>
                    <button onClick={handleAddNote} className="ml-4 w-6 h-6 rounded-full bg-[#28a745] text-white flex items-center justify-center text-lg font-light hover:bg-opacity-90">+</button>
                </div>

                <div className="space-y-4">
                    {notes.map(note => (
                        <div key={note.id} className="flex items-start space-x-4">
                             <div className="flex-shrink-0 w-36">
                                <div className="relative">
                                    <input type="text" readOnly value={note.date} className="w-full pl-3 pr-10 py-2 bg-gray-100 border-transparent rounded-md text-sm" />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </span>
                                </div>
                            </div>
                            <textarea
                                rows="1"
                                defaultValue={note.text}
                                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#28a745] focus:border-[#28a745] text-sm"
                            ></textarea>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex justify-center max-w-5xl">
              <button
                className="bg-[#28A745] text-white font-semibold rounded-lg hover:bg-opacity-90 w-[393px] h-[55px]"
              >
                Update
              </button>
            </div>
        </div>
    );
}

// Leads Table Component
function LeadsTable() {
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        // Simulate fetching from a mock API
        setTimeout(() => {
            setLeads([
                { name: 'Jeo Yadav', interest: 'Hot', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Cold', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Warm', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Hot', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Cold', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Warm', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Hot', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Cold', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Warm', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
                { name: 'Jeo Yadav', interest: 'Hot', assignedTo: 'Ratna Pathak', lastInteraction: '26 July 2025', followUp: 'Need Follow Up' },
            ]);
        }, 800); // Simulate network delay
    }, []);

    const InterestBadge = ({ level }) => {
        const levelStyles = {
            hot: 'bg-red-100 text-red-700',
            cold: 'bg-blue-100 text-blue-700',
            warm: 'bg-orange-100 text-orange-700',
        };
        const text = level.charAt(0).toUpperCase() + level.slice(1);
        const style = levelStyles[level.toLowerCase()] || 'bg-gray-100 text-gray-700';

        return (
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${style}`}>
                🔥 {text}
            </span>
        );
    };

    const ActionIcons = () => (
        <div className="flex items-center space-x-3">
            <button className="text-green-500 hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </button>
        </div>
    );

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Name', 'Interest Level', 'Assigned to', 'Last Interaction', 'Follow Up', 'Action'].map(header => (
                                <th key={header} scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {leads.map((lead, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <span className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-md font-medium text-gray-900">{lead.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <InterestBadge level={lead.interest} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">{lead.assignedTo}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">{lead.lastInteraction}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-md font-medium text-yellow-600">{lead.followUp}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <ActionIcons />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <p className="text-sm text-gray-600">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">68</span> entries
                </p>
                <div className="flex items-center space-x-1">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">{'<'}</button>
                    <button className="px-3 py-1 border border-green-500 bg-green-500 text-white rounded-md text-sm">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">3</button>
                    <span className="px-3 py-1 text-sm">...</span>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">10</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">{'>'}</button>
                </div>
            </div>
        </div>
    );
}