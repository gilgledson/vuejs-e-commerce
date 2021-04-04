<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="title-page">Contato</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-divider></v-divider>
                    <div class="map">
                       <div class="map-icon">
                             <v-icon size="70">mdi-home-map-marker</v-icon>
                       </div>
                    </div>
                </v-col>
                <v-col>
                     <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>

                        <v-textarea
                            name="message"
                            label="Menssagem"
                            hint="Digite a sua mensagem"
                        ></v-textarea>

                        <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        block
                        >
                        Enviar
                        </v-btn>
                     </v-form>
                </v-col>
            </v-row>
        </v-container>
      
    </div>
</template>
<script>
import "./contato.css"
export default {
    data(){
        return{
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
        }
    }
}
</script>