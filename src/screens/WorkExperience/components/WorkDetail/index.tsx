import React from 'react';
import { workType } from '../../constants';

type Props = { work: workType };

const WorkDetail: React.FC<Props> = ({ work }: Props) => (
  <div className="work-detail bg-white p-3 rounded shadow my-3">
    <h1>
      <span role="img" aria-label="Work">
        💿
      </span>{' '}
      {work.work}
    </h1>
    <small className="text-muted">{`${work.since.toUpperCase()} - ${work.to.toUpperCase()}`}</small>
    <p className="tech-list text-muted">
      {work.tech.join(' / ').toUpperCase()}
    </p>
    <p className="mt-3 lead">{work.description}</p>
  </div>
);

export default WorkDetail;
