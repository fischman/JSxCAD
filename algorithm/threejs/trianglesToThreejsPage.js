import { trianglesToThreejsDatasets } from './trianglesToThreejsDatasets';

const renderMaterial = (nth) => {
  // Just cycle through materials for now.
  const materials = [
    'THREE.MeshNormalMaterial()',
    'THREE.MeshLambertMaterial({ color: 0xffffff, ambient: 0xaaaaaa, shading: THREE.FlatShading })'
  ];
  return materials[nth % materials.length];
};

const renderDataset = ({ indices, positions, normals }, nth) => `
        {
          var geometry = new THREE.BufferGeometry();
          var indices = ${JSON.stringify(indices)};
          var positions = ${JSON.stringify(positions)};
          var normals = ${JSON.stringify(normals)};
          geometry.setIndex( indices );
          geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
          geometry.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
          var material = new ${renderMaterial(nth)};
          mesh = new THREE.Mesh( geometry, material );
          scene.add( mesh );
        }
`;

const page = ({ cameraPosition, datasets }) => `
<html lang="en">
  <head>
    <title>JSxCAD Viewer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>
      body {
        color: #cccccc;
        font-family:Monospace;
        font-size:13px;
        text-align:center;
        background-color: #050505;
        margin: 0px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/mrdoob/stats.js/master/build/stats.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/controls/TrackballControls.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/dataarts/dat.gui/master/build/dat.gui.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ami.js//0.0.20/ami.min.js"></script>
    <script>
      var camera, controls, scene, renderer, stats;
      var mesh;
      init();
      animate();
      function init() {
        //
        camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 );
        [camera.position.x, camera.position.y, camera.position.z] = ${JSON.stringify(cameraPosition)};
        //
        controls = new THREE.TrackballControls(camera);
        controls.rotateSpeed = 4.0;
        controls.zoomSpeed = 4.0;
        controls.panSpeed = 2.0;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.1;
        controls.keys = [65, 83, 68];
        controls.addEventListener('change', render);
        //
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x050505 );
        //
        var ambientLight = new THREE.AmbientLight( 0x222222 );
        scene.add( ambientLight );
        var light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light1.position.set( 1, 1, 1 );
        scene.add( light1 );
        var light2 = new THREE.DirectionalLight( 0xffffff, 1 );
        light2.position.set( 0, - 1, 0 );
        scene.add( light2 );
        ${datasets.map(renderDataset).join('')}
        //
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        //
        stats = new Stats();
        document.body.appendChild( stats.dom );
        //
        var gui = new dat.GUI();
        gui.add( material, 'wireframe' );
        //
        window.addEventListener( 'resize', onWindowResize, false );
      }
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        controls.handleResize();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }
      function animate() {
        requestAnimationFrame( animate );
        render();
        controls.update();
        stats.update();
      }
      function render() {
        renderer.render( scene, camera );
      }
    </script>
  </body>
</html>
`;

export const trianglesToThreejsPage = (options, ...triangularGeometries) => {
  const { cameraPosition = [0, 0, 16] } = options;
  const datasets = trianglesToThreejsDatasets(options, ...triangularGeometries);
  return page({ cameraPosition, datasets });
};
