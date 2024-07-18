import "./Gallery.css";
import { useQuery } from "@tanstack/react-query";
import unsplashCustomInstance from "../baseUrl";

function Gallery({ isDarkMode, searchQuery }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["unSplashImages", searchQuery],
    queryFn: () =>
      unsplashCustomInstance.get("/search/photos", {
        params: {
          query: searchQuery,
        },
      }),
  });

  if (isLoading) {
    return (
      <section
        className="gallery"
        style={{
          height: "65.9vh",
          backgroundColor: isDarkMode ? "#333" : "#fff",
        }}>
        <div className="container">
          <div
            className="galleryContent"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <span className="loader"></span>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section
        className="gallery"
        style={{
          height: "65.9vh",
          backgroundColor: isDarkMode ? "#333" : "#fff",
        }}>
        <div className="container">
          <div
            className="galleryContent"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <span className="error"></span>

            <div className="errorMessage">
              <h2>Error</h2>
              <p
                className="errorText"
                style={{
                  color: isDarkMode ? "#fff" : "#333",
                }}>
                {error.message}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="gallery"
      style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="galleryContent">
          {data.data.results.map((item) => {
            const { id, urls, alt_description } = item;
            return (
              <div key={id} className="imgPreview">
                <img src={urls?.full} alt={alt_description} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
