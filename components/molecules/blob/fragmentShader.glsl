uniform float uIntensity;
uniform float uTime;

varying vec2 vUv;
varying float vDisplacement;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) *
        43758.5453123);
}

void main() {

    float distort = 2.0 * vDisplacement * uIntensity * sin(vUv.y * 10.0 + uTime);
    float grayscale = mix(0.15, 0.15, vUv.y);
    float distortedGrayscale = grayscale * (1.0 - distort);
    vec3 color = vec3(distortedGrayscale);
    vec2 sUv = (gl_FragCoord.xy + uTime) / 1000.0; // resolution.xy
    gl_FragColor = vec4(color + random(sUv) * 0.05, 1.0);
    // gl_FragColor = vec4(random(sUv));
}
