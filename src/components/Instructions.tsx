/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Instructions = () => (
  <div>
    <nav>
      <div>
        <img
          src="https://global-uploads.webflow.com/611a337a2fd33f1abb7d18d3/611a38639c7c15524faa63f3_Logo.svg"
          width="200px"
        />
      </div>
    </nav>

    <div className="hero">
      <h1 className="hero-txt">Welcome to the Ketch frontend challenge!</h1>
    </div>

    <main>
      <h2>Overview</h2>
      <p>
        Please read through all of the instructions below. Feel free to ask any
        questions needed to help you on your journey.
      </p>

      <h2>The problem</h2>
      <p>
        We love memes! Unfortunatly, there simply aren't enough hours in the day
        find the perfect memes to express ourselves. This makes us sad...
      </p>

      <div className="gif-wrap">
        <img
          src="https://media1.giphy.com/media/Ty9Sg8oHghPWg/giphy.webp?cid=f6488851r8xubb8067qmscr5wolky3a8hmds9elaci1v5usa&rid=giphy.webp&ct=g"
          width="400px"
        />
      </div>

      <h2>The Solution</h2>
      <p>
        We need a programatic approach to find and share our favorite GIFs. To
        do so we will create a React application that leverages the{" "}
        <a
          href="https://developers.giphy.com/docs/api#quick-start-guide"
          target="_blank"
          rel="noreferrer"
        >
          Giphy API documentation
        </a>
        . You'll need to use the following API key for your requests.{" "}
        <b>Ugb5ctrsKDB0NoK9iAqLrh5yszy9PXlt</b> Feel free to use{" "}
        <a href="https://giphy.com/" target="_blank" rel="noreferrer">
          Giphy's UI
        </a>{" "}
        as an example.
      </p>
      <ol>
        <li>
          Add an input field that allows us to search for GIF's by keyword.
        </li>
        <li>
          <p>Display the results (image previews) in a grid.</p>
        </li>
        <li>
          <p>
            Add a button(s) that allows us to sort the list of images by Title
            in ASC/DESC order.
          </p>
        </li>
        <li>
          <p>
            Upon clicking an image preview it should navigate us to a new route
            that presents the following details:
          </p>
          <ul>
            <li>Title</li>
            <li>Image preview</li>
            <li>Link to the GIF URL</li>
          </ul>
        </li>
        <li>
          <p>
            Add basic styling to all components. I'm not expecting anything
            award-winning but a plain text list won't cut it. Perhaps we can
            leverage a library of sorts?
          </p>
        </li>
        <li>
          <p>
            The final code should be free of errors, logs, and as performant as
            possible.
          </p>
        </li>
      </ol>

      <h2>Extra Credit</h2>
      <ul>
        <li>Use Typescript</li>
        <li>Abstract reusable business logic to custom hooks</li>
        <li>Add pagination</li>
      </ul>

      <div className="gif-wrap">
        <img
          src="https://media.giphy.com/media/11aMKw40E5nAEE/giphy.gif"
          width="400px"
        />
      </div>
    </main>

    <footer>
      <img src="https://global-uploads.webflow.com/611a337a2fd33f1abb7d18d3/611b8f701080f7d42825d67b_LogoWhite.svg" />
    </footer>
  </div>
);
