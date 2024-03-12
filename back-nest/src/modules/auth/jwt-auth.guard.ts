import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable() //essa classe é utilizada em users.controller.ts
export class JwtAuthGuard extends AuthGuard('jwt') {}
