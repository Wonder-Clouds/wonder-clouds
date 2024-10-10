import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(idUsuario: string) {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { idUsuario },
      });

      if (!usuario) {
        throw new NotFoundException(
          `Usuario con el ID ${idUsuario} no encontrado`,
        );
      }

      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('El ID proporcionado no es valido');
    }
  }

  async update(idUsuario: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.usuarioRepository.update(idUsuario, updateUsuarioDto);

    if ((await usuario).affected === 0) {
      throw new NotFoundException(
        `Usuario con el ID ${idUsuario} no encontrado`,
      );
    }

    return this.usuarioRepository.findOne({
      where: {
        idUsuario,
      },
    });
  }

  async remove(idUsuario: string) {
    const usuario = await this.usuarioRepository.softDelete(idUsuario);

    if ((await usuario).affected === 0) {
      throw new NotFoundException(
        `Usuario con el ID ${idUsuario} no encontrado`,
      );
    }

    return { message: `Usuario con el ID ${idUsuario} eliminada` };
  }
}
