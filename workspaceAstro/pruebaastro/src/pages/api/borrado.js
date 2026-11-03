import { getPool } from '../../../lib/db.js';

export async function DELETE({ params }) {
    const { id } = params;

    try {
        const pool = getPool();
        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        return new Response(JSON.stringify({ message: 'Error interno del servidor' }), { status: 500 });
    }
}