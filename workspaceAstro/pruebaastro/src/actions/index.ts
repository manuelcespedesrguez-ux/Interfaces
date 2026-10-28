import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context) => {
            // guardar email en BD
            console.log("Email guardado correctamente...")

            return {
                success: true,
                mensaje: "¡Te has suscrito correctamente!"
            }
        }
    })
}