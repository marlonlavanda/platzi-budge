import React from 'react'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import confLogo from '../images/platziconf-logo.svg'
import '../components/styles/BadgeDetails.css'
import DeleteBadgeModal from '../components/DeleteBadgeModal'


  // Manejo del estado con Hooks 
  function useIncreaseCount(max){
    const [count, setCount] = React.useState(0)
    if(count > max) {
      setCount(0)
    }
    return [count, setCount]
  }
function BadgeDetails (props) {
  const [count, setCount] = useIncreaseCount(4)
  // const count = 3
  const badge = props.badge

  return (
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia"/>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                />
              </div>
              <div className="col">
                <h2>Actions</h2>
                  <div>
                    <button onClick={() => {
                      setCount(count + 1)
                    }} className="btn btn-primary mr-4">
                      Increase Count: {count}
                    </button>
                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                    </div>
                  <div>
                  <div>
                    <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                    <DeleteBadgeModal 
                    onClose={props.onCloseModal} 
                    onDeleteBadge={props.onDeleteBadge} 
                    isOpen={props.modalIsOpen}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima similique itaque nostrum sapiente, consectetur quas voluptatum animi labore! Vero quia exercitationem, necessitatibus corrupti dolore iure saepe illum corporis! Et, rem.
                    </DeleteBadgeModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default BadgeDetails