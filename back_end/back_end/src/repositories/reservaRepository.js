const Reserva = require('../entities/Reserva');
const Usuario = require('../entities/Usuario');
const LocalEsportivo = require('../entities/LocalEsportivo');

module.exports = {
  async listar() {
    return await Reserva.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['id', 'nome', 'email']
        },
        {
          model: LocalEsportivo,
          as: 'localEsportivo',
          attributes: ['id', 'nome', 'endereco', 'tipoEsporte']
        }
      ]
    });
  },
  async buscarPorId(id) {
    return await Reserva.findByPk(id, {
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['id', 'nome', 'email']
        },
        {
          model: LocalEsportivo,
          as: 'localEsportivo',
          attributes: ['id', 'nome', 'endereco', 'tipoEsporte']
        }
      ]
    });
  },
  async criar(reserva) {
    return await Reserva.create(reserva);
  },
  async atualizar(id, novosDados) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) throw new Error('Reserva não encontrada.');
    return await reserva.update(novosDados);
  },
  async deletar(id) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) throw new Error('Reserva não encontrada.');
    return await reserva.destroy();
  },
};


