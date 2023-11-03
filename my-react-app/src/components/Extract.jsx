import { getImageUrl } from "./utils.js";

function Profile(props) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={props.name}
        width={props.imageSize}
        height={props.imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {props.profession}
        </li>
        <li>
          <b>Awards: {props.awards.length} </b>({props.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
