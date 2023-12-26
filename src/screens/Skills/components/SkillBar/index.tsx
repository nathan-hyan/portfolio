import React from 'react'
import { ProgressBar } from 'react-bootstrap'

interface Props {
  skill: {
    name: string
    percent: number
  }
}

const SkillBar: React.FC<Props> = ({ skill }: Props) => (
  <div className="p-3 my-3 rounded shadow skill-bar">
    <p>{skill.name}</p>
    <ProgressBar animated now={skill.percent} label={`${skill.percent} %`} />
  </div>
)

export default SkillBar
