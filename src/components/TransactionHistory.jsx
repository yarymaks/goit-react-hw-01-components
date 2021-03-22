import Transaction from './Transaction';
const TransactionHistory = ({transHistory}) => (
<table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {transHistory.map((transaction)=>(
            <tr key={transaction.id}>
            <Transaction 
            type = {transaction.type}
            amount = {transaction.amount}
            currency = {transaction.currency}
            />
            </tr>
        ))
    }
    </tbody>
</table>
);
export default TransactionHistory;