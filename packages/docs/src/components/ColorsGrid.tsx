import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'
import React from 'react'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong style={{ fontSize: '1.125rem' }}>${key}</strong>
          <strong>{color}</strong>
        </div>
      </div>
    )
  })
}
