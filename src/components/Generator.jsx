import React from 'react';


function Generator() {
  const [memes, setMemes] = React.useState({
    topText:"",
    bottomText:"",
    randomImage: "https://i.imgflip.com/1c1uej.jpg"
  })


  const [allMemeData, setAllMemeData] = React.useState([])
  React.useEffect(function(){
       fetch('https://api.imgflip.com/get_memes')
                .then(res => res.json())
                .then(response => setAllMemeData(response.data.memes))
  }, [])

  function getMemesImage(){
    const randomNumber  = Math.floor(Math.random() * allMemeData.length);
    const imageUrl = allMemeData[randomNumber].url
    setMemes(prevMemes => ({
      ...prevMemes,
      randomImage: imageUrl
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMemes(prevMemes => ({
      ...prevMemes,
      [name]: value
    }))

  }



  return (
      <main>
          <div className='forms'>
            <div className='form--inner'>
              <input 
                type='text'
                placeholder='Top Text'
                className='form--input'
                name='topText'
                value={memes.topText}
                onChange={handleChange}
              />

              <input 
                type='text'
                placeholder='Bottom Text'
                className='form--input'
                name='bottomText'
                value={memes.bottomText}
                onChange={handleChange}
              />
            </div>

            <button
                className='form--button'
                onClick={getMemesImage}
            >
              Get a New Meme Image
            </button>
          </div>

          <div className='meme--container'>
            <img src={memes.randomImage} alt='' className='meme--image' />
            <h2 className='top'>{memes.topText}</h2>
            <h2 className='bottom'>{memes.bottomText}</h2>
          </div>
      </main>
  );
}

export default Generator;