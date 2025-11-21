import { useState } from "react";

const CertificationsSection = () => {
  const [certifications, setCertifications] = useState([
    { name: "", issuedBy: "", issueDate: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  const handleAdd = () => {
    setCertifications([
      ...certifications,
      { name: "", issuedBy: "", issueDate: "" },
    ]);
  };

  const handleRemove = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
  };

  return (
    <div>
      <h2 className="text-sm font-semibold mb-2">🏅 Certifications</h2>
      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="📜 Certificate Name"
              className="w-1/2 px-2 py-1 border rounded text-sm"
              value={cert.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="🏢 Issued By"
              className="w-1/4 px-2 py-1 border rounded text-sm"
              value={cert.issuedBy}
              onChange={(e) => handleChange(index, "issuedBy", e.target.value)}
            />
            <input
              type="text"
              placeholder="📅 Issue Date"
              className="w-1/4 px-2 py-1 border rounded text-sm"
              value={cert.issueDate}
              onChange={(e) => handleChange(index, "issueDate", e.target.value)}
            />
            {index === certifications.length - 1 && (
              <button
                onClick={handleAdd}
                className="text-sm text-green-600 hover:text-green-800 hide-in-pdf"
                title="Add certification"
              >
                ➕
              </button>
            )}
            {certifications.length > 1 && (
              <button
                onClick={() => handleRemove(index)}
                className="text-sm text-red-600 hover:text-red-800 hide-in-pdf"
                title="Remove certification"
              >
                ❌
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
