import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video
            id="my-player"
            className="video-js"
            controls
            preload="auto"
            poster="https://f002.backblazeb2.com/file/ameelio-letters-storage-pub/videos/temp-poster.png"
            data-setup='{}'>
          <source src="https://f002.backblazeb2.com/file/ameelio-letters-storage-pub/videos/Around_The_Corner_-_How_Differential_Steering_Works_1937_-yYAw79386WI-2.mp4" type="video/mp4"></source>
          <source src="https://f002.backblazeb2.com/file/ameelio-letters-storage-pub/videos/Around_The_Corner_-_How_Differential_Steering_Works_1937_-yYAw79386WI-2.mkv" type="video/mkv"></source>
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
      </header>
    </div>
  );
}

export default App;
