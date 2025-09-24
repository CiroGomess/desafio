import { NextResponse } from "next/server";

const menuData = [
  {
    programa: "financeiro",
    modulo: "clientes",
    subitens: [{ acao: "listar" }, { acao: "cadastrar" }],
  },
  {
    programa: "recursos-humanos",
    modulo: "funcionarios",
    subitens: [{ acao: "listar" }, { acao: "cadastrar" }],
  },
];

export async function GET() {
  return NextResponse.json(menuData);
}
