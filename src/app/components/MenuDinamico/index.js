"use client";

import { useQuery } from "@tanstack/react-query";
import { Menu } from "antd";
import Link from "next/link";

// Busca os dados da API
const fetchMenuData = async () => {
  const res = await fetch("/api/menu");
  if (!res.ok) {
    throw new Error("Falha ao buscar dados do menu");
  }
  return res.json();
};


const buildMenuItems = (data) =>
  data.map((item) => ({
    key: item.programa,
    label: item.programa,
    children: item.subitens.map((subitem) => ({
      key: `${item.programa}-${subitem.acao}`,
      label: (
        <Link href={`/${item.programa}/${item.modulo}/${subitem.acao}`}>
          {subitem.acao}
        </Link>
      ),
    })),
  }));

const MenuDinamico = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenuData,
  });

  if (isLoading) return <Menu theme="dark" mode="inline" />;
  if (error) return <div>Erro ao carregar o menu: {error.message}</div>;

  const menuItems = buildMenuItems(data);

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuItems} 
      defaultOpenKeys={[menuItems[0]?.key]} 
    />
  );
};

export default MenuDinamico;
