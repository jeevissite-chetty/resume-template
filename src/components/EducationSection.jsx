import { useState } from "react";

const EducationSection = () => {
  const [educationList, setEducationList] = useState([
    { degree: "", institution: "", year: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const handleAddRow = () => {
    setEducationList([...educationList, { degree: "", institution: "", year: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updated = educationList.filter((_, i) => i !== index);
    setEducationList(updated);
  };

  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold mb-2">🎓 Education</h2>
      <div className="space-y-3">
        {educationList.map((edu, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="🏫 Degree / Course Name"
              className="w-1/2 px-2 py-1 border rounded text-sm"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
            <input
              type="text"
              placeholder="📍 Institution Name"
              className="w-1/4 px-2 py-1 border rounded text-sm"
              value={edu.institution}
              onChange={(e) => handleChange(index, "institution", e.target.value)}
            />
            <input
              type="text"
              placeholder="📅 Year of Passing"
              className="w-1/4 px-2 py-1 border rounded text-sm"
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
            />
            {educationList.length > 1 && (
              <button
                onClick={() => handleRemoveRow(index)}
                className="text-xl text-red-600 hover:text-red-800 hide-in-pdf"
                title="Remove row"
              >
                ❌
              </button>
            )}
            {index === educationList.length - 1 && (
              <button
                onClick={handleAddRow}
                className="text-xl text-green-600 hover:text-green-800 hide-in-pdf"
                title="Add row"
              >
                ➕
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
