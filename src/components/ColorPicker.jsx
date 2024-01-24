import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#da9393",
          "#db8fb1",
          "#c2a1da",
          "#938fdb",
          "#8fb7db",
          "#8fdbc8",
          "#8fdb95",
          "#f3eb92",
          "#dbc3a5",
          "#fff",
          "#000",
          "#ababab"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker