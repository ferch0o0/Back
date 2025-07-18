export const createOrder = async (req, res) => {
    try {
        const { user, subtotal, total } = req.body;
        const newOrder = new Order({
            user,
            subtotal,
            total
        });
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    }
    catch (err) {
        return res.status(500).json({ message: 'Error al crear la orden', error: err });
    }
};
export const updateOrderToPaid = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, { status: 'pagado' }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        return res.json(updatedOrder);
    }
    catch (err) {
        return res.status(500).json({ message: 'Error al actualizar la orden', error: err });
    }
};
export const cancelOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const canceledOrder = await Order.findByIdAndUpdate(id, { status: 'cancelado' }, { new: true });
        if (!canceledOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        return res.json(canceledOrder);
    }
    catch (err) {
        return res.status(500).json({ message: 'Error al cancelar la orden', error: err });
    }
};
