uniform float uIntensity;
uniform float uTime;

varying vec2 vUv;
varying float vDisplacement;

void main() {

    float distort = 2.0 * vDisplacement * uIntensity * sin(vUv.y * 10.0 + uTime);
    float grayscale = mix(0.15, 0.15, vUv.y);
    float distortedGrayscale = grayscale * (1.0 - distort);
    vec3 color = vec3(distortedGrayscale);
    gl_FragColor = vec4(color, 1.0);
}

/* uniform float uIntensity;
uniform float uTime;

varying vec2 vUv;
varying vec3 vDisplacement;

void main() {

    float distort = 2.0 * (vDisplacement.x + vDisplacement.y + vDisplacement.z) / 3.0 * uIntensity * sin(vUv.y * 10.0 + uTime);
    float grayscale = mix(0.15, 0.15, vUv.y);
    float distortedGrayscale = grayscale * (1.0 - distort);
    vec3 color = vec3(distortedGrayscale);
    gl_FragColor = vec4(color, 1.0);
} */