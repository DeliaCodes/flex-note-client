import React from "react";

export default function NoteFeed(props) {
  return (
    <section id="posts">
      <header className="banner" role="banner">
        <h1>My Notes</h1>
      </header>
      {/*
      is props.id right?
      */}
      <div id={props.post.id}>
        <p>{props.post.title}</p>
        <p>{props.post.text}</p>
      </div>
    </section>
  );
}

NoteFeed.defaultProps = {
  post: {
    id: 1,
    title: "Today's Aeneid Reading",
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.

At pius exsequiis Aeneas rite solutis,               
aggere composito tumuli, postquam alta quierunt
aequora, tendit iter velis portumque relinquit.
aspirant aurae in noctem nec candida cursus
luna negat, splendet tremulo sub lumine pontus.
proxima Circaeae raduntur litora terrae,   
dives inaccessos ubi Solis filia lucos
adsiduo resonat cantu, tectisque superbis
urit odoratam nocturna in lumina cedrum
arguto tenuis percurrens pectine telas.
hinc exaudiri gemitus iraeque leonum
vincla recusantum et sera sub nocte rudentum,
saetigerique sues atque in praesepibus ursi
saevire ac formae magnorum ululare luporum,
quos hominum ex facie dea saeva potentibus herbis
induerat Circe in vultus ac terga ferarum.
quae ne monstra pii paterentur talia Troes
delati in portus neu litora dira subirent,
Neptunus ventis implevit vela secundis,
atque fugam dedit et praeter vada fervida vexit.`
  }
};
