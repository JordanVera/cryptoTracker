import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';

const PortfolioHeader = (props) => {
  return (
    <Row>
        <Col sm={8}>
            <FormattedMessage defaultMessage="Coin Name" />
        </Col>
        <Col sm={2}>
            <FormattedMessage defaultMessage="Price" />
        </Col>
        <Col sm={2}>
            <FormattedMessage defaultMessage="Profit" />
        </Col>
    </Row>
  )
}

export default PortfolioHeader;
