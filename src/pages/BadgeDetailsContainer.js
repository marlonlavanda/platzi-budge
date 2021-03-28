import React from 'react'
import PageLoading from '../components/PageLoading'
import BadgeDetails from '../pages/BadgeDetails'
import PageError from '../components/PageError'
import api from '../api'
// import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {
  // Inicio del estado 
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
        )
        this.setState({ loading: false, data: data })
    } catch(error) {
      this.setState({loading: false, error: error})
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({ loading: false})

      this.props.history.push('/badges')
    } catch(error){
      this.setState({ loading: false, error: error})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading/>
    }

    if(this.state.error){
      return <PageError/>
    }

    return(
      <BadgeDetails 
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      onDeleteBadge={this.handleDeleteBadge}
      modalIsOpen={this.state.modalIsOpen}
      badge={this.state.data}></BadgeDetails>
    )
  }
}

export default BadgeDetailsContainer