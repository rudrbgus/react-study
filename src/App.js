import './App.css';

function App() {

    const googleTestButtonClickHandler = (e) =>{
        e.preventDefault();
        console.log("클릭함");
    }

  return (
    <div className="App">
      <button className="google-test-button" onClick={googleTestButtonClickHandler}>
          구글 로그인 테스트 버튼
      </button>
    </div>
  );
}

export default App;
