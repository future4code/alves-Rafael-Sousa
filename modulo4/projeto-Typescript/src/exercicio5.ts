enum role {
    admin = "admin",
    user = "user"
  }
  
  type user = {
    name: string;
    email: string;
    role: role;
  };

  const usersList: user[] = [
    { name: "Rogério", email: "roger@email.com", role: role.user },
    { name: "Ademir", email: "ademir@email.com", role: role.admin },
    { name: "Aline", email: "aline@email.com", role: role.user },
    { name: "Jéssica", email: "jessica@email.com", role: role.user },
    { name: "Adilson", email: "adilson@email.com", role: role.user },
    { name: "Carina", email: "carina@email.com", role: role.admin }
  ];  

  const SelecAdmin = (list: user[]): string[] => {
    const emailsList: string[] = list
      .filter((user) => user.role === role.admin)
      .map((user) => user.email);
    return emailsList;
  };
  console.log(SelecAdmin(usersList));