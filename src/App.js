import './App.css';

function App() {

    const googleTestButtonClickHandler = (e) => {
        e.preventDefault();
        console.log("클릭함");
        googleTestFetch().then(res => {
            console.log(res);
        });
    }

    const googleTestFetch = async () => {
        const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id='
            +
            '508435362978-q1dmvpe2to6i1vam4j5bdr25r5sujd2c.apps.googleusercontent.com'
            +
            '&redirect_uri='
            +
            'http://localhost:8181/auth/googleLoginApi'
        +
            '&response_type=code'
        +
            '&scope=email profile'
        ;
        window.location.href = url;
        // console.log(url);
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
