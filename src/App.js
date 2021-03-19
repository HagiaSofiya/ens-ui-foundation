import React, { useState } from "react";
import { ethers } from 'ethers'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import useModal from "./hooks/useModal";
import ABI from "./ABI/ABI.json"
import Loading from "./components/Loading";
import Modal from "./components/Modal";


const GET_USERS = gql`
  {
    domains(orderBy: ttl, orderDirection: desc, first: 10) {
      id
      name
    }
  }
`;

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

export default function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  const { isShowing, toggle } = useModal();
  const [ newData, setNewData ] = useState([]);

  const [ sortType, setSortType ] = useState(null);
  const [ searchTerm, setSearchTerm ] = useState("");


  function  handleChange(e) {
    setSearchTerm(e.target.value);
  };

  function sortReset(){
    setSortType(null);
  };

  function sortAsc () {
    setSortType("asc");
    const sorted = [...data.domains].sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    setNewData(sorted);
  };

  function sortDesc() {
    setSortType("des");
    const sorted = [...data.domains].sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    setNewData(sorted);
  }

  async function setEns(ensName){
    const ensContract = new ethers.Contract( '0xB6F71724FCa391fC6A247AD47e5Dc0207bd22bae' , ABI , signer)
    const tx = await ensContract.setENSName(ensName);
    console.log(tx)

  }

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <Loading/>;

  return (
    <main>
    <section className="search">
      <input
        type="text"
        placeholder="Search for an ENS name"
        value={searchTerm}
        onChange={handleChange}
      />
    </section>
    <section className="sorting">
      <button onClick={sortAsc}>Sort A - Z</button>
      <button onClick={sortDesc}>Sort Z - A</button>
      <button onClick={sortReset}>Reset Sort</button>
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal isShowing={isShowing} hide={toggle}/>
    </section>
    <section className="results">
      <ul>
        {sortType === "des" || sortType === "asc"
          ? newData
              .filter((datum) => datum.name.toLowerCase().includes(searchTerm))
              .map((domain) => <li><button className='rainbow' onClick={() => setEns(domain.name)} key={domain.id}>{domain.name}</button></li>)
          : data.domains
              .filter((datum) => datum.name.toLowerCase().includes(searchTerm))
              .map((domain) => <li><button className='rainbow' onClick={() => setEns(domain.name)} key={domain.id}>{domain.name}</button></li>)
        }
        </ul>
      </section>
    </main>
  );
}
