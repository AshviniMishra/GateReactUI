import React from 'react';

const billDeskPayment = (props) => {
    <div style={{ textAlign: "center" }}>
        <h2>Please do not click Back or Refresh button of browser while going to the BillDesk payment gateway.</h2>
        <div>
            <img alt="Please wait, loading..." src="./img/ajax-loader.gif" />
            <form method="POST" name="doBillDeskPayment" id="doBillDeskPayment" action="https://pgi.billdesk.com/pgidsk/PGIMerchantPayment">
                <input type="hidden" name="msg" value="" />
            </form>

            <script type="text/javascript">
                document.forms["doBillDeskPayment"].submit();
		</script>
        </div>
    </div>
}

export default billDeskPayment;