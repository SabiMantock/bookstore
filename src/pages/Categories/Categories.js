import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.categories);
  const [statusState, setStatusState] = useState(false);

  const handleCheckStatus = () => {
    dispatch(checkStatus(status));
    setStatusState(!statusState);
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2>Status</h2>
      {statusState && <p>{status}</p>}
      <Button defaultProps={false} title="Check Status" onClick={handleCheckStatus} className="status-btn" />
    </div>
  );
};

export default Categories;
