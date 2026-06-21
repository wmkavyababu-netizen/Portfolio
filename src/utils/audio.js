// Shared browser Web Audio API synthesizer utility for retro 8-bit click beeps

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  
  // Resume context if suspended (autoplay policy browser restriction mitigation)
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  return audioCtx;
}

/**
 * Base oscillator beep synthesizer function
 * @param {number} freq - Start frequency in Hz
 * @param {number} duration - Duration in seconds
 * @param {string} type - Waveform type ('sine', 'triangle', 'square', 'sawtooth')
 * @param {number} endFreq - Optional target frequency for frequency ramp pitch slides
 */
export function playBeep(freq, duration = 0.1, type = 'sine', endFreq = null) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    if (endFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);
    }

    // Set volume (gain) to be low and non-disruptive
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (error) {
    // Suppress console spam if browser policies block audio
  }
}

// 1. Light interface click (for menu navigation)
export function playClick() {
  playBeep(650, 0.04, 'sine');
}

// 2. Typing keystroke log tick
export function playTick() {
  playBeep(140, 0.02, 'triangle');
}

// 3. Operation success sound arpeggio
export function playSuccess() {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  // Play quick ascending 8-bit triad chord
  const now = ctx.currentTime;
  const playTone = (freq, delay, dur) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);
      
      gain.gain.setValueAtTime(0.04, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + dur);
    } catch (e) {}
  };
  
  playTone(523.25, 0, 0.12); // C5
  playTone(659.25, 0.08, 0.12); // E5
  playTone(783.99, 0.16, 0.25); // G5
}

// 4. Operation error diagnostic warning
export function playError() {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const now = ctx.currentTime;
  const playBuzz = (freq, delay, dur) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + delay);
      
      gain.gain.setValueAtTime(0.02, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + delay);
      osc.stop(now + delay + dur);
    } catch (e) {}
  };

  playBuzz(130, 0, 0.15); // Low buzzing pitch
  playBuzz(130, 0.18, 0.15);
}
