const express = require("express");
const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const { PORT, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env;

// Crear cliente de Twilio
const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const app = express();

// Middleware para analizar cuerpos JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Service Running...");
});

// Endpoint para verificar el número de teléfono usando WhatsApp
app.post("/verify/:phoneNumber", async (req, res) => {
    try {
        const { phoneNumber } = req.params;
        const status = await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
            .verifications.create({
                to: `whatsapp:${phoneNumber}`,
                channel: "whatsapp"  // Cambiado a WhatsApp
            });
        
        res.json({ status });
    } catch (error) {
        console.log("Error sending OTP:", error.message);
        res.status(500).send(`Failed to send OTP: ${error.message}`);
    }
});

// Asegúrate de que el servidor esté escuchando el puerto
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
