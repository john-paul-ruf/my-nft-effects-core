# my-nft-effects-core

🎨 A modular, plugin-based effects library extracted from [my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen) for creating generative visual art.

## Overview

This library provides 51 visual effects organized as modular plugins that can be registered with any compatible host system. Built for maximum performance and flexibility in generative art workflows.

### Effect Categories

- **Primary Effects** (24): Core visual elements - FuzzFlare, LayeredHex, Gates, RedEye, Scopes, etc.
- **Secondary Effects** (7): Layer processing - Glow, Fade, Blur, EdgeGlow, Randomize, etc.
- **Final Image Effects** (13): Post-processing - CRT effects, Glitch, Pixelate, ColorPulse, etc.
- **Key Frame Effects** (7): Frame-specific animations - Blur, Fade, Glow keyframes, CRT Degauss, etc.

## Installation

```bash
npm install my-nft-effects-core
```

### Peer Dependencies

This library requires the following peer dependencies in your host application:

```bash
npm install sharp jimp canvas fabric
```

## Usage

### Register All Effects (Recommended)

```javascript
import { register } from 'my-nft-effects-core';
import { EffectRegistry, PositionRegistry } from 'my-nft-gen';

// Register all 51 effects with your host system
await register(EffectRegistry.globalRegistry, PositionRegistry.globalRegistry);
```

### Register by Category

```javascript
import { register as registerPrimary } from 'my-nft-effects-core/src/effects/primaryEffects/index.js';
import { register as registerSecondary } from 'my-nft-effects-core/src/effects/secondaryEffects/index.js';
import { register as registerFinal } from 'my-nft-effects-core/src/effects/finalImageEffects/index.js';
import { register as registerKeyFrame } from 'my-nft-effects-core/src/effects/keyFrameEffects/index.js';

// Register only specific effect categories
await registerPrimary(EffectRegistry.globalRegistry, PositionRegistry.globalRegistry);
await registerFinal(EffectRegistry.globalRegistry, PositionRegistry.globalRegistry);
```

### Direct Effect Import

```javascript
import { FuzzFlareEffect } from 'my-nft-effects-core/src/effects/primaryEffects/fuzz-flare/FuzzFlareEffect.js';
import { LayeredHexEffect } from 'my-nft-effects-core/src/effects/primaryEffects/layeredHex/LayeredHexEffect.js';
import { GlitchFractalEffect } from 'my-nft-effects-core/src/effects/finalImageEffects/glitchFractal/GlitchFractalEffect.js';
```

## Complete Effect Reference

### 🎯 Primary Effects (24)
Core visual generators that create the foundation of your animations:

- **AmpEffect** - Amplifier-style visual patterns
- **BlinkOnEffect** - Rhythmic blinking/strobing elements
- **CurvedRedEyeEffect** - Curved eye-like focal points
- **EncircledSpiralEffect** - Spiral patterns with circular boundaries
- **FuzzFlareEffect** - Fuzzy, flare-like light emissions
- **FuzzyBandEffect** - Soft, banded visual textures
- **FuzzyRipplesEffect** - Rippling wave patterns with soft edges
- **GatesEffect** - Gate-like geometric structures
- **HexEffect** - Hexagonal pattern generators
- **ImageOverlayEffect** - Custom image overlay integration
- **LayeredHexEffect** - Multi-layered hexagonal compositions
- **LayeredRingEffect** - Concentric ring structures
- **LensFlareEffect** - Realistic lens flare simulation
- **MappedFramesEffect** - Frame-mapped animation sequences
- **NthRingsEffect** - Mathematical ring pattern generation
- **PorousEffect** - Porous, organic texture patterns
- **RayRingEffect** - Radial ray patterns in ring formation
- **RayRingInvertedEffect** - Inverted radial ray patterns
- **RedEyeEffect** - Classic red-eye focal point
- **RollingGradientEffect** - Animated rolling gradient transitions
- **ScanLinesEffect** - Horizontal/vertical scan line patterns
- **ScopesEffect** - Oscilloscope-style waveforms
- **StaticPathEffect** - Fixed path-based animations
- **ViewportEffect** - Viewport-aware visual elements

