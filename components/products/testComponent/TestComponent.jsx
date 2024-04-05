import React from 'react'

export default function TestComponent({user, menu, setMenu}) {
  return (
    <div>

        <button onClick={() => setMenu(!menu)}>
            {menu ? 'CLOSE' : 'OPEN'}
        </button>
        <span>{user?.name}</span>
        <span>{user?.age}</span>

    </div>
  )
}
