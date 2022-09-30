import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions,setTransactions] = useState([])
  const [search,setSearch] = useState("")

    useEffect(() =>{
      const lookup = () =>{
        fetch(`http://localhost:8001/transactions?q=${search}`)
        .then(resp => resp.json())
        .then(data => setTransactions(data))
      };
      if(search.length === 0 || search.length > 2) lookup();
    },[search])
      
  return (
    <div>
      <Search  search = {search} setSearch ={setSearch}/>
      <AddTransactionForm  transactions={transactions} setTransactions ={setTransactions}/>
      <TransactionsList transactions={transactions} setTransactions ={setTransactions}  search={search} setSearch={setSearch}/>
    </div>
  );
}

export default AccountContainer;
