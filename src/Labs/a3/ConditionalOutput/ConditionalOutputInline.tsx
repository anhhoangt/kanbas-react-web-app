const ConditionalOutputInline = () => {
    const loggedIn = true;
    return (
      <>
        {/* { loggedIn && <h2>Welcome Inline</h2>      }
        {!loggedIn && <h2>Please login Inline</h2> } */}
        { loggedIn ? <h2> Welcome to our page</h2> : <h2> Please login</h2>}
      </>
    );
   };
   export default ConditionalOutputInline;
   
   