import { EffectConfig } from 'my-nft-gen';
import {Range} from "my-nft-gen/src/core/layer/configType/Range.js";
import {DynamicRange} from "my-nft-gen/src/core/layer/configType/DynamicRange.js";

export class NthRingsConfig extends EffectConfig {
    constructor(
        {
            invertLayers = true,
            totalRingCount = new Range(12, 16),
            layerOpacity = 0.5,
            underLayerOpacity = 0.4,
            stroke = 2,
            thickness = 2,
            smallRadius = [(finalSize) => finalSize.longestSide * 0.10, (finalSize) => finalSize.longestSide * 0.1],
            smallNumberOfRings = new Range(8, 12),
            ripple = [(finalSize) => finalSize.shortestSide * 0.05, (finalSize) => finalSize.shortestSide * 0.10],
            times = new Range(2, 4),
            smallerRingsGroupRadius = [(finalSize) => finalSize.shortestSide * 0.45, (finalSize) => finalSize.shortestSide * 0.50, (finalSize) => finalSize.shortestSide * 0.55],
            accentRange = new DynamicRange(new Range(1, 1), new Range(3, 5)),
            blurRange = new DynamicRange(new Range(1, 1), new Range(2, 4)),
            featherTimes = new Range(2, 4),
        },
    ) {
        super();
        this.invertLayers = invertLayers;
        this.totalRingCount = totalRingCount;
        this.layerOpacity = layerOpacity;
        this.underLayerOpacity = underLayerOpacity;
        this.stroke = stroke;
        this.thickness = thickness;
        this.smallRadius = smallRadius;
        this.smallNumberOfRings = smallNumberOfRings;
        this.ripple = ripple;
        this.times = times;
        this.smallerRingsGroupRadius = smallerRingsGroupRadius;
        this.accentRange = accentRange;
        this.blurRange = blurRange;
        this.featherTimes = featherTimes;
    }
}
