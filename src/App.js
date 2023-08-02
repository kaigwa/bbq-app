import './App.css';

function App() {
  return (
    <div className="App">
      BBQ-Maandalizi
<br/>

      <>
        <label>
          <input type='text' placeholder='Enter your name'/>

        </label>
<br/>

        <input type='number' placeholder='Enter your Phone Number'/>
<br/>
     
        <div className='drinks'>
        Vinywaji:
        <label>
          <input type="radio" name="drinks" value="option1" />
          Juisi
        </label>

        <label>
          <input
            type="radio"
            name="drinks"
            value="option2"
            defaultChecked={true} 
          />
          Bia
        </label>
        <label>
          <input type="radio" name="drinks" value="option3" />
          Kali
        </label>

        <label>
          <input type="radio" name="drinks" value="option3" />
          Wine
        </label>
      </div>
<br/>

      <div className='grill'>
        Nyama:
        <label>
          <input type="radio" name="nyama" value="option1" />
          Kuku
        </label>

        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true} 
          />
          Mbuzi
        </label>
        <label>
          <input type="radio" name="nyama" value="option3" />
          Ng'ombe
        </label>

        <label>
          <input type="radio" name="nyama" value="option3" />
          Kondoo
        </label>

        <label>
          <input type="radio" name="nyama" value="option3" />
          Samaki
        </label>
      </div>
      </>
      <button>Tuma</button>
    </div>
  );
}

export default App;
