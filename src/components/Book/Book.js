import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button/Button';
import './Book.css';
import Divider from '../Divider/VerticalDivider';

const Book = ({
  title, author, onClick, category,
}) => (
  <li>
    <div style={{
      padding: '32px',
      border: '1px solid #e8e8e8',
      backgroundColor: '#fff',
      borderRadius: '4px',
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '114px',
      }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <p style={{
            fontSize: '14px',
            color: '#121212',
            fontWeight: '700',
            opacity: 0.5,
          }}
          >
            {category}
          </p>
          <h2>{title}</h2>
          <p style={{ color: '#4386bf' }}>{author}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '21px' }}>
            <Button
              defaultProps={false}
              className="btn"
              onClick={() => ''}
              title="Comments"
            />
            <Divider type />
            <Button
              defaultProps={false}
              className="btn"
              onClick={onClick}
              title="Remove"
            />
            <Divider type />
            <Button
              defaultProps={false}
              className="btn"
              onClick={() => ''}
              title="Edit"
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              borderRadius:
                '50%',
              border: '5px solid #307bbe',
              borderLeftColor: '#e8e8e8',
              width: '68px',
              height: '68px',
              transform: 'rotate(45deg)',
            }}
          />
          <div>
            <p style={{ color: '#121212', fontSize: '32px' }}>64%</p>
            <p style={{ color: '#121212', fontSize: '14px', opacity: 0.5 }}>Completed</p>
          </div>
          <Divider type={false} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            gap: '20px',
          }}
          >
            <div>
              <p style={{
                color: '#121212',
                fontSize: '14px',
                opacity: 0.5,
                textTransform: 'uppercase',
              }}
              >
                Current Chapter
              </p>
              <p style={{
                marginTop: '7px',
                fontSize: '16px',
                color: '#121212',
                fontWeight: '300',
              }}
              >
                Chapter 17
              </p>
            </div>

            <div>
              <Button defaultProps={false} className="update-btn" title="Update Progress" onClick={() => ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
