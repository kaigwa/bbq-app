import React from "react";
import "./css/home.css"

const Home = () => {
  return (
    <div>
        <div>
            <h1>BBQ-Maandalizi</h1>
        </div>
       
        {/* client registry */}
        <div className="registry">
            <label>
                <p>Full name</p>
                <input type='text' placeholder='Enter your full name'/>
            </label>
            <br />
            <br /> 
            <label>
                <p>Phone Number</p>
                <input type='number' placeholder='Enter your Phone Number'/>  
            </label>
        </div>
        
        <br/>
        <p>Choose your vibe</p>
        <br/>

        {/* drinks section */}
        <div className='drinks'>
            <p>Vinywaji:</p>

            <div className="choice">
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
            <span>Bia</span>
            <input type="number" placeholder="Enter number of bottle(s)"/>
             <br/>

            <div>
                <p>According to your choice up there, what brand do you prefer most?</p>
                <ol>
                    <li>
                        <input type="text" placeholder="e.g: safari lager"/>
                    </li>

                    <li>
                        <input type="text" />
                    </li>

                    <li>
                        <input type="text" />
                    </li>
                </ol>
            </div>
      </div>

        <br />

        {/* bbq section */}
      <div className='grill'>
        <p>BBQ and Food</p>

        <div className="food">
            <label>
                <input type="radio" name="nyama" value="option1" />
                Chicken
            </label>

            <label>
                <input
                    type="radio"
                    name="nyama"
                    value="option2"
                    defaultChecked={true} 
                />
                Goat Meat
            </label>

            <label>
                <input type="radio" name="nyama" value="option3" />
                Beef
            </label>

            <label>
                <input type="radio" name="nyama" value="option4" />
                Chips
            </label>

            <label>
                <input type="radio" name="nyama" value="option5" />
                <p>Banana</p>
            </label>

            <br/>
            <span>Goat Meat</span> <br />
            <input type="number" placeholder="Enter number of kilo(s)"/>
             <br/>
        </div>
       
        <br/>
        <label>
          Any recommendation, Please?!<br/>
          <input type='texteria' placeholder='write here' />
        </label>
        <br/>
      </div>

      <div className="music">
        <p>Music choice</p>
        <div>   
            <div className="type">
                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>Bongo Flava</p>
                </label>

                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>Amapiano</p>
                </label>
                
                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>Afro Beats</p>
                </label>
                
                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>Hip Hop</p>
                </label>

                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>Reggae</p>
                </label>

                <label>
                    <input type="checkbox" name="nyama" value="option5" />
                    <p>All the kind</p>
                </label>
            </div>
            <br/>

            <span>All kind</span> <br />
            {/* <input type="number" placeholder="Enter number of kilo(s)"/> */}
     

             <div>
                <p>According to your choice up there, name 5 song to add to our playlist?</p>
                <ol>
                    <li>
                        <input type="text" placeholder="e.g: singing out loud-Ed Sheerad"/>
                    </li>

                    <li>
                        <input type="text" />
                    </li>

                    <li>
                        <input type="text" />
                    </li>

                    <li>
                        <input type="text" />
                    </li>

                    <li>
                        <input type="text" />
                    </li>
                </ol>
            </div>
        </div>
      </div>
        <br />


      <div className="games">
        <p>Name games to play/watch at the party</p>

        <ol>
            <li>
                <input type="text" placeholder="e.g: checkers"/>
            </li>

            <li>
                <input type="text" />
            </li>

            <li>
                <input type="text" />
            </li>

            <li>
                <input type="text" />
            </li>

            
            <li>
                <input type="text" />
            </li>
        </ol>
      </div>
      <br />

      <div className="card">
        <span>Thank you, you will receive your invitation card on WhatsApp</span>
      </div>

        <br />

      {/* submit btn */}
      <button className="btn">Submit</button>
    </div>
  )
};

export default Home;
