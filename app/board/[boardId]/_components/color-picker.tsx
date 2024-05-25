"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const arrayOfRGB = [
  { r: 243, g: 82, b: 35 },
  { r: 255, g: 249, b: 177 },
  { r: 236, g: 184, b: 197 },
  { r: 68, g: 202, b: 99 },
  { r: 213, g: 228, b: 195 },
  { r: 39, g: 142, b: 237 },
  { r: 155, g: 105, b: 245 },
  { r: 183, g: 136, b: 118 },
  { r: 252, g: 142, b: 42 },
  { r: 222, g: 220, b: 228 },
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 255, b: 255 },
];

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[250px] pr-2 mx-2 
    border-r border-neutral-200"
    >
      {arrayOfRGB.map((color) => (
        <ColorButton key={colorToCss(color)} color={color} onClick={onChange} />
      ))}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <div className="">
      <button
        className="w-8 h-8 flex items-center justify-center hover:opacity-75 transition"
        onClick={() => onClick(color)}
      >
        <div
          className="h-8 w-8 rounded-md border border-neutral-300"
          style={{ background: colorToCss(color) }}
        />
      </button>
    </div>
  );
};
