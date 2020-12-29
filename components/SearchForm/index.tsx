import React, { useState } from "react";
import { createApi } from 'unsplash-js';
import ImageList from '../Images/images'


export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const unsplash = createApi({ accessKey: process.env.UNSPLASH_AKEY });

  const searchPhoto = async (e) => {
    e.preventDefault();

    await unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 10,
    }).then(result => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
      } else {
        const { results } = result.response;
        setImages(results)
        setSearchPerformed(true);
      }
    });
  }

  return (
    <div>
      <form className="form" onSubmit={searchPhoto}>
        <label className="label" htmlFor="query">
          {" "}📷{" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          onChange={(e) => {
            setQuery(e.target.value),
            setSearchPerformed(false)
          }}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="container">
        <div>
        {!searchPerformed ? 'search a photo' :
          <ImageList images={images}></ImageList>
        }
        </div>
      </div>
    </div>
  );
}