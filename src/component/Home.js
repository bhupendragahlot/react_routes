import React from "react";

function Home() {
  const styles = {
    heading: {
      color: 'blue',
      textAlign: 'center',
    
    }   
  };

  const styles1 = {
    bg: {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }};

  return (
    <div style={styles1.bg}>
      <h1 style={styles.heading}>Home</h1>
    </div>
  );
}

export default Home;
