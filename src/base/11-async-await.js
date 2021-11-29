export const getImage = async () => {
  try {
    const apiKey = "j7YTK2glWvNU6xjliyrwuMdiuWZhkAfD";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json(); // await resolve the promise and get the data

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );

    return url;
  } catch (error) {
    return "Image not exist";
    // console.error(error)
  }
};

//  getImage();
