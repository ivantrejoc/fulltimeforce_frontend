import "./viewPostById.scss";

const ViewPostById = () => {
  return (
    <main className="viewpst-page-layout">
      <div className="viewpst-card-layout">
      <div className="viewpst-card-title-wrapper">
        <h3 className="viewpst-card-title">Post Title</h3>
      </div>
      <div className="viewpst-card-content-wrapper">
        <p className="viewpst-card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem nunc, sodales in orci ut, interdum pulvinar justo. Duis venenatis, mi accumsan pretium lobortis, quam felis luctus turpis, non maximus libero nisi et mauris. Sed vitae ipsum imperdiet, porta orci quis, tincidunt dui. Praesent finibus lectus eget placerat blandit. Nulla neque diam, dictum et accumsan vel, iaculis sit amet eros. Maecenas quis lectus turpis. Aenean vitae risus dui. Fusce scelerisque vulputate felis, at faucibus ligula dignissim at. Sed sit amet purus ornare elit blandit venenatis at quis mi. Donec maximus neque ut dui ornare, id aliquam purus tincidunt. Cras in accumsan dui, quis scelerisque odio. Phasellus sed nisl nunc. Aenean malesuada condimentum erat, eu pretium odio sagittis sed. In fermentum mattis nisi a semper. Nullam id urna tempus, hendrerit dui accumsan, gravida libero. Nullam at nisi sed lacus interdum tempus.

Pellentesque accumsan sit amet dui ac placerat. Pellentesque aliquam tortor turpis, at vestibulum odio efficitur in. Vestibulum ultricies eleifend nisi. Curabitur malesuada, lorem vitae scelerisque fringilla, felis felis posuere sem, a efficitur sapien mauris ac augue. Pellentesque vel congue lacus. Phasellus eu dignissim elit. In eros eros, dapibus sit amet lectus ac, volutpat blandit lectus. Praesent mi lorem, finibus a sagittis sed, faucibus in nisi.

Curabitur accumsan consequat mattis. Nulla imperdiet velit non lobortis aliquam. Aliquam laoreet lorem vel ante semper, vitae auctor enim pretium. In tristique elit sed interdum dignissim. In elementum erat felis, quis scelerisque nulla dictum vel. Suspendisse potenti. Ut ultricies porta nisl, ut facilisis ipsum cursus at. Curabitur tortor magna, pellentesque in tempus non, finibus vel justo.

Ut turpis tortor, tempor ut ullamcorper ut, pretium non sapien. Maecenas vitae ante arcu. Donec condimentum euismod leo quis euismod. Ut ut quam ornare, tempus odio viverra, porta quam. Curabitur tristique hendrerit orci, feugiat tincidunt magna feugiat sit amet. Phasellus et diam in massa tincidunt tristique. Nulla eu magna erat. Aliquam id sagittis neque.

Nulla tristique quis purus quis auctor. Maecenas tincidunt tristique posuere. Mauris posuere sagittis nunc eget pretium. Aliquam tempor quam laoreet, dignissim eros non, placerat erat. Nam vehicula mi quis pharetra tincidunt. Fusce at condimentum ante. Cras feugiat neque lectus, ultricies eleifend tortor tempor eu. Aenean non arcu quis purus ullamcorper pretium eu finibus metus. Vivamus ultricies vehicula odio sit amet efficitur. Morbi vulputate ipsum et metus aliquam sollicitudin cursus a leo. Cras accumsan, quam id commodo convallis, augue sem vulputate arcu, eget suscipit dolor nulla vestibulum eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis leo euismod ante fringilla, eu placerat odio vehicula. Integer hendrerit rutrum suscipit. Cras orci ligula, bibendum consequat neque quis, fermentum feugiat augue. Suspendisse ut ligula hendrerit, egestas ex nec, elementum mi.
        </p>
      </div>
      <div className="viewpst-card-info-wrapper">
        <p className="viewpst-card-info">
          Posted by: <span className="viewpst-card-author">John Doe </span>{" "}
        </p>
        <p className="viewpst-card-info">07/29/2024</p>
      </div>
      <div className="viewpst-button-box">
        <button className="viewpst-button">
          Edit Post
        </button>
        <button className="viewpst-button">
          Delete Post
        </button>
      </div>
    </div>
    </main>
  );
};
export default ViewPostById;
