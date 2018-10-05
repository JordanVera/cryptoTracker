import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { CHANGELLY_REF_ID } from '../constans';

const Exchange = ({ currency, type }) => {
  return (
    // type === 'link' ?
    //   <Fragment>
    //     <Button onClick={(e) => buy(e, currency)} size="sm" color="link">
    //       <FormattedMessage id="app.buy"
    //         defaultMessage="Buy" />
    //     </Button>
    //     {type === 'link' ? <span className="divider">/</span> : null}
    //     <Button onClick={(e) => sell(e, currency)} size="sm" color="link">
    //       <FormattedMessage id="app.sell"
    //         defaultMessage="Sell" />
    //     </Button>
    //   </Fragment>
    //   :
    //   <Fragment>
    //     {/* <Button onClick={(e) => buy(e, currency)} size="sm" color="success" className="mr-2">
    //       <FormattedMessage id="app.buy"
    //         defaultMessage="Buy" />
    //     </Button>
    //     <Button onClick={(e) => sell(e, currency)} size="sm" color="danger">
    //       <FormattedMessage id="app.sell"
    //         defaultMessage="Sell" />
    //     </Button> */}
    //     <Button color="primary">Track</Button>
    //   </Fragment>

    <Button color="primary">Hold</Button>
  )
}

export default Exchange;
