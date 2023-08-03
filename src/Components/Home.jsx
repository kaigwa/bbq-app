import React from "react"

const Home = () => {
  return (
    <div>
       <h1>BBQ-Maandalizi</h1>
<br/>

      <>
        <label>
          Jina Kamili <br/>
          <input type='text' placeholder='Enter your name'/>
        </label>
<br/>
<label>
  Namba ya Simu <br/>
  <input type='number' placeholder='Enter your Phone Number'/>  
</label>
<br/>
     <p>Chagua vitu ungependelea kunywa na kula</p>
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
            name="nyama"
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
          <input type="radio" name="nyama" value="option4" />
          Kondoo
        </label>

        <label>
          <input type="radio" name="nyama" value="option5" />
          Samaki
        </label>
        <br/>
        <label>
          Mapendekezo <br/>
          <input type='texteria' placeholder='andika chochote' />
        </label>
        <br></br>
      </div>
      </>
      <button>Tuma</button>
    </div>
  )
};

export default Home;
