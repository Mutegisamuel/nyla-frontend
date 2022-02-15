import react from 'react';
import '../../css/singleview.css'


export default function singleview() {

  return (
    <div>
      <div className="singleview">

        <div className="singleview_top">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </div>

        <div className="tpd">
          <h2>Good Looking Sofa</h2>
          <h4>45,000 Ksh</h4>
          <p className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="action-btns">
        <button class="button is-danger btn-left">Delete</button>
        <button class="button is-info btn-right">Edit</button>
        </div>
      </div>
    </div>
  )
}