### 🔧 Secondary Effects (7)
Post-processing effects applied to primary effects:

- **EdgeGlowEffect** - Edge highlighting and glow enhancement
- **FadeEffect** - Opacity and fade transitions
- **GlowEffect** - Soft glow and bloom effects
- **RandomizeEffect** - Controlled randomization of layer properties
- **SingleLayerBlurEffect** - Targeted blur application
- **SingleLayerGlitchDrumrollHorizontalWaveEffect** - Horizontal wave glitching
- **SingleLayerGlitchFractalEffect** - Fractal-based glitch distortions

### 🎬 Final Image Effects (13)
Global post-processing applied to the complete frame:

- **BloomFilmGrainEffect** - Film grain with bloom enhancement
- **BlurEffect** - Global blur processing
- **ClaudeCRTBarrelRollEffect** - Advanced CRT barrel distortion with rolling
- **ColorPulseEffect** - Color pulsing and shifting
- **CRTBarrelEffect** - Classic CRT barrel distortion
- **CRTScanLinesEffect** - CRT-style horizontal scan lines
- **CRTShadowEffect** - CRT shadow mask simulation
- **GlitchDrumrollHorizontalWaveEffect** - Global horizontal wave glitching
- **GlitchFractalEffect** - Complex fractal glitch patterns
- **GlitchInverseEffect** - Color inversion glitch effects
- **ModulateEffect** - Mathematical modulation of pixels
- **PixelateEffect** - Pixelation with configurable resolution
- **VintageFadeEffect** - Vintage-style color grading and fading

### ⏰ Key Frame Effects (7)
Frame-specific animations triggered at precise moments:

- **BlurKeyFrameEffect** - Frame-specific blur events
- **CRTDegaussEffect** - CRT degaussing simulation
- **FadeKeyFrameEffect** - Keyframe-based fade transitions
- **GlowKeyFrameEffect** - Timed glow intensity changes
- **PixelateKeyFrameEffect** - Keyframe-triggered pixelation
- **SetOpacityKeyFrameEffect** - Precise opacity control at keyframes
- **StaticImageKeyFrameEffect** - Static image insertion at keyframes

## Host System Requirements

This library is designed to work with [my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen) but can be adapted to any host system that provides:

- **LayerEffect** base class for effect inheritance
- **EffectRegistry** and **PositionRegistry** for plugin management
- **Canvas/Image Processing**: Sharp, Jimp, Canvas2D, or Fabric.js support
- **Math Utilities**: Animation interpolation and positioning helpers
- **Worker Thread Support**: For parallel frame processing
- **Color Management**: ColorScheme and ColorPicker utilities

## Development

```bash
npm install
npm test     # Run test suite with coverage
npm run build # Build process (to be implemented)
npm run lint  # Linting (to be implemented)
```

### Project Structure

```
src/
├── effects/
│   ├── primaryEffects/     # 24 core visual effects
│   ├── secondaryEffects/   # 7 layer processing effects
│   ├── finalImageEffects/  # 13 global post-processing effects
│   └── keyFrameEffects/    # 7 frame-specific animation effects
└── index.js               # Main plugin registration
```

Each effect includes both the effect class and its configuration schema.

## License

MIT - See LICENSE file for details

## 🔗 Related Projects

- **[my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen)** - Main generative loop engine (host system)
- **[nft-scratch](https://github.com/john-paul-ruf/nft-scratch)** - Real-world composition scripts and examples

## Contributing

This library is extracted from [my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen) to enable plugin-based architecture.

**Development Workflow**:
1. New effects are developed in `my-nft-gen` first
2. Stable effects are extracted to this library
3. Effects are registered as plugins in the host system

## 💼 License & Commercial Usage

MIT License - However, if you generate **gross revenue of any kind** using these effects, you owe a **1% cut** to John Paul Ruf per the my-nft-gen license terms.

## 🐛 Issues & Support

Report bugs at **[john.paul.ruf@gmail.com](mailto:john.paul.ruf@gmail.com)** or in the main [my-nft-gen](https://github.com/john-paul-ruf/my-nft-gen) repository.

---

Made with ♥ by **John Paul Ruf**