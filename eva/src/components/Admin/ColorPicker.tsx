import React from 'react';
import { X } from 'lucide-react';

interface Color {
  name: string;
  code: string;
}

interface ColorPickerProps {
  selectedColors: Color[];
  onAddColor: (color: Color) => void;
  onRemoveColor: (index: number) => void;
}

export function ColorPicker({ selectedColors, onAddColor, onRemoveColor }: ColorPickerProps) {
  const [newColor, setNewColor] = React.useState({ name: '', code: '#000000' });

  const predefinedColors = [
    { name: 'Black', code: '#000000' },
    { name: 'White', code: '#FFFFFF' },
    { name: 'Navy', code: '#000080' },
    { name: 'Brown', code: '#964B00' },
    { name: 'Green', code: '#008000' },
    { name: 'Red', code: '#FF0000' }
  ];

  const handleAddColor = () => {
    if (!newColor.name || !newColor.code) {
      return;
    }
    onAddColor(newColor);
    setNewColor({ name: '', code: '#000000' });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-6 gap-4">
        {predefinedColors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onAddColor(color)}
            className="p-3 rounded-lg border hover:border-gray-300 transition-colors"
          >
            <div className="w-full h-6 rounded" style={{ backgroundColor: color.code }} />
            <p className="mt-1 text-xs text-center text-gray-600">{color.name}</p>
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Color name"
          value={newColor.name}
          onChange={(e) => setNewColor(prev => ({ ...prev, name: e.target.value }))}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="color"
          value={newColor.code}
          onChange={(e) => setNewColor(prev => ({ ...prev, code: e.target.value }))}
          className="w-14 p-1 border border-gray-300 rounded-lg"
        />
        <button
          type="button"
          onClick={handleAddColor}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {selectedColors.map((color, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: color.code }}
              />
              <span className="font-medium text-gray-900">{color.name}</span>
            </div>
            <button
              type="button"
              onClick={() => onRemoveColor(index)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}