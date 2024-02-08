import React, { useState, useEffect } from "react";
import TicketsBoard from "./components/TicketsBoard";
import Navbar from "./components/Navbar";
import { checkTicketsPriority } from "./helpers/facade";
import { API_URL } from "./constants/data";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem("groupingOption") || "userId"
  );
  const [sortingOption, setSortingOption] = useState(
    localStorage.getItem("sortingOption") || "title"
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
  }, [groupingOption]);

  useEffect(() => {
    localStorage.setItem("sortingOption", sortingOption);
  }, [sortingOption]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();

      const ticketsWithUserData = data?.tickets?.map((ticket) => ({
        ...ticket,
        user: data.users.find((user) => user?.id === ticket?.userId),
      }));

      setTickets(ticketsWithUserData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      alert(error.message);
    }
  };

  const sortTickets = () => {
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sortingOption === "priority") {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    setTickets(sortedTickets);
  };

  const groupTickets = () => {
    const groupedTickets = tickets.reduce((acc, ticket) => {
      let key;
      if (groupingOption === "userId") {
        key = ticket.user ? ticket.user.name : "Unknown";
      } else if (groupingOption === "priority") {
        key = checkTicketsPriority(ticket.priority);
      } else {
        key = ticket[groupingOption];
      }
      acc[key] = [...(acc[key] || []), ticket];
      return acc;
    }, {});
    return groupedTickets;
  };

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
    sortTickets();
  };

  const groupedTickets = groupTickets();

  return (
    <div className="app">
      <Navbar
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <div className="box">
        {loading ? (
          <h3>Loading...</h3>
        ) : Object.keys(groupedTickets).length <= 0 ? (
          <h3>No tickets to display.</h3>
        ) : (
          Object.keys(groupedTickets).map((groupName) => (
            <TicketsBoard
              key={groupName}
              groupingOption={groupingOption}
              groupName={groupName}
              tickets={groupedTickets[groupName]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
