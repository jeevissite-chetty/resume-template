import React from 'react';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';

export default function MainContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Job Summary */}
      <div>
        <h2 className="text-sm font-semibold mb-2">📝 Summary</h2>
        <textarea
          rows="4"
          placeholder="Write a brief summary about yourself..."
          className="w-full p-2 border rounded text-sm"
        ></textarea>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-sm font-semibold mb-2">🧑‍💼 Work Experience</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="🔹 Job Title at Company"
            className="w-full px-2 py-1 border rounded text-sm"
          />
          <input
            type="text"
            placeholder="📅 Duration"
            className="w-full px-2 py-1 border rounded text-sm"
          />
          <textarea
            rows="3"
            placeholder="Responsibilities and achievements..."
            className="w-full p-2 border rounded text-sm"
          ></textarea>
        </div>
      </div>

      {/* Education */}
     
       <EducationSection />

      {/* Certifications */}
     
       <CertificationsSection /> 

      {/* Languages Known */}
      <div>
        <h2 className="text-sm font-semibold mb-2">🌐 Languages Known</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="🔹 Language Name"
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>
    </div>
  );
}
