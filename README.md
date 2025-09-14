# NFT Effects Core

A plugin-based effects library for NFT generation, extracted from the my-nft-gen project.

## Overview

This library contains all the visual effects used in NFT generation, organized as plugins that can be registered with a host system. The effects are categorized into four types:

- **Primary Effects**: Core visual elements (FuzzFlare, LayeredHex, Gates, etc.)
- **Secondary Effects**: Applied to primary effects (Glow, Fade, Blur, etc.)
- **Final Image Effects**: Post-processing effects (CRT effects, Glitch, Pixelate, etc.)
- **Key Frame Effects**: Frame-specific effects (Blur, Fade, Glow keyframes, etc.)

## Installation

```bash
npm install my-nft-effects-core
```

## Usage

### As a Plugin

```javascript
import { register } from 'my-nft-effects-core';
import { EffectRegistry, PositionRegistry } from 'your-host-system';

// Register all effects
register(EffectRegistry.globalRegistry, PositionRegistry.globalRegistry);
```

### Individual Effect Categories

```javascript
import { register as registerPrimary } from 'my-nft-effects-core/src/primaryEffects';
import { register as registerSecondary } from 'my-nft-effects-core/src/secondaryEffects';

// Register only primary effects
registerPrimary(EffectRegistry.globalRegistry, PositionRegistry.globalRegistry);
```

### Direct Effect Import

```javascript
import { FuzzFlareEffect, LayeredHexEffect } from 'my-nft-effects-core/src/primaryEffects';
```

## Effect Categories

### Primary Effects (24 effects)
- AmpEffect, BlinkOnEffect, CurvedRedEyeEffect, EncircledSpiralEffect
- FuzzFlareEffect, FuzzyBandEffect, FuzzyRipplesEffect, GatesEffect
- HexEffect, ImageOverlayEffect, LayeredHexEffect, LayeredRingEffect
- LensFlareEffect, MappedFramesEffect, NthRingsEffect, PorousEffect
- RayRingEffect, RayRingInvertedEffect, RedEyeEffect, RollingGradientEffect
- ScanLinesEffect, ScopesEffect, StaticPathEffect, ViewportEffect

### Secondary Effects (7 effects)
- EdgeGlowEffect, FadeEffect, GlowEffect, RandomizeEffect
- SingleLayerBlurEffect, SingleLayerGlitchDrumrollHorizontalWaveEffect
- SingleLayerGlitchFractalEffect

### Final Image Effects (13 effects)
- BloomFilmGrainEffect, BlurEffect, ClaudeCRTBarrelRollEffect, ColorPulseEffect
- CRTBarrelEffect, CRTScanLinesEffect, CRTShadowEffect
- GlitchDrumrollHorizontalWaveEffect, GlitchFractalEffect, GlitchInverseEffect
- ModulateEffect, PixelateEffect, VintageFadeEffect

### Key Frame Effects (7 effects)
- BlurKeyFrameEffect, CRTDegaussEffect, FadeKeyFrameEffect, GlowKeyFrameEffect
- PixelateKeyFrameEffect, SetOpacityKeyFrameEffect, StaticImageKeyFrameEffect

## Requirements

This library requires a host system that provides:
- LayerEffect base class
- EffectRegistry and PositionRegistry
- Canvas/image processing utilities (Sharp, Jimp, Canvas, Fabric)
- Math utilities for animation and positioning

## Development

```bash
npm install
npm test
```

## License

MIT - See LICENSE file for details

## Contributing

This library is extracted from [my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen). 
Contributions should be made to the main project first, then synced to this library.