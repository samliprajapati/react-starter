import React, { Component } from 'react';
import { Spinner } from 'reactstrap';


class Modal extends Component {
  render() {
    return (


      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
        <Spinner color="light" />
        <Spinner color="dark" />
        <Spinner size="sm" color="primary" />{' '}
<Spinner size="sm" color="secondary" />

<Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </div>
    );
  }
}

export default Modal;