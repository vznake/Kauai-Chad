const anfitriaoRepository = require('../repositories/anfitriaoRepository');

module.exports = {
  async listar() {
    return await anfitriaoRepository.listar();
  },
  async buscarPorId(id) {
    return await anfitriaoRepository.buscarPorId(id);
  },
  async criar(anfitriao) {
    // Validações básicas
    if (!anfitriao.nome) throw new Error('Nome é obrigatório');
    if (!anfitriao.email) throw new Error('Email é obrigatório');
    if (!anfitriao.senha) throw new Error('Senha é obrigatória');
    
    // Aqui você pode adicionar mais validações
    // Por exemplo, validar formato de email, força da senha, etc.

    return await anfitriaoRepository.criar(anfitriao);
  },
  async atualizar(id, novosDados) {
    return await anfitriaoRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await anfitriaoRepository.deletar(id);
  },
};
