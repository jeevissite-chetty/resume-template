import { useState } from 'react';

export default function Sidebar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Profile Photo */}
      <div className="relative w-32 h-32">
        <img
          src={image || 'https://placehold.co/150x150'}
          alt="Add Foto"
          className="w-full h-full object-cover rounded-full border-4 border-gray-300"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>

      {/* Personal Info */}
      <input
        type="text"
        placeholder="😀 Your Name"
        className="w-full px-6 py-4 border rounded text-sm"
      />
      <input
        type="email"
        placeholder="📧 Email"
        className="w-full px-6 py-4 border rounded text-sm"
      />
      <input
        type="text"
        placeholder="📱 Mobile Number"
        className="w-full px-6 py-4 border rounded text-sm"
      />
      <input
        type="text"
        placeholder="📍 Location"
        className="w-full px-6 py-4 border rounded text-sm"
      />
      <input
        type="text"
        placeholder="🔗 LinkedIn"
        className="w-full px-6 py-4 border rounded text-sm"
      />

      {/* Hard Skills */}
      <div className="w-full mt-4 ml-4">
        <h2 className="text-sm font-semibold mb-2">💪 Hard Skills</h2>
        <ul className="list-none list-inside text-xl space-y-1">
          <li><input
            type="text"
            placeholder="Enter Hard Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Hard Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Hard Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Hard Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Hard Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="w-full mt-4 ml-4">
        <h2 className="text-sm font-semibold mb-2">💡 Soft Skills</h2>
        <ul className="list-none list-inside text-xl space-y-1">
          <li><input
            type="text"
            placeholder="Enter Soft Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Soft Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Soft Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Soft Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
          <li><input
            type="text"
            placeholder="Enter Soft Skill"
            className="w-full px-2 py-1 border rounded text-sm"
               /></li>
        </ul>
      </div>
    </div>
  );
}
