<template>
    <v-container>
        <v-card>
            <v-card>
                <v-card-title class="title-page">
                    FILTRE POR
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <categories />
                    <colors />
                    <types />
                </v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>
<script>
import categories from './categories';
import colors from './colors';
import types from './types';
export default {
    name: 'filters',
    components:{
        categories,
        colors,
        types
    }
}
</script>