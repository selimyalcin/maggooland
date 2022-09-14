

import {
    Scene,
    Engine,
    FreeCamera,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Color3, Color4,
    StandardMaterial,
    Texture,
    Animation,
    SceneLoader
} from '@babylonjs/core';
import { GUI } from 'dat.gui'
export class BasicScene {

    scene;
    engine;
    terrainCreated = false;
    terrain;
    terr;
    terrMain;
    hemiLight;
    camera;

    constructor(canvas) {
        this.engine = new Engine(canvas, true);
        this.scene = this.CreateScene();



        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        const gui = new GUI()
        const cubeFolder = gui.addFolder('Terrain')
        cubeFolder.add(this.terr.rotation, 'x', 0, Math.PI * 2)
        cubeFolder.add(this.terr.rotation, 'y', 0, Math.PI * 2)
        cubeFolder.add(this.terr.rotation, 'z', 0, Math.PI * 2)
        cubeFolder.open()
        const mainTerrain = gui.addFolder('MainTerrain Pos')
        mainTerrain.add(this.terrMain.position, 'x', 0, Math.PI * 2)
        mainTerrain.add(this.terrMain.position, 'y', 0, Math.PI * 2)
        mainTerrain.add(this.terrMain.position, 'z', 0, Math.PI * 2)
        mainTerrain.open()
        const mainTerrPos = mainTerrain.addFolder('Rotation')
        mainTerrPos.add(this.terrMain.rotation, 'x', 0, Math.PI * 2)
        mainTerrPos.add(this.terrMain.rotation, 'y', 0, Math.PI * 2)
        mainTerrPos.add(this.terrMain.rotation, 'z', 0, Math.PI * 2)
        mainTerrPos.open()
        const pos = gui.addFolder('Position')
        pos.add(this.terr.position, 'x', -10, Math.PI * 2)
        pos.add(this.terr.position, 'y', -10, Math.PI * 2)
        pos.add(this.terr.position, 'z', -10, Math.PI * 2)
        pos.open();
        const cam = gui.addFolder('camera')
        cam.add(this.camera.position, 'x', 0, Math.PI * 2)
        cam.add(this.camera.position, 'y', 0, Math.PI * 2)
        cam.add(this.camera.position, 'z', 0, Math.PI * 2)
        cam.open();




        window.addEventListener("resize", function () {
            // this.scene.resize();
        });
    }


    CreateScene() {
        const scene = new Scene(this.engine);
        scene.clearColor = new Color4(0.37, 0.62, 0.81, 1);


        this.camera = new FreeCamera("camera", new Vector3(0, 1, -4), this.scene);

        this.camera.attachControl();

        this.hemiLight = new HemisphericLight("hemiLight", new Vector3(1, 1, 0), this.scene);

        this.hemiLight.intensity = 4;
        this.hemiLight.specular = new Color3(0, 0, 0);

        /*
        const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);


        const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, this.scene);
        ball.position = new Vector3(0, 1, 0);
*/

        this.terr = MeshBuilder.CreateGround("box", { width: 3, height: 3 }, this.scene);
        this.terr.rotation = new Vector3(4.7, 3.3, 2.7);
        this.terr.position = new Vector3(4, 3.8, 5);
        this.terr.material = this.CreateTerrain();


        this.terrMain = MeshBuilder.CreateGround("box", { width: 12, height: 7.5 }, this.scene);
        this.terrMain.rotation = new Vector3(4.7, 3.3, 2.7);
        this.terrMain.position = new Vector3(-1, 1.1, 6.3);
        this.terrMain.material = this.CreateMainTerrain();
        this.AnimateLand();
        scene.beginAnimation(this.terr, 0, 100, true); 
        scene.beginAnimation(this.terrMain, 0, 100, true); 
        return scene;
    }

    CreateTerrain() {
        const uvScale = 1;
        const texArray = [];
        const groundMat = new StandardMaterial("groundMat", this.scene);
        const diffuseTex = new Texture("./textures/land1.png", this.scene);
        groundMat.diffuseTexture = diffuseTex;
        groundMat.diffuseTexture.hasAlpha = true;
        groundMat.backFaceCulling = false;
        texArray.push(diffuseTex);
        texArray.forEach((tex) => {
            tex.uScale = uvScale;
            tex.vScale = uvScale;
        })

        
        return groundMat;
    }

    CreateMainTerrain() {
        const uvScale = 1;
        const texArray = [];
        const groundMat = new StandardMaterial("groundMat", this.scene);
        const diffuseTex = new Texture("./textures/land2.png", this.scene);
        groundMat.diffuseTexture = diffuseTex;
        groundMat.diffuseTexture.hasAlpha = true;
        groundMat.backFaceCulling = false;
        texArray.push(diffuseTex);
        texArray.forEach((tex) => {
            tex.uScale = uvScale;
            tex.vScale = uvScale;
        })


        return groundMat;
    }

    AnimateLand() {
        var animationBox = new Animation("tutoAnimation", "position.y", 30, Animation.ANIMATIONTYPE_FLOAT,
            Animation.ANIMATIONLOOPMODE_CYCLE);
            var animationBox2 = new Animation("tutoAnimation", "position.y", 30, Animation.ANIMATIONTYPE_FLOAT,
            Animation.ANIMATIONLOOPMODE_CYCLE);
        var keys = [];

        keys.push({
            frame: 0,
            value: 2.8
        });

        keys.push({
            frame: 30,
            value: 2.9
        });

        keys.push({
            frame: 60,
            value: 2.8
        });

        var keysMain = [];

        keysMain.push({
            frame: 0,
            value: 1.1
        });

        keysMain.push({
            frame: 30,
            value: 1.15
        });

        keysMain.push({
            frame: 60,
            value: 1.1
        });

        animationBox.setKeys(keys);
        this.terr.animations.push(animationBox);
        
        animationBox2.setKeys(keysMain);
        this.terrMain.animations.push(animationBox2);

       // this.scene.beginAnimation(this.terr, 0, 100, true);
    }

}