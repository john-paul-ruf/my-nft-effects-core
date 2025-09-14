// Main plugin registration export
export * from './effects/primaryEffects/index.js';
export * from './effects/secondaryEffects/index.js';
export * from './effects/finalImageEffects/index.js';
export * from './effects/keyFrameEffects/index.js';

// Main registration function for all effects
export async function register(effectRegistry, positionRegistry) {
    // Import and register all effect categories
    const [primaryModule, secondaryModule, finalImageModule, keyFrameModule] = await Promise.all([
        import('./effects/primaryEffects/index.js'),
        import('./effects/secondaryEffects/index.js'),
        import('./effects/finalImageEffects/index.js'),
        import('./effects/keyFrameEffects/index.js')
    ]);

    primaryModule.register(effectRegistry, positionRegistry);
    secondaryModule.register(effectRegistry, positionRegistry);
    finalImageModule.register(effectRegistry, positionRegistry);
    keyFrameModule.register(effectRegistry, positionRegistry);
}