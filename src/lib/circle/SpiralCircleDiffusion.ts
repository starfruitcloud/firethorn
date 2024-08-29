/*
 * :file description: 螺旋圆扩散特效
 * :name: /firethorn/src/lib/circle/SpiralCircleDiffusion.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 22:44:17
 * :last editor: 张德志
 * :date last edited: 2024-08-29 23:04:19
*/
import * as Cesium from 'cesium';
import RadarLineMaterialProperty from '@/material/RadarLineMaterialProperty';

class SpiralCircleDiffusion{
    constructor(viewer:Cesium.Viewer,options:{position:number[],color?:Cesium.Color,speed?:number}) {
        const { position,color,speed } = options || {};
        viewer.entities.add({
            position:Cesium.Cartesian3.fromDegrees(position[0],position[1]),
            name:'螺旋圆扩散特效',
            ellipse:{
            semiMajorAxis: 1000.0,
            semiMinorAxis: 1000.0,
            material: new RadarLineMaterialProperty({
                color: new Cesium.Color(1.0, 1.0, 0.0, 0.7),
                speed: 20.0
             }) as any
            }
        })
    }
}

export default SpiralCircleDiffusion;


