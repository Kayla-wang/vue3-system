<template>
<div>
  11111
  11111
    <vue-particles
        id="tsparticles"
        :options="{
            background: {
                color: {
                    value: '#0d47a1'
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 5 }
                }
            },
            detectRetina: true
        }"
    />
</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, defineExpose } from 'vue'
import { onMounted } from "vue"
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { HOME_URL } from "@/config/config";
// const router = useRouter();
// const login = () => {
//   // initDynamicRouter()
//   router.push(HOME_URL);
// };
</script>

<style scoped lang="scss">
</style>
