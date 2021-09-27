const Home = () => {
    const handleClick = (e) => {
        console.log(e);
    }
    const handleClickAgain = (name, e) => {
        console.log(e.target);
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
             <button onClick={handleClick}>Click Me</button>
             <button onClick={(e)=>{handleClickAgain('aby', e)}}>Click Me Again</button>
        </div>
     );
}
 
export default Home;