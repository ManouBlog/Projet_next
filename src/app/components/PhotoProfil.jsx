import React from 'react'

export default function PhotoProfil({nom}) {
  return (
  <div className="avatar avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-15 rounded-full">
    <span className="text-2xl">{nom?.charAt(0)?.toUpperCase()}</span>
  </div>
</div>
  )
}
