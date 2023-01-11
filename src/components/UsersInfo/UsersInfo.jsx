import { useState } from "react"
import { List, Details } from "./components"

export const UsersInfo = () => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div style={{
      display: 'flex', justifyContent: 'left',
      alignItems: 'flex-start', columnGap: '20px'
    }}>
      <List setActiveId={setActiveId} activeId={activeId} />
      <Details activeId={activeId} />
    </div>
  )
}