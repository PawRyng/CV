import Main from "./main";
import Loading from "./Controllers/loading";
import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import dataOther from "./Other/translate.json";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState();
  const [gitHub, setGitHub] = useState();
  const [youtube, setYoutube] = useState();
  const [send, setSend] = useState([]);
  let link = dataOther.OtherLinks.join(",");
  useEffect(() => {
    fetch("https://api.github.com/users/PawRyng/repos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_GITHUB_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://picsum.photos/v2/list?page=3&limit=${data.length}`)
          .then((response) => response.json())
          .then((dataPhoto) => setPhotos(dataPhoto));
        setGitHub(data);
        fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${link}&key=${process.env.REACT_APP_API_GOOGLE_KEY}&fields=items(id,snippet(title,thumbnails))`
        )
          .then((response) => response.json())
          .then((dataYt) => setYoutube(dataYt.items));
      });
  }, []);

  return (
    <HashRouter>
      {loading ? (
        <Main
          setloading={setLoading}
          photos={photos}
          git={gitHub}
          youtube={youtube}
        />
      ) : (
        <Loading setloading={setLoading} />
      )}
    </HashRouter>
  );
}

export default App;
